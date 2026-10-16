export * from './exhibit';
export * from './atlas';

export interface CurrentMarkerConvention {
  id: string;
  dateLabel: string;
  dateValue: number;
  timelinePosition: number;
  action: string;
  note: string;
}

export interface DisplayConventions {
  dateLabels: string;
  timelinePositions: string;
  currentMarker: CurrentMarkerConvention;
  collectionModel: string;
  deepTime: string;
  bceCe: string;
  tourismFlightTimes: string;
  historicalTelemetry: string;
  wikipediaImageApi: string;
  imageFallbackPolicy: string;
  imageUsage: string;
  ambientAudio: string;
  anthropocene: string;
  [key: string]: unknown;
}

export interface MuseumDataset {
  schemaVersion: string;
  appTitle: string;
  displayConventions: DisplayConventions;
  milestones: import('./exhibit').ExhibitMilestone[];
}

export interface SourceReference {
  id: string;
  title: string;
  organization: string;
  url?: string;
  note?: string;
}
