import React from 'react';
import Typography from '../Typography';
import Image from 'next/image';
import AnimatedImage from '../AnimatedImage';

type Props = {
  title: string;
  body: () => React.ReactNode;
  imageSrc: string;
  backgroundColor: string;
  imageFirst?: boolean;
  alt: string;
  imageTablet?: string;
};

const InfoCardImage = ({
  title,
  body,
  imageSrc,
  backgroundColor,
  imageFirst = false,
  alt,
  imageTablet,
}: Props) => {
  return (
    <article
      className={`flex h-full flex-col text-left desktop:flex-row desktop:rounded-[20px] ${backgroundColor} px-6 py-15 desktop:mx-15 desktop:p-0`}
    >
      <div
        className={`flex-0 flex flex-shrink flex-col items-center justify-start space-y-6 pt-15 text-left desktop:px-15 desktop:py-10 ${imageFirst ? 'order-2 desktop:order-2' : ' order-2 desktop:order-1'}`}
      >
        <Typography as="h3" className="uppercase">
          {title}
        </Typography>
        {body()}
      </div>
      <AnimatedImage
        key={`tablet-${title}`}
        className={`relative flex h-[350px] w-full flex-shrink-0 overflow-hidden rounded-[20px] desktop:hidden desktop:min-h-[460px] desktop:w-[460px] ${imageFirst ? 'order-1 desktop:order-1 desktop:rounded-l-[20px] desktop:rounded-r-none' : ' order-1 desktop:order-2 desktop:rounded-l-none desktop:rounded-r-[20px]'}`}
      >
        <Image
          src={imageTablet ? imageTablet : imageSrc}
          fill
          className="object-cover object-[0%_55%]"
          alt={alt}
          priority
        />
      </AnimatedImage>
      <AnimatedImage
        key={title}
        className={`relative hidden h-full w-full flex-shrink-0 overflow-hidden rounded-[20px] desktop:flex desktop:min-h-[460px] desktop:w-[460px] ${imageFirst ? 'order-1 desktop:order-1 desktop:rounded-l-[20px] desktop:rounded-r-none' : ' order-1 desktop:order-2 desktop:rounded-l-none desktop:rounded-r-[20px]'}`}
      >
        <Image
          src={imageSrc}
          fill
          className="object-cover object-bottom"
          alt={alt}
        />
      </AnimatedImage>
    </article>
  );
};

export default InfoCardImage;
