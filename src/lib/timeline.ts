import React from 'react';
import { ExhibitMilestone, SlidePhase, SpecItem, SubExhibit, TiltState } from '@/types';

export function getCenterSlideStyle(slidePhase: SlidePhase, tilt: TiltState): React.CSSProperties {
  if (slidePhase === 'enter-from-right') {
    return {
      transform: 'translateX(72px) scale(0.75)',
      opacity: 0.35,
      transition: 'none'
    };
  }
  if (slidePhase === 'enter-from-left') {
    return {
      transform: 'translateX(-72px) scale(0.75)',
      opacity: 0.35,
      transition: 'none'
    };
  }
  return {
    transform: `translateX(0px) scale(1.0) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
    opacity: 1,
    transition: 'all 500ms cubic-bezier(0.25, 1, 0.5, 1)'
  };
}

export function getSideLeftSlideStyle(slidePhase: SlidePhase): React.CSSProperties {
  if (slidePhase === 'enter-from-right') {
    return {
      transform: 'translateX(40px) scale(0.85)',
      opacity: 0.6,
      transition: 'none'
    };
  }
  if (slidePhase === 'enter-from-left') {
    return {
      transform: 'translateX(-40px) scale(0.65)',
      opacity: 0.15,
      transition: 'none'
    };
  }
  return {
    transform: 'translateX(0px) scale(0.75)',
    opacity: 0.42,
    transition: 'all 500ms cubic-bezier(0.25, 1, 0.5, 1)'
  };
}

export function getSideRightSlideStyle(slidePhase: SlidePhase): React.CSSProperties {
  if (slidePhase === 'enter-from-left') {
    return {
      transform: 'translateX(-40px) scale(0.85)',
      opacity: 0.6,
      transition: 'none'
    };
  }
  if (slidePhase === 'enter-from-right') {
    return {
      transform: 'translateX(40px) scale(0.65)',
      opacity: 0.15,
      transition: 'none'
    };
  }
  return {
    transform: 'translateX(0px) scale(0.75)',
    opacity: 0.42,
    transition: 'all 500ms cubic-bezier(0.25, 1, 0.5, 1)'
  };
}

export function getActiveSpecs(
  currentMilestone: ExhibitMilestone,
  currentVariant: SubExhibit,
  isAtlas: boolean
): SpecItem[] {
  if (isAtlas) {
    const sp = currentVariant.specs || {};
    return [
      { label: 'SIGNATURE CUISINE', value: sp.cuisine || 'Regional Gastronomy' },
      { label: 'ICONIC LANDMARK', value: sp.landmark || currentVariant.label },
      { label: 'AVG FLIGHT / BEST SEASON', value: sp.flightSeason || 'Spring & Autumn' },
      { label: 'CULTURAL HIGHLIGHT', value: sp.culturalHighlight || 'Living Heritage' }
    ];
  }

  const tel = currentMilestone.telemetry || {};
  return [
    {
      label: 'SURFACE TEMP',
      value: tel.surfaceTemp?.shortValue || tel.surfaceTemp?.value || 'Model-dependent'
    },
    {
      label: 'ATMOSPHERE O₂',
      value: tel.atmosphereO2?.shortValue || tel.atmosphereO2?.value || 'Variable'
    },
    {
      label: 'DAY LENGTH',
      value: tel.dayLength?.shortValue || tel.dayLength?.value || '~24 Hours'
    },
    {
      label: 'DOMINANT SYSTEM / LIFE',
      value: tel.dominantSystem?.shortValue || tel.dominantSystem?.value || 'Biosphere'
    }
  ];
}

export function formatSequenceBadge(
  currentMilestone: ExhibitMilestone,
  timelineMilestones: ExhibitMilestone[],
  atlasGuides: ExhibitMilestone[],
  isAtlas: boolean
): string {
  if (!isAtlas) {
    const tlIdx = timelineMilestones.findIndex((m) => m.id === currentMilestone.id);
    return `${(tlIdx >= 0 ? tlIdx : 0) + 1} of ${timelineMilestones.length}`;
  }
  const atIdx = atlasGuides.findIndex((m) => m.id === currentMilestone.id);
  return `Atlas ${(atIdx >= 0 ? atIdx : 0) + 1} of ${atlasGuides.length}`;
}
