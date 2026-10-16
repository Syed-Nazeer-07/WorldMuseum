import React from 'react';

export interface PillProps {
  label: string;
  active?: boolean;
  dotColor?: string;
  badge?: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  activeStyle?: React.CSSProperties;
  inactiveStyle?: React.CSSProperties;
  title?: string;
}

export const Pill: React.FC<PillProps> = ({
  label,
  active = false,
  dotColor,
  badge,
  onClick,
  className = '',
  style,
  activeStyle,
  inactiveStyle,
  title
}) => {
  const mergedStyle: React.CSSProperties = {
    ...style,
    ...(active ? activeStyle : inactiveStyle)
  };

  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`px-2.5 py-1 rounded-full border text-[11px] font-medium flex items-center gap-1.5 transition-all duration-200 cursor-pointer shadow-2xs ${className}`}
      style={mergedStyle}
    >
      {dotColor && (
        <span
          className="w-2 h-2 rounded-full transition-transform"
          style={{
            backgroundColor: active ? '#FFFFFF' : dotColor,
            opacity: active ? 1 : 0.85
          }}
        />
      )}
      <span className={active ? 'font-semibold' : 'font-medium'}>{label}</span>
      {badge && <span className="font-mono text-[10px] opacity-75">{badge}</span>}
    </button>
  );
};
