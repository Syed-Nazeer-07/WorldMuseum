import React from 'react';
import { SubExhibit, ThemeConfig } from '@/types';

export interface SubExhibitTabsProps {
  subExhibits: SubExhibit[];
  activeVariantIdx: number;
  onSelectVariant: (index: number) => void;
  theme: ThemeConfig;
}

export const SubExhibitTabs: React.FC<SubExhibitTabsProps> = ({
  subExhibits,
  activeVariantIdx,
  onSelectVariant,
  theme
}) => {
  return (
    <div className="mt-1.5 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
      {subExhibits.map((variant, idx) => {
        const isSelected = idx === activeVariantIdx;
        return (
          <button
            key={variant.id}
            type="button"
            onClick={() => onSelectVariant(idx)}
            className="px-2.5 py-1 rounded-full border text-[11px] font-medium flex items-center gap-1.5 transition-all duration-200 cursor-pointer shadow-2xs"
            style={
              isSelected
                ? {
                    backgroundColor: theme.pillActiveBg,
                    color: theme.pillActiveText,
                    borderColor: theme.pillActiveBg,
                    transform: 'translateY(-1px)'
                  }
                : {
                    backgroundColor: 'rgba(255, 255, 255, 0.88)',
                    color: theme.text,
                    borderColor: theme.border
                  }
            }
          >
            <span
              className="w-2 h-2 rounded-full transition-transform"
              style={{
                backgroundColor: isSelected ? '#FFFFFF' : theme.amber,
                opacity: isSelected ? 1 : 0.85
              }}
            />
            <span className="font-semibold">{variant.label}</span>
          </button>
        );
      })}
    </div>
  );
};
