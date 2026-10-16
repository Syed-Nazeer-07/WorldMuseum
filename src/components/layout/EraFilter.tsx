import React from 'react';
import { EraCategory, ThemeConfig } from '@/types';

export interface EraFilterProps {
  eraCategories: EraCategory[];
  currentEraId: string;
  theme: ThemeConfig;
  onSelectEra: (eraId: string) => void;
}

export const EraFilter: React.FC<EraFilterProps> = ({
  eraCategories,
  currentEraId,
  theme,
  onSelectEra
}) => {
  return (
    <nav
      aria-label="Geological and Historical Era Filter"
      className="hidden lg:flex items-center gap-1 p-0.5 rounded-lg border"
      style={{
        borderColor: theme.border,
        backgroundColor: 'rgba(255, 255, 255, 0.65)'
      }}
    >
      {eraCategories.map((era) => {
        const isActiveEra = currentEraId === era.id;
        return (
          <button
            key={era.id}
            type="button"
            onClick={() => onSelectEra(era.id)}
            className="px-2.5 py-1 rounded-md text-[11px] font-medium tracking-tight transition-all cursor-pointer"
            style={
              isActiveEra
                ? {
                    backgroundColor: theme.pillActiveBg,
                    color: theme.pillActiveText,
                    fontWeight: 600
                  }
                : {
                    color: theme.muted
                  }
            }
          >
            {era.label}
          </button>
        );
      })}
    </nav>
  );
};
