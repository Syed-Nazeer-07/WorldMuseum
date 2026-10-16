import { useState, useMemo, useCallback } from 'react';
import {
  allExhibits,
  timelineMilestones,
  atlasGuides,
  ERA_CATEGORIES
} from '@/data';
import { useExhibitNavigation } from '@/hooks/useExhibitNavigation';
import { useTimeLapse } from '@/hooks/useTimeLapse';
import {
  getCenterSlideStyle,
  getSideLeftSlideStyle,
  getSideRightSlideStyle,
  getActiveSpecs,
  formatSequenceBadge
} from '@/lib/timeline';
import { MuseumLayout, TopBar } from '@/components/layout';
import {
  EditorialHeader,
  SubExhibitTabs,
  ExhibitStage,
  SpecBar,
  TimelineScrubber,
  ExhibitCatalog
} from '@/components/museum';
import { ArchiveStoryModal } from '@/components/archive';

export default function App() {
  const [storyModalOpen, setStoryModalOpen] = useState(false);
  const [catalogModalOpen, setCatalogModalOpen] = useState(false);

  const totalExhibits = allExhibits.length;
  const isModalOpen = storyModalOpen || catalogModalOpen;

  const handleCloseModals = useCallback(() => {
    setStoryModalOpen(false);
    setCatalogModalOpen(false);
  }, []);

  const {
    activeIndex,
    activeVariantIdx,
    slidePhase,
    tilt,
    stageRef,
    activeRulerNodeRef,
    selectMilestone,
    handlePrev,
    handleNext,
    handleRestartJourney,
    setActiveVariantIdx,
    handleStageMouseMove,
    handleStageMouseLeave
  } = useExhibitNavigation({
    totalExhibits,
    allExhibits,
    isModalOpen,
    onCloseModals: handleCloseModals
  });

  const { timeLapseActive, toggleTimeLapse, setTimeLapseActive } = useTimeLapse({
    activeIndex,
    totalExhibits,
    storyModalOpen,
    catalogModalOpen,
    onAdvance: handleNext
  });

  const isFirstExhibit = activeIndex === 0;
  const isLastExhibit = activeIndex === totalExhibits - 1;

  const currentMilestone = allExhibits[activeIndex] || allExhibits[0];
  const isAtlas = currentMilestone.collectionType === 'world-atlas';
  const currentVariant =
    currentMilestone.subExhibits[activeVariantIdx] || currentMilestone.subExhibits[0];

  const prevMilestone = activeIndex > 0 ? allExhibits[activeIndex - 1] : null;
  const nextMilestone = activeIndex < totalExhibits - 1 ? allExhibits[activeIndex + 1] : null;

  const sequenceBadge = useMemo(() => {
    return formatSequenceBadge(currentMilestone, timelineMilestones, atlasGuides, isAtlas);
  }, [currentMilestone, isAtlas]);

  const currentEraObj = useMemo(() => {
    return (
      ERA_CATEGORIES.find((e) => e.id === currentMilestone.eraFilter) ||
      ERA_CATEGORIES[0]
    );
  }, [currentMilestone.eraFilter]);

  const theme = currentEraObj.theme;

  const activeSpecs = useMemo(() => {
    return getActiveSpecs(currentMilestone, currentVariant, isAtlas);
  }, [currentMilestone, currentVariant, isAtlas]);

  const centerSlideStyle = useMemo(() => {
    return getCenterSlideStyle(slidePhase, tilt);
  }, [slidePhase, tilt]);

  const sideLeftSlideStyle = useMemo(() => {
    return getSideLeftSlideStyle(slidePhase);
  }, [slidePhase]);

  const sideRightSlideStyle = useMemo(() => {
    return getSideRightSlideStyle(slidePhase);
  }, [slidePhase]);

  const handleSelectEra = useCallback(
    (eraId: string) => {
      const firstInEra = allExhibits.findIndex((m) => m.eraFilter === eraId);
      if (firstInEra !== -1) selectMilestone(firstInEra);
    },
    [selectMilestone]
  );

  const handleRestart = useCallback(() => {
    setTimeLapseActive(false);
    handleRestartJourney();
  }, [handleRestartJourney, setTimeLapseActive]);

  return (
    <MuseumLayout theme={theme}>
      {/* ZONE A: TOP BAR */}
      <TopBar
        eraCategories={ERA_CATEGORIES}
        currentEraId={currentMilestone.eraFilter}
        timeLapseActive={timeLapseActive}
        isLastExhibit={isLastExhibit}
        theme={theme}
        onSelectEra={handleSelectEra}
        onToggleTimeLapse={toggleTimeLapse}
        onOpenCatalog={() => setCatalogModalOpen(true)}
      />

      {/* ZONE B: EDITORIAL HEADER & SUB-EXHIBIT PILLS */}
      <EditorialHeader
        currentMilestone={currentMilestone}
        sequenceBadge={sequenceBadge}
        theme={theme}
      >
        <SubExhibitTabs
          subExhibits={currentMilestone.subExhibits}
          activeVariantIdx={activeVariantIdx}
          onSelectVariant={setActiveVariantIdx}
          theme={theme}
        />
      </EditorialHeader>

      {/* ZONE C: CENTRAL COVER-FLOW STAGE */}
      <ExhibitStage
        stageRef={stageRef}
        currentVariant={currentVariant}
        prevMilestone={prevMilestone}
        nextMilestone={nextMilestone}
        theme={theme}
        tilt={tilt}
        centerSlideStyle={centerSlideStyle}
        sideLeftSlideStyle={sideLeftSlideStyle}
        sideRightSlideStyle={sideRightSlideStyle}
        isFirstExhibit={isFirstExhibit}
        isLastExhibit={isLastExhibit}
        onPrev={handlePrev}
        onNext={handleNext}
        onRestart={handleRestart}
        onOpenStoryModal={() => setStoryModalOpen(true)}
        onStageMouseMove={handleStageMouseMove}
        onStageMouseLeave={handleStageMouseLeave}
      />

      {/* ZONE D: FROSTED SPEC DOCK & CTA */}
      <SpecBar
        activeSpecs={activeSpecs}
        theme={theme}
        isAtlas={isAtlas}
        isLastExhibit={isLastExhibit}
        onRestart={handleRestart}
        onOpenStoryModal={() => setStoryModalOpen(true)}
      />

      {/* ZONE E: PRECISION RULER TIMELINE SCRUBBER */}
      <TimelineScrubber
        timelineMilestones={timelineMilestones}
        currentMilestone={currentMilestone}
        isAtlas={isAtlas}
        isLastExhibit={isLastExhibit}
        theme={theme}
        activeRulerNodeRef={activeRulerNodeRef}
        onSelectMilestone={selectMilestone}
        onSelectAtlas={() => selectMilestone(timelineMilestones.length)}
        onRestart={handleRestart}
      />

      {/* MODAL 1: ARCHIVE STORY MODAL */}
      <ArchiveStoryModal
        isOpen={storyModalOpen}
        onClose={() => setStoryModalOpen(false)}
        currentMilestone={currentMilestone}
        currentVariant={currentVariant}
        activeVariantIdx={activeVariantIdx}
        onSelectVariant={setActiveVariantIdx}
        theme={theme}
        isAtlas={isAtlas}
      />

      {/* MODAL 2: ALL EXHIBITS CATALOG */}
      <ExhibitCatalog
        isOpen={catalogModalOpen}
        onClose={() => setCatalogModalOpen(false)}
        timelineMilestones={timelineMilestones}
        atlasGuides={atlasGuides}
        allExhibits={allExhibits}
        activeIndex={activeIndex}
        theme={theme}
        eraCategories={ERA_CATEGORIES}
        onSelectMilestone={selectMilestone}
      />
    </MuseumLayout>
  );
}
