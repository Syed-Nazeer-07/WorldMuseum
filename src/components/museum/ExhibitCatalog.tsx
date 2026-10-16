import React, { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { EraCategory, ExhibitMilestone, ThemeConfig } from '@/types';
import { filterTimelineMilestones, filterAtlasGuides } from '@/lib/formatting';

export interface ExhibitCatalogProps {
  isOpen: boolean;
  onClose: () => void;
  timelineMilestones: ExhibitMilestone[];
  atlasGuides: ExhibitMilestone[];
  allExhibits: ExhibitMilestone[];
  activeIndex: number;
  theme: ThemeConfig;
  eraCategories: EraCategory[];
  onSelectMilestone: (index: number) => void;
}

export const ExhibitCatalog: React.FC<ExhibitCatalogProps> = ({
  isOpen,
  onClose,
  timelineMilestones,
  atlasGuides,
  allExhibits,
  activeIndex,
  theme,
  eraCategories,
  onSelectMilestone
}) => {
  const [catalogFilterEra, setCatalogFilterEra] = useState('ALL');
  const [catalogSearch, setCatalogSearch] = useState('');

  const filteredTimeline = useMemo(() => {
    return filterTimelineMilestones(timelineMilestones, catalogFilterEra, catalogSearch);
  }, [timelineMilestones, catalogFilterEra, catalogSearch]);

  const filteredAtlas = useMemo(() => {
    return filterAtlasGuides(atlasGuides, catalogFilterEra, catalogSearch);
  }, [atlasGuides, catalogFilterEra, catalogSearch]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/35 backdrop-blur-md p-4 sm:p-8 overflow-hidden"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-7xl w-full mx-auto flex-1 rounded-2xl border overflow-hidden flex flex-col shadow-[0_24px_60px_rgba(0,0,0,0.18)]"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.96)',
          borderColor: theme.border,
          color: theme.text,
          backdropFilter: 'blur(20px)'
        }}
      >
        {/* Header */}
        <div
          className="px-5 py-4 border-b flex flex-wrap items-center justify-between gap-3 shrink-0"
          style={{ borderColor: theme.border }}
        >
          <div>
            <span
              className="font-mono text-[10px] uppercase tracking-widest"
              style={{ color: theme.muted }}
            >
              COMPLETE ARCHIVE INDEX // 4.54B BCE – 2026 AD
            </span>
            <h2
              className="text-xl sm:text-2xl font-bold tracking-tight text-[#1D1D1F]"
              style={{
                fontFamily: '"Playfair Display", Georgia, serif'
              }}
            >
              All 47 Planetary &amp; World Atlas Exhibits
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs bg-[#F5F5F7]"
              style={{ borderColor: theme.border }}
            >
              <Search className="w-3.5 h-3.5 text-[#86868B]" />
              <input
                type="text"
                value={catalogSearch}
                onChange={(e) => setCatalogSearch(e.target.value)}
                placeholder="Filter era, fossil, country..."
                className="bg-transparent outline-none w-36 sm:w-48 text-xs text-[#1D1D1F]"
              />
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close All Exhibits Catalog"
              className="w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer hover:bg-[#F5F5F7] bg-white"
              style={{ borderColor: theme.border }}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Era Category Filter Strip */}
        <div
          className="px-5 py-2.5 border-b flex items-center gap-1.5 overflow-x-auto shrink-0 bg-[#FBFBFD]"
          style={{ borderColor: theme.border }}
        >
          {['ALL', ...eraCategories.map((e) => e.id)].map((eraId) => {
            const active = catalogFilterEra === eraId;
            return (
              <button
                key={eraId}
                type="button"
                onClick={() => setCatalogFilterEra(eraId)}
                className="px-3 py-1 rounded-full font-mono text-[11px] uppercase tracking-wider transition cursor-pointer shrink-0"
                style={
                  active
                    ? {
                        backgroundColor: theme.pillActiveBg,
                        color: theme.pillActiveText,
                        fontWeight: 700
                      }
                    : {
                        color: theme.muted
                      }
                }
              >
                {eraId === 'ALL' ? 'All 47 Exhibits' : eraId}
              </button>
            );
          })}
        </div>

        {/* Exhibit Cards Body */}
        <div className="p-5 overflow-y-auto space-y-6 flex-1">
          {filteredTimeline.length > 0 && (
            <div>
              <h3
                className="font-mono text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: theme.accent }}
              >
                Chronological Deep-Time Archive ({filteredTimeline.length} of 42 Exhibits)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTimeline.map((item) => {
                  const gIdx = allExhibits.findIndex((m) => m.id === item.id);
                  const isSelected = gIdx === activeIndex;
                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        onSelectMilestone(gIdx);
                        onClose();
                      }}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          onSelectMilestone(gIdx);
                          onClose();
                        }
                      }}
                      className="rounded-xl border p-3.5 flex flex-col justify-between gap-3 cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-md bg-white"
                      style={{
                        borderColor: isSelected ? theme.accent : theme.border
                      }}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-wider">
                          <span
                            className="px-2 py-0.5 rounded font-bold"
                            style={{
                              backgroundColor: theme.eyebrowBg,
                              color: theme.eyebrowText
                            }}
                          >
                            {item.dateLabel}
                          </span>
                          <span style={{ color: theme.muted }}>
                            #{String(item.sequence).padStart(2, '0')} · {item.eraFilter}
                          </span>
                        </div>

                        <h4
                          className="mt-2 font-bold text-base leading-snug text-[#1D1D1F]"
                          style={{
                            fontFamily: '"Playfair Display", Georgia, serif'
                          }}
                        >
                          {item.title}
                        </h4>

                        <p
                          className="mt-1 text-xs leading-snug"
                          style={{ color: theme.muted }}
                        >
                          {item.classification}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1 pt-2 border-t" style={{ borderColor: theme.border }}>
                        {item.subExhibits.map((v) => (
                          <span
                            key={v.id}
                            className="px-2 py-0.5 rounded text-[10px] font-mono border bg-[#F5F5F7]"
                            style={{
                              borderColor: theme.border,
                              color: theme.muted
                            }}
                          >
                            {v.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {filteredAtlas.length > 0 && (
            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest mb-3 text-[#0071E3]">
                Contemporary 2026 World Atlas ({filteredAtlas.length} of 5 Guides)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredAtlas.map((item) => {
                  const gIdx = allExhibits.findIndex((m) => m.id === item.id);
                  const isSelected = gIdx === activeIndex;
                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        onSelectMilestone(gIdx);
                        onClose();
                      }}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          onSelectMilestone(gIdx);
                          onClose();
                        }
                      }}
                      className="rounded-xl border p-3.5 flex flex-col justify-between gap-3 cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-md bg-white"
                      style={{
                        borderColor: isSelected ? '#0071E3' : theme.border
                      }}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-wider">
                          <span className="px-2 py-0.5 rounded font-bold bg-[#0071E3] text-white">
                            {item.classification}
                          </span>
                          <span style={{ color: theme.muted }}>
                            Atlas {item.atlasPosition} of 5
                          </span>
                        </div>

                        <h4
                          className="mt-2 font-bold text-base leading-snug text-[#1D1D1F]"
                          style={{
                            fontFamily: '"Playfair Display", Georgia, serif'
                          }}
                        >
                          {item.title}
                        </h4>

                        <p
                          className="mt-1 text-xs leading-snug"
                          style={{ color: theme.muted }}
                        >
                          {item.curatorQuote}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1 pt-2 border-t" style={{ borderColor: theme.border }}>
                        {item.subExhibits.map((v) => (
                          <span
                            key={v.id}
                            className="px-2 py-0.5 rounded text-[10px] font-mono border bg-[#F5F5F7]"
                            style={{
                              borderColor: theme.border,
                              color: theme.muted
                            }}
                          >
                            {v.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
