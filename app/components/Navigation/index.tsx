'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'

type Props = {
  prevLink: string;
  nextLink: string;
};

const Navigation = ({ prevLink, nextLink }: Props) => {
  return (
    <motion.nav
      key={'navigation'}
      initial={{ x: '-100%', opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: {
          staggerChildren: 2,
          stiffness: 100,
          velocity: 20,
          damping: 20,
          type: 'spring',
          duration: 0.5,
        },
      }}
      viewport={{ once: true }}
      className="z-10 flex w-full items-center justify-between bg-dark-blue px-5 py-10 text-white">
      <Link href={prevLink}>
        <motion.button
          key={`32`}
          initial={{ opacity: 0 }}
          role="menuitem"
          whileInView={{
            opacity: 1,
            transition: { delay: 1 / 5, duration: 0.2 },
          }}
          className="nav-button" aria-label="Previous page"
          viewport={{ once: true }}
        >
          <Image
            src="/img/arrow-element-6.png"
            width={68}
            height={48}
            alt="Left arrow"
          />
        </motion.button>
      </Link>
      <Link href="/">
        <motion.button
          key={`2`}
          initial={{ opacity: 0, x: -100 }}
          role="menuitem"
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 2 / 5, duration: 0.2 },
          }}
          className="nav-button z-10" aria-label="Home"
          viewport={{ once: true }}
        >
          <div className="grid-group">
            {Array(9)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="square-block" />
              ))}
          </div>
        </motion.button>
      </Link>
      <Link href={nextLink}>
        <motion.button
          key={`3`}
          initial={{ opacity: 0, x: -100 }}
          role="menuitem"
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 3 / 5, duration: 0.2 },
          }}
          viewport={{ once: true }}
          className="nav-button"
          aria-label="Next page">
          <Image
            src="/img/arrow-element-7.png"
            width={68}
            height={48}
            alt="Right arrow"
          />
        </motion.button>
      </Link>
    </motion.nav >
  );
};

export default Navigation;
