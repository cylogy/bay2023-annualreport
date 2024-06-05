'use client';
import React, { FC, useEffect, useRef, useState } from 'react';
import Hero from '../../components/Hero';
import TextBlock from '@/app/components/TextBlock';
import Typography from '@/app/components/Typography';
import Navigation from '@/app/components/Navigation';
import { InfoCard } from '@/app/components/InfoCard';
import Carousel from '@/app/components/Carousel';
import InfoCardImage from '@/app/components/InfoCardImage';

const Document: FC = () => {
  const [load, setLoad] = useState(false);
  const videoRef = useRef(null);

  const slides = [
    () => (
      <InfoCardImage
        backgroundColor="bg-blue text-white flex-1 h-full"
        imageSrc="/img/Image Square.png"
        alt="Wildfire Smoke Response"
        imageFirst
        title="Wildfire Smoke Response"
        body={() => (
          <Typography as="p">
            In response to the recent wildfires in Canada affecting much of the
            East Coast and Midwest, we worked with California legislators at the
            federal level to reintroduce several smoke-related bills to expand
            clean air centers, home air filtration, and monitoring. While
            previous attempts were not successful, the additional regions of the
            U.S. experiencing wildfire smoke impacts have heightened awareness
            of this issue beyond the West Coast, which may assist in eventual
            funding in the federal budget.
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
            In addition to introducing a bill at the state level to expand
            voluntary vessel speed reduction programs, our staff have worked
            along with the Santa Barbara County Air Pollution Control District
            to inform legislators at the federal level of our existing local
            program, and to solicit greater federal support through a budget
            appropriation or a bill to provide greater agency support.
          </Typography>
        )}
      />
    ),
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
    <div className="flex min-h-screen flex-col">
      <Hero
        title="Advocacy"
        description="How Are We Championing Legislation to Protect Air Quality?"
        image="/img/frame-19722-2.png"
        imageTablet="/img/frame-19722-2.png"
        background="bg-light-blue text-dark-blue"
        alt="Advocacy"
      />
      <TextBlock align="left">
        <div className="flex w-full flex-col place-self-start px-5 pb-6 pt-20 tablet-portrait:px-15 tablet-portrait:pb-20 tablet-portrait:pt-22.5 desktop:max-w-[855px] desktop:pb-20 desktop:pl-25 desktop:pt-40">
          <Typography as="h2" className=" uppercase text-dark-blue">
            From the State Capitol
          </Typography>
          <Typography as="p" className=" mt-6 text-dark-blue xs:text-[21px] md:text-[23px] lg:text-[26px]">
            Statewide 2023 funding that will cover several of our programs:
          </Typography>
        </div>
      </TextBlock>

      <section className="w-full place-self-end desktop:max-w-[1200px] desktop:pr-9">
        <div className="relative flex h-auto w-full flex-col justify-center space-y-9 bg-lighter-teal p-6 desktop:space-y-0 desktop:rounded-[20px] desktop:p-9">
          <Typography as="h3" className=" uppercase text-dark-blue">
            AB 617 statewide funding
          </Typography>
          <div className="flex flex-col space-y-9 min-h-[315px]  desktop:max-h-[290px] desktop:flex-row desktop:space-x-9 desktop:space-y-0 desktop:pt-6">
            <InfoCard
              cardTitle="$60M"
              cardBody="for implementation"
              backgroundColor="light-blue"
              allwidth
              small
            />
            <InfoCard
              cardTitle="$234M"
              cardBody="for incentives"
              backgroundColor="green"
              allwidth
              small
            />
            <InfoCard
              cardTitle="$6M"
              cardBody="community grants"
              backgroundColor="dark-blue"
              allwidth
              small
            />
          </div>
          <Typography as="p" className="pt-9 desktop:py-9 text-dark-gray">
            From this funding, we are expecting to receive:
          </Typography>
          <div className="flex flex-col space-y-9 min-h-[315px]  desktop:max-h-[290px] desktop:flex-row desktop:space-x-9 desktop:space-y-0">
            <InfoCard
              cardTitle="$11M"
              cardBody="for implementation"
              backgroundColor="white"
              allwidth
              small
            />
            <InfoCard
              cardTitle="~$33M"
              cardBody="for our incentive programs"
              backgroundColor="light-blue"
              allwidth
              small
            />
          </div>
        </div>
      </section>
      <section className="flex w-full mb-[30px] desktop:mb-[160px] flex-col space-y-9 place-self-end px-6 py-9 desktop:max-h-[290px] desktop:max-w-[1200px] desktop:flex-row desktop:space-x-9 desktop:space-y-0 desktop:py-15 desktop:pl-0 desktop:pr-9 desktop:pt-6">
        <InfoCard
          cardTitle="$80M"
          cardBody="for a suite of statewide equity transportation programs, including, but not limited to, the Clean Cars For All Program."
          backgroundColor="blue"
          allwidth
          small
        />
        <InfoCard
          cardTitle="$310.5M"
          cardBody="for the Equitable Building Decarbonization Program."
          backgroundColor="white"
          allwidth
          small
        />
      </section>
      <section className="flex w-full flex-col space-y-9 place-self-end px-6 py-9 desktop:max-w-[1200px]  desktop:space-y-0 desktop:py-15 desktop:pl-0 desktop:pr-9 desktop:pt-6">
        <div className="w-full border-b-2 border-dark-blue pb-1 desktop:mb-6">
          <Typography as="h3" className=" uppercase text-dark-blue">
            Bills we sponsored that passed
          </Typography>
        </div>
        <div className="desktop:min-h-[290px]">
          <InfoCard
            cardTitle="AB 536"
            cardBody="AB 536 (Wilson) – Repeals the compensation prohibition for the Air District’s Advisory Council and allows members to receive compensation for attending specified meetings."
            backgroundColor="green"
            allwidth
            small
          />
        </div>
      </section>
      <section className="mb-40 mt-12 hidden w-full pl-15 desktop:flex desktop:pl-6">
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
      <section className="mt-12 flex w-full flex-col desktop:hidden">
        {slides.map((Component, index) => (
          <Component key={`slides-${index}`} />
        ))}
      </section>
      <Navigation nextLink="/about-us" prevLink="/by-the-numbers" />
    </div>
  );
};

export default Document;
