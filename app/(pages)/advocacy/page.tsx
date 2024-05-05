'use client'
import React, { FC, useEffect, useRef, useState } from 'react'
import Hero from '../../components/Hero'
import TextBlock from '@/app/components/TextBlock'
import Typography from '@/app/components/Typography'
import Navigation from '@/app/components/Navigation'
import { InfoCard } from '@/app/components/InfoCard'
import Carousel from '@/app/components/Carousel';
import InfoCardImage from '@/app/components/InfoCardImage'


const page: FC = () => {
  const [load, setLoad] = useState(false);
  const videoRef = useRef(null);

  const slides = [
    () => (
      <InfoCardImage
        backgroundColor="bg-blue text-white flex-1 h-full"
        imageSrc="/img/image-square-7.png"
        alt="Wildfire Smoke Response"
        imageFirst
        title="Wildfire Smoke Response"
        body={() => (
          <Typography as="p">
            In response to the recent wildfires in Canada affecting much of the East Coast and Midwest, we worked with California legislators at the federal level to reintroduce several smoke-related bills to expand clean air centers, home air filtration, and monitoring. While previous attempts were not successful, the additional regions of the U.S. experiencing wildfire smoke impacts have heightened awareness of this issue beyond the West Coast, which may assist in eventual funding in the federal budget.  
          </Typography>
        )}
      />
    ),
    () => (
      <InfoCardImage
        backgroundColor="bg-green text-white"
        imageSrc="/img/image-square-12-3.png"
        alt="Blue Skies Blue Whales Program"
        imageFirst
        title="Blue Skies Blue Whales Program"
        body={() => (
          <Typography as="p">
            In addition to introducing a bill at the state level to expand voluntary vessel speed reduction programs, our staff have worked along with the Santa Barbara County Air Pollution Control District to inform legislators at the federal level of our existing local program, and to solicit greater federal support through a budget appropriation or a bill to provide greater agency support.
          </Typography>
        )}
      />
    )
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setLoad(true);
        observer.disconnect();
      }
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

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
      <section className="pl-15 desktop:pl-6 desktop:flex mb-40 mt-12 hidden w-full">
        <Carousel
          slideComponents={slides}
          breakpoints={{
            1441: {
              // width: 768,
              slidesPerView: 1.1,
              spaceBetween: 0,
            },
          }}
        />
      </section>
      <section className="desktop:hidden mt-12 flex w-full flex-col">
        {slides.map((Component, index) => (
          <Component key={`slides-${index}`} />
        ))}
      </section>
      <Navigation nextLink="/about-us" prevLink="/by-the-numbers" />
    </div>
  )
}

export default page