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
        <Image
          width={12}
          height={12}
          className={`group-20 ${groupClassName}`}
          alt="Group"
          src={type === 'outlined' ? group : '/img/group-3.png'}
        />
      )}
    </button>
  );
};
