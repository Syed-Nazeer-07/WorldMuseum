import React from 'react';
import { Compass } from 'lucide-react';
import { ExhibitMilestone, SubExhibit, ThemeConfig } from '@/types';
import { DestinationTabs } from './DestinationTabs';

export interface WorldExplorerProps {
  currentMilestone: ExhibitMilestone;
  currentVariant: SubExhibit;
  activeVariantIdx: number;
  onSelectVariant: (index: number) => void;
  theme: ThemeConfig;
}

export const WorldExplorer: React.FC<WorldExplorerProps> = ({
  currentMilestone,
  activeVariantIdx,
  onSelectVariant,
  theme
}) => {
  return (
    <div className="w-full flex flex-col items-center gap-2">
      <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#0071E3]">
        <Compass className="w-3.5 h-3.5" />
        <span>2026 AD · World Atlas Explorer</span>
      </div>

      <DestinationTabs
        destinations={currentMilestone.subExhibits}
        activeIndex={activeVariantIdx}
        onSelectDestination={onSelectVariant}
        theme={theme}
      />
    </div>
  );
};
