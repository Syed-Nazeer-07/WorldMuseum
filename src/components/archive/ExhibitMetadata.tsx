import React from 'react';

export interface ExhibitMetadataProps {
  note?: string;
  amberColor: string;
  borderColor: string;
  title?: string;
}

export const ExhibitMetadata: React.FC<ExhibitMetadataProps> = ({
  note,
  amberColor,
  borderColor,
  title = 'ARCHIVE CURATOR NOTE'
}) => {
  if (!note) return null;

  return (
    <div
      className="p-3.5 sm:p-4 rounded-xl border bg-[#F5F5F7]"
      style={{ borderColor }}
    >
      <div
        className="font-mono text-[10px] font-bold uppercase tracking-widest mb-1"
        style={{ color: amberColor }}
      >
        {title}
      </div>
      <p className="text-xs sm:text-sm leading-relaxed font-medium text-[#1D1D1F]">
        {note}
      </p>
    </div>
  );
};
