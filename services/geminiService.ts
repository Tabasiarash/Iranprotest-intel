import { GoogleGenAI, GenerateContentResponse, Chat } from "@google/genai";
import { IntelEvent, SourceType, AppLanguage, ScannedPost } from '../types';
import { v4 as uuidv4 } from 'uuid';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// --- QUOTA & CACHE SYSTEM ---
const QUOTA_KEY = 'INTEL_QUOTA_V1';
const VISION_CACHE_KEY = 'INTEL_VISION_CACHE_V1';
const MAX_GLOBAL_DAILY_VISION = 20;
const MAX_CHANNEL_DAILY_VISION = 5;

interface QuotaState {
    date: string;
    globalCount: number;
    channelCounts: Record<string, number>;
}

const QuotaManager = {
    getState: (): QuotaState => {
        try {
            const str = localStorage.getItem(QUOTA_KEY);
            const data = str ? JSON.parse(str) : null;
            const today = new Date().toISOString().split('T')[0];
            if (!data || data.date !== today) {
                return { date: today, globalCount: 0, channelCounts: {} };
            }
            return data;
        } catch { return { date: new Date().toISOString().split('T')[0], globalCount: 0, channelCounts: {} }; }
    },
    canAnalyze: (channelUrl: string): boolean => {
        const state = QuotaManager.getState();
        const cleanUrl = channelUrl.split('?')[0];
        if (state.globalCount >= MAX_GLOBAL_DAILY_VISION) return false;
        if ((state.channelCounts[cleanUrl] || 0) >= MAX_CHANNEL_DAILY_VISION) return false;
        return true;
    },
    increment: (channelUrl: string) => {
        const state = QuotaManager.getState();
        const cleanUrl = channelUrl.split('?')[0];
        state.globalCount++;
        state.channelCounts[cleanUrl] = (state.channelCounts[cleanUrl] || 0) + 1;
        localStorage.setItem(QUOTA_KEY, JSON.stringify(state));
    }
};

const VisionCache = {
    get: (mediaUrl: string) => {
        try {
            const cache = JSON.parse(localStorage.getItem(VISION_CACHE_KEY) || '{}');
            return cache[mediaUrl] || null;
        } catch { return null; }
    },
    set: (mediaUrl: string, result: any) => {
        try {
            const cache = JSON.parse(localStorage.getItem(VISION_CACHE_KEY) || '{}');
            if (Object.keys(cache).length > 500) { localStorage.removeItem(VISION_CACHE_KEY); return; }
            cache[mediaUrl] = result;
            localStorage.setItem(VISION_CACHE_KEY, JSON.stringify(cache));
        } catch {}
    }
};

export const isRetryableError = (error: any): boolean => {
    if (!error) return false;
    try {
        const msg = (error.message || '').toString().toLowerCase();
        return msg.includes('429') || msg.includes('quota') || msg.includes('overloaded') || msg.includes('503');
    } catch (e) {}
    return false;
};

async function callWithRetry<T>(fn: () => Promise<T>, retries = 3, initialDelay = 2000): Promise<T> {
    let currentDelay = initialDelay;
    for (let i = 0; i < retries; i++) {
        try {
            return await fn();
        } catch (error: any) {
            if (isRetryableError(error) && i < retries - 1) {
                console.warn(`[RETRY] Error encountered. Retrying in ${currentDelay}ms...`);
                await sleep(currentDelay);
                currentDelay *= 1.5; 
                continue;
            }
            throw error;
        }
    }
    throw new Error("Max retries exceeded");
}

function repairTruncatedJson(json: string): any {
    try {
        let str = json.trim().replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(str);
    } catch (e) {
        let str = json.trim().replace(/```json/g, '').replace(/```/g, '').trim();
        if (str.startsWith('[')) {
            const lastMatch = str.lastIndexOf('}');
            if (lastMatch !== -1) return JSON.parse(str.substring(0, lastMatch + 1) + ']');
        }
        return [];
    }
}

async function fetchWithProxyFallback(targetUrl: string): Promise<string> {
    const proxies = [
        { name: 'AllOrigins', getUrl: (u: string) => `https://api.allorigins.win/get?url=${encodeURIComponent(u)}`, isJson: true },
        { name: 'CorsProxy', getUrl: (u: string) => `https://corsproxy.io/?${encodeURIComponent(u)}` }
    ];
    for (const proxy of proxies) {
        try {
            const response = await fetch(proxy.getUrl(targetUrl));
            if (!response.ok) continue;
            const content = (proxy as any).isJson ? (await response.json()).contents : await response.text();
            if (content && content.length > 100) return content;
        } catch (e) {}
    }
    throw new Error("Source unreachable");
}

