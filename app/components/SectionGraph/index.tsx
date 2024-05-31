import React, { FC } from 'react';
import Typography from '../Typography';
import AnimatedTable from '../AnimatedTable';

interface GraphItem {
  title: string;
  value: number;
  percents?: any;
}

interface Props {
  title: string;
  options: GraphItem[];
  footerTitles?: string;
  background: 'white' | 'dark-blue' | 'light-blue' | 'blue';
  children?: React.ReactNode;
  headChildren?: React.ReactNode;
  textColor?: 'dark-blue' | 'dark-gray';
  smallSpacing?: boolean;
}

const index = ({
  title,
  options,
  footerTitles,
  background,
  children,
  headChildren,
  textColor = 'dark-blue',
  smallSpacing
}: Props) => {
  const cardColor = {
    white: 'bg-white text-dark-blue',
    'dark-blue': 'bg-dark-blue text-white',
    'light-blue': 'bg-light-blue text-white',
    blue: 'bg-blue text-white',
  };
  const textColorObject = {
    'dark-gray': 'text-dark-gray',
    'dark-blue': 'text-dark-blue',
  };

  const selectedCardColor = cardColor[background];
  return (
    <div
      className={`
     mb-8  flex w-full flex-col desktop:mb-25  
    desktop:flex-row desktop:justify-between desktop:space-x-9 
    ${!children ? 'mt-15' : 'mt-6'}
    `}
    >
      {headChildren ? (
        headChildren
      ) : (
        <Typography
          as="h3"
          className={`h-fit w-full border-b-2 border-dark-blue pb-2 text-h3-tablet uppercase text-dark-blue `}
        >
          {title}
        </Typography>
      )}

      <AnimatedTable
        className={`
        my-9 w-full rounded-[20px] border-2  
        p-6 desktop:my-0 desktop:min-w-[50%] desktop:px-20 desktop:py-15   
        ${children ? 'desktop:m-0 desktop:max-w-[50%] ' : ' desktop:max-w-[50%] '}  
        ${selectedCardColor}
        `}
      >
        {children ? (
          children
        ) : (
          <>
            <div className="flex flex-col space-y-9">
              {options.map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className="flex flex-col desktop:w-full desktop:flex-row desktop:justify-between"
                >
                  <Typography
                    as="span"
                    className="capitalize desktop:text-[21px]"
                  >
                    {item.title}
                  </Typography>
                  <div
                    className={`grid desktop:w-5/12 ${options[0].percents ? 'grid-cols-2 desktop:place-items-end ' : 'grid-cols-1 place-items-start desktop:place-items-end'} max-w-[170px] desktop:max-w-none  ${textColorObject[textColor]}`}
                  >
                    <Typography as="h5" className="uppercase ">
                      {item.value}
                    </Typography>
                    {item.percents && (
                      <Typography as="h5" className="uppercase">
                        {item.percents}%
                      </Typography>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex w-full justify-between border-t-2 border-dark-blue py-4 desktop:border-b-0 border-b-2">
              <Typography as="h5" className="capitalize text-dark-gray-letter">
                Total
              </Typography>
              <div
                className={`hidden w-5/12 desktop:grid ${options[0].percents ? 'grid-cols-2 place-items-end ' : 'grid-cols-1 place-items-start desktop:place-items-end'} max-w-[170px] text-dark-blue  desktop:max-w-none`}
              >
                <Typography as="h5" className="capitalize text-dark-gray-letter">
                  {options.reduce(
                    (accumulator: number, currentValue) =>
                      accumulator + currentValue.value,
                    0,
                  )}
                </Typography>
                {options[0].percents && (
                  <Typography as="h5" className="capitalize text-dark-gray-letter">
                    {Math.floor(
                      options.reduce(
                        (accumulator: number, currentValue) =>
                          accumulator + currentValue.percents,
                        0,
                      ),
                    )}
                    %
                  </Typography>
                )}
              </div>
            </div>
            <div
              className={`grid desktop:hidden ${options[0].percents ? 'grid-cols-2 ' : 'grid-cols-1 place-items-start desktop:place-items-end'}  mt-4 max-w-[170px] text-dark-gray  desktop:max-w-none`}
            >
              <Typography as="h5" className="capitalize">
                {options.reduce(
                  (accumulator: number, currentValue) =>
                    accumulator + currentValue.value,
                  0,
                )}
              </Typography>
              {options[0].percents && (
                <Typography as="h5" className="capitalize">
                  {Math.floor(
                    options.reduce(
                      (accumulator: number, currentValue) =>
                        accumulator + currentValue.percents,
                      0,
                    ),
                  )}
                  %
                </Typography>
              )}
            </div>
            {footerTitles && (
              <div className="mt-6">
                <Typography as="span" className="capitalize">
                  {footerTitles}
                </Typography>
              </div>
            )}
          </>
        )}
      </AnimatedTable>
    </div>
  );
};

export default index;
