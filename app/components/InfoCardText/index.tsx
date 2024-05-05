import React from 'react';
import Typography from '../Typography';

type Props = {
  firstTitle: string;
  secondTitle: string;
  firstBody: string;
  secondBody: string;
  backgroundColor: 'white' | 'dark-blue' | 'blue';
  position: 'rigth' | 'left'
};

export const InfoCardText = ({
  firstTitle,
  secondTitle,
  firstBody,
  secondBody,
  backgroundColor = 'blue',
  position
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
  }

  const primaryRoundedPositon = {
    rigth: 'border rounded-r-[20px]',
    left: 'border rounded-l-[20px]',    
  }

  const variantSizeClass = styles[backgroundColor]; // handle case where Tag not found
  const cardPosition = positionStyles[position];
  const directionPositonSelcted = directionPositon[position]
  const primaryRoundedPositonSelected = primaryRoundedPositon[position]

  return (
    <article className={`${variantSizeClass} desktop:bg-transparent py-15 px-6 flex ${variantSizeClass} ${directionPositonSelcted}`}>
         <div className={`my-15 desktop:min-h-fit flex flex-col desktop:justify-between desktop:hidden`}>
            <Typography
                as="h3"
                className="text-white"
            >
              {secondTitle}
            </Typography>
            <Typography
                as="p"
                className="text-white mt-6 desktop:mt-0"
            >
                {secondBody}
            </Typography>
        </div>
        <div className={`p-10 min-h-[370px] desktop:min-h-[456px] desktop:flex desktop:flex-col hidden h-full ${variantSizeClass} ${cardPosition}`}>
            <Typography
                as="h3"
                className="text-white"
            >
              {secondTitle}
            </Typography>
            <Typography
                as="p"
                className="text-white mt-6 desktop:mt-0 desktop:text-[21px] desktop:pt-6"
            >
                {secondBody}
            </Typography>
        </div>
        <div
        className={`desktop:min-h-[456px] flex min-h-[370px] flex-col justify-between p-10 bg-white border rounded-[20px] border-dark-blue text-dark-blue desktop:hidden`}
        >
            <Typography as="h2">{firstTitle}</Typography>
            <Typography as="p">{firstBody}</Typography>
        </div>
        <div
        className={`desktop:min-h-[456px] desktop:flex h-full min-h-[370px] flex-col justify-between p-10  border-dark-blue text-dark-blue hidden ${primaryRoundedPositonSelected}`}
        >
            <Typography as="h2">{firstTitle}</Typography>
            <Typography as="p">{firstBody}</Typography>
        </div>
    </article>
  );
};
