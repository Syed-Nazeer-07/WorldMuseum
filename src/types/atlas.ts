import { ExhibitMilestone, SubExhibit, SubExhibitSpecs } from './exhibit';

export interface AtlasSpecs extends SubExhibitSpecs {
  cuisine: string;
  landmark: string;
  flightSeason: string;
  culturalHighlight: string;
}

export interface AtlasDestination extends SubExhibit {
  country?: string;
  specs?: AtlasSpecs;
  itinerary?: string[];
  curatorNote?: string;
  palette?: string[];
  regionLabel?: string;
}

export interface AtlasGuideNode extends ExhibitMilestone {
  collectionType: 'world-atlas';
  isTimelineEvent: false;
  atlasPosition: number;
}
