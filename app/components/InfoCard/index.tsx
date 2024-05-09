'use client';

import React from 'react';
import Typography from '../Typography';
import { motion } from 'framer-motion';

type Props = {
  cardBody: string;
  cardTitle: string;
  backgroundColor: 'white' | 'dark-blue' | 'blue' | 'green' | 'light-blue';
  allwidth?: boolean;
  small?: boolean;
};

export const InfoCard = ({
  cardTitle,
  cardBody,
  backgroundColor = 'blue',
  allwidth,
  small
}: Props) => {
  const styles = {
    white: 'bg-white border border-dark-blue text-dark-blue',
    'dark-blue': 'bg-dark-blue text-white',
    blue: 'bg-blue text-white',
    green: 'bg-green text-white',
    'light-blue': 'bg-light-blue text-dark-blue',
  };

  const variantSizeClass = styles[backgroundColor]; // handle case where Tag not found

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
      className={`
      ${small && "desktop:max-h-[290px]"}
      ${allwidth && 'w-full desktop:h-[370px]'} ${variantSizeClass} 
      flex min-h-[370px] flex-col justify-between rounded-[20px] p-10 desktop:min-h-fit`}
    >
      <Typography as="h2">{cardTitle}</Typography>
      <Typography as="p">{cardBody}</Typography>
    </motion.article>
  );
};
