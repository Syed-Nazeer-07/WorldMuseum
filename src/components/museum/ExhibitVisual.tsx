import React from 'react';
import { useWikipediaImage } from '@/hooks/useWikipediaImage';

export interface ExhibitVisualProps {
  articleTitle: string;
  glowColor: string;
  caption?: string;
  subLabel?: string;
  isCenter?: boolean;
  hidePlaque?: boolean;
}

export const ExhibitVisual: React.FC<ExhibitVisualProps> = ({
  articleTitle,
  glowColor,
  caption,
  subLabel,
  isCenter = true,
  hidePlaque = false
}) => {
  const { activeSrc, imgLoaded, handleImageLoad, handleImageError } = useWikipediaImage(articleTitle);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center select-none group">
      <div
        className="absolute inset-3 rounded-3xl blur-2xl pointer-events-none transition-all duration-700 ease-out"
        style={{ background: glowColor }}
      />

      <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#E5E5EA] bg-[#F5F5F7] shadow-[0_20px_50px_rgba(29,29,31,0.12)] transition-all duration-500 flex items-center justify-center">
        {!imgLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F7] via-[#EBEBED] to-[#F5F5F7] animate-pulse" />
        )}

        {activeSrc && (
          <img
            src={activeSrc}
            alt={subLabel || articleTitle}
            loading="eager"
            decoding="async"
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{
              objectFit: 'cover'
            }}
            className={`relative z-10 w-full h-full object-cover transition-opacity duration-300 ${
              imgLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 50% 45%, transparent 62%, rgba(0, 0, 0, 0.14) 88%, rgba(0, 0, 0, 0.36) 100%)'
          }}
        />

        <div className="absolute inset-0 z-10 rounded-2xl ring-1 ring-inset ring-black/5 pointer-events-none" />

        {isCenter && !hidePlaque && (
          <div className="absolute bottom-2.5 left-3 right-3 z-20 px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-md border border-[#E5E5EA] text-left shadow-sm transition-all">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#0071E3] font-bold">
                {subLabel}
              </span>
            </div>
            {caption && (
              <p className="text-[11px] leading-snug text-[#1D1D1F] mt-0.5 font-sans">
                {caption}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
