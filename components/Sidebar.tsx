import React, { useState, useMemo, useRef, useEffect } from 'react';
import { IntelEvent, EventCategory, SourceType, ProcessingStatus, AppLanguage, SyncConfig, ChannelMetadataMap, IndividualCasualty } from '../types';
import { chatWithIntel } from '../services/geminiService';
import { 
  Upload, Map as MapIcon, Search, FileJson, Link as LinkIcon, 
  FileText, Clock, Globe, 
  RefreshCcw, Activity, Bell, Send, 
  TrendingUp, Users, UserX, ShieldAlert, 
  Trash, ChevronRight, ChevronLeft, 
  FileSearch, Filter, Save, CheckCircle,
  Eye, Skull, Plus, Database, Sparkles, Wand2,
  ListPlus, Merge, HardDrive, ExternalLink
} from 'lucide-react';

interface SidebarProps {
  events: IntelEvent[];
  allEventsRaw: IntelEvent[];
  totalEventCount: number;
  onIngestText: (text: string, region?: string) => void;
  onIngestUrl: (url: string, duration: string, region?: string) => void;
  onStopScan: () => void;
  status: ProcessingStatus;
  onExport: () => void;
  onImport: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectEvent: (event: IntelEvent) => void;
  onCorrectEvent: (event: IntelEvent) => Promise<void>;
  isCorrecting: boolean;
  selectedEventId?: string;
  searchTerm: string;
  setSearchTerm: (s: string) => void;
  filterCategory: string;
  setFilterCategory: (c: string) => void;
  language: AppLanguage;
  setLanguage: (l: AppLanguage) => void;
  syncConfig: SyncConfig;
  onUpdateSyncConfig: (config: Partial<SyncConfig>) => void;
  isSyncing: boolean;
  channelMetadata: ChannelMetadataMap;
  onGenerateReport: () => void;
  reportContent?: string;
  isGeneratingReport: boolean;
  onRemoveSource: (url: string) => void;
  unreadCount: number;
  setUnreadCount: (n: number) => void;
  saveStatus?: 'IDLE' | 'SAVING' | 'ERROR';
  onManualSave?: () => void;
  onDeduplicate?: () => void;
  onCasualtyScan?: () => void;
}

const REGIONS = [
  "ALL", "Tehran", "Kurdistan", "Khuzestan", "Sistan and Baluchestan", "Isfahan", "Fars", "Mazandaran", "Gilan", "East Azerbaijan", "West Azerbaijan", "Kermanshah", "Alborz", "Khorasan"
];

const getCategoryColor = (category: EventCategory): string => {
  switch (category) {
    case EventCategory.MILITARY: return '#b91c1c';
    case EventCategory.KINETIC: return '#ea580c';
    case EventCategory.CIVIL_UNREST: return '#eab308';
    case EventCategory.POLITICAL: return '#a855f7';
    case EventCategory.STRIKES: return '#fbbf24';
    case EventCategory.CYBER: return '#10b981';
    case EventCategory.HUMANITARIAN: return '#22c55e';
    case EventCategory.INFRASTRUCTURE: return '#3b82f6';
    default: return '#94a3b8';
  }
};

