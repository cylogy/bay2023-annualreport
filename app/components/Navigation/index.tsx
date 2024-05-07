'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  prevLink: string;
  nextLink: string;
};

const Navigation = ({ prevLink, nextLink }: Props) => {
  return (
    <nav className="z-10 flex w-full items-center justify-between bg-dark-blue px-5 py-10 text-white">
      <Link href={prevLink}>
        <Image
          src="/img/arrow-element-6.png"
          width={68}
          height={48}
          alt="left-arrow"
        />
      </Link>
      <Link href="/">
        <button title="menu-viewer" className="menu-viewer">
          <div className="grid-group">
            {Array(9)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="square-block" />
              ))}
          </div>
        </button>
      </Link>
      <Link href={nextLink}>
        <Image
          src="/img/arrow-element-7.png"
          width={68}
          height={48}
          alt="right-arrow"
        />
      </Link>
    </nav>
  );
};

export default Navigation;
