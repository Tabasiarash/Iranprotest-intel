import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import GlobeVis from './components/GlobeVis';
import Sidebar from './components/Sidebar';
import { IntelEvent, ProcessingStatus, SourceType, AppLanguage, SyncConfig, ChannelMetadataMap, ScannedPost, IndividualCasualty } from './types';
import { parseIntelContent, fetchSourceData, correctIntelStats, generateSituationReport, IntelligenceInsights, chatWithIntel } from './services/geminiService';
import { INITIAL_EVENTS } from './data/initialEvents';
import { v4 as uuidv4 } from 'uuid';

const STORAGE_KEY = 'INTEL_VAULT_V19_STABLE';
const SYNC_CONFIG_KEY = 'INTEL_SYNC_CFG_V19';
const METADATA_KEY = 'INTEL_META_V19';

const PREFERRED_SOURCES = [
  "https://t.me/IranintlTV",
  "https://t.me/Hengaw_Org",
  "https://t.me/haalvsh",
  "https://t.me/DEJradio",
  "https://t.me/VahidOnline",
  "https://t.me/militarysummary"
];

const getDistanceKm = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  if (typeof lat1 !== 'number' || typeof lon1 !== 'number' || typeof lat2 !== 'number' || typeof lon2 !== 'number') return 9999;
  const R = 6371; 
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2); 
  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))); 
};

const safeSort = (a: any, b: any) => {
    const timeA = a.date ? new Date(a.date).getTime() : 0;
    const timeB = b.date ? new Date(b.date).getTime() : 0;
    return (isNaN(timeB) ? 0 : timeB) - (isNaN(timeA) ? 0 : timeA);
};

const dedupeIndividuals = (list: IndividualCasualty[]) => {
    const map = new Map<string, IndividualCasualty>();
    list.forEach(c => {
        if (!c || !c.name) return;
        const key = c.name.trim().toLowerCase();
        if (!map.has(key)) {
            map.set(key, { ...c, validationScore: 1 });
        } else {
            const existing = map.get(key)!;
            if (c.status === 'Killed' && existing.status !== 'Killed') {
                map.set(key, { ...c, validationScore: (existing.validationScore || 1) + 1 });
            } else {
                existing.validationScore = (existing.validationScore || 1) + 1;
            }
        }
    });
    return Array.from(map.values()).sort(safeSort);
};

const sanitizeInitialData = (data: any[]): IntelEvent[] => {
  return data.map(item => ({
    ...item,
    id: item.id || uuidv4(),
    lat: typeof item.lat === 'number' ? item.lat : 0,
    lng: typeof item.lng === 'number' ? item.lng : 0,
    category: item.category || 'Other',
    // Fix: ensure validationScore is present to satisfy IntelEvent interface
    validationScore: item.validationScore || 1,
    casualties: item.casualties || { dead: 0, injured: 0, detained: 0 },
    securityCasualties: item.securityCasualties || { dead: 0, injured: 0 },
    individualCasualties: Array.isArray(item.individualCasualties) ? item.individualCasualties : []
  }));
};

