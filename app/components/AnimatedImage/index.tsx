'use client';

import React from 'react';
import { delay, motion } from 'framer-motion';

type Props = {
  key: number | string;
  className?: string;
  children: React.ReactNode;
};

const AnimatedImage = ({ key, className, children }: Props) => {
  return (
    <article
      className={`"flex w-full overflow-hidden bg-transparent ${className}`}
    >
      <motion.div
        key={key}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: {
            stiffness: 10,
            mass: 0.1,
            delayChildren: 20,
          },
        }}
        initial={{ scale: 1.2, opacity: 0 }}
        exit={{ scale: 1 }}
        transition={{
          ease: 'easeInOut',
          duration: 0.5,
        }}
        viewport={{ once: true }}
        className={`${className}`}
      >
        {children}
      </motion.div>
    </article>
  );
};

export default AnimatedImage;
