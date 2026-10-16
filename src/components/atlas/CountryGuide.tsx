import React from 'react';
import { SubExhibit, ThemeConfig } from '@/types';

export interface CountryGuideProps {
  destination: SubExhibit;
  theme: ThemeConfig;
}

export const CountryGuide: React.FC<CountryGuideProps> = ({ destination, theme }) => {
  const specs = destination.specs || {};

  return (
    <div
      className="p-4 rounded-xl border bg-white/80 backdrop-blur-md shadow-sm space-y-3"
      style={{ borderColor: theme.border }}
    >
      <div className="flex items-center justify-between">
        <span
          className="font-mono text-[10px] uppercase tracking-widest font-bold"
          style={{ color: theme.accent }}
        >
          {destination.regionLabel || destination.country || 'GLOBAL DESTINATION'}
        </span>
        <span className="font-mono text-xs text-[#86868B]">{destination.label}</span>
      </div>

      <div className="grid grid-cols-2 gap-2 pt-2 border-t" style={{ borderColor: theme.border }}>
        <div>
          <span className="font-mono text-[9px] uppercase tracking-wider text-[#86868B]">
            SIGNATURE CUISINE
          </span>
          <p className="font-mono text-xs font-semibold text-[#1D1D1F]">
            {specs.cuisine || 'Regional Gastronomy'}
          </p>
        </div>
        <div>
          <span className="font-mono text-[9px] uppercase tracking-wider text-[#86868B]">
            ICONIC LANDMARK
          </span>
          <p className="font-mono text-xs font-semibold text-[#1D1D1F]">
            {specs.landmark || destination.label}
          </p>
        </div>
        <div>
          <span className="font-mono text-[9px] uppercase tracking-wider text-[#86868B]">
            AVG FLIGHT / BEST SEASON
          </span>
          <p className="font-mono text-xs font-semibold text-[#1D1D1F]">
            {specs.flightSeason || 'Spring & Autumn'}
          </p>
        </div>
        <div>
          <span className="font-mono text-[9px] uppercase tracking-wider text-[#86868B]">
            CULTURAL HIGHLIGHT
          </span>
          <p className="font-mono text-xs font-semibold text-[#1D1D1F]">
            {specs.culturalHighlight || 'Living Heritage'}
          </p>
        </div>
      </div>
    </div>
  );
};
