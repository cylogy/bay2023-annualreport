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
  oneLine?: boolean;
  centered?: boolean;
};

const defaultAnimations = {
  hidden: {
    y: '110%',
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      damping: 7,
      stiffness: 30,
      velocity: 50,
      mass: 0.5,
      times: [0, 0.1, 0.9, 1],
    },
  },
};

const Animated = ({
  text,
  as: Tag = 'p',
  className,
  oneLine,
  centered,
}: Props) => {
  return (
    <Tag className={`${className}`}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.02, delay: 0.5 } },
          hidden: {},
        }}
        aria-hidden
        className={`${oneLine ? 'flex w-full flex-nowrap whitespace-nowrap' : 'flex w-full flex-wrap'} ${centered ? 'items-center justify-center' : ''}`}
      >
        {text.split(' ').map((word, index) => (
          <span
            key={`${index}-${word}`}
            className={`flex  justify-start whitespace-nowrap tablet-portrait:inline-block`}
          >
            {word.split('').map((char, index) => (
              <motion.span
                key={`${index}-${char}`}
                className="inline-block flex-nowrap"
                variants={defaultAnimations}
              >
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
};

export default Animated;
