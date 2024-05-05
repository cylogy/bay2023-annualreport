import React, { FC } from 'react'
import Hero from '../../components/Hero'
import TextBlock from '@/app/components/TextBlock'
import Typography from '@/app/components/Typography'
import Navigation from '@/app/components/Navigation'
import { InfoCard } from '@/app/components/InfoCard'

const page: FC = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Hero
        title='Advocacy'
        description="How Are We Championing Legislation to Protect Air Quality?"
        image="/img/frame-19722-2.png"
        imageTablet="/img/frame-19722-2.png"
        background="bg-light-blue text-white"
        alt='Advocacy'
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

    <section className='desktop:pr-9 desktop:max-w-[1200px] place-self-end w-full'>
      <div className='desktop:space-y-0 relative flex w-full flex-col justify-center space-y-9 h-auto bg-teal desktop:rounded-[20px] desktop:p-9 p-6'>
        <Typography as="h3" className=" text-dark-blue uppercase">
          AB 617 statewide funding
        </Typography>
        <div className="flex flex-col desktop:flex-row space-y-9 desktop:space-y-0 desktop:space-x-9 desktop:pt-6 desktop:min-h-[370px]">
          <InfoCard
            cardTitle="$60M"
            cardBody="for implementation"
            backgroundColor="light-blue"
            allwidth
          />
          <InfoCard
            cardTitle="$234M"
            cardBody="For incentives"
            backgroundColor="green"
            allwidth
          />
          <InfoCard
            cardTitle="$6M"
            cardBody="Community grants"
            backgroundColor="dark-blue"
            allwidth
          />
        </div>
        <Typography as="p" className="text-dark-gray py-9">
          From this funding, we are expecting to receive:
        </Typography>
        <div className="flex flex-col desktop:flex-row space-y-9 desktop:space-y-0 desktop:space-x-9 w-full desktop:h-[249px] desktop:min-h-[370px]">
          <InfoCard
            cardTitle="$11M"
            cardBody="For implementation"
            backgroundColor="white"
            allwidth
          />
          <InfoCard
            cardTitle="~$33M"
            cardBody="For our incentive programs"
            backgroundColor="light-blue"
            allwidth
          />
        </div>
      </div>
    </section>
      <section className='desktop:max-w-[1200px] place-self-end flex flex-col desktop:flex-row space-y-9 desktop:space-y-0 desktop:space-x-9 desktop:pt-6 w-full desktop:min-h-[370px] desktop:py-15 py-9 px-6 desktop:pr-9 desktop:pl-0'>
        <InfoCard
          cardTitle="$80M"
          cardBody="for a suite of statewide equity transportation programs, including, but not limited to, the Clean Cars For All Program."
          backgroundColor="dark-blue"
          allwidth
        />
        <InfoCard
          cardTitle="$310.5M"
          cardBody="for the Equitable Building Decarbonization Program."
          backgroundColor="white"
          allwidth
        />
      </section>
      <section className='desktop:max-w-[1200px] place-self-end flex flex-col space-y-9 desktop:space-y-0 desktop:pt-6 w-full  desktop:py-15 py-9 px-6 desktop:pr-9 desktop:pl-0'>
        <div className="w-full pb-1 border-b-2 border-dark-blue desktop:mb-6">
          <Typography as="h3" className=" text-dark-blue uppercase">
            Bills we sponsored that passed
          </Typography>
        </div>
        <div className="desktop:min-h-[370px]">
          <InfoCard
            cardTitle="AB 536"
            cardBody="AB 536 (Wilson) – Repeals the compensation prohibition for the Air District’s Advisory Council and allows members to receive compensation for attending specified meetings."
            backgroundColor="green"
            allwidth
          />
        </div>
      </section>
      <Navigation nextLink="/about-us" prevLink="/by-the-numbers" />
    </div>
  )
}

export default page