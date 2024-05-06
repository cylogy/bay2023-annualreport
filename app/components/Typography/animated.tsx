import React from 'react';
import { AnimatePresence, delay, easeIn, motion, Variant } from 'framer-motion';

type Props = {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  repeatDelay?: number;
  animation?: {
    hidden: Variant;
    visible: Variant;
  };
};

const defaultAnimations = {
  hidden: {
    y: 90,
  },
  visible: {
    y: 0,
    transition: {
      ease: [0, 0.31, 0.35, 0.8],
      duration: 0.3,
      stiffnes: 100,
      mass: 0.2,
    },
  },
};

const Animated = ({ text, as: Tag = 'p', className }: Props) => {
  return (
    <Tag className={`${className}`}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.05 } },
          hidden: {},
        }}
        aria-hidden
      >
        {text.split('').map((char) => (
          <motion.span className="inline-block" variants={defaultAnimations}>
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
};

export default Animated;
