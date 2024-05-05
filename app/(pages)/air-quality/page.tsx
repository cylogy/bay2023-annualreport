'use client';

import Hero from '@/app/components/Hero';
import { InfoCard } from '@/app/components/InfoCard';
import InfoCardImage from '@/app/components/InfoCardImage';
import TextBlock from '@/app/components/TextBlock';
import Typography from '@/app/components/Typography';
import Image from 'next/image';
import React from 'react';
import Navigation from '@/app/components/Navigation';
import dynamic from 'next/dynamic';
import Carousel from '@/app/components/Carousel';
import {
  greenhouseEmissions,
  nitrogenOxidePollution,
  particulatePollution,
} from '@/utils/constants';

const PieChartWithoutSSR = dynamic(
  () => import('@/app/components/PieChartWithoutSSR'),
  { ssr: false },
);

type Props = {};

const AirQuality = (props: Props) => {
  const slides = [
    () => (
      <article className="tablet-portrait:h-[617.17px] desktop:h-[786px] relative flex h-[247px] w-full">
        <Image
          src="/img/rectangle-255-2.png"
          fill
          className="object-cover"
          alt="Technicians analyzing machinery for air quality"
        />
      </article>
    ),
    () => (
      <article className="tablet-portrait:h-[617.17px] desktop:h-[786px] relative flex h-[247px] w-full">
        <Image
          src="/img/rectangle-256.png"
          fill
          className="object-cover"
          alt="Attendees participating in the Air Quality Foundation's workshop"
        />
      </article>
    ),
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Hero
        title="Air quality"
        description="How Do We Track Air Quality?"
        background="bg-light-blue text-dark-blue"
        image="/img/frame-19722-(2).png"
        imageTablet="/img/frame-19722-13.png"
        imageLast
        alt="Close-up of a Bay Air Center"
      />
      <TextBlock align="left">
        <div className="desktop:mt-40 mt-22.5 desktop:max-w-[855px] desktop:mx-25 flex w-full flex-col">
          <Typography
            as="h3"
            className="text-dark-blue desktop:p-0 px-15 capitalize"
          >
            AIR DISTRICT MONITORING SITES
          </Typography>
          <Typography
            as="p"
            className="text-dark-blue desktop:p-0 px-15 mb-20 mt-6"
          >
            Our air monitoring network{' '}
            <span className="font-bold">
              {' '}
              measures concentrations of ground-level pollutants
            </span>{' '}
            using monitoring methods set by the U.S. Environmental Protection
            Agency and other state-of-the-art instruments. This data{' '}
            <span className="font-bold">
              tracks trends in air pollution levels, demonstrates compliance
              with health-based air quality standards, and informs air quality
              forecasts, regional and local air quality plans, air quality
              modeling, and research on the health effects of air pollution.
            </span>{' '}
            <br />
            Pollutants measured by the monitoring network include ozone, carbon
            monoxide, nitrogen oxides, sulfur dioxide, particulate matter,
            ultrafine particulate matter, lead, black carbon, hydrogen sulfide,
            and volatile organic compounds, including many toxic air
            contaminants. We also monitor for ozone precursors and the
            composition of particles, which improve our understanding of high
            ozone and particulate matter events.
          </Typography>
        </div>
      </TextBlock>
      <section className="desktop:flex-row desktop:pl-25 desktop:pr-[30px]  desktop:space-x-9 desktop:mb-25 desktop:space-y-0 px-15 mb-20 flex w-full flex-col justify-between space-y-9">
        <div className="border-dark-blue desktop:w-[447px] flex h-min w-full items-center space-x-6 border-b">
          <div className="bg-teal border-dark-blue block h-10 w-10 rounded-full border">
            &nbsp;
          </div>
          <Typography as="h3" className="text-dark-blue pb-2">
            AIR MONITORING SITES
          </Typography>
        </div>
        <div className="border-dark-blue relative flex flex-1 justify-center rounded-[20px] border p-10">
          <Image
            alt="Map showing air monitoring sites"
            src="/img/map1.png"
            width={755.91}
            height={910}
            className="m-10 object-contain"
          />
        </div>
      </section>
      <section className="desktop:flex-row desktop:h-[610px] desktop:space-y-0 py-25 desktop:py-36 desktop:px-20 desktop:space-x-9 relative flex w-full flex-col justify-center space-y-9 px-6">
        <Image
          src="/img/background1.png"
          fill
          alt="Close-up of foliage"
          className="absolute -z-10 object-cover object-center opacity-40"
        />
        <InfoCard
          cardTitle="31"
          cardBody="total air monitoring sites across the Bay Area"
          backgroundColor="blue"
        />
        <InfoCard
          cardTitle="10"
          cardBody="different pollutants are measured by our monitoring network"
          backgroundColor="white"
        />
        <InfoCard
          cardTitle="&ldquo;"
          cardBody="Our air monitoring network measures ground-level pollutants"
          backgroundColor="dark-blue"
        />
      </section>
      <TextBlock align="left">
        <div className="desktop:mt-40 mt-22.5 desktop:max-w-[855px] desktop:mx-25 flex w-full flex-col">
          <Typography
            as="h3"
            className="text-dark-blue desktop:p-0 px-15 capitalize"
          >
            EPA Health Standards for Particulate Matter
          </Typography>
          <Typography as="p" className="text-dark-blue desktop:p-0 px-15 mt-6">
            We fully supported the EPA’s lowering of the National Ambient Air
            Quality Standards (NAAQS) for particulate matter pollution. The
            NAAQS are designed to{' '}
            <span className="font-bold">
              protect public health to an adequate margin of safety and protect
              the public against adverse effects.
            </span>{' '}
            Exposure to fine particulate matter is an important driver of health
            risk throughout the Bay Area and is linked to serious respiratory
            illnesses and increased risk of heart attacks. Exposure is
            especially harmful for children, the elderly, and those with
            respiratory conditions.
          </Typography>
        </div>
      </TextBlock>
      <section className="desktop:space-y-40 mt-40 flex w-full flex-col">
        <InfoCardImage
          backgroundColor="bg-green text-white"
          title="East Oakland Community Air Monitoring Partnership"
          body={() => (
            <Typography as="p" className="leading-8">
              We launched a three-year community air monitoring project in
              partnership with Communities for a Better Environment (CBE) to
              characterize local-scale air quality impacts in East Oakland
              supported by a U.S. EPA American Rescue Plan Enhanced Air Quality
              Monitoring for Communities Grant. We will work with CBE to{' '}
              <span className="font-bold">
                {' '}
                design and implement air monitoring to assess the impacts of
                sources or areas of interest to the community.
              </span>{' '}
              Air quality data from local pollution sources in overburdened
              communities and the effectiveness of exposure reduction measures
              can help inform our programs.
            </Typography>
          )}
          alt="Truck in urban traffic"
          imageFirst
          imageSrc="/img/image-square-3-2.png"
        />
      </section>
      <TextBlock align="left">
        <div className="desktop:mt-40 mt-22.5 desktop:max-w-[855px] desktop:mx-25 flex w-full flex-col">
          <Typography
            as="h3"
            className="text-dark-blue desktop:p-0 px-15 capitalize"
          >
            Bay Air Center Launches Public Website
          </Typography>
          <Typography as="p" className="text-dark-blue desktop:p-0 px-15 mt-6">
            We sponsored the Bay Air Center as a resource that offers{' '}
            <span className="font-bold">
              {' '}
              technical guidance, materials, and training on air monitoring and
              air quality data for community-based organizations,
            </span>{' '}
            with the goal of supporting their efforts to understand and improve
            air quality. The website provides detailed information on the
            program, a way to request support, and an extensive resource library
            that includes materials developed by the Bay Air Center as well as
            external links to materials that cover a variety of air
            quality-related topics.
          </Typography>
        </div>
      </TextBlock>
      <section className="pl-15 desktop:pl-25 mb-40 mt-12 flex w-full">
        <Carousel slideComponents={slides} />
      </section>
      <section className="desktop:h-[1281px] fill-blue relative flex w-full overflow-hidden">
        <div className="bg-light-blue/20 absolute bottom-0 left-0 right-0 top-0 -z-10 block">
          &nbsp;
        </div>
        <Image
          src="/img/trail-in-the-forest.png"
          fill
          alt="Trail in the forest"
          className=" -z-20 object-cover opacity-30"
        />
        <article className="mx-auto flex flex-col items-center justify-center overflow-hidden">
          <div className="desktop:mt-40 mt-22.5 desktop:max-w-[1317px] desktop:mx-25 flex w-full flex-col overflow-hidden">
            <Typography
              as="h2"
              className="text-dark-blue desktop:p-0 px-15 capitalize"
            >
              Ad Hoc Committee on Incident Response Program Improvements
            </Typography>
            <Typography
              as="p"
              className="text-gray desktop:p-0 px-15 text-body-text-desktop mt-6 leading-9"
            >
              Our Board of Directors formed an ad hoc committee to strengthen
              our incident response program through increased coordination with
              our government and community partners. The committee identified
              ways to provide information more quickly to the public when an
              incident occurs, including our methods of response and potential
              impacts on air quality. The ad hoc committee has also discussed
              opportunities to fill gaps in monitoring, which will be considered
              as part of upcoming strategic planning and budget processes.
            </Typography>
            <div className="tablet-portrait:mt-20 tablet-portrait:ml-15 desktop:ml-0 relative mt-10 flex h-[531px] w-[1440px]">
              <Image
                src="/img/rectangle-255-3.png"
                fill
                alt="Residential street with fog from power plant chimneys in the background"
              />
            </div>
          </div>
        </article>
      </section>
      <section className="desktop:px-25 tablet-portrait:px-12 desktop:flex-row flex w-full flex-col items-start justify-between gap-x-9 px-6 py-40">
        <div className="border-dark-blue desktop:w-[447px] flex h-min w-full items-center space-x-6 border-b">
          <Typography as="h3" className="text-dark-blue pb-2 uppercase">
            LABORATORY
          </Typography>
        </div>
        <article className="bg-green py-15 desktop:max-w-[800px] desktop:mt-0 mt-9 flex w-full flex-1 flex-col space-y-6 rounded-[20px] px-9 text-white">
          <Typography as="h5">2023 Analyses Performed in the Lab*</Typography>
          <div className="flex w-full items-center justify-between">
            <Typography as="p">Particulate Matter</Typography>
            <Typography as="h5">3,988</Typography>
          </div>
          <div className="flex w-full items-center justify-between">
            <Typography as="p">Toxics</Typography>
            <Typography as="h5">1,118</Typography>
          </div>
          <div className="flex w-full items-center justify-between">
            <Typography as="p">Source-Oriented Analyses</Typography>
            <Typography as="h5">41</Typography>
          </div>
          <div className="flex w-full items-center justify-between">
            <Typography as="p">Interagency and Development Projects</Typography>
            <Typography as="h5">0</Typography>
          </div>
          <div className="flex w-full items-center justify-between border-t border-white pt-4">
            <Typography as="h5">Total</Typography>
            <Typography as="h5">5,147</Typography>
          </div>
          <div className="flex w-full items-center justify-between">
            <Typography
              as="p"
              className="desktop:text-caption-desktop tablet:text-caption-tablet text-caption-mobile"
            >
              *Samples provide information about pollutant levels in ambient
              air, which help to identify areas for further reductions.
            </Typography>
          </div>
        </article>
      </section>
      <section className="desktop:px-25 tablet-portrait:px-12 desktop:flex-row flex w-full flex-col items-start justify-between gap-x-9 px-6 py-40">
        <div className="border-dark-blue desktop:w-[447px] flex h-min w-full items-center space-x-6 border-b">
          <Typography as="h3" className="text-dark-blue pb-2 uppercase">
            EXCEEDANCES OF AIR QUALITY STANDARDS
          </Typography>
        </div>
        <article className="border-gray py-15 desktop:max-w-[800px] desktop:mt-0 text-dark-gray mt-9 flex w-full flex-1 flex-col space-y-6 rounded-[20px] border bg-white px-9">
          <Typography as="h5">OZONE</Typography>
          <div className="flex w-full items-center justify-between">
            <Typography as="p">Days over National 8-Hour Standard</Typography>
            <Typography as="h5" className="relative">
              4{' '}
              <span className="absolute -right-4 -top-1 align-text-top font-bold">
                *
              </span>
            </Typography>
          </div>
          <div className="flex w-full items-center justify-between">
            <Typography as="p">Days over California 1-Hour Standard</Typography>
            <Typography as="h5">0</Typography>
          </div>
          <div className="flex w-full items-center justify-between">
            <Typography as="p">Days over California 8-Hour Standard</Typography>
            <Typography as="h5" className="relative">
              4{' '}
              <span className="absolute -right-4 -top-1 align-text-top font-bold">
                *
              </span>
            </Typography>
          </div>
          <Typography as="h5">PARTICULATE MATTER</Typography>
          <div className="flex w-full items-center justify-between">
            <Typography as="p">
              Days over National 24-Hour PM10 Standard
            </Typography>
            <Typography as="h5" className="relative">
              0{' '}
              <span className="absolute -right-4 -top-1 align-text-top font-bold">
                *
              </span>
            </Typography>
          </div>
          <div className="flex w-full items-center justify-between">
            <Typography as="p">
              Days over California 24-Hour PM10 Standard
            </Typography>
            <Typography as="h5" className="relative">
              0{' '}
              <span className="absolute -right-4 -top-1 align-text-top font-bold">
                *
              </span>
            </Typography>
          </div>
          <div className="flex w-full items-center justify-between">
            <Typography as="p">
              Days over National 24-Hour PM2.5 Standard
            </Typography>
            <Typography as="h5">3</Typography>
          </div>
          <Typography
            as="p"
            className="desktop:text-caption-desktop tablet:text-caption-tablet text-caption-mobile"
          >
            *Pending final certification <br />
            Final certification of exceedance data will occur May 1, 2024..
          </Typography>
        </article>
      </section>
      <section className="relative flex w-full flex-col">
        <div className="bg-light-blue/20 absolute bottom-0 left-0 right-0 top-0 -z-10 block">
          &nbsp;
        </div>
        <Image
          src="/img/trail-in-the-forest.png"
          fill
          alt="Trail in the forest"
          className=" -z-20 object-cover opacity-30"
        />
        <TextBlock align="left">
          <div className="desktop:mt-40 mt-22.5 desktop:pl-25 desktop:pr-[30px] tablet-portrait:px-12 flex w-full flex-1 flex-grow flex-col px-6">
            <div className="border-dark-blue desktop:mb-[120px] mb-20 flex h-min w-full flex-1 items-center space-x-6 border-b">
              <Typography as="h3" className="text-dark-blue pb-2 uppercase">
                Bay Area Pollution Sources
              </Typography>
            </div>
            <div className="border-dark-blue desktop:mb-[120px] mb-9 flex h-min w-full flex-1 items-center space-x-6 border-b">
              <Typography as="h3" className="text-dark-blue relative pb-2">
                SOURCES OF GREENHOUSE GAS EMISSIONS{' '}
                <span className="text-body-text-desktop absolute -right-4 -top-2 align-text-top font-bold">
                  a
                </span>
              </Typography>
            </div>
            <PieChartWithoutSSR data={greenhouseEmissions} />
            <div className="border-dark-blue desktop:mt-40 desktop:mb-[120px] mb-9 flex h-min w-full flex-1 items-center space-x-6 border-b">
              <Typography as="h3" className="text-dark-blue relative pb-2">
                SOURCES OF ANNUAL FINE PARTICULATE POLLUTION
                <span className="text-body-text-desktop absolute -right-4 -top-2 align-text-top font-bold">
                  d
                </span>
              </Typography>
            </div>
            <PieChartWithoutSSR data={particulatePollution} />
            <div className="border-dark-blue desktop:mt-40 desktop:mb-[120px] mb-9 flex h-min w-full flex-1 items-center space-x-6 border-b">
              <Typography as="h3" className="text-dark-blue relative pb-2">
                SOURCES OF ANNUAL NITROGEN OXIDE POLLUTION
                <span className="text-body-text-desktop absolute -right-4 -top-2 align-text-top font-bold">
                  d
                </span>
              </Typography>
            </div>
            <PieChartWithoutSSR data={nitrogenOxidePollution} />
          </div>
        </TextBlock>
        <Typography
          as="p"
          className="desktop:my-40 tablet-portrait:mb-25 mt-22.5 tablet-portrait:px-12 desktop:px-0 text-dark-blue mx-auto mb-6 flex w-full max-w-[1241px] flex-1 flex-grow flex-col px-6"
        >
          a The Air District’s latest greenhouse gas (GHG) emissions estimates
          can be found here: baaqmd.gov/capghg. These estimates do not reflect
          specific emissions changes in 2023 due to the impact of COVID-19
          pandemic or wildfires.
          <br />
          b This category includes GHG emissions from refining processes and
          combustion of gas, liquid and solid fuels at refineries; it does not
          include GHG emissions generated during cogeneration at refineries,
          which is included in the Electricity/Co-Generation category.
          <br />
          c This category includes GHG emissions from combustion and processes
          at cement plants, natural gas combustion, combustion of solid and
          liquid fuels in industries, natural gas distribution fugitive losses
          (primarily methane), and industrial process emissions.
          <br />
          d These percentage estimates are developed based on the Air District’s
          currently available regional inventory data. These estimates do not
          reflect specific emissions changes in 2023 due to the impact of
          COVID-19 pandemic or wildfires.
          <br />
          e This category includes wind-blown dust from agricultural land and
          dust from construction operations.
          <br />
          f This category includes construction and mining equipment,
          agricultural equipment, industrial and light commercial equipment, and
          airport ground support equipment, etc.
          <br />
          g This category includes trains, lawn and garden equipment and other
          off-road equipment.
          <br />
          h This category includes passenger cars, buses, motorcycles, etc.
          <br />
        </Typography>
      </section>
      <Navigation nextLink="/community" prevLink="/achievements" />
    </main>
  );
};

export default AirQuality;
