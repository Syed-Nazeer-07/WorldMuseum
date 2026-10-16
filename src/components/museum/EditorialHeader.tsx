import React from 'react';
import { ExhibitMilestone, ThemeConfig } from '@/types';

export interface EditorialHeaderProps {
  currentMilestone: ExhibitMilestone;
  sequenceBadge: string;
  theme: ThemeConfig;
  children?: React.ReactNode;
}

export const EditorialHeader: React.FC<EditorialHeaderProps> = ({
  currentMilestone,
  sequenceBadge,
  theme,
  children
}) => {
  return (
    <section className="shrink-0 pt-2 pb-1 px-4 text-center z-20 flex flex-col items-center">
      <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-widest uppercase">
        <span
          className="px-2 py-0.5 rounded font-bold tracking-[0.14em] shadow-2xs transition-colors duration-700 ease-out"
          style={{
            backgroundColor: theme.eyebrowBg,
            color: theme.eyebrowText
          }}
        >
          {currentMilestone.eyebrow}
        </span>
        <span style={{ color: theme.muted }}>{currentMilestone.classification}</span>
        <span className="opacity-40">·</span>
        <span className="font-semibold" style={{ color: theme.muted }}>
          {sequenceBadge}
        </span>
      </div>

      <h1
        className="mt-1 font-bold tracking-tight leading-[1.06] max-w-4xl mx-auto transition-all duration-300 text-[#1D1D1F]"
        style={{
          fontSize: 'clamp(1.6rem, 2.8vw, 2.75rem)',
          fontFamily: '"Playfair Display", "Instrument Serif", Georgia, Cambria, "Times New Roman", serif'
        }}
      >
        {currentMilestone.title}
      </h1>

      <p
        className="mt-1 text-xs sm:text-sm italic max-w-3xl mx-auto leading-snug"
        style={{
          color: theme.muted,
          fontFamily: 'Georgia, Cambria, "Times New Roman", serif'
        }}
      >
        “{currentMilestone.curatorQuote}”
      </p>

      {children}
    </section>
  );
};