async function getBase64FromUrl(url: string): Promise<{ data: string, mimeType: string } | null> {
    try {
        const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(url)}`;
        const response = await fetch(proxyUrl);
        const blob = await response.blob();
        if (blob.size > 2 * 1024 * 1024) return null; 
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64 = (reader.result as string).split(',')[1];
                resolve({ data: base64, mimeType: blob.type });
            };
            reader.readAsDataURL(blob);
        });
    } catch (e) { return null; }
}

export interface EnhancedSourcePage {
    posts: ScannedPost[];
    sourceName: string;
    type: SourceType;
}

export const fetchSourceData = async (urlInput: string, minDate?: string, onProgress?: (msg: string) => void): Promise<EnhancedSourcePage> => {
  const url = urlInput.trim();
  let type: SourceType = url.includes('t.me/') ? SourceType.TELEGRAM : SourceType.WEB;
  let posts: ScannedPost[] = [];
  let sourceName = url.split('/').pop()?.replace(/\?.*/, '') || "Source";
  const scanLimitTime = minDate ? new Date(minDate).getTime() : 0;
  
  let currentCursor: string | undefined = undefined;
  const isYearScan = (Date.now() - scanLimitTime) > (180 * 24 * 60 * 60 * 1000);
  const MAX_PAGES = isYearScan ? 200 : 50; 
  let pageCount = 0;
  let reachedDateLimit = false;

  while (pageCount < MAX_PAGES && !reachedDateLimit) {
      let targetUrl = url;
      if (type === SourceType.TELEGRAM) {
          if (!url.includes('/s/')) targetUrl = url.replace('t.me/', 't.me/s/');
          if (currentCursor) targetUrl += (targetUrl.includes('?') ? '&' : '?') + `before=${currentCursor}`;
      }

      try {
          const htmlContent = await fetchWithProxyFallback(targetUrl);
          const parser = new DOMParser();
          const doc = parser.parseFromString(htmlContent, 'text/html');
          
          if (type === SourceType.TELEGRAM) {
              const nodes = Array.from(doc.querySelectorAll('.tgme_widget_message')).reverse();
              if (nodes.length === 0) break;

              let oldestIdOnPage: string | null = null;
              nodes.forEach(node => {
                  const text = (node.querySelector('.tgme_widget_message_text') as HTMLElement)?.innerText;
                  const dateStr = node.querySelector('time')?.getAttribute('datetime');
                  const id = node.getAttribute('data-post')?.split('/').pop();
                  if (id) oldestIdOnPage = id;

                  if (text && dateStr) {
                      const postTime = new Date(dateStr).getTime();
                      if (postTime < scanLimitTime) { reachedDateLimit = true; return; }
                      
                      const photoNode = node.querySelector('.tgme_widget_message_photo_wrap') as HTMLElement;
                      let mediaUrl: string | undefined = undefined;
                      if (photoNode) {
                          const style = photoNode.getAttribute('style') || '';
                          const match = style.match(/url\(['"]?([^'"]+)['"]?\)/);
                          if (match) mediaUrl = match[1];
                      }
                      
                      posts.push({ id: id || uuidv4(), url: `${url}/${id}`, text, date: dateStr, mediaUrl, mediaType: 'image' });
                  }
              });

              if (oldestIdOnPage === currentCursor) break; 
              currentCursor = oldestIdOnPage || undefined;
          } else break;
      } catch (e) { break; }
      
      pageCount++;
      onProgress?.(`Harvesting archive: Page ${pageCount} fetched (${posts.length} records discovered)...`);
      if (reachedDateLimit) break;
      await sleep(400); 
  }

  return { posts, sourceName, type };
};

export const parseIntelContent = async (allPosts: ScannedPost[], type: SourceType, language: AppLanguage = 'en', regionFocus?: string, onProgress?: (msg: string) => void): Promise<IntelEvent[]> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const focus = regionFocus && regionFocus !== 'ALL' ? `ONLY extract events in "${regionFocus}".` : "";
  
  const CHUNK_SIZE = 40;
  const chunks: ScannedPost[][] = [];
  for (let i = 0; i < allPosts.length; i += CHUNK_SIZE) {
      chunks.push(allPosts.slice(i, i + CHUNK_SIZE));
  }

  let allExtractedEvents: IntelEvent[] = [];

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    onProgress?.(`AI Extraction: Analyzing Batch ${i + 1}/${chunks.length} (${allExtractedEvents.length} events logged)...`);
    
    const inputContent = chunk.map(p => `[ID:${p.id}][DATE:${p.date}][HAS_IMAGE:${!!p.mediaUrl}] ${p.text}`).join('\n---\n');
    
    const prompt = `
      TASK: GEOSPATIAL INTELLIGENCE EXTRACTION
      TARGET LANGUAGE: FARSI (PERSIAN) - Translate ALL output fields to Farsi.
      
      PRIORITY:
      1. VICTIM IDENTIFICATION: Extract names of Killed/Injured/Detained. Link them to the event.
      2. MEDIA LINKING: If the source text describes a specific victim and has [HAS_IMAGE:true], assume the image belongs to the victim.
      3. ACCURACY: If source is 'Hengaw', treat casualty numbers and names as high confidence.

      CONTENT:
      ${inputContent}

      INSTRUCTIONS:
      1. Identify kinetic events, protests, and human rights violations.
      2. CLASSIFY: Military, Kinetic Clashes, Political, Cyber, Strikes/Economic, Civil Unrest, Humanitarian, Infrastructure.
      3. EXTRACT INDIVIDUAL CASUALTIES:
         - Name (Farsi)
         - Status: 'Killed' | 'Injured' | 'Detained'
         - Age (if available)
         - Side: 'Civilian' or 'Security'
         - Link to Image: If post has image and talks about this person.
      4. DEDUPLICATION: Merge updates about the same event.
      5. RETURN JSON ARRAY.

      SCHEMA: [
        {
          "title":string (Farsi), "summary":string (Farsi), "category":string, "date":"YYYY-MM-DD", "locationName":string (City, Province), "lat":float, "lng":float, "reliabilityScore":int, "sourceId":string, "protestorCount":int, 
          "casualties":{"dead":int,"injured":int,"detained":int}, 
          "securityCasualties":{"dead":int,"injured":int},
          "individualCasualties": [
             { "name": string (Farsi), "age": string, "status": "Killed"|"Injured"|"Detained", "side": "Civilian"|"Security", "means": string (Farsi description of cause) }
          ]
        }
      ]
    `;

    try {
      const response: GenerateContentResponse = await callWithRetry(() => ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: { responseMimeType: "application/json", thinkingConfig: { thinkingBudget: 2000 } }
      }));

      const parsed = repairTruncatedJson(response.text || "[]");
      if (Array.isArray(parsed)) {
          const eventsInChunk = parsed
            .filter((item: any) => item && typeof item === 'object')
            .map((item: any) => {
            const parentPost = chunk.find(p => p.id === item.sourceId);
            let finalIndividuals = item.individualCasualties || [];
            const casualtySourceUrl = parentPost ? parentPost.url : (allPosts[0]?.url || '');
            
            // Intelligent Image Linking
            if (parentPost?.mediaUrl && finalIndividuals.length > 0) {
               // If post has 1 image and victims listed, assign image to them
               finalIndividuals = finalIndividuals.map((ic: any) => ({
                   ...ic,
                   id: uuidv4(),
                   imageUrl: parentPost.mediaUrl,
                   sourceUrl: casualtySourceUrl
               }));
            } else {
               finalIndividuals = finalIndividuals.map((ic: any) => ({ 
                   ...ic, 
                   id: uuidv4(),
                   sourceUrl: casualtySourceUrl
               }));
            }

            return {
                ...item,
                id: uuidv4(),
                sourceType: type,
                sourceUrl: allPosts[0]?.url.split('/').slice(0, -1).join('/'),
                individualCasualties: finalIndividuals
            };
          });
          allExtractedEvents.push(...eventsInChunk);
      }
    } catch (e) { console.error(`Batch ${i} failed`, e); }
  }

  // Vision analysis section remains same but ensures language consistency
  const mediaPosts = allPosts.filter(p => p.mediaUrl);
  const breakingKeywords = /breaking|urgent|fouri|attack|explosion|massive|killed|shot|clash|کشته|فوری|انفجار/i;
  
  const highValueCandidates = allExtractedEvents.filter(e => {
      if (!e) return false;
      const hasMedia = mediaPosts.some(p => p.id === e.sourceId);
      if (!hasMedia) return false;
      const isBreaking = breakingKeywords.test(e.title || '') || breakingKeywords.test(e.summary || '');
      const hasCasualties = (e.casualties?.dead || 0) > 0 || (e.securityCasualties?.dead || 0) > 0;
      return isBreaking || hasCasualties;
  });

  const channelUrl = allPosts[0]?.url || "unknown_source";

  for (const event of highValueCandidates) {
      if (!QuotaManager.canAnalyze(channelUrl)) break;

      const relatedPost = mediaPosts.find(p => p.id === event.sourceId);
      if (relatedPost?.mediaUrl) {
          const cachedResult = VisionCache.get(relatedPost.mediaUrl);
          if (cachedResult) {
              event.protestorCount = Math.max(event.protestorCount || 0, cachedResult.refinedCount || 0);
              event.summary = `${event.summary}\n[تایید هوشمند تصویری]: ${cachedResult.visualEvidence}`;
              event.isCrowdResult = true;
              event.reliabilityScore = 10;
              continue;
          }

          const mediaData = await getBase64FromUrl(relatedPost.mediaUrl);
          if (mediaData) {
              try {
                  const visionPrompt = `
                    INTEL ANALYST CV TASK:
                    Analyze this keyframe from event: "${event.title}".
                    1. Statistics: Estimate participant count.
                    2. Description: Detail visible weapons, uniforms, or specific street landmarks.
                    3. Language: FARSI (PERSIAN).
                    Return JSON: {"refinedCount": int, "visualEvidence": string, "landmark": string}
                  `;
                  const visionRes: GenerateContentResponse = await ai.models.generateContent({
                      model: 'gemini-3-pro-preview',
                      contents: { parts: [ { inlineData: mediaData }, { text: visionPrompt } ] },
                      config: { responseMimeType: "application/json" }
                  });
                  QuotaManager.increment(channelUrl);
                  const refined = repairTruncatedJson(visionRes.text || "{}");
                  VisionCache.set(relatedPost.mediaUrl, refined);

                  if (refined.refinedCount) {
                      event.protestorCount = Math.max(event.protestorCount || 0, refined.refinedCount);
                      event.summary = `${event.summary}\n[تایید هوشمند تصویری]: ${refined.visualEvidence}`;
                      event.isCrowdResult = true;
                      event.reliabilityScore = 10;
                  }
              } catch (vErr) { if (isRetryableError(vErr)) break; }
          }
      }
  }

  return allExtractedEvents;
};

// ... (Rest of file unchanged)
export const correctIntelStats = async (event: IntelEvent, language: AppLanguage): Promise<Partial<IntelEvent>> => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const prompt = `
      TASK: STATISTICAL CORRECTION
      TARGET LANGUAGE: FARSI
      EVENT: "${event.title}" - "${event.summary}"
      
      INSTRUCTIONS:
      Check if summary mentions "nationwide" vs "local" stats. Correct to local.
      RETURN JSON: {"casualties":{...}, "securityCasualties":{...}, "reliabilityReason": string}
    `;
    try {
        const response = await callWithRetry(() => ai.models.generateContent({
            model: 'gemini-3-pro-preview',
            contents: prompt,
            config: { responseMimeType: "application/json" }
        }));
        return repairTruncatedJson(response.text || "{}");
    } catch (e) { throw e; }
};

export const chatWithIntel = async (userMessage: string, contextEvents: IntelEvent[], language: AppLanguage, history: {role: 'user' | 'model', text: string}[]): Promise<string> => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const contextData = contextEvents.map(e => `[${e.date}] ${e.title}: ${e.summary}`).join('\n');
    const systemPrompt = `You are a Geospatial Intel Analyst. Context: ${contextData}. Answer in FARSI. Be analytical.`;
    try {
        const chat: Chat = ai.chats.create({ 
            model: 'gemini-3-flash-preview', 
            config: { systemInstruction: systemPrompt }, 
            history: history.map(h => ({ role: h.role, parts: [{ text: h.text }] })) 
        });
        const result: GenerateContentResponse = await callWithRetry(() => chat.sendMessage({ message: userMessage }));
        return result.text || "No response.";
    } catch (e) { return "System offline."; }
};

export const generateSituationReport = async (events: IntelEvent[], language: AppLanguage): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompt = `Generate a tactical SITREP in FARSI synthesizing these events: ${JSON.stringify(events.slice(0, 50))}. Focus on strategic patterns and casualty separation.`;
  try {
      const response: GenerateContentResponse = await ai.models.generateContent({ model: 'gemini-3-flash-preview', contents: prompt });
      return response.text || "Failed.";
  } catch (e) { return "Error."; }
};