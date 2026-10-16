export interface TelemetryMetric {
  label: string;
  value: string;
  detail: string;
  confidence: string;
  shortValue: string;
}

export interface TelemetryData {
  surfaceTemp?: TelemetryMetric;
  atmosphereO2?: TelemetryMetric;
  dayLength?: TelemetryMetric;
  dominantSystem?: TelemetryMetric;
  [key: string]: TelemetryMetric | undefined;
}

export interface StoryData {
  overview: string[];
  sectionTitle?: string;
  milestones?: string[];
  curatorNote?: string;
}

export interface SubExhibitSpecs {
  cuisine?: string;
  landmark?: string;
  flightSeason?: string;
  culturalHighlight?: string;
  [key: string]: string | undefined;
}

export interface SubExhibit {
  id: string;
  label: string;
  articleTitle: string;
  fallbackType: string;
  caption: string;
  alt: string;
  microStory?: string;
  country?: string;
  specs?: SubExhibitSpecs;
  itinerary?: string[];
  curatorNote?: string;
  palette?: string[];
  regionLabel?: string;
}

export interface ExhibitMilestone {
  sequence: number;
  id: string;
  dateLabel: string;
  dateValue: number;
  dateUnit: string;
  displayCode: string;
  era: string;
  eraFilter: string;
  classification: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  curatorQuote: string;
  quoteAttribution: string;
  palette: string[];
  fallbackType: string;
  visualCue: string;
  specBarMode: string;
  telemetry?: TelemetryData;
  story?: StoryData;
  subExhibits: SubExhibit[];
  confidenceNote?: string;
  subExhibitLabels: string[];
  subExhibitCount: number;
  timelineCoordinate?: number | null;
  timelinePosition?: number | null;
  timelineLabel: string;
  approximateYearsBeforePresent?: number | null;
  temporalMeaning?: string;
  sourceIds?: string[];
  collectionType?: 'timeline' | 'world-atlas' | string;
  isTimelineEvent: boolean;
  rulerShort: string;
  atlasPosition?: number;
}

export interface ThemeConfig {
  text: string;
  muted: string;
  border: string;
  dockBg: string;
  pillActiveBg: string;
  pillActiveText: string;
  ctaBg: string;
  ctaText: string;
  bg: string;
  bgClass: string;
  eyebrowBg: string;
  eyebrowText: string;
  accent: string;
  amber: string;
  glow: string;
}

export interface EraCategory {
  id: string;
  label: string;
  range: string;
  theme: ThemeConfig;
}

export type SlidePhase = 'idle' | 'enter-from-left' | 'enter-from-right';

export interface TiltState {
  x: number;
  y: number;
  glareX: number;
  glareY: number;
}

export interface SpecItem {
  label: string;
  value: string;
}
