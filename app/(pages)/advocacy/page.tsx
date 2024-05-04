import React, { FC } from 'react'
import Hero from '../../components/Hero'
import TextBlock from '@/app/components/TextBlock'
import Typography from '@/app/components/Typography'

const page: FC = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Hero
        title='Advocacy'
        description="How Are We Championing Legislation to Protect Air Quality?"
        image="/img/frame-19722-2.png"
        imageTablet="/img/frame-19722-2.png"
        background="bg-light-blue text-white"
      />
      <TextBlock align="left">
        <div className="desktop:pt-40 desktop:pl-25 tablet-portrait:px-15 tablet-portrait:pt-22.5 tablet-portrait:pb-20 desktop:pb-20 desktop:max-w-[855px] flex w-full flex-col place-self-start px-5 pb-6 pt-20">
          <Typography as="h2" className=" text-dark-blue uppercase">
            From the State Capitol
          </Typography>
          <Typography as="p" className=" text-dark-blue mt-6">
            Statewide 2023 funding that will cover several of our programs:
          </Typography>
        </div>
      </TextBlock>
    </div>
  )
}

export default page