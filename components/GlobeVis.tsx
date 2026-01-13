
import React, { useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { IntelEvent, EventCategory, AppLanguage } from '../types';
import { Users, ShieldAlert, Activity, ExternalLink, Eye, Skull } from 'lucide-react';

interface GlobeVisProps {
  events: IntelEvent[];
  selectedEventId?: string;
  onEventClick: (event: IntelEvent) => void;
  language: AppLanguage;
}

const getCategoryColor = (category: EventCategory): string => {
  switch (category) {
    case EventCategory.MILITARY: return '#ef4444'; 
    case EventCategory.KINETIC: return '#f97316'; 
    case EventCategory.CIVIL_UNREST: return '#eab308'; 
    case EventCategory.POLITICAL: return '#a855f7'; 
    case EventCategory.STRIKES: return '#fbbf24'; 
    case EventCategory.CYBER: return '#10b981'; 
    case EventCategory.HUMANITARIAN: return '#22c55e'; 
    case EventCategory.INFRASTRUCTURE: return '#3b82f6'; 
    default: return '#94a3b8'; 
  }
};

// Calculate heat intensity based on casualties
const getHeatColor = (event: IntelEvent): string => {
  const dead = event.casualties?.dead || 0;
  const injured = (event.casualties?.injured || 0) + (event.securityCasualties?.injured || 0);
  const detained = event.casualties?.detained || 0;
  const deadSec = event.securityCasualties?.dead || 0;
  
  const score = (dead * 10) + (deadSec * 10) + (injured * 2) + (detained * 1);
  
  if (score > 50) return '#ff0000'; // Critical Red
  if (score > 20) return '#ef4444'; // High Intensity
  if (score > 5) return '#f97316';  // Medium Intensity
  return '#06b6d4'; // Low/Stable Cyan
};

const formatCount = (n: number) => {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
  return n.toString();
};

const createHeatMarker = (event: IntelEvent, isSelected: boolean) => {
  const heatColor = getHeatColor(event);
  const protestors = event.protestorCount || 0;
  
  // Logarithmic scale for the aura (50px to 250px base)
  const auraSize = protestors > 0 ? Math.max(30, Math.log10(protestors) * 25) : 20;
  const coreSize = isSelected ? 24 : 14;
  
  const pulseClass = (event.casualties?.dead || 0) > 0 ? 'animate-pulse' : '';

  return new L.DivIcon({
    className: 'heatmap-marker',
    html: `
      <div style="position: relative; width: ${auraSize}px; height: ${auraSize}px; display: flex; justify-content: center; align-items: center; transform: translate(-50%, -50%);">
        <!-- Heat Aura -->
        <div style="
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, ${heatColor}60 0%, ${heatColor}00 75%);
          border-radius: 50%;
          filter: blur(4px);
          opacity: ${isSelected ? 0.9 : 0.6};
          transition: all 0.5s ease;
        "></div>
        
        <!-- Interactive Core -->
        <div class="${pulseClass}" style="
          width: ${coreSize}px;
          height: ${coreSize}px;
          background-color: ${heatColor};
          border: 2px solid white;
          border-radius: 50%;
          box-shadow: 0 0 15px ${heatColor};
          z-index: 10;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          ${isSelected ? 'transform: scale(1.3); border-width: 3px;' : ''}
        "></div>
        
        ${protestors > 1000 ? `
          <div style="
            position: absolute;
            bottom: -15px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 8px;
            font-weight: 900;
            color: white;
            text-shadow: 0 1px 3px black;
            pointer-events: none;
            white-space: nowrap;
          ">${formatCount(protestors)}</div>
        ` : ''}
      </div>
    `,
    iconSize: [auraSize, auraSize],
    iconAnchor: [auraSize / 2, auraSize / 2]
  });
};

const translations = {
    en: {
        eventTypes: "HEAT INTENSITY LEGEND",
        reliability: "Confidence", protestors: "Crowd Scale",
        dead: "Fatal", injured: "Wound", detained: "Detain",
        cats: {
            [EventCategory.MILITARY]: "Military", [EventCategory.KINETIC]: "Kinetic", [EventCategory.POLITICAL]: "Political", [EventCategory.CYBER]: "Cyber",
            [EventCategory.STRIKES]: "Strikes", [EventCategory.CIVIL_UNREST]: "Unrest", [EventCategory.HUMANITARIAN]: "Humanitarian",
            [EventCategory.INFRASTRUCTURE]: "Infrastructure", [EventCategory.OTHER]: "Other"
        },
        liveAnalytics: "THEATER HEATMAP STATUS",
        totalParticipants: "Active Mobilization", civilians: "CIVILIANS / PROTESTORS", forces: "SECURITY FORCES",
        viewSource: "View Intel Source", visionVerified: "AI Vision Verified",
        lowHeat: "Low Conflict", highHeat: "High Kinetic Heat"
    },
    fa: {
        eventTypes: "راهنمای شدت درگیری",
        reliability: "اطمینان", protestors: "مقیاس جمعیت",
        dead: "کشته", injured: "مجروح", detained: "بازداشتی",
        cats: {
            [EventCategory.MILITARY]: "نظامی", [EventCategory.KINETIC]: "درگیری میدانی", [EventCategory.POLITICAL]: "سیاسی", [EventCategory.CYBER]: "سایبری",
            [EventCategory.STRIKES]: "اعتصابات", [EventCategory.CIVIL_UNREST]: "ناآرامی", [EventCategory.HUMANITARIAN]: "بشردوستانه",
            [EventCategory.INFRASTRUCTURE]: "زیرساخت", [EventCategory.OTHER]: "سایر"
        },
        liveAnalytics: "داشبورد نقشه حرارتی",
        totalParticipants: "مجموع مشارکت فعال", civilians: "شهروندان / معترضان", forces: "نیروهای امنیتی",
        viewSource: "مشاهده منبع خبر", visionVerified: "تایید شده توسط بینایی ماشین",
        lowHeat: "درگیری پایین", highHeat: "شدت درگیری بالا"
    },
};

const MapController: React.FC<{ selectedEvent?: IntelEvent }> = ({ selectedEvent }) => {
  const map = useMap();
  useEffect(() => { if (selectedEvent) map.flyTo([selectedEvent.lat, selectedEvent.lng], 13, { animate: true, duration: 1.5 }); }, [selectedEvent, map]);
  return null;
};

const GlobeVis: React.FC<GlobeVisProps> = ({ events, selectedEventId, onEventClick, language }) => {
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRtl = language === 'ar' || language === 'fa';
  
  // Updated safety check: Ensure event 'e' is not null before checking coordinates
  const safeEvents = useMemo(() => events.filter(e => e && typeof e.lat === 'number' && typeof e.lng === 'number' && !isNaN(e.lat) && !isNaN(e.lng) && e.lat !== 0 && e.lng !== 0), [events]);
  const selectedEvent = useMemo(() => safeEvents.find(e => e.id === selectedEventId), [selectedEventId, safeEvents]);

  const liveStats = useMemo(() => {
      let totalProtestors = 0, civDead = 0, civInjured = 0, civDetained = 0, secDead = 0, secInjured = 0;
      events.forEach(e => {
          if (!e) return;
          totalProtestors += (e.protestorCount || 0);
          civDead += (e.casualties?.dead || 0); civInjured += (e.casualties?.injured || 0); civDetained += (e.casualties?.detained || 0);
          secDead += (e.securityCasualties?.dead || 0); secInjured += (e.securityCasualties?.injured || 0);
      });
      return { totalProtestors, civDead, civInjured, civDetained, secDead, secInjured };
  }, [events]);

  return (
    <div className="relative w-full h-full bg-slate-950 z-0">
      <MapContainer center={[32.4279, 53.6880]} zoom={5} style={{ height: '100%', width: '100%', background: '#020617' }} zoomControl={false} attributionControl={false}>
        <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
        <MapController selectedEvent={selectedEvent} />
        {safeEvents.map(event => {
            const isSelected = selectedEventId === event.id;
            const categoryColor = getCategoryColor(event.category);
            let finalSourceUrl = event.sourceUrl;
            if (event.sourceId && event.sourceUrl && event.sourceType === 'Telegram') {
                const base = event.sourceUrl.replace('/s/', '/').split('?')[0];
                finalSourceUrl = `${base}/${event.sourceId}`;
            }

            return (
                <Marker key={event.id} position={[event.lat, event.lng]} icon={createHeatMarker(event, isSelected)} zIndexOffset={isSelected ? 1000 : 0} eventHandlers={{ click: () => onEventClick(event) }}>
                    {isSelected && (
                        <Popup offset={[0, -5]} closeButton={false}>
                             <div className={`w-80 font-sans p-1 ${isRtl ? 'text-right' : 'text-left'}`} dir={isRtl ? 'rtl' : 'ltr'}>
                                <div className="flex justify-between items-start mb-2 border-b border-slate-700/50 pb-2">
                                    <span className="text-[10px] px-2 py-0.5 rounded font-black uppercase" style={{ backgroundColor: `${categoryColor}40`, color: categoryColor }}>{t.cats[event.category]}</span>
                                    <div className="flex flex-col items-end">
                                        <span className="text-[9px] text-slate-400 font-mono">{event.date}</span>
                                        {event.isCrowdResult && <span className="text-[8px] text-cyan-400 font-black flex items-center gap-1"><Eye size={8}/> {t.visionVerified}</span>}
                                    </div>
                                </div>
                                <h3 className="font-black text-sm text-white mb-2 leading-tight">{event.title}</h3>
                                <p className="text-[11px] text-slate-300 mb-3 leading-relaxed">{event.summary}</p>
                                
                                <div className="space-y-2 mb-4">
                                   <div className="bg-slate-900/80 border border-slate-700/50 p-2.5 rounded-xl shadow-inner">
                                       <span className="text-[9px] text-cyan-400 uppercase font-black flex items-center gap-2 mb-2"><Users size={10}/> {t.civilians}</span>
                                       <div className="flex justify-between font-mono text-[11px]">
                                           <div className="flex flex-col"><span className="text-[8px] text-slate-500 uppercase">{t.dead}</span><span className="text-red-400 font-bold">{event.casualties?.dead || 0}</span></div>
                                           <div className="flex flex-col"><span className="text-[8px] text-slate-500 uppercase">{t.injured}</span><span className="text-yellow-400 font-bold">{event.casualties?.injured || 0}</span></div>
                                           <div className="flex flex-col"><span className="text-[8px] text-slate-500 uppercase">{t.detained}</span><span className="text-blue-400 font-bold">{event.casualties?.detained || 0}</span></div>
                                       </div>
                                   </div>
                                   <div className="bg-slate-900/80 border border-slate-700/50 p-2.5 rounded-xl shadow-inner">
                                       <span className="text-[9px] text-red-500 uppercase font-black flex items-center gap-2 mb-2"><ShieldAlert size={10}/> {t.forces}</span>
                                       <div className="flex justify-between font-mono text-[11px]">
                                           <div className="flex flex-col"><span className="text-[8px] text-slate-500 uppercase">{t.dead}</span><span className="text-red-600 font-bold">{event.securityCasualties?.dead || 0}</span></div>
                                           <div className="flex flex-col"><span className="text-[8px] text-slate-500 uppercase">{t.injured}</span><span className="text-yellow-600 font-bold">{event.securityCasualties?.injured || 0}</span></div>
                                           <div className="w-12"></div>
                                       </div>
                                   </div>
                                </div>

                                {finalSourceUrl && (
                                  <a href={finalSourceUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-[10px] font-black text-cyan-400 uppercase rounded-xl border border-slate-600 transition-all active:scale-[0.98] shadow-lg">
                                      <ExternalLink size={12}/> {t.viewSource}
                                  </a>
                                )}
                             </div>
                        </Popup>
                    )}
                </Marker>
            );
        })}
      </MapContainer>

      {/* DASHBOARD OVERLAY */}
      <div className="absolute top-4 left-4 w-96 bg-slate-950/85 backdrop-blur-3xl border border-slate-800/80 rounded-3xl shadow-2xl z-[1000] pointer-events-none" dir={isRtl ? 'rtl' : 'ltr'}>
          <div className="p-6 space-y-6">
             <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                 <div className="flex items-center gap-3">
                     <div className="bg-cyan-500/10 p-2 rounded-xl border border-cyan-500/20">
                         <Activity size={20} className="text-cyan-400 animate-pulse"/>
                     </div>
                     <span className="text-xs font-black text-white uppercase tracking-[0.2em]">{t.liveAnalytics}</span>
                 </div>
                 <div className="flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                     <span className="text-[10px] font-black text-emerald-400 uppercase">Live Sensor Map</span>
                 </div>
             </div>
             
             <div className="space-y-4">
                <div className="bg-slate-900/40 p-4 rounded-2xl border border-slate-800/50 shadow-inner group">
                    <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] text-slate-500 uppercase font-black tracking-tight">{t.totalParticipants}</span>
                        <span className="text-3xl font-mono font-black text-cyan-400">{liveStats.totalProtestors.toLocaleString()}</span>
                    </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3 bg-slate-900/30 p-4 rounded-2xl border border-slate-800/40">
                        <span className="text-[10px] text-slate-500 uppercase font-black flex items-center gap-2"><Users size={12} className="text-cyan-400"/> {t.civilians}</span>
                        <div className="grid grid-cols-3 gap-1 text-center">
                            <div className="text-center"><span className="block text-[8px] text-red-500 font-black mb-1">K</span><span className="text-xs font-black text-red-400">{liveStats.civDead}</span></div>
                            <div className="text-center"><span className="block text-[8px] text-yellow-500 font-black mb-1">W</span><span className="text-xs font-black text-yellow-400">{liveStats.civInjured}</span></div>
                            <div className="text-center"><span className="block text-[8px] text-blue-500 font-black mb-1">D</span><span className="text-xs font-black text-blue-400">{liveStats.civDetained}</span></div>
                        </div>
                    </div>
                    <div className="space-y-3 bg-slate-900/30 p-4 rounded-2xl border border-slate-800/40">
                        <span className="text-[10px] text-slate-500 uppercase font-black flex items-center gap-2"><ShieldAlert size={12} className="text-red-500"/> {t.forces}</span>
                        <div className="grid grid-cols-2 gap-2 text-center">
                            <div className="text-center"><span className="block text-[8px] text-slate-400 font-black mb-1">K</span><span className="text-xs font-black text-slate-100">{liveStats.secDead}</span></div>
                            <div className="text-center"><span className="block text-[8px] text-slate-400 font-black mb-1">W</span><span className="text-xs font-black text-slate-100">{liveStats.secInjured}</span></div>
                        </div>
                    </div>
                </div>
             </div>
          </div>
      </div>

      {/* HEATMAP LEGEND */}
      <div className="absolute bottom-4 left-4 p-5 bg-slate-950/85 backdrop-blur-md border border-slate-800/80 rounded-3xl shadow-2xl z-[1000] pointer-events-auto">
        <h3 className="font-black mb-4 text-slate-400 font-sans uppercase tracking-widest text-[9px] border-b border-slate-800 pb-2">{t.eventTypes}</h3>
        <div className="space-y-4">
            <div className="space-y-2">
                <span className="text-[8px] font-black text-slate-500 uppercase block">{t.protestors} (Aura Size)</span>
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 opacity-30"></div>
                    <div className="w-4 h-4 rounded-full bg-cyan-400 opacity-60"></div>
                    <div className="w-8 h-8 rounded-full bg-cyan-400 opacity-90 blur-[2px]"></div>
                    <span className="text-[9px] text-slate-300 font-bold font-mono">1k → 100k → 1M+</span>
                </div>
            </div>
            <div className="space-y-2">
                <span className="text-[8px] font-black text-slate-500 uppercase block">Conflict Heat (Color)</span>
                <div className="h-2 w-full bg-gradient-to-r from-cyan-500 via-orange-500 to-red-600 rounded-full"></div>
                <div className="flex justify-between text-[8px] font-black text-slate-400 uppercase">
                    <span>{t.lowHeat}</span>
                    <span>{t.highHeat}</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default GlobeVis;
