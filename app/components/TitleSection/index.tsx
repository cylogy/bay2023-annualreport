import Image, { StaticImageData } from 'next/image';
import React, { FC } from 'react';
import Typography from '../Typography';

interface Props {
  title: string;
  bannerImage: HTMLImageElement | string | StaticImageData;
  subTitle: string;
}

const index = ({ bannerImage, title, subTitle }: Props) => {
  return (
    <div className="flex h-[100dvh] flex-col xl:flex-row-reverse">
      <Image
        src={bannerImage}
        alt="Community header photo.png"
        className="h-[350px] w-full object-cover sm:object-cover xl:object-contain"
      />
      <div className="bg-green flex flex-col">
        <Typography as="h1" className="font-h6-desktop uppercase text-white">
          {title}
        </Typography>
        <Typography as="h6" className="font-h6-desktop uppercase text-white">
          {subTitle}
        </Typography>
      </div>
    </div>
  );
};

export default index;
