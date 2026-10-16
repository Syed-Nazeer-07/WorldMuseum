import React from 'react';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { ExhibitMilestone, SubExhibit, ThemeConfig, TiltState } from '@/types';
import { ExhibitVisual } from './ExhibitVisual';

export interface ExhibitStageProps {
  stageRef: React.RefObject<HTMLDivElement>;
  currentVariant: SubExhibit;
  prevMilestone: ExhibitMilestone | null;
  nextMilestone: ExhibitMilestone | null;
  theme: ThemeConfig;
  tilt: TiltState;
  centerSlideStyle: React.CSSProperties;
  sideLeftSlideStyle: React.CSSProperties;
  sideRightSlideStyle: React.CSSProperties;
  isFirstExhibit: boolean;
  isLastExhibit: boolean;
  onPrev: () => void;
  onNext: () => void;
  onRestart: () => void;
  onOpenStoryModal: () => void;
  onStageMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  onStageMouseLeave: () => void;
}

export const ExhibitStage: React.FC<ExhibitStageProps> = ({
  stageRef,
  currentVariant,
  prevMilestone,
  nextMilestone,
  theme,
  tilt,
  centerSlideStyle,
  sideLeftSlideStyle,
  sideRightSlideStyle,
  isFirstExhibit,
  isLastExhibit,
  onPrev,
  onNext,
  onRestart,
  onOpenStoryModal,
  onStageMouseMove,
  onStageMouseLeave
}) => {
  return (
    <main className="flex-1 min-h-0 relative flex items-center justify-center px-3 sm:px-6 py-1 overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl h-full flex items-center justify-center gap-2 sm:gap-4">
        {/* LEFT ITEM (Previous Milestone) */}
        {prevMilestone ? (
          <div
            onClick={onPrev}
            role="button"
            tabIndex={0}
            aria-label={`Previous milestone: ${prevMilestone.dateLabel} ${prevMilestone.title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') onPrev();
            }}
            className="hidden xl:flex flex-col items-center w-60 h-60 shrink-0 cursor-pointer hover:opacity-80 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={sideLeftSlideStyle}
          >
            <div
              className="mb-1.5 font-mono text-[10px] tracking-wider uppercase text-center leading-tight"
              style={{ color: theme.muted }}
            >
              <span>← PREV: </span>
              <span className="font-bold" style={{ color: theme.text }}>
                {prevMilestone.dateLabel}
              </span>
              <span> · {prevMilestone.title}</span>
            </div>
            <div className="w-full flex-1 rounded-2xl overflow-hidden shadow-md">
              <ExhibitVisual
                articleTitle={prevMilestone.subExhibits[0].articleTitle}
                glowColor={theme.glow}
                caption={prevMilestone.subExhibits[0].caption}
                subLabel={prevMilestone.subExhibits[0].label}
                isCenter={false}
              />
            </div>
          </div>
        ) : (
          <div className="hidden xl:flex flex-col items-center justify-center w-60 h-60 shrink-0 opacity-40">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#86868B]">
              ORIGIN // 4.54B BCE
            </span>
          </div>
        )}

        {/* CENTER ITEM: 1600px Retina Photo Stage */}
        <div
          ref={stageRef}
          onMouseMove={onStageMouseMove}
          onMouseLeave={onStageMouseLeave}
          onClick={onOpenStoryModal}
          role="button"
          tabIndex={0}
          aria-label={`Inspect active exhibit: ${currentVariant.label}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter') onOpenStoryModal();
          }}
          className="relative max-w-4xl w-full h-[460px] sm:h-[500px] max-h-full flex flex-col items-center justify-center cursor-pointer"
          style={{ perspective: '1200px' }}
        >
          <div
            className="w-full h-full relative transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={centerSlideStyle}
          >
            <ExhibitVisual
              articleTitle={currentVariant.articleTitle}
              glowColor={theme.glow}
              caption={currentVariant.microStory || currentVariant.caption}
              subLabel={currentVariant.label}
              isCenter={true}
            />

            <div
              className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.22) 0%, transparent 55%)`,
                opacity: tilt.x !== 0 || tilt.y !== 0 ? 1 : 0
              }}
            />
          </div>

          <div className="flex xl:hidden items-center justify-between w-full absolute top-1/2 -translate-y-1/2 px-2 pointer-events-none z-30">
            <button
              type="button"
              disabled={isFirstExhibit}
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              aria-label="Previous Exhibit"
              className="pointer-events-auto w-8 h-8 rounded-full bg-white/90 text-[#1D1D1F] shadow-md flex items-center justify-center border border-[#E5E5EA] cursor-pointer disabled:opacity-30"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              disabled={isLastExhibit}
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              aria-label="Next Exhibit"
              className="pointer-events-auto w-8 h-8 rounded-full bg-white/90 text-[#1D1D1F] shadow-md flex items-center justify-center border border-[#E5E5EA] cursor-pointer disabled:opacity-30"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* RIGHT ITEM (Next Milestone or Restart Button at End) */}
        {nextMilestone ? (
          <div
            onClick={onNext}
            role="button"
            tabIndex={0}
            aria-label={`Next milestone: ${nextMilestone.dateLabel} ${nextMilestone.title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') onNext();
            }}
            className="hidden xl:flex flex-col items-center w-60 h-60 shrink-0 cursor-pointer hover:opacity-80 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={sideRightSlideStyle}
          >
            <div
              className="mb-1.5 font-mono text-[10px] tracking-wider uppercase text-center leading-tight"
              style={{ color: theme.muted }}
            >
              <span>NEXT: </span>
              <span className="font-bold" style={{ color: theme.text }}>
                {nextMilestone.dateLabel}
              </span>
              <span> · {nextMilestone.title} →</span>
            </div>
            <div className="w-full flex-1 rounded-2xl overflow-hidden shadow-md">
              <ExhibitVisual
                articleTitle={nextMilestone.subExhibits[0].articleTitle}
                glowColor={theme.glow}
                caption={nextMilestone.subExhibits[0].caption}
                subLabel={nextMilestone.subExhibits[0].label}
                isCenter={false}
              />
            </div>
          </div>
        ) : (
          <div className="hidden xl:flex flex-col items-center justify-center w-60 h-60 shrink-0">
            <button
              type="button"
              onClick={onRestart}
              className="px-4 py-3 rounded-2xl border border-[#E5E5EA] bg-white hover:bg-[#F5F5F7] shadow-md font-mono text-xs font-bold text-[#0071E3] flex flex-col items-center gap-2 transition cursor-pointer"
            >
              <RotateCcw className="w-5 h-5" />
              <span>↺ Restart Journey (4.54B BCE)</span>
            </button>
          </div>
        )}
      </div>
    </main>
  );
};
