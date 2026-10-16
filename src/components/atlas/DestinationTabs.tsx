import React from 'react';
import { SubExhibit, ThemeConfig } from '@/types';

export interface DestinationTabsProps {
  destinations: SubExhibit[];
  activeIndex: number;
  onSelectDestination: (index: number) => void;
  theme: ThemeConfig;
}

export const DestinationTabs: React.FC<DestinationTabsProps> = ({
  destinations,
  activeIndex,
  onSelectDestination,
  theme
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
      {destinations.map((dest, idx) => {
        const isSelected = idx === activeIndex;
        return (
          <button
            key={dest.id}
            type="button"
            onClick={() => onSelectDestination(idx)}
            className="px-3 py-1.5 rounded-full border text-xs font-medium flex items-center gap-2 transition-all duration-200 cursor-pointer shadow-2xs"
            style={
              isSelected
                ? {
                    backgroundColor: theme.pillActiveBg,
                    color: theme.pillActiveText,
                    borderColor: theme.pillActiveBg,
                    transform: 'translateY(-1px)'
                  }
                : {
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    color: theme.text,
                    borderColor: theme.border
                  }
            }
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: isSelected ? '#FFFFFF' : theme.accent
              }}
            />
            <span className="font-semibold">{dest.label}</span>
            {dest.country && (
              <span className="text-[10px] opacity-75 font-mono">
                {dest.country}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
