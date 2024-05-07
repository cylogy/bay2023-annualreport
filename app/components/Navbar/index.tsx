import Link from 'next/link';
import React from 'react';
import { links } from '@/utils/constants';
import { Button } from '../Button';
import './style.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="header sticky top-0 z-50 bg-white">
      <Link href={'/'}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.01 / 20, duration: 0.2 },
          }}
        >
          <Image
            className="logo-img"
            alt="Baaqmd Header Logo"
            src="/img/baaqmd-logo-fullcolor-black-2.png"
            width={186.15}
            height={32.19}
          />
        </motion.div>
      </Link>
      <div className="nav-wrapper">
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.2 },
          }}
          className="nav-links"
        >
          {links.map((link, index) => (
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: index / 20, duration: 0.2 },
              }}
              key={link.id}
            >
              <Link
                className="nav-item font-body-text font-semibold tracking-[8%]"
                href={link.to}
              >
                {link.title}
              </Link>
            </motion.li>
          ))}
          <Button
            color="brick"
            icon={false}
            size="large"
            text="DOWNLOAD PDF"
            type="filled"
            downloadPdfClassName="download-pdf"
          />
        </motion.ul>
      </div>
      <div className="hamburger-menu-wrapper"></div>
    </nav>
  );
};

export default Navbar;
