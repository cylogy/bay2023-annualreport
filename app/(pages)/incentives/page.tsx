import React, { FC } from 'react'
import Hero from '../../components/Hero'
import TextBlock from '@/app/components/TextBlock'
import Typography from '@/app/components/Typography'

const page: FC = () => {
  return (
    <div className='h-screen flex flex-col'>
      <Hero
        title='Incentives'
        description="How Do We Reduce Emissions and Protect Communities and the Climate?"
        image="/img/frame-19722.png"
        imageTablet="/img/frame-19722-3.png"
        background="bg-green text-white"
        finalReverse
      />
      <TextBlock align="left">
        <div className="desktop:pt-40 desktop:pl-25 tablet-portrait:px-15 tablet-portrait:pt-22.5 tablet-portrait:pb-20 desktop:pb-20 desktop:max-w-[855px] flex w-full flex-col place-self-start px-5 pb-6 pt-20">
          <Typography as="h2" className=" text-dark-blue uppercase">
          Climate Tech Finance
          </Typography>
          <Typography as="p" className=" text-dark-blue mt-6">
            TThis year, in partnership with IBank, our Climate Tech Finance program took significant steps in
            <span className="font-bold"> endorsing sustainable technological advancements.</span> 
          </Typography>
        </div>
      </TextBlock>
    </div>
  )
}

export default page