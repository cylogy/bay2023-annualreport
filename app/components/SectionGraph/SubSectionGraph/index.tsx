import React from 'react';
import Typography from '../../Typography';
import AnimatedTable from '../../AnimatedTable';

interface GraphItem {
  title: string;
  value: string;
}

interface Props {
  title: string;
  options: GraphItem[];
  footerTitles?: string;
  background: string;
  textColor?: 'dark-blue' | 'dark-gray';
}

const index = ({
  title,
  options,
  footerTitles,
  background,
  textColor = 'dark-blue',
}: Props) => {
  const textColorObject = {
    'dark-gray': 'text-dark-gray',
    'dark-blue': 'text-dark-blue',
  };

  return (
    <div className="mb-20 mt-15 flex w-full flex-col desktop:flex-row desktop:justify-between desktop:space-x-9">
      <Typography
        as="h2"
        className=" h-fit border-b-2 border-dark-blue pb-2 uppercase text-dark-blue"
      >
        {title}
      </Typography>
      <AnimatedTable
        className={`rounded-[20px] border-2 border-dark-blue ${background} my-9 w-full bg-white p-6 desktop:my-0 desktop:min-w-[50%] desktop:max-w-[50%] desktop:px-20 desktop:py-15`}
      >
        <div className="flex flex-col space-y-9">
          {options.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className={`flex flex-col desktop:w-full desktop:flex-row desktop:justify-between ${textColorObject[textColor]}`}
            >
              <Typography as="span" className="capitalize desktop:text-[21px]">
                {item.title}
              </Typography>
              <div className="grid max-w-[170px] grid-cols-1 desktop:max-w-none">
                <Typography as="h5" className="uppercase">
                  {item.value}
                </Typography>
              </div>
            </div>
          ))}
        </div>

        {footerTitles && (
          <div className="mt-6">
            <Typography as="span" className="capitalize">
              {footerTitles}
            </Typography>
          </div>
        )}
      </AnimatedTable>
    </div>
  );
};

export default index;
