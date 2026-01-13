
import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";
import { IntelEvent, EventCategory, SourceType, AppLanguage, Casualties, IndividualCasualty, ScannedPost, SecurityCasualties, CVInsight } from '../types';
import { v4 as uuidv4 } from 'uuid';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const isRetryableError = (error: any): boolean => {
    if (!error) return false;
    try {
        const msg = (error.message || '').toString().toLowerCase();
        return msg.includes('429') || msg.includes('quota') || msg.includes('overloaded') || msg.includes('503');
    } catch (e) {}
    return false;
};

async function callWithRetry<T>(fn: () => Promise<T>, signal?: AbortSignal, retries = 5, initialDelay = 5000): Promise<T> {
    let currentDelay = initialDelay;
    for (let i = 0; i < retries; i++) {
        if (signal?.aborted) throw new Error("Operation Aborted");
        try {
            return await fn();
        } catch (error: any) {
            if (isRetryableError(error) && i < retries - 1) {
                console.warn(`[RETRY] Sequential Sync: Throttling request. Retrying in ${currentDelay}ms...`);
                await sleep(currentDelay);
                currentDelay *= 1.5; 
                continue;
            }
            throw error;
        }
    }
    throw new Error("Sequential pipeline failed after retries");
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
        { name: 'CorsProxy', getUrl: (u: string) => `https://corsproxy.io/?${encodeURIComponent(u)}` },
        { name: 'AllOrigins', getUrl: (u: string) => `https://api.allorigins.win/get?url=${encodeURIComponent(u)}`, isJson: true }
    ];
    for (const proxy of proxies) {
        try {
            const response = await fetch(proxy.getUrl(targetUrl));
            if (!response.ok) continue;
            const content = (proxy as any).isJson ? (await response.json()).contents : await response.text();
            if (content && content.length > 100) return content;
        } catch (e) {}
    }
    throw new Error("Sequential source uplink offline");
}

