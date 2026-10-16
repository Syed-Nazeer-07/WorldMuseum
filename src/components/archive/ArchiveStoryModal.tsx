import React from 'react';
import { X } from 'lucide-react';
import { ExhibitMilestone, SubExhibit, ThemeConfig } from '@/types';
import { ExhibitVisual } from '@/components/museum/ExhibitVisual';
import { MilestoneList } from './MilestoneList';
import { ExhibitMetadata } from './ExhibitMetadata';

export interface ArchiveStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentMilestone: ExhibitMilestone;
  currentVariant: SubExhibit;
  activeVariantIdx: number;
  onSelectVariant: (index: number) => void;
  theme: ThemeConfig;
  isAtlas: boolean;
}

export const ArchiveStoryModal: React.FC<ArchiveStoryModalProps> = ({
  isOpen,
  onClose,
  currentMilestone,
  currentVariant,
  activeVariantIdx,
  onSelectVariant,
  theme,
  isAtlas
}) => {
  if (!isOpen) return null;

  const sectionBullets =
    isAtlas && currentVariant.itinerary
      ? currentVariant.itinerary
      : currentMilestone.story?.milestones || [];

  const curatorNote =
    isAtlas && currentVariant.curatorNote
      ? currentVariant.curatorNote
      : currentMilestone.story?.curatorNote;

  const sectionHeading = isAtlas
    ? "TRAVELER'S ESSENTIAL ITINERARY & GASTRONOMY"
    : currentMilestone.story?.sectionTitle || 'GEOLOGICAL & EVOLUTIONARY MILESTONES';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/35 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[88vh] rounded-2xl border shadow-[0_24px_60px_rgba(0,0,0,0.18)] overflow-hidden flex flex-col transition-colors"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.96)',
          borderColor: theme.border,
          color: theme.text,
          backdropFilter: 'blur(20px)'
        }}
      >
        {/* Modal Top Bar */}
        <div
          className="px-5 sm:px-7 py-4 border-b flex items-start justify-between gap-4 shrink-0"
          style={{ borderColor: theme.border }}
        >
          <div>
            <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-widest">
              <span
                className="px-2 py-0.5 rounded font-bold"
                style={{
                  backgroundColor: theme.eyebrowBg,
                  color: theme.eyebrowText
                }}
              >
                {currentMilestone.eyebrow}
              </span>
              <span style={{ color: theme.muted }}>
                {currentMilestone.classification}
              </span>
            </div>
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mt-1 text-[#1D1D1F]"
              style={{
                fontFamily: '"Playfair Display", "Instrument Serif", Georgia, serif'
              }}
            >
              {currentMilestone.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Archive Story Modal"
            className="w-8 h-8 rounded-full border flex items-center justify-center transition cursor-pointer hover:bg-[#F5F5F7] shrink-0"
            style={{
              borderColor: theme.border,
              backgroundColor: '#FFFFFF',
              color: theme.text
            }}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content Grid */}
        <div className="p-5 sm:p-7 overflow-y-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Left Column: Image Plate + 3 Sub-Exhibit Buttons */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div
              className="w-full aspect-[4/3] rounded-xl p-2 border flex items-center justify-center relative overflow-hidden bg-[#F5F5F7]"
              style={{ borderColor: theme.border }}
            >
              <ExhibitVisual
                articleTitle={currentVariant.articleTitle}
                glowColor={theme.glow}
                caption={currentVariant.caption}
                subLabel={currentVariant.label}
                isCenter={true}
                hidePlaque={true}
              />
            </div>

            <div className="grid grid-cols-1 gap-1.5">
              {currentMilestone.subExhibits.map((v, i) => {
                const active = i === activeVariantIdx;
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => onSelectVariant(i)}
                    className="px-3.5 py-2.5 rounded-xl border text-left flex items-center justify-between text-xs font-semibold transition cursor-pointer"
                    style={
                      active
                        ? {
                            backgroundColor: theme.pillActiveBg,
                            color: theme.pillActiveText,
                            borderColor: theme.pillActiveBg
                          }
                        : {
                            borderColor: theme.border,
                            backgroundColor: '#FFFFFF',
                            color: theme.text
                          }
                    }
                  >
                    <span>{v.label}</span>
                    <span className="font-mono text-[10px] opacity-75">
                      0{i + 1}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Narrative + Bulleted Milestones + Curator Note */}
          <div className="md:col-span-7 flex flex-col gap-4">
            <div className="space-y-3 text-sm sm:text-[15px] leading-relaxed text-[#1D1D1F]">
              {(currentMilestone.story?.overview || []).slice(0, 2).map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div
              className="pt-4 border-t"
              style={{ borderColor: theme.border }}
            >
              <h3
                className="font-mono text-[11px] font-bold uppercase tracking-widest mb-2.5"
                style={{ color: theme.muted }}
              >
                {sectionHeading}
              </h3>
              <MilestoneList items={sectionBullets} accentColor={theme.accent} />
            </div>

            <ExhibitMetadata
              note={curatorNote}
              amberColor={theme.amber}
              borderColor={theme.border}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