const translations = {
  en: {
    archive: "Archive", sources: "Control", analysis: "Stats", dossier: "Victims", chat: "Chat",
    searchPlaceholder: "Search reports...", allCategories: "All Domains",
    save: "Export", load: "Import", channelLink: "Channel URL", rawText: "Manual Input",
    startScan: "Scan Once", addToMonitor: "Add to Monitor", processText: "Analyze Data", stopScan: "Abort",
    noEvents: "Vault Empty", autoSync: "Autosync", 
    impact: "Impact Analytics", totalProtestors: "Estimated Turnout",
    civilians: "CIVILIANS", security: "FORCES",
    cats: { [EventCategory.MILITARY]: "Mil", [EventCategory.POLITICAL]: "Pol", [EventCategory.CYBER]: "Cyb", [EventCategory.KINETIC]: "Kinetic", [EventCategory.CIVIL_UNREST]: "Unrest", [EventCategory.OTHER]: "Other", [EventCategory.STRIKES]: "Strike", [EventCategory.INFRASTRUCTURE]: "Infra", [EventCategory.HUMANITARIAN]: "Human" },
    generateReport: "Analyze Strategic Pattern", dossierTitle: "Victim Identification Registry",
    statusTags: { Killed: "Martyr", Injured: "Wounded", Detained: "Detained" },
    monitoring: "Active Monitors", addSource: "Enter Telegram URL",
    scanDepth: "Archive Depth", targetRegion: "Geofence", 
    depthOptions: { "24": "24h", "288": "12d", "552": "23d", "720": "1m", "8760": "1y" },
    syncNow: "Sync", events: "Events",
    saving: "Syncing...", saved: "Secure",
    manualEntry: "Raw Intelligence Entry",
    aiCorrect: "AI Correction",
    correcting: "Disambiguating Statistics...",
    filedReports: "Filed Intelligence Reports",
    confirmedCasualties: "Identified Victims",
    forceSave: "Force Save", dedupe: "Merge Duplicates",
    scanHengaw: "Scan Casualties (Hengaw)",
    victimList: "Victim List"
  },
  fa: {
    archive: "آرشیو", sources: "کنترل", analysis: "آمار", dossier: "قربانیان", chat: "چت",
    searchPlaceholder: "جستجوی گزارش‌ها...", allCategories: "همه حوزه‌ها",
    save: "خروجی", load: "ورودی", channelLink: "لینک کانال", rawText: "ورود دستی",
    startScan: "اسکن فوری", addToMonitor: "افزودن به پایش", processText: "تحلیل داده", stopScan: "توقف",
    noEvents: "آرشیو خالی", autoSync: "همگام‌سازی", 
    impact: "تحلیل اثرگذاری", totalProtestors: "جمعیت تخمینی",
    civilians: "شهروندان", security: "نیروها",
    cats: { [EventCategory.MILITARY]: "نظامی", [EventCategory.POLITICAL]: "سیاسی", [EventCategory.CYBER]: "سایبری", [EventCategory.KINETIC]: "درگیری", [EventCategory.CIVIL_UNREST]: "ناآرامی", [EventCategory.OTHER]: "سایر", [EventCategory.STRIKES]: "اعتصاب", [EventCategory.INFRASTRUCTURE]: "زیرساخت", [EventCategory.HUMANITARIAN]: "بشردوستانه" },
    generateReport: "تحلیل الگوهای استراتژیک", dossierTitle: "دفتر ثبت قربانیان",
    statusTags: { Killed: "جان‌باخته", Injured: "مجروح", Detained: "بازداشتی" },
    monitoring: "پایش‌های فعال", addSource: "لینک تلگرام",
    scanDepth: "عمق آرشیو", targetRegion: "محدوده", 
    depthOptions: { "24": "۲۴س", "288": "۱۲روز", "552": "۲۳روز", "720": "۱ماه", "8760": "۱سال" },
    syncNow: "بروزرسانی", events: "مورد",
    saving: "در حال ذخیره...", saved: "امن",
    manualEntry: "ثبت اطلاعات خام",
    aiCorrect: "اصلاح هوشمند",
    correcting: "در حال تفکیک آمار...",
    filedReports: "لیست گزارشات ثبت شده",
    confirmedCasualties: "قربانیان شناسایی شده",
    forceSave: "ذخیره اجباری", dedupe: "ادغام تکراری‌ها",
    scanHengaw: "اسکن تلفات (هه‌نگاو)",
    victimList: "لیست قربانیان"
  }
};

