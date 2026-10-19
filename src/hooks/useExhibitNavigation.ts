import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ExhibitMilestone, SlidePhase, TiltState } from '@/types';
import { fetchWikiVisual } from '@/lib/wikipedia';

export interface UseExhibitNavigationProps {
  totalExhibits: number;
  allExhibits: ExhibitMilestone[];
  isModalOpen: boolean;
  onCloseModals?: () => void;
  onStopLapse?: () => void;
}

export interface UseExhibitNavigationResult {
  activeIndex: number;
  activeVariantIdx: number;
  slidePhase: SlidePhase;
  tilt: TiltState;
  stageRef: React.RefObject<HTMLDivElement>;
  activeRulerNodeRef: React.RefObject<HTMLButtonElement>;
  selectMilestone: (index: number) => void;
  handlePrev: () => void;
  handleNext: () => void;
  handleRestartJourney: () => void;
  setActiveVariantIdx: (index: number) => void;
  handleStageMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleStageMouseLeave: () => void;
}

export function useExhibitNavigation({
  totalExhibits,
  allExhibits,
  isModalOpen,
  onCloseModals,
  onStopLapse
}: UseExhibitNavigationProps): UseExhibitNavigationResult {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeVariantIdx, setActiveVariantIdx] = useState(0);
  const [slidePhase, setSlidePhase] = useState<SlidePhase>('idle');
  const [tilt, setTilt] = useState<TiltState>({ x: 0, y: 0, glareX: 50, glareY: 50 });

  const stageRef = useRef<HTMLDivElement>(null);
  const activeRulerNodeRef = useRef<HTMLButtonElement>(null);
  const lastWheelTimeRef = useRef(0);

  const currentMilestone = allExhibits[activeIndex] || allExhibits[0];
  const prevMilestone = activeIndex > 0 ? allExhibits[activeIndex - 1] : null;
  const nextMilestone = activeIndex < totalExhibits - 1 ? allExhibits[activeIndex + 1] : null;
  const prev2Milestone = activeIndex > 1 ? allExhibits[activeIndex - 2] : null;
  const next2Milestone = activeIndex < totalExhibits - 2 ? allExhibits[activeIndex + 2] : null;

  // Preload active, previous (-1, -2), and next (+1, +2) high-resolution exhibit photos
  useEffect(() => {
    const controller = new AbortController();
    const immediatePrefetch = [
      ...(currentMilestone?.subExhibits?.map((v) => v.articleTitle) || []),
      ...(prevMilestone?.subExhibits?.map((v) => v.articleTitle) || []),
      ...(nextMilestone?.subExhibits?.map((v) => v.articleTitle) || [])
    ].filter(Boolean);

    immediatePrefetch.forEach((title) => {
      fetchWikiVisual(title, controller.signal);
    });

    const lookaheadPrefetch = [
      ...(prev2Milestone?.subExhibits?.map((v) => v.articleTitle) || []),
      ...(next2Milestone?.subExhibits?.map((v) => v.articleTitle) || [])
    ].filter(Boolean);

    const timer = window.setTimeout(() => {
      if (!controller.signal.aborted) {
        lookaheadPrefetch.forEach((title) => {
          fetchWikiVisual(title, controller.signal);
        });
      }
    }, 350);

    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [currentMilestone, prevMilestone, nextMilestone, prev2Milestone, next2Milestone]);

  // Smoothly center active node in bottom ruler
  useEffect(() => {
    if (activeRulerNodeRef.current) {
      try {
        activeRulerNodeRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      } catch {
        // Ignore if unsupported in environment
      }
    }
  }, [activeIndex]);

  const triggerSlideTransition = useCallback(
    (direction: 'prev' | 'next', targetIdx: number) => {
      const clamped = Math.max(0, Math.min(totalExhibits - 1, targetIdx));
      if (clamped === activeIndex) return;

      setSlidePhase(direction === 'next' ? 'enter-from-right' : 'enter-from-left');
      setActiveIndex(clamped);
      setActiveVariantIdx(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setSlidePhase('idle');
        });
      });
    },
    [activeIndex, totalExhibits]
  );

  const selectMilestone = useCallback(
    (newIndex: number) => {
      const clamped = Math.max(0, Math.min(totalExhibits - 1, newIndex));
      if (clamped === activeIndex) {
        setActiveVariantIdx(0);
        return;
      }
      const dir = clamped > activeIndex ? 'next' : 'prev';
      triggerSlideTransition(dir, clamped);
    },
    [activeIndex, totalExhibits, triggerSlideTransition]
  );

  const handlePrev = useCallback(() => {
    if (activeIndex <= 0) return;
    triggerSlideTransition('prev', activeIndex - 1);
  }, [activeIndex, triggerSlideTransition]);

  const handleNext = useCallback(() => {
    if (activeIndex >= totalExhibits - 1) return;
    triggerSlideTransition('next', activeIndex + 1);
  }, [activeIndex, totalExhibits, triggerSlideTransition]);

  const handleRestartJourney = useCallback(() => {
    if (onStopLapse) onStopLapse();
    triggerSlideTransition('prev', 0);
  }, [triggerSlideTransition, onStopLapse]);

  // Window Wheel Scrubbing with 200ms Debounce
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isModalOpen) return;
      const now = Date.now();
      if (now - lastWheelTimeRef.current < 200) return;

      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (Math.abs(delta) < 6) return;

      if (delta > 0 && activeIndex < totalExhibits - 1) {
        lastWheelTimeRef.current = now;
        handleNext();
      } else if (delta < 0 && activeIndex > 0) {
        lastWheelTimeRef.current = now;
        handlePrev();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeIndex, totalExhibits, handleNext, handlePrev, isModalOpen]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target && ((e.target as HTMLElement).tagName === 'INPUT' || (e.target as HTMLElement).tagName === 'TEXTAREA')) {
        return;
      }
      if (e.key === 'Escape') {
        if (onCloseModals) onCloseModals();
        return;
      }
      if (isModalOpen) return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === '1') {
        setActiveVariantIdx(0);
      } else if (e.key === '2') {
        setActiveVariantIdx(1);
      } else if (e.key === '3') {
        setActiveVariantIdx(2);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext, isModalOpen, onCloseModals]);

  const handleStageMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;
    const rotateY = (relX - 0.5) * 12;
    const rotateX = (0.5 - relY) * 9;
    setTilt({
      x: rotateX,
      y: rotateY,
      glareX: relX * 100,
      glareY: relY * 100
    });
  }, []);

  const handleStageMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50 });
  }, []);

  return {
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
  };
}
