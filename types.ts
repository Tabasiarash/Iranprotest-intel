
export enum EventCategory {
  MILITARY = 'Military',
  KINETIC = 'Kinetic Clashes',
  POLITICAL = 'Political',
  CYBER = 'Cyber',
  STRIKES = 'Strikes/Economic',
  CIVIL_UNREST = 'Civil Unrest',
  HUMANITARIAN = 'Humanitarian',
  INFRASTRUCTURE = 'Infrastructure',
  OTHER = 'Other'
}

export enum SourceType {
  TELEGRAM = 'Telegram',
  INSTAGRAM = 'Instagram',
  TWITTER = 'Twitter',
  THREADS = 'Threads',
  WEB = 'Web',
  MANUAL = 'Manual'
}

export type AppLanguage = 'en' | 'de' | 'fa' | 'ar';

export interface Casualties {
  dead: number;
  injured: number;
  detained: number;
}

export interface SecurityCasualties {
  dead: number;
  injured: number;
}

export interface IndividualCasualty {
  id: string;
  name: string;
  status: 'Killed' | 'Injured' | 'Detained';
  date: string;
  means?: string; 
  description?: string;
  side: 'Civilian' | 'Security';
  age?: string;
  location?: string;
  imageUrl?: string;
  sourceUrl?: string;
}

export interface IntelEvent {
  id: string;
  title: string;
  summary: string;
  date: string; 
  locationName: string;
  lat: number;
  lng: number;
  category: EventCategory;
  sourceType: SourceType;
  sourceName?: string;
  sourceUrl?: string; 
  sourceId?: string; 
  groundingUrls?: string[]; 
  reliabilityScore?: number; 
  reliabilityReason?: string;
  protestorCount?: number; 
  casualties?: Casualties; 
  securityCasualties?: SecurityCasualties; 
  individualCasualties?: IndividualCasualty[]; 
  isCrowdResult?: boolean;
  visualEvidence?: string;
}

export interface CrowdAnalysisResult {
  minEstimate: number;
  maxEstimate: number;
  confidence: number;
  crowdType: string;
  description: string;
  hazards?: string;
  location?: string;
  lat?: number;
  lng?: number;
  date?: string;
}

export interface ProcessingStatus {
  isProcessing: boolean;
  message: string;
  error?: string;
}

export interface SyncConfig {
  enabled: boolean;
  intervalMinutes: number;
  monitoredChannels: { url: string; type: SourceType }[]; 
  lastSyncTimestamp?: number;
  targetRegion?: string;
}

export interface ChannelMetadata {
  lastCursor?: string;
  totalEvents: number;
  lastUpdate: string;
  type: SourceType;
}

export type ChannelMetadataMap = Record<string, ChannelMetadata>;

export interface ScannedPost {
  id: string;
  url: string;
  text: string;
  date: string;
  mediaUrl?: string;
  mediaType: 'image' | 'video';
}