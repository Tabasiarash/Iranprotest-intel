import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import GlobeVis from './components/GlobeVis';
import Sidebar from './components/Sidebar';
import { IntelEvent, ProcessingStatus, EventCategory, SourceType, AppLanguage, SyncConfig, ChannelMetadataMap, IndividualCasualty, ScannedPost } from './types';
import { parseIntelContent, fetchSourceData, generateSituationReport, correctIntelStats } from './services/geminiService';
import { INITIAL_EVENTS } from './data/initialEvents';

const STORAGE_KEY = 'INTEL_MAP_ARCHIVE_V13';
const SYNC_CONFIG_KEY = 'INTEL_MAP_SYNC_CONFIG_V8';
const METADATA_KEY = 'INTEL_MAP_CHANNEL_METADATA_V8';

const PREFERRED_SOURCES = [
  "https://t.me/Hengaw_Org",
  "https://t.me/DEJradio",
  "https://t.me/IranintlTV",
  "https://t.me/haalvsh"
];

const getDistanceKm = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371; 
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2); 
  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))); 
};

// --- HELPER: Strict Victim Deduplication ---
const mergeCasualties = (existing: IndividualCasualty[] = [], incoming: IndividualCasualty[] = []) => {
    const combined = [...existing, ...incoming];
    const uniqueMap = new Map<string, IndividualCasualty>();
    
    combined.forEach(c => {
        // Normalize name: remove whitespace, lowercase
        if (!c.name) return;
        const key = c.name.trim().replace(/\s+/g, ' ').toLowerCase();
        
        if (!uniqueMap.has(key)) {
            uniqueMap.set(key, c);
        } else {
            const prev = uniqueMap.get(key)!;
            // Merge logic: prioritize presence of image and 'Killed' status
            uniqueMap.set(key, {
                ...prev,
                age: prev.age || c.age,
                imageUrl: prev.imageUrl || c.imageUrl, // Keep existing if present, otherwise take new
                status: c.status === 'Killed' ? 'Killed' : prev.status,
                means: prev.means || c.means,
                location: prev.location || c.location,
                sourceUrl: prev.sourceUrl || c.sourceUrl // Preserve source URL
            });
            
            // If the incoming record has an image and the previous didn't, ensure we took it
            if (!prev.imageUrl && c.imageUrl) {
                 uniqueMap.get(key)!.imageUrl = c.imageUrl;
            }
        }
    });
    return Array.from(uniqueMap.values());
};

