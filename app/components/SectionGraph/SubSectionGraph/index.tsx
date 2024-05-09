import React from 'react'
import Typography from '../../Typography'
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
}

const index = ({
    title,
    options,
    footerTitles,
    background,
}:Props) => {
  return (
    <div className='w-full flex flex-col px-6 mt-15 mb-20 desktop:flex-row desktop:justify-between desktop:space-x-9'>
        <Typography as="h2" className=" text-dark-blue uppercase pb-2 border-b-2 border-dark-blue h-fit">
            {title}
        </Typography>
        <AnimatedTable className={`border-2 border-dark-blue rounded-[20px] ${background} bg-white p-6 my-9 desktop:my-0 desktop:px-20 desktop:py-15 w-full max-w-[50%] desktop:min-w-[50%]`}>
                <div className="space-y-9 flex flex-col">
                    {options.map((item, index) => (
                        <div
                        key={`${item.title}-${index}`}
                        className='flex flex-col desktop:flex-row desktop:w-full desktop:justify-between'
                        >
                            <Typography as="span" className="capitalize desktop:text-[21px]">
                                {item.title}
                            </Typography>
                            <div className="grid grid-cols-1 max-w-[170px] desktop:max-w-none" >
                                <Typography as="h5" className="uppercase">
                                    {item.value}
                                </Typography>
                            </div>
                        </div>
                    ))}
                </div>

                {footerTitles && 
                <div className="mt-6">
                <Typography as="span" className="capitalize">
                    {footerTitles}
                </Typography>
                </div>
                }
         </AnimatedTable>        
    </div>
  )
}

export default index