import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { menuTransition } from '@/app/animations';
import Image from 'next/image';
import { links } from '@/utils/constants';
import Link from 'next/link';
import { Button } from '../Button';

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileMenu = ({ setIsOpen }: Props) => {
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <motion.div
      className="fixed left-0 top-0 z-[100] flex h-screen w-full -translate-x-1/2 flex-col items-center justify-start overflow-scroll bg-dark-blue px-6 py-9 text-white"
      variants={menuTransition}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        y: { type: 'easeInOut' },
        opacity: { transition: 0.2 },
      }}
      role="menu"
      aria-labelledby="mobile-menu"
    >
      <div className="flex w-full justify-end">
        <button
          className="focus:outline-none"
          onClick={() => setIsOpen(false)}
          aria-label="Close Menu"
          role="button"
        >
          <Image
            alt="Close Icon"
            src="/img/x-thin-svgrepo-com.svg"
            width={32}
            height={32}
          />
        </button>
      </div>
      <div className="mt-12 flex w-full flex-col items-center justify-start">
        <Image
          className="logo-img"
          alt="Baaqmd Header Logo"
          src="/img/BAAQMD_Logo_FullColor-Black 1.png"
          width={186.15}
          height={44.07}
        />

        <ul className="mt-6 flex w-full flex-col space-y-6">
          {links.map((link, index) => (
            <li key={`${index}-${link.to}`} className="w-full">
              <Link
                href={link.to}
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-between border-b border-white pb-6 pr-5 text-left font-proxima text-sm font-semibold tracking-[8%] text-white"
              >
                {link.title}
                <Image
                  alt="Arrow Icon"
                  src="/img/arrowRightOrange.svg"
                  width={20}
                  height={20}
                />
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex w-full justify-start">
          <Button
            color="brick"
            icon={false}
            size="large"
            text="DOWNLOAD PDF"
            type="filled"
            downloadPdfClassName="download-pdf"
          />
        </div>
        <div className="mt-4 flex w-full flex-col space-y-2">
          <p>Accessibility</p>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
