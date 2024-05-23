import React from 'react';
import Typography from '../Typography';

type Props = {
  firstTitle: string;
  secondTitle: string;
  firstBody: string;
  secondBody: string;
  backgroundColor: 'white' | 'dark-blue' | 'blue';
  position: 'rigth' | 'left';
};

export const InfoCardText = ({
  firstTitle,
  secondTitle,
  firstBody,
  secondBody,
  backgroundColor = 'blue',
  position,
}: Props) => {
  const styles = {
    white: 'bg-white',
    'dark-blue': 'bg-dark-blue',
    blue: 'bg-blue',
  };

  const positionStyles = {
    rigth: 'desktop:rounded-l-[20px]',
    left: 'desktop:rounded-r-[20px]',
  };

  const directionPositon = {
    rigth: 'flex-col desktop:flex-row',
    left: 'flex-col-reverse desktop:flex-row-reverse',
  };

  const primaryRoundedPositon = {
    rigth: 'border rounded-r-[20px]',
    left: 'border rounded-l-[20px]',
  };

  const variantSizeClass = styles[backgroundColor]; // handle case where Tag not found
  const cardPosition = positionStyles[position];
  const directionPositonSelcted = directionPositon[position];
  const primaryRoundedPositonSelected = primaryRoundedPositon[position];

  return (
    <article
      className={`${variantSizeClass} flex gap-y-14 px-6 py-15 desktop:bg-transparent ${variantSizeClass} ${directionPositonSelcted}`}
    >
      <div
        className={` flex flex-col desktop:hidden desktop:min-h-fit desktop:justify-between`}
      >
        <Typography as="h3" className="uppercase text-white">
          {secondTitle}
        </Typography>
        <Typography as="p" className="mt-6 text-white desktop:mt-0">
          {secondBody}
        </Typography>
      </div>
      <div
        className={`hidden h-full min-h-[370px] p-10 desktop:flex desktop:min-h-[456px] desktop:flex-col ${variantSizeClass} ${cardPosition}`}
      >
        <Typography as="h3" className="uppercase text-white">
          {secondTitle}
        </Typography>
        <Typography
          as="p"
          className="mt-6 text-white desktop:mt-0 desktop:pt-6 desktop:text-[21px]"
        >
          {secondBody}
        </Typography>
      </div>
      <div
        className={`flex min-h-[370px] flex-col justify-between rounded-[20px] border border-dark-blue bg-white p-10 text-dark-blue desktop:hidden desktop:min-h-[456px]`}
      >
        <Typography as="h2">{firstTitle}</Typography>
        <Typography as="p">{firstBody}</Typography>
      </div>
      <div
        className={`hidden h-full min-h-[370px] flex-col justify-between border-dark-blue p-10  text-dark-blue desktop:flex desktop:min-h-[456px] ${primaryRoundedPositonSelected}`}
      >
        <Typography as="h2">{firstTitle}</Typography>
        <Typography as="p">{firstBody}</Typography>
      </div>
    </article>
  );
};
