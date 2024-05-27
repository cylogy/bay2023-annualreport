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
  centered?: boolean;
};

export const InfoCard = ({
  cardTitle,
  cardBody,
  backgroundColor = 'blue',
  allwidth,
  small,
  centered = false,
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
      ${small && 'max-h-[305px] min-h-[305px] desktop:max-h-[290px]'}
      ${allwidth && 'w-full desktop:h-[370px]'} ${variantSizeClass} 
      flex min-h-[370px] flex-col ${centered ? 'justify-center' : 'justify-between'} rounded-[20px] p-10 desktop:min-h-fit`}
    >
      <h2
        className={`font-h1  ${cardTitle === '“' ? '-mb-20 text-[145px] leading-none' : 'text-h2-desktop'}`}
      >
        {cardTitle}
      </h2>
      <Typography
        as="p"
        className={` ${cardTitle === '“' ? 'text-caption-desktop desktop:text-pull-quote-desktop' : 'text-caption-desktop'}`}
      >
        {cardBody}
      </Typography>
    </motion.article>
  );
};
