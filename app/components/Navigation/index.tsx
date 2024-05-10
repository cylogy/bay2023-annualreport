import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  prevLink: string;
  nextLink: string;
};

const Navigation = ({ prevLink, nextLink }: Props) => {
  return (
    <nav className="z-10 flex w-full items-center justify-between bg-dark-blue px-5 py-10 text-white">
      <Link href={prevLink}>
        <button className="nav-button" aria-label="Previous page" role="button">
          <Image
            src="/img/arrow-element-6.png"
            width={68}
            height={48}
            alt="Left arrow"
          />
        </button>
      </Link>
      <Link href="/">
        <button className="nav-button" aria-label="Home" role="button">
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
        <button className="nav-button" aria-label="Next page" role="button">
          <Image
            src="/img/arrow-element-7.png"
            width={68}
            height={48}
            alt="Right arrow"
          />
        </button>
      </Link>
    </nav>
  );
};

export default Navigation;
