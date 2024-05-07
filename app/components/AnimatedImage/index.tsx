'use client';

import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  key: number;
  className?: string;
  children: React.ReactNode;
};

const AnimatedImage = ({ key, className, children }: Props) => {
  return (
    <motion.article
      key={key}
      initial={{ scale: 1.2, opacity: 0 }}
      animate={{
        scale: 1.1,
        opacity: 1,
        transition: {
          stiffness: 10,
          mass: 0.1,
          delayChildren: 20,
        },
      }}
      exit={{ scale: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.5,
      }}
      className={className}
    >
      {children}
    </motion.article>
  );
};

export default AnimatedImage;
