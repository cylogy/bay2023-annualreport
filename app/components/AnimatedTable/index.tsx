'use client';

import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  className?: string;
  children: React.ReactNode;
};

const AnimatedTable = ({ className, children }: Props) => {
  return (
    <motion.article
      initial={{ y: '-10%', opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          staggerChildren: 2,
          stiffness: 10,
          mass: 0.1,
          delayChildren: 20,
        },
      }}
      exit={{ y: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.5,
      }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.article>
  );
};

export default AnimatedTable;