const App: React.FC = () => {
  const [events, setEvents] = useState<IntelEvent[]>([]);
  const [selectedEventId, setSelectedEventId] = useState<string | undefined>(undefined);
  const [status, setStatus] = useState<ProcessingStatus>({ isProcessing: false, message: '' });
  const [language, setLanguage] = useState<AppLanguage>('fa');
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isCorrecting, setIsCorrecting] = useState(false);
  const [reportContent, setReportContent] = useState<string>('');
  const [intelligenceInsights, setIntelligenceInsights] = useState<IntelligenceInsights | undefined>(undefined);
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);
  const [chatHistory, setChatHistory] = useState<{role: 'user' | 'model', text: string}[]>([]);
  const [isChatting, setIsChatting] = useState(false);

  const [channelMetadata, setChannelMetadata] = useState<ChannelMetadataMap>(() => {
    try { const saved = localStorage.getItem(METADATA_KEY); return saved ? JSON.parse(saved) : {}; }
    catch (e) { return {}; }
  });

  const [syncConfig, setSyncConfig] = useState<SyncConfig>(() => {
    try {
      const saved = localStorage.getItem(SYNC_CONFIG_KEY);
      let config = saved ? JSON.parse(saved) : { 
        enabled: true, 
        intervalMinutes: 120, 
        monitoredChannels: [], 
        targetRegion: 'Iran',
        maxDepth: 10
      };
      const existingUrls = new Set(config.monitoredChannels.map((c: any) => c.url));
      PREFERRED_SOURCES.forEach(url => { if (!existingUrls.has(url)) config.monitoredChannels.push({ url, type: SourceType.TELEGRAM }); });
      return config;
    } catch (e) { return { enabled: true, intervalMinutes: 120, monitoredChannels: [], targetRegion: 'Iran', maxDepth: 10 }; }
  });

  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length > 0) {
                setEvents(sanitizeInitialData(parsed));
            } else {
                setEvents(sanitizeInitialData(INITIAL_EVENTS));
            }
        } else {
            setEvents(sanitizeInitialData(INITIAL_EVENTS));
        }
    } catch (e) {
        setEvents(sanitizeInitialData(INITIAL_EVENTS));
    }
  }, []);

  useEffect(() => {
    if (events.length > 0) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
        localStorage.setItem(SYNC_CONFIG_KEY, JSON.stringify(syncConfig));
        localStorage.setItem(METADATA_KEY, JSON.stringify(channelMetadata));
    }
  }, [events, syncConfig, channelMetadata]);

  const mergeResults = (newEvents: IntelEvent[]) => {
    setEvents(prev => {
        const updated = [...prev];
        sanitizeInitialData(newEvents).forEach(ne => {
            const idx = updated.findIndex(e => {
                const dist = getDistanceKm(e.lat, e.lng, ne.lat, ne.lng);
                return (e.date === ne.date && dist < 1.0) || (e.title.toLowerCase() === ne.title.toLowerCase() && e.date === ne.date);
            });
            if (idx > -1) {
                const existing = updated[idx];
                const sources = new Set([...(existing.approvedSourceUrls || []), ...(ne.approvedSourceUrls || [])]);
                updated[idx] = {
                    ...existing,
                    validationScore: Math.max(existing.validationScore || 1, sources.size),
                    approvedSourceUrls: Array.from(sources),
                    individualCasualties: dedupeIndividuals([...(existing.individualCasualties || []), ...(ne.individualCasualties || [])])
                };
            } else {
                updated.push(ne);
            }
        });
        return updated.sort(safeSort);
    });
  };

  const handleGlobalSync = async () => {
    if (status.isProcessing) return;
    abortControllerRef.current = new AbortController();
    setStatus({ isProcessing: true, message: `Starting Unified Intel Sync (Region: ${syncConfig.targetRegion})...` });
    
    for (const channel of syncConfig.monitoredChannels) {
        if (abortControllerRef.current?.signal.aborted) break;
        const channelName = channel.url.split('/').pop();
        setStatus(s => ({ ...s, message: `Scoping: ${channelName}...`, currentChannel: channelName }));
        
        try {
            const sourceData = await fetchSourceData(channel.url, syncConfig.maxDepth || 10, (msg) => setStatus(s => ({ ...s, message: msg })), abortControllerRef.current.signal);
            
            if (sourceData.posts.length > 0) {
                const meta = channelMetadata[channel.url] || { processedMediaIds: [] };
                const result = await parseIntelContent(sourceData.posts, sourceData.type, language, meta.processedMediaIds, syncConfig.targetRegion || "Iran", (msg) => setStatus(s => ({ ...s, message: msg })), abortControllerRef.current.signal);
                mergeResults(result.events);
                setChannelMetadata(prev => ({
                    ...prev,
                    [channel.url]: {
                        ...prev[channel.url],
                        lastUpdate: new Date().toISOString(),
                        lastCvSync: new Date().toISOString(),
                        processedMediaIds: [...(prev[channel.url]?.processedMediaIds || []), ...result.newlyAnalyzedMediaIds],
                        totalEvents: (prev[channel.url]?.totalEvents || 0) + result.events.length,
                        type: sourceData.type
                    }
                }));
            }
            await new Promise(r => setTimeout(r, 5000));
        } catch (e: any) { console.error(`Sync Failed for ${channelName}`, e); }
    }
    setStatus({ isProcessing: false, message: 'Intel Synthesis Complete.' });
  };

  const handleSendMessage = async (msg: string) => {
    if (isChatting) return;
    setIsChatting(true);
    const newHistory = [...chatHistory, { role: 'user' as const, text: msg }];
    setChatHistory(newHistory);
    try {
        const reply = await chatWithIntel(msg, events, language, chatHistory);
        setChatHistory([...newHistory, { role: 'model', text: reply }]);
    } catch (e) {
        setChatHistory([...newHistory, { role: 'model', text: "Chat uplink severed." }]);
    } finally {
        setIsChatting(false);
    }
  };

  const handleGenerateReport = async () => {
    if (isGeneratingReport) return;
    setIsGeneratingReport(true);
    try {
        const { sitrep, insights } = await generateSituationReport(events, language);
        setReportContent(sitrep);
        setIntelligenceInsights(insights);
    } finally {
        setIsGeneratingReport(false);
    }
  };

  const filteredEvents = useMemo(() => {
    return events.filter(e => {
      const matchesSearch = (e.title || '').toLowerCase().includes(searchTerm.toLowerCase()) || 
                            (e.locationName || '').toLowerCase().includes(searchTerm.toLowerCase());
      const dateVal = e.date ? new Date(e.date).getTime() : 0;
      const afterStart = startDate ? dateVal >= new Date(startDate).getTime() : true;
      const beforeEnd = endDate ? dateVal <= new Date(endDate).getTime() : true;
      return matchesSearch && afterStart && beforeEnd;
    }).sort(safeSort);
  }, [events, searchTerm, startDate, endDate]);

  return (
    <div className={`flex h-screen w-screen bg-slate-950 overflow-hidden text-slate-200 ${language === 'fa' ? 'flex-row-reverse' : 'flex-row'}`}>
      <Sidebar 
        events={filteredEvents} allEventsRaw={events} totalEventCount={events.length}
        onIngestText={() => {}} onIngestUrl={() => {}} onStopScan={() => abortControllerRef.current?.abort()}
        status={status} onExport={() => {}} onImport={() => {}}
        onSelectEvent={(e) => setSelectedEventId(e.id)} 
        onCorrectEvent={async (e) => {}}
        isCorrecting={isCorrecting} selectedEventId={selectedEventId}
        searchTerm={searchTerm} setSearchTerm={setSearchTerm}
        startDate={startDate} setStartDate={setStartDate}
        endDate={endDate} setEndDate={setEndDate}
        filterCategory="ALL" setFilterCategory={() => {}}
        language={language} setLanguage={setLanguage}
        syncConfig={syncConfig} onUpdateSyncConfig={(cfg) => setSyncConfig(prev => ({ ...prev, ...cfg }))}
        isSyncing={status.isProcessing} channelMetadata={channelMetadata}
        onGenerateReport={handleGenerateReport} reportContent={reportContent} 
        intelligenceInsights={intelligenceInsights} isGeneratingReport={isGeneratingReport}
        onRemoveSource={(url) => setSyncConfig(prev => ({ ...prev, monitoredChannels: prev.monitoredChannels.filter(c => c.url !== url) }))}
        unreadCount={0} setUnreadCount={() => {}}
        onManualSave={handleGlobalSync}
        onCasualtyScan={handleGlobalSync}
        chatHistory={chatHistory} onChat={handleSendMessage} isChatting={isChatting}
      />
      <div className="flex-1 relative h-full">
        <GlobeVis events={filteredEvents} selectedEventId={selectedEventId} onEventClick={(e) => setSelectedEventId(e.id)} language={language} />
      </div>
    </div>
  );
};

export default App;