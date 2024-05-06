'use client';

import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  key: number;
  className?: string;
  children: React.ReactNode;
};

const AnimatedTile = ({ key, className, children }: Props) => {
  return (
    <motion.article
      key={key}
      initial={{ x: '-100%', opacity: 0 }}
      animate={{
        x: 1,
        opacity: 1,
        transition: {
          staggerChildren: 2,
          stiffness: 10,
          mass: 0.1,
          delayChildren: 20,
        },
      }}
      exit={{ x: 0 }}
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

export default AnimatedTile;
