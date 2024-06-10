import React from 'react';

type Props = {
  align?: 'left' | 'right' | 'center';
  children: React.ReactNode;
};

const TextBlock = ({ align = 'right', children }: Props) => {
  return (
    <article
      className={`flex w-full flex-col ${
        align === 'right'
          ? 'desktop:items-end desktop:justify-end'
          : align === 'left'
          ? 'desktop:items-start desktop:justify-start'
          : align === 'center'
          ? 'desktop:items-center desktop:justify-center'
          : ''
      }`}
    >
      {children}
    </article>
  );
};

export default TextBlock;
