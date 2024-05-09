import React, { FC } from 'react'
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
    background: "white" | "dark-blue" | "light-blue" | "blue";
    children?: React.ReactNode;
    headChildren?: React.ReactNode;
}

const index = ({
    title,
    options,
    footerTitles,
    background,
    children,
    headChildren
}:Props) => {
    
    const cardColor = {
        white: "bg-white text-dark-blue",
        "dark-blue": "bg-dark-blue text-white",
        "light-blue": "bg-light-blue text-white",
        blue: "bg-blue text-white"
    }

    const selectedCardColor = cardColor[background]
  return (
    <div className={`
    w-full flex flex-col mb-20  
    desktop:flex-row desktop:space-x-9 desktop:justify-between 
    ${!children ? "px-6 mt-15" : "mt-6"}
    `}>
        {
        headChildren ?
                headChildren
        :
            <Typography as="h2" className="w-full text-dark-blue uppercase pb-2 border-b-2 border-dark-blue h-fit">
                {title}
            </Typography>
        }

        <AnimatedTable className={`
        border-2 rounded-[20px] p-6 my-9  
        desktop:px-20 desktop:py-15 w-full desktop:min-w-[50%] desktop:my-0   
        ${children ? "desktop:max-w-[50%] desktop:m-0 " : " max-w-[50%] "}  
        ${selectedCardColor}
        `}>
            {children ?
                children
            :
            <>
                <div className="space-y-9 flex flex-col">
                    {options.map((item, index) => (
                        <div
                        key={`${item.title}-${index}`}
                        className='flex flex-col desktop:flex-row desktop:w-full desktop:justify-between'
                        >
                            <Typography as="span" className="capitalize desktop:text-[21px]">
                                {item.title}
                            </Typography>
                            <div className={`grid ${options[0].percents ? "grid-cols-2" : "grid-cols-1"} max-w-[170px] desktop:max-w-none `}>
                                <Typography as="h5" className="uppercase text-dark-blue">
                                    {item.value}
                                </Typography>
                                {item.percents &&
                                    <Typography as="h5" className="uppercase">
                                        {item.percents}%
                                    </Typography>
                                }
                            </div>
                        </div>
                    ))}
                </div>
                <div
                className="border-t-2 border-dark-blue w-full py-4 flex justify-between mt-6"
                >
                    <Typography as="h5" className="capitalize">
                    Total
                    </Typography>
                    <div
                        className="hidden desktop:flex desktop:space-x-16"
                    >
                        <Typography as="h5" className="capitalize">
                            {options.reduce(
                            (
                                accumulator: number,
                                currentValue
                            ) => accumulator + currentValue.value , 0)
                            }
                        </Typography>
                        {options[0].percents && 
                            <Typography as="h5" className="capitalize">
                                {Math.floor(options.reduce(
                                (
                                    accumulator: number,
                                    currentValue
                                ) => accumulator + currentValue.percents , 0))
                                }%
                            </Typography>
                        }
                    </div>
                </div>
                <div className='border-t-2 border-dark-blue w-full flex py-4 space-x-12 desktop:hidden'>
                    <Typography as="h5" className="capitalize">
                        {options.reduce(
                        (
                            accumulator: number,
                            currentValue
                        ) => accumulator + currentValue.value , 0)
                        }
                    </Typography>
                    {options[0].percents && 
                        <Typography as="h5" className="capitalize">
                            {Math.floor(options.reduce(
                            (
                                accumulator: number,
                                currentValue
                            ) => accumulator + currentValue.percents , 0))
                            }%
                        </Typography>
                    }
                </div>
                {footerTitles && 
                <div className="mt-6">
                <Typography as="span" className="capitalize">
                    {footerTitles}
                </Typography>
                </div>
                }
            </>
            }
         </AnimatedTable>
    </div>
  )
}

export default index