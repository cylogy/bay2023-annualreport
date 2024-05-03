import React from 'react';

type Props = {
  align?: 'left' | 'right';
  children: React.ReactNode;
};

const TextBlock = ({ align = 'right', children }: Props) => {
  return (
    <section
      className={`flex w-full flex-col${align === 'right' ? 'desktop:items-end desktop:justify-end' : 'desktop:items-start desktop:justify-start'} `}
    >
      {children}
    </section>
  );
};

export default TextBlock;
