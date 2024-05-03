import React from 'react';
import './style.css';

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
}) => {
  return (
    <button
      className={`button ${type} size-${size} color-1-${color} icon-${icon ? 'true' : 'false'} ${className}`}
    >
      <div className={`download-pdf ${downloadPdfClassName}`}>{text}</div>
      {icon && (
        <img
          className={`group-20 ${groupClassName}`}
          alt="Group"
          src={type === 'outlined' ? group : '/img/group-3.png'}
        />
      )}
    </button>
  );
};