async function getBase64FromUrl(url: string): Promise<{ data: string, mimeType: string } | null> {
    try {
        const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(url)}`;
        const response = await fetch(proxyUrl, { cache: 'no-store' });
        const blob = await response.blob();
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

export const fetchSourceData = async (urlInput: string, maxPages: number = 20, onProgress?: (msg: string) => void, signal?: AbortSignal): Promise<EnhancedSourcePage> => {
  const url = urlInput.trim();
  let type: SourceType = url.includes('t.me/') ? SourceType.TELEGRAM : SourceType.WEB;
  let posts: ScannedPost[] = [];
  let sourceName = url.split('/').pop()?.replace(/\?.*/, '') || "Source";
  
  let currentCursor: string | undefined = undefined;
  let pageCount = 0;

  while (pageCount < maxPages) {
      if (signal?.aborted) throw new Error("Harvest Interrupted");
      
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
      onProgress?.(`Historical Scoping: ${posts.length} entries located...`);
      await sleep(500); 
  }

  return { posts, sourceName, type };
};

export const parseIntelContent = async (
    allPosts: ScannedPost[], 
    type: SourceType, 
    language: AppLanguage = 'en', 
    processedMediaIds: string[] = [],
    region: string = "Iran",
    onProgress?: (msg: string) => void, 
    signal?: AbortSignal
): Promise<{events: IntelEvent[], newlyAnalyzedMediaIds: string[]}> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const newlyAnalyzedMediaIds: string[] = [];
  
  const CHUNK_SIZE = 15; 
  const chunks: ScannedPost[][] = [];
  for (let i = 0; i < allPosts.length; i += CHUNK_SIZE) {
      chunks.push(allPosts.slice(i, i + CHUNK_SIZE));
  }

  let allExtractedEvents: IntelEvent[] = [];

  for (let i = 0; i < chunks.length; i++) {
    if (signal?.aborted) return { events: allExtractedEvents, newlyAnalyzedMediaIds }; 
    
    const chunk = chunks[i];
    onProgress?.(`Victim ID Pipeline: Batch ${i + 1}/${chunks.length}...`);
    
    const inputContent = chunk.map(p => `[ID:${p.id}][DATE:${p.date}] ${p.text}`).join('\n---\n');
    const prompt = `
      CRITICAL TASK: INDIVIDUAL VICTIM IDENTIFICATION (HISTORICAL SCAN)
      LANGUAGE: ${language.toUpperCase()}
      TARGET REGION: ${region}
      
      OBJECTIVE: Scrutinize the provided text to identify protestors who were MARTYRED, WOUNDED, or DETAINED. 
      You MUST extract full names, ages, and specific locations for every unique individual mentioned.
      Focus on events occurring in ${region}.
      
      CROSS-REFERENCE: If multiple posts mention the same person, ensure they are listed in the "individualCasualties" array of the primary event they are linked to.
      
      DATA TO ANALYZE:
      ${inputContent}

      SCHEMA: [{
        "title": string, 
        "summary": string, 
        "category": "Civil Unrest" | "Kinetic Clashes" | "Political", 
        "date": "YYYY-MM-DD", 
        "locationName": string, 
        "lat": float, 
        "lng": float, 
        "sourceId": string,
        "individualCasualties": [{
            "name": string,
            "status": "Killed" | "Injured" | "Detained",
            "age": string,
            "location": string,
            "means": string,
            "description": string,
            "side": "Civilian"
        }]
      }]
    `;

    try {
      const response: GenerateContentResponse = await callWithRetry(() => ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: { responseMimeType: "application/json" }
      }), signal);

      const parsed = repairTruncatedJson(response.text || "[]");
      if (Array.isArray(parsed)) {
          const eventsInChunk = parsed.map((item: any) => {
            const baseUrl = allPosts[0]?.url.split('/').slice(0, -1).join('/').replace('/s/', '/');
            const deaths = (item.individualCasualties || []).filter((ic:any) => ic.status === 'Killed').length;
            const wounds = (item.individualCasualties || []).filter((ic:any) => ic.status === 'Injured').length;
            const detains = (item.individualCasualties || []).filter((ic:any) => ic.status === 'Detained').length;

            return {
              ...item,
              id: uuidv4(),
              validationScore: 1,
              approvedSourceUrls: [baseUrl],
              casualties: { dead: deaths, injured: wounds, detained: detains },
              securityCasualties: { dead: 0, injured: 0 },
              individualCasualties: (item.individualCasualties || []).map((ic: any) => ({ 
                  ...ic, 
                  id: uuidv4(), 
                  date: item.date, 
                  sourceUrl: `${baseUrl}/${item.sourceId}`,
                  validationScore: 1
              })),
              sourceType: type,
              sourceUrl: baseUrl
            };
          });
          allExtractedEvents.push(...eventsInChunk);
      }
    } catch (e) { console.error(`Victim sync failure`, e); }
    await sleep(1500);
  }

  const mediaToAnalyze = allPosts.filter(p => p.mediaUrl && !processedMediaIds.includes(p.id)).slice(0, 20); 
  
  if (mediaToAnalyze.length > 0) {
    onProgress?.(`Forensic Vision: Confirming Victim Identities...`);
    for (const post of mediaToAnalyze) {
        if (signal?.aborted) break;
        const mediaData = await getBase64FromUrl(post.mediaUrl!);
        if (mediaData) {
            try {
                const visionPrompt = `Identify the individual in this image if it's a victim of state violence in ${region}. Return name, age, and burial details if visible via text on posters. JSON: {"name": string, "age": string, "location": string, "status": "Killed"|"Injured"}`;
                const visionRes: GenerateContentResponse = await callWithRetry(() => ai.models.generateContent({
                    model: 'gemini-3-pro-preview',
                    contents: { parts: [ { inlineData: mediaData }, { text: visionPrompt } ] },
                    config: { responseMimeType: "application/json" }
                }), signal);
                const refined = repairTruncatedJson(visionRes.text || "{}");
                if (refined.name) {
                    const event = allExtractedEvents.find(e => e.sourceId === post.id);
                    if (event) {
                        if (!event.individualCasualties) event.individualCasualties = [];
                        event.individualCasualties.push({
                            id: uuidv4(),
                            name: refined.name,
                            status: refined.status || 'Killed',
                            age: refined.age,
                            location: refined.location || event.locationName,
                            side: 'Civilian',
                            date: event.date,
                            imageUrl: post.mediaUrl,
                            validationScore: 2 
                        });
                        event.isCrowdResult = true;
                    }
                }
                newlyAnalyzedMediaIds.push(post.id);
            } catch (vErr) {}
            await sleep(2500);
        }
    }
  }

  return { events: allExtractedEvents, newlyAnalyzedMediaIds };
};

