'use client';

import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  id: number;
  className?: string;
  children: React.ReactNode;
};

const AnimatedTile = ({ id, className, children }: Props) => {
  return (
    <motion.article
      key={id}
      initial={{ x: '-100%', opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: {
          staggerChildren: 2,
          stiffness: 10,
          mass: 0.1,
          delayChildren: 20,
        },
      }}
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

export default AnimatedTile;
