'use client';

import React, { FC, useEffect, useRef, useState } from 'react';
import Hero from '../../components/Hero';
import TextBlock from '@/app/components/TextBlock';
import Typography from '@/app/components/Typography';
import Image from 'next/image';
import { InfoCard } from '@/app/components/InfoCard';
import Navigation from '@/app/components/Navigation';
import { InfoCardText } from '@/app/components/InfoCardText';
import Carousel from '@/app/components/Carousel';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const Document: FC = () => {
  const [load, setLoad] = useState(false);
  const videoRef = useRef(null);

  const slides = [
    () => (
      <div className="flex flex-col">
        <Typography
          as="h3"
          className=" mb-9 border-b-2 text-start uppercase text-dark-blue desktop:mx-15"
        >
          OFF-ROAD EQUIPMENT AND INFRASTRUCTURE
        </Typography>
        <div className="flex h-full flex-1 flex-col rounded-[20px] border-2 border-dark-blue bg-white p-6 px-6 py-15 text-left text-dark-blue desktop:mx-15 desktop:rounded-[20px] desktop:p-[80px]">
          <div className="flex w-full flex-col justify-between border-dark-blue pb-4 desktop:flex-row desktop:border-b-2">
            <Typography
              as="h5"
              className=" mb-4 border-b-2 pb-2 text-start uppercase text-dark-blue desktop:mb-0 desktop:border-b-0 desktop:pb-0"
            >
              TOTAL FUNDS AWARDED
            </Typography>
            <Typography
              as="h5"
              className=" text-start uppercase text-dark-blue"
            >
              $7.01M
            </Typography>
          </div>

          <Typography as="h5" className=" mt-10 text-start text-dark-blue">
            Estimated Annual Emissions Reduction for the Projects Funded
            (tons/year)
          </Typography>

          <div className="mt-6 flex flex-col text-dark-gray desktop:flex-row desktop:justify-between">
            <Typography as="span" className="text-start">
              Oxides of Nitrogen (NO<sub>x</sub>)
            </Typography>
            <Typography as="h5" className="text-start">
              17.2
            </Typography>
          </div>
          <div className="mt-6 flex flex-col text-dark-gray desktop:flex-row desktop:justify-between">
            <Typography as="span" className="text-start">
              Reactive Organic Compounds (ROG)
            </Typography>
            <Typography as="h5" className="text-start">
              1.9
            </Typography>
          </div>
          <div className="mt-6 flex flex-col text-dark-gray desktop:flex-row desktop:justify-between">
            <Typography as="span" className="text-start">
              Particulate Matter (PM<sub>10</sub>)
            </Typography>
            <Typography as="h5" className="text-start">
              1.2
            </Typography>
          </div>
          <div className="mt-6 flex w-full flex-col justify-between border-dark-blue pt-4 desktop:flex-row desktop:border-t-2">
            <Typography
              as="h5"
              className=" border-b-2 border-t-2 pb-2 pt-4 text-start text-dark-gray desktop:border-0 desktop:pb-0 desktop:pt-0"
            >
              Total
            </Typography>
            <Typography
              as="h5"
              className=" mt-2 text-start uppercase text-dark-gray desktop:mt-0"
            >
              20.3
            </Typography>
          </div>
        </div>
      </div>
    ),
    () => (
      <div className="flex flex-col">
        <Typography
          as="h3"
          className=" mb-9 border-b-2 text-start uppercase text-dark-blue desktop:mx-15"
        >
          On-Road Vehicles and Infrastructure
        </Typography>
        <div className="flex h-full flex-1 flex-col rounded-[20px] border-2 border-dark-gray bg-white p-6 px-6 py-15 text-left text-dark-blue desktop:mx-15 desktop:rounded-[20px] desktop:p-[80px]">
          <div className="flex w-full flex-col justify-between border-dark-blue pb-4 desktop:flex-row desktop:border-b-2">
            <Typography
              as="h5"
              className=" mb-4 border-b-2 pb-2 text-start uppercase text-dark-blue desktop:mb-0 desktop:border-b-0 desktop:pb-0"
            >
              TOTAL FUNDS AWARDED
            </Typography>
            <Typography
              as="h5"
              className=" text-start uppercase text-dark-blue"
            >
              $21.60M
            </Typography>
          </div>

          <Typography as="h5" className=" mt-10 text-start text-dark-blue">
            Estimated Annual Emissions Reduction for the Projects funded
            (tons/year)
          </Typography>

          <div className="mt-6 flex flex-col text-dark-gray desktop:flex-row desktop:justify-between">
            <Typography as="span" className="text-start">
              NO<sub>x</sub>
            </Typography>
            <Typography as="h5" className="text-start">
              3.0
            </Typography>
          </div>
          <div className="mt-6 flex flex-col text-dark-gray desktop:flex-row desktop:justify-between">
            <Typography as="span" className="text-start">
              ROG
            </Typography>
            <Typography as="h5" className="text-start">
              0.3
            </Typography>
          </div>
          <div className="mt-6 flex flex-col text-dark-gray desktop:flex-row desktop:justify-between">
            <Typography as="span" className="text-start">
              PM<sub>10</sub>
            </Typography>
            <Typography as="h5" className="text-start">
              0.0
            </Typography>
          </div>
          <div className="mt-6 flex w-full flex-col justify-between border-dark-gray pt-4 text-dark-gray desktop:flex-row desktop:border-t-2">
            <Typography
              as="h5"
              className=" border-b-2 border-t-2 pb-2 pt-4 text-start uppercase desktop:border-0 desktop:pb-0 desktop:pt-0"
            >
              Total
            </Typography>
            <Typography
              as="h5"
              className=" mt-2 text-start uppercase desktop:mt-0"
            >
              20.3
            </Typography>
          </div>
        </div>
      </div>
    ),
    () => (
      <div className="flex flex-col">
        <Typography
          as="h3"
          className=" mb-9 border-b-2 text-start uppercase text-dark-blue desktop:mx-15"
        >
          Other Projects (including Trip Reduction)
        </Typography>
        <div className="flex h-full flex-1 flex-col rounded-[20px] border-2 border-dark-blue bg-white p-6 px-6 py-15 text-left text-dark-blue desktop:mx-15 desktop:rounded-[20px] desktop:p-[80px]">
          <div className="flex w-full flex-col justify-between border-dark-blue pb-4 desktop:flex-row desktop:border-b-2">
            <Typography
              as="h5"
              className=" mb-4 border-b-2 pb-2 text-start uppercase text-dark-blue desktop:mb-0 desktop:border-b-0 desktop:pb-0"
            >
              TOTAL FUNDS AWARDED
            </Typography>
            <Typography
              as="h5"
              className=" text-start uppercase text-dark-blue"
            >
              $1.91M
            </Typography>
          </div>

          <Typography as="h5" className=" mt-10 text-start text-dark-blue">
            Estimated Annual Emissions Reduction for the Projects Funded
            (tons/year)
          </Typography>

          <div className="mt-6 flex flex-col text-dark-gray desktop:flex-row desktop:justify-between">
            <Typography as="span" className="text-start">
              NO<sub>x</sub>
            </Typography>
            <Typography as="h5" className="text-start">
              7.2
            </Typography>
          </div>
          <div className="mt-6 flex flex-col text-dark-gray desktop:flex-row desktop:justify-between">
            <Typography as="span" className="text-start">
              ROG
            </Typography>
            <Typography as="h5" className="text-start">
              8.9
            </Typography>
          </div>
          <div className="mt-6 flex flex-col text-dark-gray desktop:flex-row desktop:justify-between">
            <Typography as="span" className="text-start">
              PM<sub>10</sub>
            </Typography>
            <Typography as="h5" className="text-start">
              22.6
            </Typography>
          </div>
          <div className="mt-6 flex w-full flex-col justify-between border-dark-gray pt-4 desktop:flex-row desktop:border-t-2">
            <Typography
              as="h5"
              className=" border-b-2 border-t-2 pb-2 pt-4 text-start uppercase text-dark-gray desktop:border-0 desktop:pb-0 desktop:pt-0"
            >
              Total
            </Typography>
            <Typography
              as="h5"
              className=" mt-2 text-start uppercase text-dark-gray desktop:mt-0"
            >
              38.7
            </Typography>
          </div>
        </div>
      </div>
    ),
    () => (
      <div className="flex flex-col">
        <Typography
          as="h3"
          className=" mb-9 border-b-2 text-start uppercase text-dark-blue desktop:mx-15"
        >
          Congestion Management Agency Projects
        </Typography>
        <div className="flex h-full flex-1 flex-col rounded-[20px] border-2 border-dark-blue bg-white p-6 px-6 py-15 text-left text-dark-blue desktop:mx-15 desktop:rounded-[20px] desktop:p-[80px]">
          <div className="flex w-full flex-col justify-between border-dark-blue pb-4 desktop:flex-row desktop:border-b-2">
            <Typography
              as="h5"
              className=" mb-4 border-b-2 pb-2 text-start uppercase text-dark-blue desktop:mb-0 desktop:border-b-0 desktop:pb-0"
            >
              TOTAL FUNDS AWARDED
            </Typography>
            <Typography
              as="h5"
              className=" text-start uppercase text-dark-blue"
            >
              $12M
            </Typography>
          </div>

          <Typography as="h5" className=" mt-10 text-start text-dark-blue">
            Estimated Annual Emissions Reduction for the Projects Funded
            (tons/year)
          </Typography>

          <div className="mt-6 flex flex-col text-dark-gray desktop:flex-row desktop:justify-between">
            <Typography as="span" className="text-start">
              NO<sub>x</sub>
            </Typography>
            <Typography as="h5" className="text-start">
              12.7
            </Typography>
          </div>
          <div className="mt-6 flex flex-col text-dark-gray desktop:flex-row desktop:justify-between">
            <Typography as="span" className="text-start">
              ROG
            </Typography>
            <Typography as="h5" className="text-start">
              15.4
            </Typography>
          </div>
          <div className="mt-6 flex flex-col text-dark-gray desktop:flex-row desktop:justify-between">
            <Typography as="span" className="text-start">
              PM<sub>10</sub>
            </Typography>
            <Typography as="h5" className="text-start">
              38.1
            </Typography>
          </div>
          <div className="mt-6 flex w-full flex-col justify-between border-dark-gray pt-4 desktop:flex-row desktop:border-t-2">
            <Typography
              as="h5"
              className=" border-b-2 border-t-2 pb-2 pt-4 text-start uppercase text-dark-gray desktop:border-0 desktop:pb-0 desktop:pt-0"
            >
              Total
            </Typography>
            <Typography
              as="h5"
              className=" mt-2 text-start uppercase text-dark-gray desktop:mt-0"
            >
              66.2
            </Typography>
          </div>
        </div>
      </div>
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

  useIntersectionObserver()

  return (
    <div className="flex min-h-screen flex-col">
      <section className="card__reveal overlay__reveal w-full flex flex-col">
        <Hero
          title="Incentives"
          description="How Do We Reduce Emissions and Protect Communities and the Climate?"
          image="/img/frame-19722.png"
          imageTablet="/img/frame-19722-3.png"
          background="bg-green text-white"
          finalReverse
          alt="Incentives"
        />
        <TextBlock>
          <div className="flex w-full flex-col place-self-start px-5 pb-6 pt-20 tablet-portrait:px-15 tablet-portrait:pb-20 tablet-portrait:pt-22.5 desktop:ml-25 desktop:max-w-[855px] desktop:px-0 desktop:pb-20 desktop:pt-40">
            <Typography as="h2" className=" uppercase text-dark-blue">
              Climate Tech Finance
            </Typography>
            <Typography
              as="blockquote"
              className="mt-6 text-dark-blue desktop:p-0"
            >
              This year, in partnership with iBank, our Climate Tech Finance
              program took significant steps in
              <span className="font-pull-quote-mobile-bold tablet-portrait:font-pull-quote-tablet-bold desktop:font-pull-quote-desktop-bold">
                {' '}
                endorsing sustainable technological advancements.
              </span>
            </Typography>
          </div>
        </TextBlock>
        <TextBlock>
          <div className="flex w-full flex-col items-start justify-start place-self-end px-6 tablet-portrait:px-15 desktop:max-w-[75%] desktop:pl-0">
            <Typography as="p" className=" text-dark-gray desktop:pl-0">
              We awarded a loan guarantee to
              <span className="font-bold"> SPARKZ</span>, whose energy storage
              solution reduces the cost of domestic lithium battery production by
              eliminating the cobalt and nickel traditionally used in their
              manufacturing. The pioneering process developed by SPARKZ not only
              lowers the cost of lithium-ion batteries, it removes environmental
              concerns around mining cobalt, and reduces constrictions created by
              a foreign supply chain. Another loan guarantee was awarded to
              <span className="font-bold"> EV Life</span>, a startup whose goal is
              making electric vehicles (EVs) more accessible by spearheading
              solutions to eliminate the 'green premium' — the additional cost
              often associated with eco-friendly options. Their efforts are
              focused on making electric driving an achievable dream for millions
              deterred by the hefty initial cost of EVs. The most recent loan
              guarantee we awarded was to
              <span className="font-bold"> One Way Trigger</span>, a company that
              specializes in pavement preservation techniques as a greener and
              more cost-effective alternative to traditional road maintenance.
              This approach not only optimizes taxpayer dollars, but also reduces
              greenhouse gas emissions, curtails energy demands, and ensures
              quicker application times.
            </Typography>
          </div>
        </TextBlock>
        <TextBlock>
          <div className="mt-10 flex w-full flex-col  items-start justify-start place-self-end px-6 tablet-portrait:px-15 desktop:max-w-[75%] desktop:pl-0">
            <Typography
              as="h3"
              className=" break-all uppercase text-dark-blue desktop:pl-0"
            >
              Supporting Electric Vehicle Adoption
            </Typography>
            <Typography as="p" className="mt-6 text-dark-gray desktop:pl-0">
              We continued our commitment to accelerating electric vehicle
              adoption in the Bay Area. The
              <span className="font-bold"> Charge! Program </span>
              provided nearly $10 million in grants to fund 1,070 charging
              stations at 100 sites across the Bay Area. The
              <span className="font-bold">
                {' '}
                Clean Cars for All (CCFA) Program{' '}
              </span>
              helped income-qualified residents replace older vehicles with clean
              air vehicles or mobility options, such as public transit cards or
              electric bicycles. CCFA received $31 million in funding from the
              California Air Resources Board in 2023, bringing the total program
              funding to $73 million. CCFA has awarded nearly $37 million to over
              4,400 residents since the program began in March 2019. The program
              relaunched in Fall 2023 with increased grant award amounts and will
              expand zip code eligibility to all Bay Area residents in 2024.
            </Typography>
            <Typography as="p" className="mt-4  text-dark-gray desktop:pl-0">
              Additionally, we were awarded nearly $3 million in funding from the
              California Energy Commission (CEC) to expand equitable EV charging
              across the Bay Area. We are working with project partners and
              community stakeholders to deploy over 200 charging stations in
              Oakland, Richmond, San Pablo, and Vallejo. These chargers will serve
              multifamily residents, focusing on affordable and public housing
              residents. The CEC grant, in conjunction with our Charge! Program
              and CCFA Program, will help the Bay Area transition to a clean
              transportation economy and provide long-term economic,
              environmental, and health benefits.
            </Typography>
          </div>
        </TextBlock>

        <section
          className="
      relative mt-10
      flex w-full flex-col justify-center space-y-9 place-self-end px-6 py-25 desktop:h-[610px] desktop:max-w-[75%] desktop:flex-row desktop:space-x-9  desktop:space-y-0 desktop:px-0 desktop:py-36 desktop:pr-15"
        >
          <InfoCard
            cardTitle="3"
            cardBody="sustainable technological advances were awarded loan guarantees through the Climate Tech Finance Program"
            backgroundColor="dark-blue"
          />
          <InfoCard
            cardTitle="1,070"
            cardBody="electric vehicle charging stations were funded through the Charge! Program"
            backgroundColor="white"
          />
          <InfoCard
            cardTitle="4,400+"
            cardBody="residents have participated in the Clean Cars For All Program since it began in March 2019"
            backgroundColor="blue"
          />
        </section>
        <section className="relative flex w-full flex-col justify-center place-self-end px-6  desktop:max-w-[75%] desktop:space-y-0 desktop:px-0 desktop:pr-15">
          <Typography as="h2" className="uppercase text-dark-blue">
            Clean Ports
          </Typography>
          <Typography as="p" className="pt-6 text-dark-gray">
            We prioritized grant funding for the upgrade and replacement of older
            diesel-powered equipment and marine vessels servicing ports to
            accelerate emissions reductions in West Oakland and Richmond
            communities.
          </Typography>
        </section>
        <section
          className="relative flex h-[350px]
     w-full flex-col justify-center place-self-end py-25 desktop:mt-0 desktop:h-[610px] desktop:max-w-[75%] desktop:space-y-0 desktop:px-0 desktop:py-36 desktop:pr-15"
        >
          <Image
            src="/img/port-image.png"
            alt="port image"
            fill
            className="mt-6 block object-cover desktop:mt-12 desktop:h-[531px]"
          />
        </section>
        <section className="relative mt-6 flex w-full flex-col justify-center place-self-end desktop:mt-0 desktop:space-y-0 desktop:px-15 desktop:py-36">
          <InfoCardText
            firstTitle="$30M"
            secondTitle="Heavy-Duty Vehicle and Equipment Electric Charging Infrastructure"
            firstBody="in funding was offered for projects to install charging stations for heavy- and medium-duty vehicles and equipment"
            secondBody="This competitive grant program offered $30 million in funding for projects to install electric charging stations for heavy- and medium-duty vehicles and equipment. Installation of charging stations is a critical first step in helping accelerate the  transition toward zero-emission fleets that reduce emissions in Bay Area communities most affected by air pollution."
            backgroundColor="blue"
            position="left"
          />
          <InfoCardText
            firstTitle="40"
            secondTitle="CLEANER SCHOOL BUSES"
            firstBody="new school buses were funded through our grant program"
            secondBody="We prioritized grant funding to support the accelerated replacement of older, diesel-powered school buses with zero-emission buses to protect student health and achieve significant air quality benefits for this highly sensitive group."
            backgroundColor="dark-blue"
            position="rigth"
          />
        </section>
      </section>
      <section className='card__reveal'>
        <div className="relative mt-12 hidden w-full flex-col bg-transparent pb-10 pl-15 desktop:flex desktop:pl-6 desktop:pt-[160px]">
          <Image
            src="/img/Frame 19849.png"
            alt="Close-up of foliage"
            className="-z-[5] flex object-cover object-top"
            fill
          />
          <Typography
            as="h3"
            className=" mb-15 ml-15 h-fit border-b-2 border-dark-blue pb-2 uppercase text-dark-blue"
          >
            2023 EMISSION REDUCTIONS FROM AIR DISTRICT INCENTIVE PROJECTS
          </Typography>

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
        </div>
      </section>
      <section className="relative flex w-full flex-col space-y-[60px] px-6 py-15 desktop:hidden desktop:px-0">
        <Image
          src="/img/Frame 19854.png"
          alt="Close-up of foliage"
          className="-z-[5] flex object-cover object-top"
          fill
        />
        <Typography
          as="h3"
          className=" h-fit border-b-2 border-dark-blue pb-2 uppercase text-dark-blue"
        >
          2023 EMISSION REDUCTIONS FROM AIR DISTRICT INCENTIVE PROJECTS
        </Typography>

        {slides.map((Component, index) => (
          <Component key={`slides-${index}`} />
        ))}
      </section>
      <Navigation prevLink="/community" nextLink="/by-the-numbers" />
    </div>
  );
};

export default Document;
