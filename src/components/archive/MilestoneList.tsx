import React from 'react';

export interface MilestoneListProps {
  items: string[];
  accentColor: string;
}

export const MilestoneList: React.FC<MilestoneListProps> = ({ items, accentColor }) => {
  return (
    <ul className="space-y-2 text-xs sm:text-sm leading-relaxed text-[#1D1D1F]">
      {items.map((bullet, idx) => (
        <li key={idx} className="flex items-start gap-2.5">
          <span
            className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
            style={{ backgroundColor: accentColor }}
          />
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  );
};
