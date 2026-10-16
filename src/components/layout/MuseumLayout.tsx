import React from 'react';
import { ThemeConfig } from '@/types';

export interface MuseumLayoutProps {
  theme: ThemeConfig;
  children: React.ReactNode;
}

export const MuseumLayout: React.FC<MuseumLayoutProps> = ({ theme, children }) => {
  return (
    <div
      className={`h-screen w-screen overflow-hidden flex flex-col justify-between select-none relative transition-colors duration-700 ease-out ${theme.bgClass}`}
      style={{
        backgroundColor: theme.bg,
        color: theme.text,
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}
    >
      {children}
    </div>
  );
};
