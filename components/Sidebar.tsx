import React, { useState, useMemo, useRef, useEffect } from 'react';
import { IntelEvent, SourceType, ProcessingStatus, AppLanguage, SyncConfig, ChannelMetadataMap, IndividualCasualty } from '../types';
import { IntelligenceInsights } from '../services/geminiService';
import { 
  Search, Globe, RefreshCcw, Skull, ChevronRight, ChevronLeft, 
  Database, MapPin, User, Archive, Cpu, XOctagon, UserCheck, Calendar,
  MessageSquare, FileText, Sparkles, Send, BrainCircuit, Activity
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
  startDate?: string;
  setStartDate?: (s: string) => void;
  endDate?: string;
  setEndDate?: (s: string) => void;
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
  intelligenceInsights?: IntelligenceInsights;
  isGeneratingReport: boolean;
  onRemoveSource: (url: string) => void;
  unreadCount: number;
  setUnreadCount: (n: number) => void;
  saveStatus?: 'IDLE' | 'SAVING' | 'ERROR';
  onManualSave?: () => void;
  onDeduplicate?: () => void;
  onCasualtyScan?: () => void;
  chatHistory: {role: 'user' | 'model', text: string}[];
  onChat: (msg: string) => void;
  isChatting: boolean;
}

const safeSort = (a: any, b: any) => {
    const timeA = a.date ? new Date(a.date).getTime() : 0;
    const timeB = b.date ? new Date(b.date).getTime() : 0;
    return (isNaN(timeB) ? 0 : timeB) - (isNaN(timeA) ? 0 : timeA);
};

const translations = {
  en: {
    archive: "Archive", sources: "Sources", dossier: "Victims", analysis: "SitRep", chat: "Chatbot",
    searchPlaceholder: "Search events...", startScan: "Execute Intel Sync",
    stopScan: "ABORT SCAN", dossierTitle: "Victim Dossier",
    identifiedOnly: "Identified Only", depthLabel: "Scan Depth (Pages)", regionLabel: "Target Region",
    generateReport: "Generate SitRep", aiLabel: "AI Analysis", cvLabel: "Forensic Vision",
    dateStart: "From", dateEnd: "To"
  },
  fa: {
    archive: "آرشیو", sources: "منابع", dossier: "قربانیان", analysis: "گزارش", chat: "گفتگو",
    searchPlaceholder: "جستجوی رویدادها...", startScan: "شروع همگام‌سازی",
    stopScan: "توقف اسکن", dossierTitle: "دفتر ثبت قربانیان",
    identifiedOnly: "فقط شناسایی شده", depthLabel: "عمق اسکن (صفحه)", regionLabel: "منطقه هدف",
    generateReport: "تولید گزارش تحلیلی", aiLabel: "تحلیل هوش مصنوعی", cvLabel: "بینایی ماشین",
    dateStart: "از تاریخ", dateEnd: "تا تاریخ"
  }
};

