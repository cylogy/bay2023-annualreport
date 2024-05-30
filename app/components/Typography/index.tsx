import React from 'react';

type TypographyProps = {
  as?:
    | 'p'
    | 'span'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'label'
    | 'div'
    | 'blockquote';
  className?: string;
  children: React.ReactNode;
  mixBlend?: boolean;
  priorityClass?: string;
};

const variantSizes = {
  h1: 'text-h1-mobile tablet-portrait:text-h1-tablet desktop:text-h1-desktop font-h1 tracking-h1-mobile tablet-portrait:tracking-h1-tablet desktop:tracking-h1-desktop',
  h2: 'text-h2-mobile tablet-portrait:text-h2-tablet desktop:text-h2-desktop font-h2 tracking-h2-mobile tablet-portrait:tracking-h2-tablet desktop:tracking-h2-desktop',
  h3: 'text-h3-mobile tablet-portrait:text-h3-tablet desktop:text-h3-desktop font-h3 tracking-h3-mobile tablet-portrait:tracking-h3-tablet desktop:tracking-h3-desktop',
  h4: 'text-h4-mobile tablet-portrait:text-h4-tablet desktop:text-h4-desktop font-h4 tracking-h4-mobile tablet-portrait:tracking-h4-tablet desktop:tracking-h4-desktop',
  h5: 'text-h5-mobile tablet-portrait:text-h5-tablet desktop:text-h5-desktop font-h5 tracking-h5-mobile tablet-portrait:tracking-h5-tablet desktop:tracking-h5-desktop',
  h6: 'text-h6-mobile tablet-portrait:text-h6-tablet desktop:text-h6-desktop font-h6 tracking-h6-mobile tablet-portrait:tracking-h6-tablet desktop:tracking-h6-desktop',
  p: 'text-body font-body-text',
  span: 'text-body font-body-text',
  div: 'text-body font-body-text', // Add div variant size
  label: 'text-caption font-caption',
  blockquote:
    'text-pull-quote-mobile tablet-portrait:text-pull-quote-tablet desktop:text-pull-quote-desktop font-pull-quote tracking-pull-quote-mobile tablet-portrait:tracking-pull-quote-tablet desktop:tracking-pull-quote-desktop',
};

const Typography: React.FC<TypographyProps> = ({
  as: Tag = 'p', // Assigning default value 'p' to as prop
  className = '',
  children,
  mixBlend = false,
  priorityClass = '',
}) => {
  const variantSizeClass = variantSizes[Tag] || ''; // handle case where Tag not found
  const variantClass = `${variantSizeClass}`;

  return (
    <Tag
      className={`${priorityClass} ${variantClass} ${className}`}
      style={{ mixBlendMode: mixBlend ? 'normal' : 'normal' }}
    >
      {children}
    </Tag>
  );
};

export default Typography;
