import React from 'react';
import { Globe, Play, Pause, Grid } from 'lucide-react';
import { EraCategory, ThemeConfig } from '@/types';
import { EraFilter } from './EraFilter';

export interface TopBarProps {
  eraCategories: EraCategory[];
  currentEraId: string;
  timeLapseActive: boolean;
  isLastExhibit: boolean;
  theme: ThemeConfig;
  onSelectEra: (eraId: string) => void;
  onToggleTimeLapse: () => void;
  onOpenCatalog: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  eraCategories,
  currentEraId,
  timeLapseActive,
  isLastExhibit,
  theme,
  onSelectEra,
  onToggleTimeLapse,
  onOpenCatalog
}) => {
  return (
    <header
      className="shrink-0 h-11 px-4 sm:px-6 border-b flex items-center justify-between gap-2 z-30 transition-colors duration-700 ease-out"
      style={{
        borderColor: theme.border,
        backgroundColor: theme.dockBg,
        backdropFilter: 'blur(16px)'
      }}
    >
      <div className="flex items-center gap-2 shrink-0">
        <Globe className="w-3.5 h-3.5 text-[#0071E3]" />
        <span className="font-mono text-xs uppercase tracking-widest text-[#1D1D1F] font-semibold">
          World Museum
        </span>
      </div>

      <EraFilter
        eraCategories={eraCategories}
        currentEraId={currentEraId}
        theme={theme}
        onSelectEra={onSelectEra}
      />

      <div className="flex items-center gap-1.5 shrink-0">
        <button
          type="button"
          onClick={onToggleTimeLapse}
          disabled={isLastExhibit && !timeLapseActive}
          className="px-2.5 py-1 rounded-md border font-mono text-[11px] flex items-center gap-1.5 transition cursor-pointer hover:opacity-90 disabled:opacity-40"
          style={{
            borderColor: timeLapseActive ? theme.accent : theme.border,
            backgroundColor: timeLapseActive ? theme.accent : '#FFFFFF',
            color: timeLapseActive ? '#FFFFFF' : theme.text
          }}
          title="Auto-advance every 2 seconds"
        >
          {timeLapseActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          <span>{timeLapseActive ? '⏸ Time-Lapse' : '▶ Time-Lapse'}</span>
        </button>

        <button
          type="button"
          onClick={onOpenCatalog}
          className="px-2.5 py-1 rounded-md border font-mono text-[11px] flex items-center gap-1.5 transition cursor-pointer hover:bg-[#F5F5F7]"
          style={{
            borderColor: theme.border,
            backgroundColor: '#FFFFFF',
            color: theme.text
          }}
        >
          <Grid className="w-3.5 h-3.5 text-[#0071E3]" />
          <span>⊞ All Exhibits</span>
        </button>
      </div>
    </header>
  );
};