const Sidebar: React.FC<SidebarProps> = ({ 
  events, allEventsRaw, onStopScan, status, onSelectEvent, selectedEventId, 
  searchTerm, setSearchTerm, startDate, setStartDate, endDate, setEndDate,
  language, setLanguage, syncConfig, onUpdateSyncConfig,
  channelMetadata, onManualSave, onGenerateReport, reportContent, 
  intelligenceInsights, isGeneratingReport, chatHistory, onChat, isChatting
}) => {
  const [activeTab, setActiveTab] = useState<'events' | 'sources' | 'dossier' | 'analysis' | 'chat'>('events');
  const [isExpanded, setIsExpanded] = useState(false);
  const [identifiedOnly, setIdentifiedOnly] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const t = (translations as any)[language] || translations.en;
  const isRtl = language === 'fa' || language === 'ar';

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  const victimList = useMemo(() => {
    const all: IndividualCasualty[] = [];
    allEventsRaw.forEach(e => { 
        if (Array.isArray(e.individualCasualties)) {
            all.push(...e.individualCasualties); 
        }
    });
    
    const uniqueMap = new Map<string, IndividualCasualty>();
    all.forEach(c => {
        if(!c || !c.name) return;
        const key = c.name.trim().toLowerCase();
        if (!uniqueMap.has(key)) {
            uniqueMap.set(key, { ...c, validationScore: 1 });
        } else {
            const existing = uniqueMap.get(key)!;
            existing.validationScore = (existing.validationScore || 1) + 1;
        }
    });

    let results = Array.from(uniqueMap.values());
    if (identifiedOnly) {
        results = results.filter(v => v.name && !v.name.toLowerCase().includes('unknown') && v.name.trim().length > 2);
    }
    return results.sort(safeSort);
  }, [allEventsRaw, identifiedOnly]);

  return (
    <div className={`${isExpanded ? 'w-[550px]' : 'w-80'} h-full bg-slate-900 border-r border-slate-700 flex flex-col font-sans z-10 transition-all duration-300 relative shadow-2xl`} dir={isRtl ? 'rtl' : 'ltr'}>
      <button onClick={() => setIsExpanded(!isExpanded)} className="absolute -right-3 top-1/2 -translate-y-1/2 bg-cyan-600 p-1.5 rounded-full text-white z-20 hover:bg-cyan-500 shadow-xl border border-slate-800">
        {isExpanded ? <ChevronLeft size={16}/> : <ChevronRight size={16}/>}
      </button>

      <div className="p-4 bg-slate-900 border-b border-slate-800">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <div className="bg-red-600 p-2 rounded-lg"><Activity className="text-white" size={18} /></div>
            <h1 className="font-black text-lg text-white tracking-tighter uppercase italic">Intel<span className="text-red-500">Scan</span></h1>
          </div>
          <select value={language} onChange={(e) => setLanguage(e.target.value as AppLanguage)} className="bg-slate-800 border border-slate-700 text-[10px] text-slate-300 rounded px-2 py-1 outline-none font-bold">
            <option value="en">EN</option><option value="fa">FA</option>
          </select>
        </div>

        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 gap-1 shadow-inner overflow-x-auto no-scrollbar">
          {['events', 'dossier', 'analysis', 'chat', 'sources'].map((tab: any) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`flex-1 min-w-[60px] py-2 text-[9px] font-black rounded-lg transition-all uppercase ${activeTab === tab ? 'bg-slate-800 text-red-400 shadow-lg' : 'text-slate-600 hover:text-slate-400'}`}>
              {t[tab]}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-hidden flex flex-col">
        {activeTab === 'events' && (
            <div className="h-full flex flex-col p-4 space-y-4">
                <div className="space-y-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
                        <input type="text" placeholder={t.searchPlaceholder} className="w-full bg-slate-800/40 border border-slate-700 rounded-xl py-2.5 pl-9 pr-4 text-xs text-white outline-none focus:border-red-500/50" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1">
                            <label className="text-[8px] font-bold text-slate-500 uppercase">{t.dateStart}</label>
                            <input type="date" className="w-full bg-slate-800/40 border border-slate-700 rounded-lg p-1.5 text-[10px] text-white outline-none" value={startDate} onChange={(e) => setStartDate?.(e.target.value)} />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[8px] font-bold text-slate-500 uppercase">{t.dateEnd}</label>
                            <input type="date" className="w-full bg-slate-800/40 border border-slate-700 rounded-lg p-1.5 text-[10px] text-white outline-none" value={endDate} onChange={(e) => setEndDate?.(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto space-y-3 no-scrollbar pb-4">
                    {events.map(event => (
                        <div key={event.id} onClick={() => onSelectEvent(event)} className={`p-4 rounded-2xl border-l-4 cursor-pointer transition-all ${selectedEventId === event.id ? 'bg-slate-800 border-red-500 shadow-xl scale-[0.98]' : 'bg-slate-900/50 border-slate-800 hover:bg-slate-800/30'}`}>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{event.category}</span>
                                <div className="flex gap-2 items-center">
                                    <span className="bg-red-500/10 text-red-400 text-[8px] px-1.5 py-0.5 rounded border border-red-500/20 font-black tracking-tighter uppercase"><Sparkles size={8} className="inline mr-1"/> {t.aiLabel}</span>
                                    <span className="text-[9px] text-slate-500 font-mono">{event.date}</span>
                                </div>
                            </div>
                            <h4 className="text-xs font-black text-slate-100 leading-tight mb-2">{event.title}</h4>
                            <div className="flex gap-2">
                                {event.casualties?.dead > 0 && <span className="text-[8px] text-red-500 font-bold uppercase">● {event.casualties.dead} DEAD</span>}
                                {event.individualCasualties?.length > 0 && <span className="text-[8px] text-cyan-400 font-bold uppercase">● {event.individualCasualties.length} IDENTIFIED</span>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}

        {activeTab === 'dossier' && (
            <div className="h-full flex flex-col">
                <div className="p-4 border-b border-slate-800 bg-slate-900/50 flex justify-between items-center sticky top-0 z-10 backdrop-blur-md">
                    <h3 className="text-xs font-black text-white uppercase tracking-widest flex items-center gap-2"><Skull size={14} className="text-red-500"/> {t.dossierTitle}</h3>
                    <button onClick={() => setIdentifiedOnly(!identifiedOnly)} className={`text-[9px] font-black px-3 py-1.5 rounded-lg border transition-all ${identifiedOnly ? 'bg-cyan-600 border-cyan-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-400'}`}>
                        <UserCheck size={12} className="inline mr-1"/> {t.identifiedOnly}
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
                    {victimList.map(v => (
                        <div key={v.id} className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-lg group hover:border-red-500/30 transition-all">
                            <div className={`h-1 ${v.status === 'Killed' ? 'bg-red-600' : 'bg-orange-500'}`}></div>
                            <div className="p-3 flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 shrink-0 flex items-center justify-center relative shadow-inner">
                                    {v.imageUrl ? <img src={v.imageUrl} className="w-full h-full object-cover" /> : <User size={20} className="text-slate-800"/>}
                                    <div className="absolute -bottom-1 -right-1 text-[8px] font-black px-1 rounded-md bg-slate-800 text-cyan-400 border border-slate-700">V:{v.validationScore || 1}</div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start">
                                        <h4 className="text-[11px] font-black text-white truncate">{v.name}</h4>
                                        <div className="flex flex-col items-end">
                                          <span className={`text-[7px] px-1.5 py-0.5 rounded font-black uppercase ${v.status === 'Killed' ? 'text-red-500 bg-red-500/10' : 'text-orange-500 bg-orange-500/10'}`}>{v.status}</span>
                                          {v.imageUrl && <span className="text-[6px] text-cyan-400 font-black mt-1 uppercase"><Activity size={6} className="inline mr-0.5"/> {t.cvLabel}</span>}
                                        </div>
                                    </div>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        <div className="text-[8px] text-slate-500 font-bold flex items-center gap-1"><MapPin size={8}/> {v.location || 'Unknown'}</div>
                                        <div className="text-[8px] text-slate-500 font-bold flex items-center gap-1"><Calendar size={8}/> {v.date}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}
        
        {/* analysis, chat, sources content remains same, leveraging safer event list */}
        {activeTab === 'analysis' && (
          <div className="h-full flex flex-col p-4 space-y-4">
            <button onClick={onGenerateReport} disabled={isGeneratingReport} className="w-full py-3 bg-cyan-700 hover:bg-cyan-600 text-white rounded-xl text-[10px] font-black uppercase shadow-lg disabled:opacity-50 flex items-center justify-center gap-2">
              <FileText size={16}/> {isGeneratingReport ? 'Processing...' : t.generateReport}
            </button>
            <div className="flex-1 overflow-y-auto bg-slate-950/50 border border-slate-800 rounded-2xl p-4 text-[11px] text-slate-300 leading-relaxed font-mono custom-scrollbar">
                {reportContent ? (
                  <div className="space-y-4">
                     <div className="flex items-center gap-2 text-red-400 font-black uppercase text-[10px] mb-4">
                        <BrainCircuit size={14}/> {t.aiLabel}
                     </div>
                     <p className="whitespace-pre-wrap">{reportContent}</p>
                     {intelligenceInsights && (
                       <div className="mt-6 pt-6 border-t border-slate-800 space-y-3">
                         <div className="font-black text-cyan-400">HOTSPOTS: {intelligenceInsights.hotspots.join(', ')}</div>
                         <div className="font-black text-red-500">RISK: {intelligenceInsights.riskLevel}</div>
                       </div>
                     )}
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-slate-600 italic">No report generated.</div>
                )}
            </div>
          </div>
        )}

        {activeTab === 'chat' && (
          <div className="h-full flex flex-col">
            <div className="p-4 border-b border-slate-800 bg-slate-900/50 flex items-center gap-2">
               <MessageSquare size={16} className="text-red-400"/>
               <h3 className="text-xs font-black text-white uppercase tracking-widest">Intelligence Assistant</h3>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
               {chatHistory.length === 0 && (
                 <div className="h-full flex flex-col items-center justify-center text-center space-y-3 px-6">
                    <div className="bg-slate-800 p-4 rounded-full text-slate-600"><BrainCircuit size={32}/></div>
                    <p className="text-[10px] text-slate-500 font-black uppercase">Ask questions about current events, victim lists, or regional security trends.</p>
                 </div>
               )}
               {chatHistory.map((msg, i) => (
                 <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-3 rounded-2xl text-[11px] leading-relaxed ${msg.role === 'user' ? 'bg-cyan-600 text-white shadow-xl' : 'bg-slate-800 text-slate-200 border border-slate-700'}`}>
                      {msg.role === 'model' && <div className="text-[7px] font-black text-red-400 mb-1 uppercase tracking-tighter">AI ANALYST</div>}
                      {msg.text}
                    </div>
                 </div>
               ))}
               <div ref={chatEndRef} />
            </div>
            <div className="p-4 border-t border-slate-800 bg-slate-900/80">
              <div className="relative">
                <input 
                  type="text" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-4 pr-12 text-xs text-white outline-none focus:border-cyan-500 shadow-inner"
                  placeholder="Ask intelligence assistant..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => { if(e.key === 'Enter' && chatInput) { onChat(chatInput); setChatInput(''); } }}
                />
                <button onClick={() => { if(chatInput) { onChat(chatInput); setChatInput(''); } }} disabled={isChatting || !chatInput} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-cyan-500 hover:text-cyan-400 disabled:opacity-30">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sources' && (
            <div className="h-full flex flex-col p-4 space-y-6 custom-scrollbar overflow-y-auto">
                <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl space-y-4 shadow-2xl">
                    <div className="space-y-2">
                        <label className="text-[9px] font-black text-slate-500 uppercase flex items-center gap-2"><MapPin size={12}/> {t.regionLabel}</label>
                        <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white outline-none focus:border-red-500/50" value={syncConfig.targetRegion} onChange={(e) => onUpdateSyncConfig({ targetRegion: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[9px] font-black text-slate-500 uppercase flex items-center gap-2"><Database size={12}/> {t.depthLabel}</label>
                        <input type="number" className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white outline-none focus:border-red-500/50" value={syncConfig.maxDepth} onChange={(e) => onUpdateSyncConfig({ maxDepth: parseInt(e.target.value) || 1 })} />
                    </div>
                    <button onClick={onManualSave} disabled={status.isProcessing} className="w-full py-3 bg-gradient-to-r from-red-800 to-red-700 hover:from-red-700 hover:to-red-600 text-white rounded-xl flex items-center justify-center gap-3 text-[10px] font-black uppercase shadow-xl transition-all active:scale-95 disabled:opacity-50">
                        <RefreshCcw size={16} className={status.isProcessing ? 'animate-spin' : ''}/> {t.startScan}
                    </button>
                </div>
                {/* Status indicators */}
                {status.isProcessing && (
                    <div className="bg-slate-950 border border-red-500/30 p-4 rounded-2xl space-y-3 animate-pulse">
                        <div className="flex justify-between items-center">
                            <span className="text-[9px] font-black text-red-400 uppercase tracking-widest flex items-center gap-2"><Cpu size={14}/> OSINT ENGINE ACTIVE</span>
                            <button onClick={onStopScan} className="text-red-500 hover:text-red-400 p-1"><XOctagon size={16}/></button>
                        </div>
                        <p className="text-[10px] text-slate-300 font-mono italic leading-relaxed">{status.message}</p>
                        <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-red-500 animate-progress w-full"></div>
                        </div>
                    </div>
                )}
            </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;