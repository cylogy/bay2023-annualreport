import React from 'react';

type TypographyProps = {
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'div';
  className?: string;
  children: React.ReactNode;
  mixBlend?: boolean;
};

const variantSizes = {
  h1: 'text-h1-mobile md:text-h1-tablet 2xl:text-h1-desktop font-h1',
  h2: 'text-h2-mobile md:text-h2-tablet 2xl:text-h2-desktop font-h2',
  h3: 'text-h3-mobile md:text-h3-tablet 2xl:text-h3-desktop font-h3',
  h4: 'text-h4-mobile md:text-h4-tablet 2xl:text-h4-desktop font-h4',
  h5: 'text-h5-mobile md:text-h5-tablet 2xl:text-h5-desktop font-h5-all-caps',
  h6: 'text-h6-mobile md:text-h6-tablet 2xl:text-h6-desktop font-h6',
  p: 'text-body font-body-text',
  span: 'text-body font-body-text',
  div: 'text-body font-body-text', // Add div variant size
  label: 'text-caption font-caption',
};

const Typography: React.FC<TypographyProps> = ({
  as: Tag = 'p', // Assigning default value 'p' to as prop
  className = '',
  children,
  mixBlend = false,
}) => {
  const variantSizeClass = variantSizes[Tag] || ''; // handle case where Tag not found
  const variantClass = `${variantSizeClass}`;

  return (
    <Tag
      className={`${variantClass} ${className}`}
      style={{ mixBlendMode: mixBlend ? 'normal' : 'normal' }}
    >
      {children}
    </Tag>
  );
};

export default Typography;
