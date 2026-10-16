import React from 'react';
import { Compass } from 'lucide-react';
import { ExhibitMilestone, ThemeConfig } from '@/types';
import { displayConventions } from '@/data/displayConventions';

export interface TimelineScrubberProps {
  timelineMilestones: ExhibitMilestone[];
  currentMilestone: ExhibitMilestone;
  isAtlas: boolean;
  isLastExhibit: boolean;
  theme: ThemeConfig;
  activeRulerNodeRef: React.RefObject<HTMLButtonElement>;
  onSelectMilestone: (index: number) => void;
  onSelectAtlas: () => void;
  onRestart: () => void;
}

export const TimelineScrubber: React.FC<TimelineScrubberProps> = ({
  timelineMilestones,
  currentMilestone,
  isAtlas,
  isLastExhibit,
  theme,
  activeRulerNodeRef,
  onSelectMilestone,
  onSelectAtlas,
  onRestart
}) => {
  return (
    <footer
      className="shrink-0 w-full border-t pt-1.5 pb-2 px-3 sm:px-6 z-20 relative select-none transition-colors duration-700 ease-out"
      style={{
        borderColor: theme.border,
        backgroundColor: theme.dockBg,
        backdropFilter: 'blur(16px)'
      }}
    >
      <div className="max-w-7xl mx-auto relative">
        {/* 90 Tick Marks Ruler */}
        <div
          aria-hidden="true"
          className="w-full h-2 flex items-end justify-between px-2 mb-1 opacity-40"
        >
          {Array.from({ length: 90 }).map((_, idx) => {
            const isMajor = idx % 5 === 0;
            return (
              <span
                key={idx}
                className="w-[1px] transition-colors"
                style={{
                  height: isMajor ? '8px' : '4px',
                  backgroundColor: isMajor ? theme.text : theme.muted
                }}
              />
            );
          })}
        </div>

        <div className="flex items-center justify-between gap-2">
          {/* 42 Chronological Nodes */}
          <div
            className="flex-1 flex items-center gap-1 overflow-x-auto py-0.5"
            style={{ scrollbarWidth: 'none' }}
          >
            {timelineMilestones.map((node, idx) => {
              const isCurrent = !isAtlas && currentMilestone.id === node.id;
              return (
                <button
                  key={node.id}
                  ref={isCurrent ? activeRulerNodeRef : null}
                  type="button"
                  onClick={() => onSelectMilestone(idx)}
                  className="relative px-2 py-0.5 rounded-full font-mono text-[10px] tracking-tight shrink-0 transition-all duration-300 cursor-pointer flex flex-col items-center"
                  style={
                    isCurrent
                      ? {
                          backgroundColor: theme.pillActiveBg,
                          color: theme.pillActiveText,
                          fontWeight: 700,
                          transform: 'translateY(-1px)'
                        }
                      : {
                          color: theme.muted
                        }
                  }
                  title={`${node.dateLabel} — ${node.title}`}
                >
                  {isCurrent && (
                    <span
                      className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] absolute -top-1.5"
                      style={{ borderTopColor: theme.amber }}
                    />
                  )}
                  <span>{node.rulerShort}</span>
                </button>
              );
            })}
          </div>

          {/* Right Endpoint: 2026 AD · PRESENT + Restart Button on Final Exhibit */}
          <div className="shrink-0 pl-2 border-l flex items-center gap-1.5" style={{ borderColor: theme.border }}>
            <button
              type="button"
              onClick={onSelectAtlas}
              className="px-2.5 py-1 rounded-full font-mono text-[10px] sm:text-[11px] font-bold tracking-wider uppercase flex items-center gap-1.5 border transition-all cursor-pointer"
              style={
                isAtlas
                  ? {
                      backgroundColor: theme.pillActiveBg,
                      color: theme.pillActiveText,
                      borderColor: theme.pillActiveBg
                    }
                  : {
                      backgroundColor: 'rgba(0, 113, 227, 0.08)',
                      color: '#0071E3',
                      borderColor: 'rgba(0, 113, 227, 0.28)'
                    }
              }
              title={displayConventions.currentMarker.note}
            >
              <Compass className="w-3 h-3" />
              <span>{displayConventions.currentMarker.dateLabel}</span>
            </button>

            {isLastExhibit && (
              <button
                type="button"
                onClick={onRestart}
                className="px-2.5 py-1 rounded-full font-mono text-[10px] sm:text-[11px] font-bold tracking-wider uppercase flex items-center gap-1 border border-[#E5E5EA] bg-white hover:bg-[#F5F5F7] text-[#1D1D1F] transition cursor-pointer"
              >
                <span>↺ Restart Journey (4.54B BCE)</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
