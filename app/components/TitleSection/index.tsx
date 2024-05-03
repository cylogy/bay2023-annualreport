import Image, { StaticImageData } from 'next/image'
import React, { FC } from 'react'
import Typography from '../Typography'

interface Props {
    title: string;
    bannerImage: HTMLImageElement | string | StaticImageData;
    subTitle: string;
}

const index = ({
    bannerImage,
    title,
    subTitle
}: Props) => {
  return (
    <div className="h-[100dvh] flex flex-col xl:flex-row-reverse">
        <Image src={bannerImage} alt='Community header photo.png' className='object-cover sm:object-cover xl:object-contain h-[350px] w-full' />
        <div className="flex flex-col bg-green">
          <Typography as="h1" className="font-h6-desktop uppercase text-white">
            {title}
          </Typography>
          <Typography as="h6" className="font-h6-desktop uppercase text-white">
            {subTitle}
          </Typography>
        </div>
      </div>
  )
}

export default index