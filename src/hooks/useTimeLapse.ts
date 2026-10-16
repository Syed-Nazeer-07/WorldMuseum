import React, { useState, useEffect, useCallback } from 'react';

export interface UseTimeLapseProps {
  activeIndex: number;
  totalExhibits: number;
  storyModalOpen: boolean;
  catalogModalOpen: boolean;
  onAdvance: () => void;
}

export interface UseTimeLapseResult {
  timeLapseActive: boolean;
  setTimeLapseActive: React.Dispatch<React.SetStateAction<boolean>>;
  toggleTimeLapse: () => void;
}

export function useTimeLapse({
  activeIndex,
  totalExhibits,
  storyModalOpen,
  catalogModalOpen,
  onAdvance
}: UseTimeLapseProps): UseTimeLapseResult {
  const [timeLapseActive, setTimeLapseActive] = useState(false);

  // Auto-stop at final exhibit or when modals open
  useEffect(() => {
    if (!timeLapseActive || storyModalOpen || catalogModalOpen) return undefined;
    if (activeIndex >= totalExhibits - 1) {
      setTimeLapseActive(false);
      return undefined;
    }
    const timer = setInterval(() => {
      onAdvance();
    }, 2000);
    return () => clearInterval(timer);
  }, [timeLapseActive, activeIndex, totalExhibits, storyModalOpen, catalogModalOpen, onAdvance]);

  const toggleTimeLapse = useCallback(() => {
    setTimeLapseActive((prev) => !prev);
  }, []);

  return {
    timeLapseActive,
    setTimeLapseActive,
    toggleTimeLapse
  };
}
