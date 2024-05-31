import React from 'react';
import './style.css';
import Image from 'next/image';

type ButtonProps = {
  icon?: boolean;
  type: 'outlined' | 'filled';
  size: 'large' | 'medium';
  color: 'brick' | 'blue' | 'white';
  text?: string;
  group?: string;
  className?: string;
  downloadPdfClassName?: string;
  groupClassName?: string;
  role?: React.AriaRole;
};

export const Button: React.FC<ButtonProps> = ({
  icon,
  type,
  size,
  color,
  className = '',
  downloadPdfClassName = '',
  text = 'DOWNLOAD PDF',
  groupClassName = '',
  group = '/img/group.png',
  role = 'button',
}) => {
  return (
    <button
      role={role}
      className={`button w-max ${type} size-${size} color-1-${color} icon-${icon ? 'true' : 'false'} ${className}`}
      aria-label={text}
    >
      <div className={`${downloadPdfClassName} font-proxima`}>{text}</div>
      {icon && (
        <Arrow />
      )}
    </button>
  );
};

const Arrow = () => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.0339 1L13 6.99016M12.9128 7.06885H1H12.9128ZM7.0339 13L13 6.99016L7.0339 13Z" stroke='currentColor' stroke-width="1.36701" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}
