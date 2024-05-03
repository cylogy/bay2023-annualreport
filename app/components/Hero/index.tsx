import Image from 'next/image';
import React from 'react';
import Typography from '../Typography';

type Props = {
  title: string;
  description?: string;
  image: string;
  imageTablet: string;
  background: string;
  imageLast?: boolean;
  finalReverse?: boolean
};

const Hero = ({
  title,
  description,
  image,
  imageTablet,
  background,
  imageLast,
  finalReverse
}: Props) => {
  return (
    <article
      className={`${finalReverse ? " desktop:flex-row-reverse " : " desktop:flex-row "} desktop:h-120 flex flex-col ${background} w-full ${imageLast ? 'justify-between' : ''}`}
    >
      <div
        className={`tablet-portrait:hidden desktop:w-120 desktop:h-full desktop:flex relative flex h-[350px] w-full ${imageLast ? 'desktop:order-2' : ''}`}
      >
        <Image src={image} fill alt="" className="object-cover" />
      </div>
      <div className="tablet-portrait:flex desktop:hidden relative hidden h-[350px] w-full">
        <Image
          src={imageTablet}
          fill
          alt=""
          className="object-cover object-top"
        />
      </div>
      <div className="flex flex-col items-start justify-center p-20 w-full">
        <Typography as="h1" className="uppercase">
          {title}
        </Typography>
        <Typography as="h6" className="uppercase">
          {description}
        </Typography>
      </div>
    </article>
  );
};

export default Hero;