const Sidebar: React.FC<SidebarProps> = ({ 
  events, allEventsRaw, onIngestText, onIngestUrl, status, onExport, onImport,
  onSelectEvent, onCorrectEvent, isCorrecting, selectedEventId, searchTerm, setSearchTerm,
  language, setLanguage, syncConfig, onUpdateSyncConfig,
  isSyncing, channelMetadata,
  onGenerateReport, reportContent, isGeneratingReport, onRemoveSource,
  unreadCount, setUnreadCount, saveStatus, onManualSave, onDeduplicate, onCasualtyScan
}) => {
  const [activeTab, setActiveTab] = useState<'events' | 'sources' | 'analysis' | 'chat' | 'dossier'>('sources');
  const [isExpanded, setIsExpanded] = useState(false);
  const [ingestMode, setIngestMode] = useState<'url' | 'text'>('url');
  const [channelUrl, setChannelUrl] = useState('');
  const [scanDepth, setScanDepth] = useState('24');
  const [targetRegion, setTargetRegion] = useState(syncConfig.targetRegion || 'ALL');
  const [rawText, setRawText] = useState('');
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState<{role: 'user'|'model', text: string}[]>([]);
  const [isChatThinking, setIsChatThinking] = useState(false);
  const [casualtyFilter, setCasualtyFilter] = useState<'Civilian' | 'Security'>('Civilian');

  const t = (translations as any)[language] || translations.en;
  const isRtl = language === 'fa' || language === 'ar';

  const selectedEvent = useMemo(() => events.find(e => e.id === selectedEventId), [events, selectedEventId]);

  const stats = useMemo(() => {
    let protestors = 0, civDead = 0, civInjured = 0, civDetained = 0, secDead = 0, secInjured = 0;
    events.forEach(e => {
      protestors += (e.protestorCount || 0);
      civDead += (e.casualties?.dead || 0); civInjured += (e.casualties?.injured || 0); civDetained += (e.casualties?.detained || 0);
      secDead += (e.securityCasualties?.dead || 0); secInjured += (e.securityCasualties?.injured || 0);
    });
    return { protestors, civDead, civInjured, civDetained, secDead, secInjured };
  }, [events]);

  // Strict Deduplication and Aggregation for Victim List
  const casualtyList = useMemo(() => {
    const all: IndividualCasualty[] = [];
    events.forEach(e => { if (e.individualCasualties) all.push(...e.individualCasualties); });
    
    // Deduplicate by normalized name to show unique individuals
    const uniqueMap = new Map<string, IndividualCasualty>();
    all.forEach(c => {
        if(!c.name) return;
        const key = c.name.trim().replace(/\s+/g, ' '); // Normalize spaces
        if (!uniqueMap.has(key)) {
            uniqueMap.set(key, c);
        } else {
            const existing = uniqueMap.get(key)!;
            // Prefer entry with image
            if (!existing.imageUrl && c.imageUrl) {
                uniqueMap.set(key, { ...existing, imageUrl: c.imageUrl });
            }
            // Prefer entry with 'Killed' status over others
            else if (existing.status !== 'Killed' && c.status === 'Killed') {
                uniqueMap.set(key, { ...c, imageUrl: existing.imageUrl || c.imageUrl });
            }
        }
    });

    return Array.from(uniqueMap.values()).sort((a, b) => {
        const priority = { 'Killed': 3, 'Detained': 2, 'Injured': 1 };
        const scoreA = (priority[a.status] || 0);
        const scoreB = (priority[b.status] || 0);
        if (scoreA !== scoreB) return scoreB - scoreA;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [events]);

  const filteredCasualties = useMemo(() => {
      return casualtyList.filter(c => c.side === casualtyFilter);
  }, [casualtyList, casualtyFilter]);

  const sourceCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    allEventsRaw.forEach(e => { if (e.sourceUrl) { const baseUrl = e.sourceUrl.replace('/s/', '/').split('?')[0]; counts[baseUrl] = (counts[baseUrl] || 0) + 1; } });
    return counts;
  }, [allEventsRaw]);

  const handleChatSubmit = async () => {
      if (!chatInput.trim()) return;
      const userMsg = chatInput; setChatInput('');
      setChatHistory(prev => [...prev, { role: 'user', text: userMsg }]);
      setIsChatThinking(true);
      try {
          const response = await chatWithIntel(userMsg, events.slice(0, 50), language, chatHistory);
          setChatHistory(prev => [...prev, { role: 'model', text: response }]);
      } catch (e) { setChatHistory(prev => [...prev, { role: 'model', text: "Analyst unavailable." }]); }
      finally { setIsChatThinking(false); }
  };

  const handleAddSource = () => {
      if (!channelUrl) return;
      const cleanUrl = channelUrl.trim();
      const exists = syncConfig.monitoredChannels.some(c => c.url === cleanUrl);
      if (exists) { setChannelUrl(''); return; }
      const newChannels = [...syncConfig.monitoredChannels, { url: cleanUrl, type: SourceType.TELEGRAM }];
      onUpdateSyncConfig({ monitoredChannels: newChannels });
      setChannelUrl('');
  };

  return (
    <div className={`${isExpanded ? 'w-[500px]' : 'w-80'} h-full bg-slate-900 border-r border-slate-700 flex flex-col font-sans z-10 shadow-2xl transition-all duration-300 relative`} dir={isRtl ? 'rtl' : 'ltr'}>
      <button onClick={() => setIsExpanded(!isExpanded)} className="absolute -right-3 top-1/2 -translate-y-1/2 bg-cyan-600 p-1.5 rounded-full text-white border border-slate-800 z-20 hover:bg-cyan-500 shadow-xl">
        {isExpanded ? <ChevronLeft size={16}/> : <ChevronRight size={16}/>}
      </button>

      <div className="p-4 bg-slate-900 border-b border-slate-800">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <div className="bg-cyan-600 p-1.5 rounded-lg shadow-inner"><MapIcon className="text-white" size={18} /></div>
            <h1 className="font-black text-lg text-white uppercase tracking-tighter italic">Intel<span className="text-cyan-500">Node</span></h1>
          </div>
          <div className="flex items-center gap-2">
             <div className="relative">
                 <button onClick={() => {setActiveTab('events'); setUnreadCount(0);}} className={`p-2 rounded-xl transition-all ${unreadCount > 0 ? 'text-cyan-400 animate-pulse bg-cyan-400/10' : 'text-slate-500 hover:text-slate-300'}`}>
                    <Bell size={18}/>
                 </button>
                 {unreadCount > 0 && <span className="absolute top-1 right-1 bg-red-500 text-white text-[8px] font-black px-1.5 rounded-full min-w-[16px] text-center border border-slate-900 shadow-lg">{unreadCount}</span>}
             </div>
             <select value={language} onChange={(e) => setLanguage(e.target.value as AppLanguage)} className="bg-slate-800 border border-slate-700 text-[10px] text-slate-300 rounded-lg px-2.5 py-1.5 outline-none font-black hover:border-slate-500 cursor-pointer shadow-sm">
                <option value="en">EN</option><option value="fa">FA</option>
             </select>
          </div>
        </div>
      </div>

      <div className="flex bg-slate-950/60 p-1.5 mx-2 mt-2 rounded-2xl border border-slate-800/40 overflow-x-auto gap-1.5 no-scrollbar shadow-inner">
        {['sources', 'events', 'analysis', 'dossier', 'chat'].map((tab: any) => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`flex-1 min-w-[60px] py-2.5 text-[9px] font-black rounded-xl transition-all uppercase tracking-tighter ${activeTab === tab ? 'bg-slate-800 text-cyan-400 shadow-xl border border-slate-700' : 'text-slate-600 hover:text-slate-400'}`}>
            {String(t[tab] || tab)}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-hidden flex flex-col mt-2">
        {activeTab === 'sources' && (
          <div className="h-full flex flex-col p-4 space-y-5 custom-scrollbar overflow-y-auto">
            {/* Control Panel Actions */}
            <div className="grid grid-cols-2 gap-3 mb-2">
                <button onClick={onManualSave} disabled={status.isProcessing} className="bg-slate-800 hover:bg-emerald-900/30 border border-slate-700 hover:border-emerald-500/50 text-slate-300 hover:text-emerald-400 py-3 rounded-xl flex items-center justify-center gap-2 text-[10px] font-black uppercase transition-all shadow-md active:scale-95">
                    <Save size={14}/> {String(t.forceSave)}
                </button>
                <button onClick={onDeduplicate} disabled={status.isProcessing} className="bg-slate-800 hover:bg-indigo-900/30 border border-slate-700 hover:border-indigo-500/50 text-slate-300 hover:text-indigo-400 py-3 rounded-xl flex items-center justify-center gap-2 text-[10px] font-black uppercase transition-all shadow-md active:scale-95">
                    <Merge size={14}/> {String(t.dedupe)}
                </button>
            </div>

            <div className="space-y-3">
              <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2"><Filter size={14} className="text-cyan-400"/> Operational Parameters</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-950/40 p-3 rounded-2xl border border-slate-800/60 space-y-2">
                    <label className="text-[8px] font-black text-slate-600 uppercase flex items-center gap-2"><Clock size={10}/> {String(t.scanDepth)}</label>
                    <select className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2 text-[10px] text-white focus:border-cyan-500 outline-none cursor-pointer" value={scanDepth} onChange={e => setScanDepth(e.target.value)}>
                        {Object.entries(t.depthOptions).map(([val, label]) => (
                            <option key={val} value={val}>{String(label)}</option>
                        ))}
                    </select>
                </div>
                <div className="bg-slate-950/40 p-3 rounded-2xl border border-slate-800/60 space-y-2">
                    <label className="text-[8px] font-black text-slate-600 uppercase flex items-center gap-2"><Globe size={10}/> {String(t.targetRegion)}</label>
                    <select className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2 text-[10px] text-white focus:border-cyan-500 outline-none cursor-pointer" value={targetRegion} onChange={e => {setTargetRegion(e.target.value); onUpdateSyncConfig({ targetRegion: e.target.value });}}>
                        {REGIONS.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                </div>
              </div>
            </div>

            <div className="bg-slate-950/40 p-4 rounded-3xl border border-slate-800/80 space-y-4 shadow-inner">
                <div className="flex bg-slate-900 p-1 rounded-xl">
                    <button onClick={() => setIngestMode('url')} className={`flex-1 py-2 text-[9px] font-black rounded-lg transition-all uppercase ${ingestMode === 'url' ? 'bg-slate-800 text-cyan-400 shadow-md' : 'text-slate-600'}`}>{String(t.channelLink)}</button>
                    <button onClick={() => setIngestMode('text')} className={`flex-1 py-2 text-[9px] font-black rounded-lg transition-all uppercase ${ingestMode === 'text' ? 'bg-slate-800 text-cyan-400 shadow-md' : 'text-slate-600'}`}>{String(t.rawText)}</button>
                </div>
                {ingestMode === 'url' ? (
                    <div className="space-y-3">
                        <div className="relative">
                            <Plus className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600" size={12}/>
                            <input type="text" placeholder="https://t.me/channel" className="w-full bg-slate-900 border border-slate-800 rounded-xl py-3 pl-9 pr-4 text-[10px] text-white focus:border-cyan-500 outline-none shadow-sm" value={channelUrl} onChange={e => setChannelUrl(e.target.value)} />
                        </div>
                        <div className="flex gap-2">
                            <button onClick={() => onIngestUrl(channelUrl, scanDepth, targetRegion)} disabled={status.isProcessing || !channelUrl} className="flex-1 py-3 bg-gradient-to-r from-cyan-700 to-cyan-600 rounded-xl text-[10px] font-black uppercase text-white hover:from-cyan-600 hover:to-cyan-500 transition-all shadow-xl active:scale-[0.98] flex items-center justify-center gap-2">
                                {status.isProcessing ? <RefreshCcw size={14} className="animate-spin"/> : <Search size={14}/>} {String(t.startScan)}
                            </button>
                            <button onClick={handleAddSource} disabled={!channelUrl} className="flex-1 py-3 bg-slate-800 border border-slate-700 rounded-xl text-[10px] font-black uppercase text-slate-300 hover:bg-slate-700 hover:text-cyan-400 transition-all shadow-lg active:scale-[0.98] flex items-center justify-center gap-2">
                                <ListPlus size={14}/> {String(t.addToMonitor)}
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-3">
                        <textarea placeholder="Paste tactical reports or social media logs here..." className="w-full h-32 bg-slate-900 border border-slate-800 rounded-2xl p-4 text-[10px] text-white resize-none outline-none focus:border-cyan-500 shadow-inner" value={rawText} onChange={e => setRawText(e.target.value)} />
                        <button onClick={() => onIngestText(rawText, targetRegion)} disabled={status.isProcessing} className="w-full py-3.5 bg-slate-800 rounded-2xl text-[10px] font-black uppercase text-cyan-400 hover:bg-slate-700 border border-slate-700 transition-all shadow-xl active:scale-[0.98] flex items-center justify-center gap-2">
                           <FileText size={14}/> {String(t.processText)}
                        </button>
                    </div>
                )}
                {status.isProcessing && (
                  <div className="flex items-center gap-3 text-cyan-400 text-[9px] animate-pulse font-black bg-cyan-400/5 p-3 rounded-2xl border border-cyan-400/20 uppercase tracking-tighter">
                    <Activity size={14}/> {String(status.message)}
                  </div>
                )}
            </div>

            <div className="space-y-3">
                <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2"><Database size={14} className="text-cyan-400"/> {String(t.monitoring)}</h3>
                <div className="space-y-2.5">
                    {syncConfig.monitoredChannels.map(c => {
                        const channelName = c.url.split('/').pop() || '';
                        const isThisSourceSyncing = status.isProcessing && status.message.includes(channelName);
                        const eventCount = sourceCounts[c.url.replace('/s/', '/').split('?')[0]] || 0;
                        return (
                            <div key={c.url} className="flex items-center justify-between bg-slate-800/30 p-3.5 rounded-2xl border border-slate-800/60 group hover:bg-slate-800/50 hover:border-slate-700 transition-all shadow-sm">
                                <div className="flex flex-col">
                                    <span className="text-[11px] text-slate-200 truncate max-w-[130px] font-black group-hover:text-cyan-400 transition-colors">{channelName}</span>
                                    <span className="text-[9px] text-slate-500 font-mono uppercase mt-0.5 tracking-tighter">{eventCount} {String(t.events)} SECURED</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button onClick={() => onIngestUrl(c.url, scanDepth, targetRegion)} disabled={status.isProcessing} className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-cyan-400 hover:bg-slate-700 transition-all shadow-md"><RefreshCcw size={14} className={isThisSourceSyncing ? 'animate-spin' : ''} /></button>
                                    <button onClick={() => onRemoveSource(c.url)} className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-500 hover:text-red-500 transition-all shadow-md"><Trash size={14}/></button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
          </div>
        )}

        {/* EVENTS TAB */}
        {activeTab === 'events' && (
          <div className="h-full flex flex-col">
            <div className="p-3 space-y-3">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-500 transition-colors" size={14}/>
                <input type="text" placeholder={String(t.searchPlaceholder)} className="w-full bg-slate-800/40 border border-slate-700 rounded-2xl py-2.5 pl-10 pr-4 text-xs text-white outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10 transition-all shadow-inner" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              </div>
            </div>
            
            {/* Event List */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3 custom-scrollbar">
              {events.length === 0 ? (
                <div className="text-center text-slate-600 text-[10px] py-20 uppercase font-black tracking-[0.2em] opacity-50">{String(t.noEvents)}</div>
              ) : (
                events.map(event => {
                  const catColor = getCategoryColor(event.category);
                  const isSId = selectedEventId === event.id;
                  return (
                    <div key={event.id} onClick={() => onSelectEvent(event)} className={`p-4 rounded-2xl border-l-4 cursor-pointer transition-all duration-300 relative overflow-hidden group ${isSId ? 'bg-slate-800/90 border-cyan-500 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.4)] translate-x-1' : 'bg-slate-900/50 border-slate-800 hover:bg-slate-800/40 hover:border-slate-700'}`} style={{ borderLeftColor: catColor }}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[9px] font-black text-slate-500 uppercase tracking-tight flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: catColor }}></span>
                            {String(t.cats[event.category] || event.category)}
                            {(event.isCrowdResult || event.reliabilityScore === 10) && <span className="ml-1 text-cyan-400 font-bold flex items-center gap-0.5"><Eye size={8}/> verified</span>}
                        </span>
                        <span className="text-[9px] text-slate-600 font-mono bg-slate-950/40 px-2 py-0.5 rounded-full border border-slate-800/50">{event.date}</span>
                      </div>
                      <h4 className="text-xs font-black text-slate-100 mb-2 leading-tight group-hover:text-white transition-colors">{event.title}</h4>
                      <div className="flex justify-between items-end">
                        <span className="text-[10px] text-slate-500 truncate max-w-[160px] italic">📍 {event.locationName.split(',')[0]}</span>
                        <div className="flex gap-2.5">
                            {event.casualties?.dead ? <span className="text-[10px] text-red-500 font-black flex items-center gap-1 group-hover:scale-110 transition-transform"><Skull size={10}/> {event.casualties.dead}</span> : null}
                            {event.securityCasualties?.dead ? <span className="text-[10px] text-orange-600 font-black flex items-center gap-1 group-hover:scale-110 transition-transform"><ShieldAlert size={10}/> {event.securityCasualties.dead}</span> : null}
                        </div>
                      </div>

                      {/* AI Correction Quick Button when selected */}
                      {isSId && (
                        <div className="mt-3 pt-3 border-t border-slate-700/50 flex gap-2">
                           <button 
                             onClick={(e) => { e.stopPropagation(); onCorrectEvent(event); }}
                             disabled={isCorrecting}
                             className="flex-1 py-2 bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-400 text-[9px] font-black uppercase rounded-lg border border-cyan-500/30 flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50"
                           >
                              {isCorrecting ? <RefreshCcw size={10} className="animate-spin" /> : <Wand2 size={10} />}
                              {isCorrecting ? String(t.correcting) : String(t.aiCorrect)}
                           </button>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}

        {activeTab === 'analysis' && (
           <div className="h-full overflow-y-auto p-4 space-y-6 custom-scrollbar">
              <div className="space-y-4">
                 <div className="flex items-center gap-3">
                    <TrendingUp size={18} className="text-cyan-400"/>
                    <h3 className="text-xs font-black text-white uppercase tracking-widest">{String(t.impact)}</h3>
                 </div>
                 <div className="bg-slate-950/60 p-5 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 opacity-5 group-hover:scale-110 transition-transform duration-700"><Users size={80}/></div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{String(t.totalProtestors)}</span>
                        <p className="text-3xl font-black text-cyan-400 font-mono tracking-tighter drop-shadow-lg">{stats.protestors.toLocaleString()}</p>
                    </div>
                 </div>
              </div>

              <div className="space-y-4">
                 <div className="grid grid-cols-1 gap-4">
                    <div className="bg-slate-950/40 p-5 rounded-3xl border border-slate-800/80 space-y-5">
                       <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                          <h5 className="text-[10px] font-black text-cyan-400 uppercase tracking-widest flex items-center gap-2"><UserX size={14}/> {String(t.civilians)}</h5>
                          <span className="text-[9px] font-bold text-slate-600 uppercase">Impact Metrics</span>
                       </div>
                       <div className="grid grid-cols-3 gap-3">
                          <div className="text-center bg-red-950/10 rounded-2xl py-3 border border-red-900/30 hover:bg-red-950/20 transition-colors shadow-sm">
                             <span className="block text-[8px] text-red-500 font-black mb-1">KILLED</span>
                             <span className="text-lg font-black text-red-400 font-mono">{stats.civDead}</span>
                          </div>
                          <div className="text-center bg-yellow-950/10 rounded-2xl py-3 border border-yellow-900/30 hover:bg-yellow-950/20 transition-colors shadow-sm">
                             <span className="block text-[8px] text-yellow-500 font-black mb-1">INJURED</span>
                             <span className="text-lg font-black text-yellow-400 font-mono">{stats.civInjured}</span>
                          </div>
                          <div className="text-center bg-blue-950/10 rounded-2xl py-3 border border-blue-900/30 hover:bg-blue-950/20 transition-colors shadow-sm">
                             <span className="block text-[8px] text-blue-500 font-black mb-1">DETAINED</span>
                             <span className="text-lg font-black text-blue-400 font-mono">{stats.civDetained}</span>
                          </div>
                       </div>
                    </div>

                    <div className="bg-slate-950/40 p-5 rounded-3xl border border-slate-800/80 space-y-5">
                       <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                          <h5 className="text-[10px] font-black text-red-500 uppercase tracking-widest flex items-center gap-2"><ShieldAlert size={14}/> {String(t.security)}</h5>
                          <span className="text-[9px] font-bold text-slate-600 uppercase">Registry</span>
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                          <div className="text-center bg-slate-900/60 rounded-2xl py-3 border border-slate-800 shadow-inner group hover:border-red-900/40 transition-all">
                             <span className="block text-[8px] text-slate-500 font-black mb-1 group-hover:text-red-500">FATALITIES</span>
                             <span className="text-lg font-black text-slate-100 font-mono">{stats.secDead}</span>
                          </div>
                          <div className="text-center bg-slate-900/60 rounded-2xl py-3 border border-slate-800 shadow-inner group hover:border-yellow-900/40 transition-all">
                             <span className="block text-[8px] text-slate-500 font-black mb-1 group-hover:text-yellow-500">WOUNDED</span>
                             <span className="text-lg font-black text-slate-100 font-mono">{stats.secInjured}</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-slate-800/80">
                  <button onClick={onGenerateReport} disabled={isGeneratingReport} className="w-full py-4 bg-gradient-to-r from-cyan-700 to-cyan-600 hover:from-cyan-600 hover:to-cyan-500 rounded-2xl text-[10px] font-black uppercase text-white flex items-center justify-center gap-3 transition-all duration-300 shadow-xl hover:shadow-cyan-900/20 active:scale-95 disabled:opacity-50">
                      <FileText size={18}/> {isGeneratingReport ? "CONSULTING ANALYST..." : String(t.generateReport)}
                  </button>
                  {reportContent && <div className="bg-slate-950/80 p-5 rounded-3xl border border-slate-800 text-[11px] text-slate-300 leading-relaxed font-serif italic whitespace-pre-wrap shadow-inner border-l-4 border-l-cyan-500">{reportContent}</div>}
              </div>
           </div>
        )}

        {/* UPDATED DOSSIER TAB FOR CASUALTIES - EXCLUSIVELY VICTIMS */}
        {activeTab === 'dossier' && (
            <div className="h-full flex flex-col p-4">
                <div className="flex items-center gap-3 mb-5 border-b border-slate-800 pb-3">
                    <FileSearch className="text-cyan-500" size={20} />
                    <h3 className="text-xs font-black text-white uppercase tracking-widest">{String(t.dossierTitle)}</h3>
                </div>

                {/* Casualty Scanner Header */}
                <div className="mb-4">
                    <button onClick={onCasualtyScan} disabled={status.isProcessing} className="w-full py-3 bg-red-900/20 hover:bg-red-900/40 border border-red-800/50 rounded-xl text-[10px] font-black text-red-400 uppercase flex items-center justify-center gap-2 transition-all shadow-inner active:scale-98">
                        {status.isProcessing ? <RefreshCcw size={12} className="animate-spin"/> : <Search size={12}/>}
                        {String(t.scanHengaw)}
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto space-y-4 custom-scrollbar">
                    {/* Individual Casualties Section */}
                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <h4 className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{String(t.confirmedCasualties)}</h4>
                            <div className="flex bg-slate-900 rounded-lg p-0.5 border border-slate-800">
                                <button onClick={() => setCasualtyFilter('Civilian')} className={`px-2 py-1 text-[8px] font-black uppercase rounded ${casualtyFilter === 'Civilian' ? 'bg-slate-800 text-white shadow' : 'text-slate-600'}`}>{String(t.civilians)}</button>
                                <button onClick={() => setCasualtyFilter('Security')} className={`px-2 py-1 text-[8px] font-black uppercase rounded ${casualtyFilter === 'Security' ? 'bg-slate-800 text-white shadow' : 'text-slate-600'}`}>{String(t.security)}</button>
                            </div>
                        </div>

                        {filteredCasualties.length === 0 ? (
                            <div className="text-center text-slate-700 text-[10px] font-bold py-4 bg-slate-900/30 rounded-xl border border-slate-800 border-dashed">No identified victims yet</div>
                        ) : (
                            <div className="space-y-3">
                                {filteredCasualties.map(ic => (
                                    <div key={ic.id} className={`bg-slate-900/60 p-3 rounded-2xl border ${ic.status === 'Killed' ? 'border-l-red-600 border-t-slate-800 border-r-slate-800 border-b-slate-800' : 'border-l-yellow-500 border-slate-800'} border-l-4 group hover:bg-slate-800/80 transition-all flex gap-3`}>
                                        {/* Casualty Image */}
                                        <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden shrink-0 flex items-center justify-center">
                                            {ic.imageUrl ? (
                                                <img src={`data:${ic.imageUrl.startsWith('http') ? '' : 'image/jpeg;base64,'}${ic.imageUrl}`} className="w-full h-full object-cover" alt="victim" />
                                            ) : (
                                                <UserX size={16} className="text-slate-700"/>
                                            )}
                                        </div>
                                        
                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-start mb-1">
                                                <h4 className="text-[11px] font-black text-slate-200 truncate">{ic.name}</h4>
                                                <span className={`text-[8px] px-1.5 py-0.5 rounded font-black uppercase tracking-tighter ${ic.status === 'Killed' ? 'bg-red-500/10 text-red-500' : 'bg-yellow-500/10 text-yellow-500'}`}>{String(t.statusTags[ic.status] || ic.status)}</span>
                                            </div>
                                            <div className="flex items-center gap-2 mb-1.5">
                                                {ic.age && <span className="text-[9px] text-slate-500 font-mono bg-slate-950 px-1 rounded border border-slate-800">{ic.age} yr</span>}
                                                <span className="text-[9px] text-slate-500 truncate">{ic.location || 'Unknown Loc'}</span>
                                            </div>
                                            {ic.means && <p className="text-[9px] text-slate-400 italic leading-tight line-clamp-2">"{ic.means}"</p>}
                                            
                                            {/* Source Link */}
                                            {ic.sourceUrl && (
                                                <a href={ic.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center gap-1 text-[9px] text-cyan-500 hover:text-cyan-400 font-bold uppercase transition-colors">
                                                    <ExternalLink size={10} /> Source
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )}

        {/* ... (Chat tab remains unchanged) ... */}
        {activeTab === 'chat' && (
            <div className="h-full flex flex-col p-3">
                <div className="flex-1 overflow-y-auto space-y-4 p-2 custom-scrollbar bg-slate-950/30 rounded-3xl border border-slate-800/40 shadow-inner">
                    {chatHistory.length === 0 && (
                        <div className="h-full flex flex-col items-center justify-center text-center p-6 opacity-30">
                            <Activity size={40} className="mb-4 text-cyan-500"/>
                            <p className="text-[10px] font-black uppercase tracking-[0.3em]">Neural Intel Consultant Online</p>
                        </div>
                    )}
                    {chatHistory.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[85%] rounded-2xl p-3.5 text-[11px] shadow-sm ${msg.role === 'user' ? 'bg-cyan-900/40 text-white border border-cyan-800/50 rounded-br-none' : 'bg-slate-800/80 text-slate-200 border border-slate-700 rounded-bl-none'}`}>{msg.text}</div>
                        </div>
                    ))}
                    {isChatThinking && <div className="flex items-center gap-2 text-[10px] text-cyan-500/50 font-black uppercase p-2 animate-pulse"><RefreshCcw size={10} className="animate-spin"/> Agent is processing...</div>}
                </div>
                <div className="mt-3 bg-slate-950 border border-slate-800 rounded-2xl flex items-center p-1.5 gap-2 shadow-2xl focus-within:border-cyan-500/50 transition-all">
                    <input type="text" className="bg-transparent text-xs text-white flex-1 outline-none px-4 py-2 placeholder:text-slate-700" placeholder="Ask intelligence consultant..." value={chatInput} onChange={(e) => setChatInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleChatSubmit()} />
                    <button onClick={handleChatSubmit} className="bg-cyan-600 text-white p-2.5 rounded-xl hover:bg-cyan-500 transition-all active:scale-95 shadow-lg"><Send size={16}/></button>
                </div>
            </div>
        )}
      </div>

      <div className="p-4 bg-slate-900 border-t border-slate-800 shrink-0">
          <div className="flex gap-3 mb-4">
              <button onClick={onExport} className="flex-1 bg-slate-800 text-[10px] font-black py-3 rounded-xl flex items-center justify-center gap-2 border border-slate-700 uppercase hover:bg-slate-700 transition-all shadow-lg text-slate-300"><FileJson size={14}/>{String(t.save)}</button>
              <label className="flex-1 bg-slate-800 text-[10px] font-black py-3 rounded-xl flex items-center justify-center gap-2 border border-slate-700 cursor-pointer uppercase hover:bg-slate-700 transition-all shadow-lg text-slate-300"><Upload size={14}/>{String(t.load)}<input type="file" className="hidden" accept=".json" onChange={onImport} /></label>
          </div>
          <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${saveStatus === 'SAVING' ? 'bg-yellow-400 animate-pulse' : saveStatus === 'ERROR' ? 'bg-red-500' : 'bg-emerald-500'}`}></div>
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-tighter">
                      {saveStatus === 'SAVING' ? String(t.saving) : saveStatus === 'ERROR' ? 'Write Fail' : String(t.saved)}
                  </span>
              </div>
              <span className="text-[9px] font-mono text-slate-700 font-black">V1.3.4-HENGAW-MOD</span>
          </div>
      </div>
    </div>
  );
};

export default Sidebar;