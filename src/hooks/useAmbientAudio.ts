import { useState, useRef, useCallback, useEffect } from 'react';

export interface UseAmbientAudioResult {
  isPlaying: boolean;
  isMuted: boolean;
  toggleAudio: () => void;
  toggleMute: () => void;
  setVolume: (level: number) => void;
}

export function useAmbientAudio(): UseAmbientAudioResult {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);

  const initAudio = useCallback(() => {
    if (audioCtxRef.current) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.05, ctx.currentTime);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(220, ctx.currentTime);

      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(110, ctx.currentTime);

      osc.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start();

      audioCtxRef.current = ctx;
      gainNodeRef.current = gainNode;
      oscRef.current = osc;
    } catch {
      // Graceful fallback if Web Audio is unsupported
    }
  }, []);

  const toggleAudio = useCallback(() => {
    if (!isPlaying) {
      initAudio();
      if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      setIsPlaying(true);
    } else {
      if (audioCtxRef.current) {
        audioCtxRef.current.suspend();
      }
      setIsPlaying(false);
    }
  }, [isPlaying, initAudio]);

  const toggleMute = useCallback(() => {
    if (!gainNodeRef.current || !audioCtxRef.current) return;
    if (isMuted) {
      gainNodeRef.current.gain.setValueAtTime(0.05, audioCtxRef.current.currentTime);
      setIsMuted(false);
    } else {
      gainNodeRef.current.gain.setValueAtTime(0, audioCtxRef.current.currentTime);
      setIsMuted(true);
    }
  }, [isMuted]);

  const setVolume = useCallback((level: number) => {
    if (!gainNodeRef.current || !audioCtxRef.current) return;
    const clamped = Math.max(0, Math.min(1, level)) * 0.08;
    gainNodeRef.current.gain.setValueAtTime(clamped, audioCtxRef.current.currentTime);
  }, []);

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch {
          // ignore cleanup errors
        }
      }
    };
  }, []);

  return {
    isPlaying,
    isMuted,
    toggleAudio,
    toggleMute,
    setVolume
  };
}
