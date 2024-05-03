import React from 'react';
import Typography from '../Typography';
import Image from 'next/image';

type Props = {
  title: string;
  body: () => React.ReactNode;
  imageSrc: string;
  backgroundColor: string;
  imageFirst?: boolean;
};

const InfoCardImage = ({
  title,
  body,
  imageSrc,
  backgroundColor,
  imageFirst = false,
}: Props) => {
  return (
    <article
      className={`desktop:flex-row desktop:rounded-[20px] flex flex-col ${backgroundColor} desktop:mx-15 py-15 desktop:p-0 px-6`}
    >
      <div
        className={`desktop:p-15 pt-15 flex-0 flex flex-shrink flex-col space-y-6 ${imageFirst ? 'desktop:order-2 order-2' : ' desktop:order-1 order-2'}`}
      >
        <Typography as="h3">{title}</Typography>
        {body()}
      </div>
      <div
        className={`desktop:w-[460px] relative min-h-[460px] w-full flex-shrink-0 overflow-hidden rounded-[20px] ${imageFirst ? 'desktop:order-1 desktop:rounded-r-none desktop:rounded-l-[20px] order-1' : ' desktop:order-2 desktop:rounded-l-none desktop:rounded-r-[20px] order-1'}`}
      >
        <Image src={imageSrc} fill className="object-cover" alt={title} />
      </div>
    </article>
  );
};

export default InfoCardImage;
