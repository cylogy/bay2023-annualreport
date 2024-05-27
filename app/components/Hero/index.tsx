import Image from 'next/image';
import React from 'react';
import Typography from '../Typography';
import AnimatedImage from '../AnimatedImage';
import Animated from '../Typography/animated';
import AnimatedTile from '../AnimatedTile';

type Props = {
  title: string;
  description?: string;
  image: any;
  imageTablet: any;
  background: string;
  alt: string;
  imageLast?: boolean;
  finalReverse?: boolean;
};

const Hero = ({
  title,
  description,
  image,
  imageTablet,
  background,
  imageLast,
  finalReverse,
  alt,
}: Props) => {
  return (
    <header
      className={`${finalReverse ? ' desktop:flex-row-reverse ' : ' desktop:flex-row '} flex w-full flex-col  desktop:h-120 ${imageLast ? 'justify-between' : ''} overflow-hidden`}
      role="banner"
    >
      <article className={`z-30 flex bg-white`} aria-label={title}>
        <AnimatedImage key={1} className="relative z-20 h-full w-full">
          <div className="relative flex h-[350px] w-full tablet-portrait:hidden desktop:flex desktop:h-full desktop:w-120">
            <Image
              priority
              src={image}
              fill
              alt={alt}
              className="object-cover"
            />
          </div>
          <div className="relative hidden h-[350px] w-full tablet-portrait:flex desktop:hidden">
            <Image
              priority
              src={imageTablet}
              fill
              alt={alt}
              className={`${title.toLowerCase() === 'community' ? 'object-[0%_20%]' : title.toLowerCase() === 'incentives' ? 'object-[0%_5%]' : title.toLowerCase() === 'introduction' ? 'object-[0%_5%]' : 'object-[0%_45%]'} object-cover `}
            />
          </div>
        </AnimatedImage>
      </article>

      <AnimatedTile
        id={2}
        className={`flex flex-1 flex-col items-start justify-center px-6 py-9 desktop:px-20 desktop:py-16 ${background}`}
      >
        <Animated
          text={title}
          className="overflow-hidden font-h1 text-h1-mobile uppercase leading-none tablet-portrait:text-h1-tablet desktop:text-h1-desktop"
          as="h1"
        />
        <Typography as="h6" className="uppercase tracking-h6-mobilev">
          {description}
        </Typography>
      </AnimatedTile>
    </header>
  );
};

export default Hero;
