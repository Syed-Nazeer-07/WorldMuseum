import React from 'react';

export interface IconButtonProps {
  icon: React.ReactNode;
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  label,
  onClick,
  disabled = false,
  className = '',
  style,
  title,
  ariaLabel,
  type = 'button'
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      title={title}
      aria-label={ariaLabel || (typeof label === 'string' ? label : undefined)}
      className={`flex items-center justify-center transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${className}`}
      style={style}
    >
      {icon}
      {label && <span>{label}</span>}
    </button>
  );
};
