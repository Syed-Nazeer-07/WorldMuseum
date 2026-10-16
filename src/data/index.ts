import { timelineMilestones } from './milestones';
import { atlasGuides } from './atlasNodes';
import { displayConventions } from './displayConventions';
import { EraCategory, ExhibitMilestone, MuseumDataset } from '@/types';

export * from './milestones';
export * from './atlasNodes';
export * from './displayConventions';
export * from './sources';

export const allExhibits: ExhibitMilestone[] = [...timelineMilestones, ...atlasGuides];

export const APPLE_LIGHT_BASE = {
  text: '#1D1D1F',
  muted: '#86868B',
  border: '#E5E5EA',
  dockBg: 'rgba(255, 255, 255, 0.88)',
  pillActiveBg: '#0071E3',
  pillActiveText: '#FFFFFF',
  ctaBg: '#0071E3',
  ctaText: '#FFFFFF'
};

export const ERA_CATEGORIES: EraCategory[] = [
  {
    id: 'Primordial',
    label: 'Primordial',
    range: '4.54B – 635M BCE',
    theme: {
      ...APPLE_LIGHT_BASE,
      bg: '#F6F4F1',
      bgClass: 'bg-[#F6F4F1]',
      eyebrowBg: '#D97706',
      eyebrowText: '#FFFFFF',
      accent: '#0071E3',
      amber: '#D97706',
      glow: 'rgba(217, 119, 6, 0.14)'
    }
  },
  {
    id: 'Paleozoic',
    label: 'Paleozoic',
    range: '541M – 252M BCE',
    theme: {
      ...APPLE_LIGHT_BASE,
      bg: '#F2F6F4',
      bgClass: 'bg-[#F2F6F4]',
      eyebrowBg: '#0F766E',
      eyebrowText: '#FFFFFF',
      accent: '#0071E3',
      amber: '#0F766E',
      glow: 'rgba(15, 118, 110, 0.14)'
    }
  },
  {
    id: 'Mesozoic',
    label: 'Mesozoic',
    range: '230M – 66M BCE',
    theme: {
      ...APPLE_LIGHT_BASE,
      bg: '#F7F5F0',
      bgClass: 'bg-[#F7F5F0]',
      eyebrowBg: '#D97706',
      eyebrowText: '#FFFFFF',
      accent: '#0071E3',
      amber: '#D97706',
      glow: 'rgba(217, 119, 6, 0.14)'
    }
  },
  {
    id: 'Cenozoic',
    label: 'Cenozoic',
    range: '56M – 1.9M BCE',
    theme: {
      ...APPLE_LIGHT_BASE,
      bg: '#F1F5F9',
      bgClass: 'bg-[#F1F5F9]',
      eyebrowBg: '#0284C7',
      eyebrowText: '#FFFFFF',
      accent: '#0071E3',
      amber: '#0284C7',
      glow: 'rgba(2, 132, 199, 0.14)'
    }
  },
  {
    id: 'Humanity',
    label: 'Humanity',
    range: '300K BCE – 2021 CE',
    theme: {
      ...APPLE_LIGHT_BASE,
      bg: '#F9F8F6',
      bgClass: 'bg-[#F9F8F6]',
      eyebrowBg: '#B45309',
      eyebrowText: '#FFFFFF',
      accent: '#0071E3',
      amber: '#B45309',
      glow: 'rgba(180, 83, 9, 0.13)'
    }
  },
  {
    id: '2026 World Explorer',
    label: '2026 World Explorer',
    range: '2026 AD · Global Atlas',
    theme: {
      ...APPLE_LIGHT_BASE,
      bg: '#FCFCFE',
      bgClass: 'bg-[#FCFCFE]',
      eyebrowBg: '#0071E3',
      eyebrowText: '#FFFFFF',
      accent: '#0071E3',
      amber: '#0071E3',
      glow: 'rgba(0, 113, 227, 0.18)'
    }
  }
];

export const worldMuseumData: MuseumDataset = {
  schemaVersion: '2.0.0',
  appTitle: 'World Museum',
  displayConventions,
  milestones: allExhibits
};

// Backward-compatibility alias
export const terraMuseumData = worldMuseumData;