const App: React.FC = () => {
  const [events, setEvents] = useState<IntelEvent[]>([]);
  const [selectedEventId, setSelectedEventId] = useState<string | undefined>(undefined);
  const [status, setStatus] = useState<ProcessingStatus>({ isProcessing: false, message: '' });
  const [apiKeyMissing, setApiKeyMissing] = useState(false);
  const [language, setLanguage] = useState<AppLanguage>('fa');
  const [unreadCount, setUnreadCount] = useState(0);
  const [saveStatus, setSaveStatus] = useState<'IDLE' | 'SAVING' | 'ERROR'>('IDLE');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('ALL');
  const [isCorrecting, setIsCorrecting] = useState(false);
  
  const [channelMetadata, setChannelMetadata] = useState<ChannelMetadataMap>(() => {
    try { const saved = localStorage.getItem(METADATA_KEY); return saved ? JSON.parse(saved) : {}; }
    catch (e) { return {}; }
  });

  const [reportContent, setReportContent] = useState<string>('');
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);
  
  const [syncConfig, setSyncConfig] = useState<SyncConfig>(() => {
    try {
      const saved = localStorage.getItem(SYNC_CONFIG_KEY);
      let config = saved ? JSON.parse(saved) : { enabled: true, intervalMinutes: 120, monitoredChannels: [], targetRegion: 'ALL' };
      const existingUrls = new Set(config.monitoredChannels.map((c: any) => c.url));
      PREFERRED_SOURCES.forEach(url => { if (!existingUrls.has(url)) config.monitoredChannels.push({ url, type: SourceType.TELEGRAM }); });
      return config;
    } catch (e) { return { enabled: true, intervalMinutes: 120, monitoredChannels: [], targetRegion: 'ALL' }; }
  });

  const saveTimerRef = useRef<number | null>(null);
  const isSyncingRef = useRef(false);

  useEffect(() => {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length > 0) {
                const validEvents = parsed.filter((e: any) => e && typeof e === 'object');
                setEvents(validEvents);
            }
            else setEvents(INITIAL_EVENTS);
        } else setEvents(INITIAL_EVENTS);
    } catch (e) { setEvents(INITIAL_EVENTS); }
    if (!process.env.API_KEY) setApiKeyMissing(true);
  }, []);

  useEffect(() => {
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    setSaveStatus('SAVING');
    saveTimerRef.current = window.setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
        localStorage.setItem(SYNC_CONFIG_KEY, JSON.stringify(syncConfig));
        localStorage.setItem(METADATA_KEY, JSON.stringify(channelMetadata));
        setSaveStatus('IDLE');
      } catch (err) { setSaveStatus('ERROR'); }
    }, 1500);
    return () => { if (saveTimerRef.current) clearTimeout(saveTimerRef.current); };
  }, [events, syncConfig, channelMetadata]);

  // --- NEW FEATURES ---

  const handleManualSave = () => {
      try {
          setSaveStatus('SAVING');
          localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
          localStorage.setItem(SYNC_CONFIG_KEY, JSON.stringify(syncConfig));
          localStorage.setItem(METADATA_KEY, JSON.stringify(channelMetadata));
          setTimeout(() => setSaveStatus('IDLE'), 800);
          setStatus({ isProcessing: false, message: 'Archive manually saved.' });
      } catch (e) {
          setSaveStatus('ERROR');
          setStatus({ isProcessing: false, message: 'Manual save failed.' });
      }
  };

  const handleDeduplicate = () => {
      if (events.length === 0) return;
      setStatus({ isProcessing: true, message: 'Optimizing database (Deduplication)...' });
      
      setTimeout(() => {
          const uniqueEvents: IntelEvent[] = [];
          let removedCount = 0;

          // Sort by date desc
          const sortedEvents = [...events].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

          sortedEvents.forEach(candidate => {
              if (!candidate) return;

              const existingIndex = uniqueEvents.findIndex(e => {
                  if (!e) return false;
                  const isSameDate = e.date === candidate.date;
                  if (!isSameDate) return false;

                  const distKm = getDistanceKm(e.lat, e.lng, candidate.lat, candidate.lng);
                  
                  if (distKm < 2.5 && e.category === candidate.category) return true;

                  const normalize = (s: string) => s.toLowerCase().replace(/[^\w\s]/g, '').trim();
                  const nameMatch = normalize(e.locationName).includes(normalize(candidate.locationName)) || 
                                    normalize(candidate.locationName).includes(normalize(e.locationName));
                  
                  if (nameMatch && distKm < 15.0 && e.category === candidate.category) return true;

                  return false;
              });

              if (existingIndex > -1) {
                  const existing = uniqueEvents[existingIndex];
                  
                  // Merge Casualties specifically
                  const mergedCasualties = mergeCasualties(existing.individualCasualties, candidate.individualCasualties);

                  uniqueEvents[existingIndex] = {
                      ...existing,
                      title: candidate.title.length > existing.title.length ? candidate.title : existing.title,
                      summary: candidate.summary.length > existing.summary.length ? candidate.summary : existing.summary,
                      protestorCount: Math.max(existing.protestorCount || 0, candidate.protestorCount || 0),
                      reliabilityScore: Math.max(existing.reliabilityScore || 0, candidate.reliabilityScore || 0),
                      casualties: {
                          dead: Math.max(existing.casualties?.dead || 0, candidate.casualties?.dead || 0),
                          injured: Math.max(existing.casualties?.injured || 0, candidate.casualties?.injured || 0),
                          detained: Math.max(existing.casualties?.detained || 0, candidate.casualties?.detained || 0),
                      },
                      securityCasualties: {
                          dead: Math.max(existing.securityCasualties?.dead || 0, candidate.securityCasualties?.dead || 0),
                          injured: Math.max(existing.securityCasualties?.injured || 0, candidate.securityCasualties?.injured || 0),
                      },
                      individualCasualties: mergedCasualties
                  };
                  removedCount++;
              } else {
                  uniqueEvents.push(candidate);
              }
          });

          setEvents(uniqueEvents);
          setStatus({ isProcessing: false, message: `Cleanup Complete: ${removedCount} duplicates merged.` });
      }, 500); 
  };

  const handleScanCasualties = async () => {
      const hengawUrl = "https://t.me/Hengaw_Org";
      // Scanning deeper for casualties (48h)
      await handleIngestUrl(hengawUrl, "48", "ALL");
  };

  // --- EXISTING LOGIC ---

  const processResults = (newEvents: IntelEvent[]) => {
    if (newEvents.length > 0) {
      setEvents(prev => {
        const updatedEvents = [...prev];
        let addedCount = 0;
        
        newEvents.forEach(ne => {
            if (!ne) return;

            // DEDUPLICATION LOGIC ON INGEST
            const existingIndex = updatedEvents.findIndex(e => {
                if (!e) return false;
                const isSameDate = e.date === ne.date;
                if (!isSameDate) return false;

                const distKm = getDistanceKm(e.lat, e.lng, ne.lat, ne.lng);
                const isSameCategory = e.category === ne.category;
                
                if (distKm < 2.0 && isSameCategory) return true;

                const normalize = (s: string) => s.toLowerCase().replace(/[^\w\s]/g, '').trim();
                const nameMatch = normalize(e.locationName).includes(normalize(ne.locationName)) || 
                                  normalize(ne.locationName).includes(normalize(e.locationName));
                
                if (nameMatch && distKm < 15.0 && isSameCategory) return true;

                return false;
            });

            if (existingIndex > -1) {
                const existing = updatedEvents[existingIndex];
                
                // Merge casualites strictly
                const mergedCasualties = mergeCasualties(existing.individualCasualties, ne.individualCasualties);

                updatedEvents[existingIndex] = {
                    ...existing,
                    title: ne.title.length > existing.title.length ? ne.title : existing.title,
                    summary: ne.summary.length > existing.summary.length ? ne.summary : existing.summary,
                    protestorCount: Math.max(existing.protestorCount || 0, ne.protestorCount || 0),
                    reliabilityScore: Math.max(existing.reliabilityScore || 0, ne.reliabilityScore || 0),
                    casualties: {
                        dead: Math.max(existing.casualties?.dead || 0, ne.casualties?.dead || 0),
                        injured: Math.max(existing.casualties?.injured || 0, ne.casualties?.injured || 0),
                        detained: Math.max(existing.casualties?.detained || 0, ne.casualties?.detained || 0),
                    },
                    securityCasualties: {
                        dead: Math.max(existing.securityCasualties?.dead || 0, ne.securityCasualties?.dead || 0),
                        injured: Math.max(existing.securityCasualties?.injured || 0, ne.securityCasualties?.injured || 0),
                    },
                    isCrowdResult: existing.isCrowdResult || ne.isCrowdResult,
                    visualEvidence: existing.visualEvidence || ne.visualEvidence,
                    sourceUrl: existing.sourceUrl || ne.sourceUrl,
                    individualCasualties: mergedCasualties
                };
            } else {
                updatedEvents.push(ne);
                addedCount++;
            }
        });
        
        if (addedCount > 0) setUnreadCount(prevUnread => prevUnread + addedCount);
        return updatedEvents;
      });
    }
  };

  const handleCorrectEvent = async (event: IntelEvent) => {
      if (apiKeyMissing || isCorrecting) return;
      setIsCorrecting(true);
      try {
          const correctedData = await correctIntelStats(event, language);
          setEvents(prev => prev.map(e => e.id === event.id ? { ...e, ...correctedData } : e));
          setStatus({ isProcessing: false, message: `Intelligence refined for ${event.locationName}.` });
      } catch (e) {
          setStatus({ isProcessing: false, message: 'AI correction failed.', error: 'Service Unavailable' });
      } finally {
          setIsCorrecting(false);
      }
  };

  const handleIngestUrl = async (url: string, durationStr: string, region?: string) => {
    if (apiKeyMissing || isSyncingRef.current) return;
    isSyncingRef.current = true;
    const hours = parseInt(durationStr);
    const minDate = new Date();
    minDate.setHours(minDate.getHours() - hours);
    
    setStatus({ isProcessing: true, message: `Contacting ${url.split('/').pop()}...` });
    try {
        const page = await fetchSourceData(url, minDate.toISOString(), (msg) => setStatus({ isProcessing: true, message: msg }));
        if (page.posts.length > 0) {
            setStatus({ isProcessing: true, message: `Decoding ${page.posts.length} telemetry streams...` });
            const newEvents = await parseIntelContent(page.posts, page.type, language, region || syncConfig.targetRegion, (msg) => setStatus({ isProcessing: true, message: msg }));
            processResults(newEvents);
            setStatus({ isProcessing: false, message: `Archive Synchronized: +${newEvents.length} nodes.` });
            
            setChannelMetadata(prev => ({
                ...prev,
                [url]: {
                    totalEvents: (prev[url]?.totalEvents || 0) + newEvents.length,
                    lastUpdate: new Date().toISOString(),
                    type: page.type
                }
            }));
        } else {
            setStatus({ isProcessing: false, message: 'Source quiet. No new signals detected.' });
        }
    } catch (error: any) { 
        setStatus({ isProcessing: false, message: 'Sync Aborted.', error: error.message }); 
    } finally {
        isSyncingRef.current = false;
    }
  };

  const handleIngestText = async (text: string, region?: string) => {
    if (apiKeyMissing || !text.trim()) return;
    setStatus({ isProcessing: true, message: 'Analyzing manual input...' });
    try {
        const dummyPost: ScannedPost[] = [{ id: `man-${Date.now()}`, url: 'manual', text, date: new Date().toISOString().split('T')[0], mediaType: 'image' }];
        const newEvents = await parseIntelContent(dummyPost, SourceType.MANUAL, language, region || syncConfig.targetRegion);
        processResults(newEvents);
        setStatus({ isProcessing: false, message: `Manual Entry Logged: ${newEvents.length} records.` });
    } catch (error: any) { 
        setStatus({ isProcessing: false, message: 'Manual Analysis Failed.', error: error.message }); 
    }
  };

  // AUTO-SYNC ENGINE
  useEffect(() => {
    if (!syncConfig.enabled) return;
    
    const runAutoSync = async () => {
        if (isSyncingRef.current) return;
        const staleChannels = syncConfig.monitoredChannels.filter(c => {
            const meta = channelMetadata[c.url];
            if (!meta) return true;
            const lastUpdate = new Date(meta.lastUpdate).getTime();
            return (Date.now() - lastUpdate) > (syncConfig.intervalMinutes * 60 * 1000);
        });

        for (const channel of staleChannels) {
            await handleIngestUrl(channel.url, "24"); 
            await new Promise(r => setTimeout(r, 5000));
        }
    };

    const interval = setInterval(runAutoSync, 300000); 
    runAutoSync(); 
    return () => clearInterval(interval);
  }, [syncConfig.enabled, syncConfig.monitoredChannels, syncConfig.intervalMinutes]);

  const handleExport = () => {
      const dataStr = JSON.stringify(events, null, 2);
      const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
      const exportFileDefaultName = `intel_archive_${new Date().toISOString().split('T')[0]}.json`;
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
          try {
              const imported = JSON.parse(event.target?.result as string);
              if (Array.isArray(imported)) {
                  setEvents(prev => {
                      const existingIds = new Set(prev.map(p => p.id));
                      const uniqueNew = imported.filter(item => !existingIds.has(item.id));
                      return [...prev, ...uniqueNew];
                  });
                  setStatus({ isProcessing: false, message: `Imported ${imported.length} records into archive.` });
              }
          } catch (err) {
              setStatus({ isProcessing: false, message: 'Archive corruption detected. Import failed.' });
          }
      };
      reader.readAsText(file);
  };

  const handleGenerateReport = async () => {
      if (events.length === 0) return;
      setIsGeneratingReport(true);
      try {
          const report = await generateSituationReport(events, language);
          setReportContent(report);
      } catch (e) { setReportContent("Neural network timed out while synthesizing SITREP."); }
      finally { setIsGeneratingReport(false); }
  };

  const filteredEvents = useMemo(() => {
    return events.filter(e => {
      if (!e) return false;
      const matchesSearch = (e.title || '').toLowerCase().includes(searchTerm.toLowerCase()) || 
                           (e.locationName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (e.summary || '').toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory === 'ALL' || e.category === filterCategory;
      return matchesSearch && matchesCategory;
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [events, searchTerm, filterCategory]);

  return (
    <div className={`flex h-screen w-screen bg-slate-950 overflow-hidden text-slate-200 ${language === 'fa' ? 'flex-row-reverse' : 'flex-row'}`}>
      <Sidebar 
        events={filteredEvents} totalEventCount={events.length} allEventsRaw={events}
        onIngestText={handleIngestText} onIngestUrl={handleIngestUrl} onStopScan={() => setStatus({ isProcessing: false, message: 'Scan Cancelled.' })}
        status={status} onExport={handleExport} onImport={handleImport}
        onSelectEvent={(e) => setSelectedEventId(e.id)} 
        onCorrectEvent={handleCorrectEvent}
        isCorrecting={isCorrecting}
        selectedEventId={selectedEventId}
        searchTerm={searchTerm} setSearchTerm={setSearchTerm}
        filterCategory={filterCategory} setFilterCategory={setFilterCategory}
        language={language} setLanguage={setLanguage}
        syncConfig={syncConfig} onUpdateSyncConfig={(cfg) => setSyncConfig(prev => ({ ...prev, ...cfg }))}
        isSyncing={status.isProcessing} channelMetadata={channelMetadata}
        onGenerateReport={handleGenerateReport} reportContent={reportContent} isGeneratingReport={isGeneratingReport}
        onRemoveSource={(url) => setSyncConfig(prev => ({ ...prev, monitoredChannels: prev.monitoredChannels.filter(c => c.url !== url) }))}
        unreadCount={unreadCount} setUnreadCount={setUnreadCount}
        saveStatus={saveStatus}
        onManualSave={handleManualSave}
        onDeduplicate={handleDeduplicate}
        onCasualtyScan={handleScanCasualties}
      />
      <div className="flex-1 relative h-full">
        <GlobeVis events={filteredEvents} selectedEventId={selectedEventId} onEventClick={(e) => setSelectedEventId(e.id)} language={language} />
      </div>
    </div>
  );
};

export default App;