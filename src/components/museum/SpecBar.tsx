import React from 'react';
import { SpecItem, ThemeConfig } from '@/types';

export interface SpecBarProps {
  activeSpecs: SpecItem[];
  theme: ThemeConfig;
  isAtlas: boolean;
  isLastExhibit: boolean;
  onRestart: () => void;
  onOpenStoryModal: () => void;
}

export const SpecBar: React.FC<SpecBarProps> = ({
  activeSpecs,
  theme,
  isAtlas,
  isLastExhibit,
  onRestart,
  onOpenStoryModal
}) => {
  return (
    <section className="shrink-0 px-3 sm:px-6 pb-1.5 z-20">
      <div
        className="max-w-5xl w-full mx-auto rounded-2xl border px-4 sm:px-5 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex flex-col md:flex-row items-center justify-between gap-3 transition-colors duration-700 ease-out"
        style={{
          backgroundColor: theme.dockBg,
          borderColor: theme.border,
          backdropFilter: 'blur(16px)'
        }}
      >
        <div className="w-full md:flex-1 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
          {activeSpecs.map((spec, idx) => (
            <div
              key={spec.label}
              className={`flex flex-col min-w-0 ${
                idx > 0 ? 'sm:border-l sm:pl-3' : ''
              }`}
              style={{ borderColor: theme.border }}
            >
              <span
                className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest leading-tight"
                style={{ color: theme.muted }}
              >
                {spec.label}
              </span>
              <span className="font-mono text-[11px] sm:text-xs font-bold leading-snug break-words mt-0.5 text-[#1D1D1F]">
                {spec.value}
              </span>
            </div>
          ))}
        </div>

        <div className="w-full md:w-auto shrink-0 flex items-center justify-end gap-2">
          {isLastExhibit && (
            <button
              type="button"
              onClick={onRestart}
              className="px-3.5 py-2 rounded-full border border-[#E5E5EA] bg-white hover:bg-[#F5F5F7] font-mono text-xs font-semibold text-[#1D1D1F] flex items-center gap-1.5 transition cursor-pointer"
            >
              <span>↺ Restart Journey (4.54B BCE)</span>
            </button>
          )}
          <button
            type="button"
            onClick={onOpenStoryModal}
            className="w-full md:w-auto px-4 py-2 rounded-full font-sans text-xs sm:text-sm font-semibold tracking-tight flex items-center justify-center gap-1.5 shadow-xs transition-transform active:scale-95 cursor-pointer hover:opacity-95"
            style={{
              backgroundColor: theme.ctaBg,
              color: theme.ctaText
            }}
          >
            <span>
              {isAtlas ? 'Explore Country Guide ›' : 'Explore Archive Story ›'}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
