import React from 'react';
import Typography from '../Typography';

type Props = {
  cardBody: string;
  cardTitle: string;
  backgroundColor: 'white' | 'dark-blue' | 'blue';
};

export const InfoCard = ({
  cardTitle,
  cardBody,
  backgroundColor = 'blue',
}: Props) => {
  const styles = {
    white: 'bg-white border border-dark-blue text-dark-blue',
    'dark-blue': 'bg-dark-blue text-white',
    blue: 'bg-blue text-white',
  };

  const variantSizeClass = styles[backgroundColor]; // handle case where Tag not found

  return (
    <article
      className={`desktop:min-h-fit flex min-h-[370px] flex-col justify-between rounded-[20px] p-10 ${variantSizeClass}`}
    >
      <Typography as="h2">{cardTitle}</Typography>
      <Typography as="p">{cardBody}</Typography>
    </article>
  );
};
