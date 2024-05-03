import Link from 'next/link';
import React from 'react';
import { links } from '@/utils/constants';
import { Button } from '../Button';
import './style.css';
import Image from 'next/image';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="header bg-white">
      <Link href={'/'}>
        <Image
          className="logo-img"
          alt="Baaqmd Header Logo"
          src="/img/baaqmd-logo-fullcolor-black-2.png"
          width={186.15}
          height={32.19}
        />
      </Link>
      <div className="nav-wrapper">
        <div className="nav-links">
          {links.map((link) => (
            <Link key={link.id} className="nav-item" href={link.to}>
              {link.title}
            </Link>
          ))}
        </div>
        <Button
          color="brick"
          icon={false}
          size="large"
          text="DOWNLOAD PDF"
          type="filled"
          downloadPdfClassName="download-pdf"
        />
      </div>
      <div className="hamburger-menu-wrapper"></div>
    </nav>
  );
};

export default Navbar;
