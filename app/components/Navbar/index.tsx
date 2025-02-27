'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { links } from '@/utils/constants';
import { Button } from '../Button';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import MobileMenu from './mobileMenu';
import './style.css';
import LightboxComponent from '../Lightbox';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(true);

  const path = usePathname()

  return (
    <nav className="header sticky top-0 z-50 bg-white" role="navigation">
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
          role="menubar"
        >
          {links.map((link, index) => (
            <motion.li
              key={`${index}-${link.to}`}
              initial={{ opacity: 0, y: -10 }}
              role="menuitem"
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: index / 20, duration: 0.2 },
              }}
            >
              <Link
                className="nav-item font-proxima font-semibold tracking-[8%]"
                href={link.to}
              >
                {link.title}
              </Link>
            </motion.li>
          ))}
          <a
            title="download pdf"
            href="/BAY_2023_AnnualReport.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <Button
              role="menuitem"
              color="brick"
              icon={false}
              size="large"
              text="DOWNLOAD PDF"
              type="filled"
              downloadPdfClassName="download-pdf"
            />
          </a>
        </motion.ul>
      </div>
      <div
        className="hamburger-menu-wrapper"
        role="button"
        aria-label="Toggle Menu"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            setIsOpen(!isOpen);
          }
        }}
        tabIndex={0}
      ></div>
      <AnimatePresence mode="popLayout">
        {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
      </AnimatePresence>
      {path === '/' && (
        <LightboxComponent open={open} setOpen={setOpen} />
      )}
    </nav>
  );
};

export default Navbar;
