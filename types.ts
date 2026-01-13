
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

export interface CVInsight {
  timestamp: string;
  type: 'object' | 'ocr' | 'scene' | 'temporal';
  insight: string;
  confidence: number;
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
  validationScore?: number;
}

export interface IntelEvent {
  id: string;
  title: string;
  summary: string;
  date: string; 
  locationName: string;
  lat: number;
  lng: number;
  category: EventCategory | string;
  sourceType: SourceType | string;
  sourceName?: string;
  sourceUrl?: string; 
  sourceId?: string; 
  groundingUrls?: string[]; 
  reliabilityScore?: number; 
  reliabilityReason?: string;
  protestorCount?: number | null; 
  casualties?: Casualties; 
  securityCasualties?: SecurityCasualties; 
  individualCasualties?: IndividualCasualty[]; 
  isCrowdResult?: boolean;
  visualEvidence?: string;
  approvedSourceUrls?: string[];
  validationScore: number;
  cvInsights?: CVInsight[];
  proofCount?: number;
  visualStats?: {
    population?: number;
    casualties?: Casualties;
    evidenceDescription?: string;
  };
  officialStats?: {
    population?: number;
    casualties?: Casualties;
    securityCasualties?: SecurityCasualties;
  };
}

export interface ProcessingStatus {
  isProcessing: boolean;
  message: string;
  currentChannel?: string;
  progressPercent?: number;
  error?: string;
}

export interface SyncConfig {
  enabled: boolean;
  intervalMinutes: number;
  monitoredChannels: { url: string; type: SourceType }[]; 
  lastSyncTimestamp?: number;
  targetRegion?: string;
  maxDepth?: number; // User defined depth of scan (number of pages)
}

export interface ChannelMetadata {
  lastCursor?: string;
  totalEvents: number;
  lastUpdate: string;
  lastCvSync: string;
  processedMediaIds: string[];
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