export const synthesizeCasualtyClaims = async (eventTitle: string, clusterReports: any[], language: AppLanguage): Promise<{casualties: Casualties, securityCasualties: SecurityCasualties, validationScore: number}> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const context = clusterReports.map(r => `[Source: ${r.source}] Reported Dead: ${r.dead}, Injured: ${r.injured}, Detained: ${r.detained}`).join('\n');
  const prompt = `Synthesize multi-channel claims for "${eventTitle}". Resolve discrepancies. JSON: {"casualties": {"dead":int, "injured":int, "detained":int}, "validationScore": int}`;

  try {
      const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: prompt,
          config: { responseMimeType: "application/json" }
      });
      const parsed = repairTruncatedJson(response.text || "{}");
      return {
          casualties: parsed.casualties || { dead: 0, injured: 0, detained: 0 },
          securityCasualties: { dead: 0, injured: 0 },
          validationScore: parsed.validationScore || clusterReports.length
      };
  } catch (e) {
      return {
          casualties: { dead: 0, injured: 0, detained: 0 },
          securityCasualties: { dead: 0, injured: 0 },
          validationScore: clusterReports.length
      };
  }
};

export const correctIntelStats = async (event: IntelEvent, language: AppLanguage): Promise<IntelEvent> => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const prompt = `Perform forensic audit on "${event.title}". Cross-check victim identities. Return JSON for officialStats and updated validationScore.`;
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-pro-preview',
            contents: prompt,
            config: { responseMimeType: "application/json" }
        });
        const refined = repairTruncatedJson(response.text || "{}");
        return { 
            ...event, 
            officialStats: refined.officialStats || event.officialStats,
            validationScore: refined.validationScore || event.validationScore 
        };
    } catch (e) { return event; }
};

export interface IntelligenceInsights {
    hotspots: string[];
    riskLevel: 'LOW' | 'ELEVATED' | 'HIGH' | 'CRITICAL';
    anomalies: string[];
    strategicTrends: string[];
    summary: string;
}

export const generateSituationReport = async (events: IntelEvent[], language: AppLanguage): Promise<{sitrep: string, insights: IntelligenceInsights}> => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const context = events.slice(0, 40).map(e => `[${e.date}][VALIDATION:${e.validationScore}] ${e.title}: ${e.summary}`).join('\n\n');
    const prompt = `ACT AS: Geospatial Intel Director. Synthesize results into a tactical SITREP. Identify cross-channel discrepancies. Language: ${language.toUpperCase()}. Context: ${context}`;

    try {
        const reportRes = await ai.models.generateContent({
            model: 'gemini-3-pro-preview',
            contents: prompt,
            config: { thinkingConfig: { thinkingBudget: 4000 }, temperature: 0.2 }
        });
        const insightPrompt = `Extract structured trends in JSON: {"hotspots":[], "riskLevel":"", "anomalies":[], "strategicTrends":[], "summary":""}`;
        const insightsRes = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: insightPrompt,
            config: { responseMimeType: "application/json" }
        });

        return {
            sitrep: reportRes.text || "Report Severed.",
            insights: repairTruncatedJson(insightsRes.text || "{}")
        };
    } catch (e) {
        return {
            sitrep: "Neural synthesis offline.",
            insights: { hotspots: [], riskLevel: 'LOW', anomalies: [], strategicTrends: [], summary: "Analysis failed." }
        };
    }
};

export const chatWithIntel = async (userMessage: string, contextEvents: IntelEvent[], language: AppLanguage, history: {role: 'user' | 'model', text: string}[]): Promise<string> => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const contextData = contextEvents.slice(0, 20).map(e => `[${e.date}][VALIDATION:${e.validationScore}] ${e.title}: ${e.summary}`).join('\n---\n');
    const systemPrompt = `PERSONA: Victim Identification Analyst. Language: ${language}. Context: ${contextData}`;
    try {
        const chat = ai.chats.create({ 
            model: 'gemini-3-pro-preview', 
            config: { systemInstruction: systemPrompt, temperature: 0.3 }, 
            history: history.map(h => ({ role: h.role, parts: [{ text: h.text }] })) 
        });
        const result = await chat.sendMessage({ message: userMessage });
        return result.text || "No linguistic payload.";
    } catch (e) { return "Linguistic uplink severed."; }
};
