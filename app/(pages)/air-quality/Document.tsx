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
import AnimatedTable from '@/app/components/AnimatedTable';
import AnimatedImage from '@/app/components/AnimatedImage';
import { Controller, Scene } from 'react-scrollmagic-r18';

const PieChartWithoutSSR = dynamic(
  () => import('@/app/components/PieChartWithoutSSR'),
  { ssr: false },
);

type Props = {};

const Document = (props: Props) => {
  const slides = [
    () => (
      <article className="relative flex h-[247px] w-full tablet-portrait:h-[617.17px] desktop:h-[786px]">
        <Image
          src="/img/rectangle-255-2.png"
          fill
          className="object-cover"
          alt="Technicians analyzing machinery for air quality"
        />
      </article>
    ),
    () => (
      <article className="relative flex h-[247px] w-full tablet-portrait:h-[617.17px] desktop:h-[786px]">
        <Image
          src="/img/rectangle-256.jpg"
          fill
          className="object-cover"
          alt="Attendees participating in the Air Quality Foundation's workshop"
        />
      </article>
    ),
  ];

  return (
    <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
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
          <div className="mt-22.5 flex w-full flex-col desktop:mx-25 desktop:mt-40 desktop:max-w-[855px]">
            <Typography
              as="h3"
              className=" px-4 capitalize text-dark-blue tablet-landscape:px-15 desktop:p-0"
            >
              AIR DISTRICT MONITORING SITES
            </Typography>
            <Typography
              as="p"
              className="mb-20 mt-6 px-4 text-pull-quote-tablet text-dark-blue tablet-landscape:px-15 desktop:p-0"
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
              Pollutants measured by the monitoring network include ozone,
              carbon monoxide, nitrogen oxides, sulfur dioxide, particulate
              matter, ultrafine particulate matter, lead, black carbon, hydrogen
              sulfide, and volatile organic compounds, including many toxic air
              contaminants. We also monitor for ozone precursors and the
              composition of particles, which improve our understanding of high
              ozone and particulate matter events.
            </Typography>
          </div>
        </TextBlock>
        <section className="mb-20 flex w-full flex-col justify-center space-y-9 px-4 tablet-landscape:px-15 desktop:mb-25 desktop:flex-row desktop:items-start desktop:space-x-9 desktop:space-y-0 desktop:pl-25 desktop:pr-[30px]">
          <div className="flex h-min w-full items-center space-x-6 border-b border-dark-blue desktop:w-[447px]">
            <div className="mb-2 block h-10 w-10 flex-shrink-0 rounded-full border border-dark-blue bg-teal">
              &nbsp;
            </div>
            <Typography as="h3" className="pb-2 text-dark-blue">
              AIR MONITORING SITES
            </Typography>
          </div>
          <div className="relative flex flex-1 justify-center rounded-[20px] border border-dark-blue p-10">
            <AnimatedImage key={4} className="flex items-center justify-center">
              <Image
                alt="Map showing air monitoring sites"
                src="/img/map1.png"
                width={755.91}
                height={910}
                className="m-10 object-contain"
              />
            </AnimatedImage>
          </div>
        </section>
        <section className="relative flex w-full flex-col justify-center space-y-9 px-6 py-25 desktop:h-[610px] desktop:flex-row desktop:space-x-9 desktop:space-y-0 desktop:px-20 desktop:py-36">
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
            cardTitle="132"
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
          <div className="mt-22.5 flex w-full flex-col px-5 tablet-portrait:px-15  desktop:mt-40 desktop:max-w-[855px] desktop:px-25">
            <Typography
              as="h2"
              className=" uppercase text-dark-blue desktop:p-0"
            >
              EPA Health Standards for Particulate Matter
            </Typography>
            <Typography as="p" className="mt-6 text-dark-gray desktop:p-0">
              We fully supported the EPA’s lowering of the National Ambient Air
              Quality Standards (NAAQS) for particulate matter pollution. The
              NAAQS are designed to{' '}
              <span className="font-bold">
                protect public health to an adequate margin of safety and
                protect the public against adverse effects.
              </span>{' '}
              Exposure to fine particulate matter is an important driver of
              health risk throughout the Bay Area and is linked to serious
              respiratory illnesses and increased risk of heart attacks.
              Exposure is especially harmful for children, the elderly, and
              those with respiratory conditions.
            </Typography>
          </div>
        </TextBlock>
        <section className="mt-40 flex w-full flex-col desktop:space-y-40  desktop:px-10">
          <InfoCardImage
            backgroundColor="bg-green text-white"
            title="East Oakland Community Air Monitoring Partnership"
            body={() => (
              <Typography as="p" className="leading-8">
                We launched a three-year community air monitoring project in
                partnership with Communities for a Better Environment (CBE) to
                characterize local-scale air quality impacts in East Oakland
                supported by a U.S. EPA American Rescue Plan Enhanced Air
                Quality Monitoring for Communities Grant. We will work with CBE
                to{' '}
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
            imageTablet="/img/Image Square Large.jpeg"
          />
        </section>
        <TextBlock align="left">
          <div className="mt-22.5 flex w-full flex-col px-5 desktop:mx-15 desktop:mt-40 desktop:max-w-[855px]  desktop:px-10">
            <Typography as="h3" className="mt-6 text-dark-blue desktop:p-0">
              Bay Air Center Launches Public Website
            </Typography>
            <Typography as="p" className="mt-6 text-dark-blue desktop:p-0">
              We sponsored the Bay Air Center as a resource that offers{' '}
              <span className="font-bold">
                {' '}
                technical guidance, materials, and training on air monitoring
                and air quality data for community-based organizations,
              </span>{' '}
              with the goal of supporting their efforts to understand and
              improve air quality. The website provides detailed information on
              the program, a way to request support, and an extensive resource
              library that includes materials developed by the Bay Air Center as
              well as external links to materials that cover a variety of air
              quality-related topics.
            </Typography>
          </div>
        </TextBlock>
        <section className="mb-40 mt-12 flex w-full pl-5 tablet-landscape:pl-15 desktop:pl-25">
          <Carousel slideComponents={slides} />
        </section>
        <section className="relative flex w-full justify-center overflow-hidden fill-blue desktop:h-[1281px] desktop:justify-end">
          <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 block bg-light-blue/20">
            &nbsp;
          </div>
          <Scene pin>
            <Image
              src="/img/trail-in-the-forest.png"
              fill
              alt="Trail in the forest"
              className=" -z-20 object-cover opacity-30"
            />
          </Scene>
          <article className=" flex w-full flex-col items-center justify-center overflow-hidden desktop:flex-[0.8] desktop:items-end">
            <div className=" mt-22.5 flex w-full flex-col overflow-hidden px-5 desktop:mt-40 desktop:max-w-[1317px] desktop:self-start desktop:pr-10">
              <Typography
                as="h2"
                className="capitalize text-dark-blue desktop:p-0"
              >
                Ad Hoc Committee on Incident Response Program Improvements
              </Typography>
              <Typography
                as="p"
                className="mb-10 mt-6 text-body-text-desktop leading-9 text-dark-gray tablet-portrait:mb-20 desktop:p-0"
              >
                Our Board of Directors formed an ad hoc committee to strengthen
                our incident response program through increased coordination
                with our government and community partners. The committee
                identified ways to provide information more quickly to the
                public when an incident occurs, including our methods of
                response and potential impacts on air quality. The ad hoc
                committee has also discussed opportunities to fill gaps in
                monitoring, which will be considered as part of upcoming
                strategic planning and budget processes.
              </Typography>
            </div>
            <AnimatedImage
              key={23}
              className="tablet-desktop:hidden relative flex h-[531px] w-full"
            >
              <Image
                src="/img/rectangle-255-5.jpg"
                fill
                className="object-cover object-[0%_55%]"
                alt="Residential street with fog from power plant chimneys in the background"
              />
            </AnimatedImage>
            <AnimatedImage
              key={23}
              className="tablet-desktop:flex relative hidden h-[531px] w-full"
            >
              <Image
                src="/img/1 image.jpg"
                fill
                className="object-cover "
                alt="Residential street with fog from power plant chimneys in the background"
              />
            </AnimatedImage>
          </article>
        </section>
        <Scene pin>
          <>
            <section className="flex w-full flex-col items-start justify-between gap-x-9 bg-white px-5 pb-25 pt-15 tablet-portrait:px-12 desktop:flex-row desktop:px-25">
              <div className="flex h-min w-full items-center space-x-6 border-b border-dark-blue desktop:w-[447px]">
                <Typography as="h3" className="pb-2 uppercase text-dark-blue">
                  LABORATORY
                </Typography>
              </div>
              <AnimatedTable className="mt-9 flex w-full flex-1 flex-col space-y-6 rounded-[20px] bg-green px-9 py-15 text-white desktop:mt-0 desktop:max-w-[800px]">
                <Typography as="h5">
                  2023 Analyses Performed in the Lab*
                </Typography>
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
                  <Typography as="p">
                    Interagency and Development Projects
                  </Typography>
                  <Typography as="h5">0</Typography>
                </div>
                <div className="flex w-full items-center justify-between border-t border-white pt-4">
                  <Typography as="h5">Total</Typography>
                  <Typography as="h5">5,147</Typography>
                </div>
                <div className="flex w-full items-center justify-between">
                  <Typography
                    as="p"
                    className="tablet:text-caption-tablet text-caption-mobile desktop:text-caption-desktop"
                  >
                    *Samples provide information about pollutant levels in
                    ambient air, which help to identify areas for further
                    reductions.
                  </Typography>
                </div>
              </AnimatedTable>
            </section>
            <section className="flex w-full flex-col items-start justify-between gap-x-9 bg-white px-5 pb-25 tablet-portrait:px-12 desktop:flex-row desktop:px-25">
              <div className="flex h-min w-full items-center space-x-6 border-b border-dark-blue desktop:w-[447px]">
                <Typography as="h3" className="pb-2 uppercase text-dark-blue">
                  EXCEEDANCES OF AIR QUALITY STANDARDS
                </Typography>
              </div>
              <AnimatedTable className="mt-9 flex w-full flex-1 flex-col gap-y-6 rounded-[20px] border border-gray bg-white px-4 py-15 text-dark-gray tablet-portrait:px-9 desktop:mt-0 desktop:max-w-[800px]">
                <Typography as="h5">OZONE</Typography>
                <div className="flex w-full flex-col items-start justify-between gap-y-2 tablet-portrait:flex-row tablet-portrait:items-center tablet-portrait:gap-y-0">
                  <Typography as="p">
                    Days over National 8-Hour Standard
                  </Typography>
                  <Typography as="h5" className=" flex-nowrap">
                    4<sup className="font-bold">*</sup>
                  </Typography>
                </div>
                <div className="flex w-full flex-col items-start justify-between gap-y-2 tablet-portrait:flex-row tablet-portrait:items-center tablet-portrait:gap-y-0">
                  <Typography as="p">
                    Days over California 1-Hour Standard
                  </Typography>
                  <Typography as="h5">
                    0<sup className="text-white">*</sup>
                  </Typography>
                </div>
                <div className="flex w-full flex-col items-start justify-between gap-y-2 tablet-portrait:flex-row tablet-portrait:items-center tablet-portrait:gap-y-0">
                  <Typography as="p">
                    Days over California 8-Hour Standard
                  </Typography>
                  <Typography as="h5" className="relative">
                    4<sup className="font-bold">*</sup>
                  </Typography>
                </div>
                <Typography as="h5">PARTICULATE MATTER</Typography>
                <div className="flex w-full flex-col items-start justify-between gap-y-2 tablet-portrait:flex-row tablet-portrait:items-center tablet-portrait:gap-y-0">
                  <Typography as="p">
                    Days over National 24-Hour PM10 Standard
                  </Typography>
                  <Typography as="h5" className="relative">
                    0<sup className="font-bold">*</sup>
                  </Typography>
                </div>
                <div className="flex w-full flex-col items-start justify-between gap-y-2 tablet-portrait:flex-row tablet-portrait:items-center tablet-portrait:gap-y-0">
                  <Typography as="p">
                    Days over California 24-Hour PM10 Standard
                  </Typography>
                  <Typography as="h5" className="relative">
                    0<sup className=" font-bold">*</sup>
                  </Typography>
                </div>
                <div className="flex w-full flex-col items-start justify-between gap-y-2 tablet-portrait:flex-row tablet-portrait:items-center tablet-portrait:gap-y-0">
                  <Typography as="p">
                    Days over National 24-Hour PM2.5 Standard
                  </Typography>
                  <Typography as="h5">
                    3<sup className="text-white">*</sup>
                  </Typography>
                </div>
                <Typography
                  as="p"
                  className="tablet:text-caption-tablet text-caption-mobile desktop:text-caption-desktop"
                >
                  *Pending final certification <br />
                  Final certification of exceedance data will occur in June
                  2024.
                </Typography>
              </AnimatedTable>
            </section>
          </>
        </Scene>
        <section className="relative flex w-full flex-col">
          <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 block bg-light-blue/20">
            &nbsp;
          </div>
          <TextBlock align="left">
            <div className="mt-22.5 flex w-full flex-1 flex-grow flex-col px-6 tablet-portrait:px-12 desktop:mt-40 desktop:pl-25 desktop:pr-[30px]">
              <div className="mb-20 flex h-min w-full flex-1 items-center space-x-6 border-b border-dark-blue desktop:mb-[120px]">
                <Typography as="h3" className="pb-2 uppercase text-dark-blue">
                  Bay Area Pollution Sources
                </Typography>
              </div>
              <div className="mb-9 flex h-min w-full flex-1 items-center space-x-6 border-b border-dark-blue desktop:mb-[120px]">
                <Typography as="h3" className="relative pb-2 text-dark-blue">
                  SOURCES OF GREENHOUSE GAS EMISSIONS <sup>a</sup>
                </Typography>
              </div>
              <PieChartWithoutSSR data={greenhouseEmissions} />
              <div className="mb-9 flex h-min w-full flex-1 items-center space-x-6 border-b border-dark-blue desktop:mb-[120px] desktop:mt-40">
                <Typography as="h3" className="relative pb-2 text-dark-blue">
                  SOURCES OF ANNUAL FINE PARTICULATE POLLUTION <sup>d</sup>
                </Typography>
              </div>
              <PieChartWithoutSSR data={particulatePollution} />
              <div className="mb-9 flex h-min w-full flex-1 items-center space-x-6 border-b border-dark-blue desktop:mb-[120px] desktop:mt-40">
                <Typography as="h3" className="relative pb-2 text-dark-blue">
                  SOURCES OF ANNUAL NITROGEN OXIDE POLLUTION <sup>d</sup>
                </Typography>
              </div>
              <PieChartWithoutSSR data={nitrogenOxidePollution} />
            </div>
          </TextBlock>
          <Typography
            as="p"
            className="mx-auto mb-6 mt-15 flex w-full max-w-[1241px] flex-1 flex-grow flex-col px-6 text-dark-blue tablet-portrait:mb-25 tablet-portrait:mt-22.5 tablet-portrait:px-12 desktop:my-40 desktop:px-0"
          >
            <span>
              <sup>a</sup> The Air District’s latest greenhouse gas (GHG)
              emissions estimates can be found here: baaqmd.gov/capghg. These
              estimates do not reflect specific emissions changes in 2023 due to
              the impact of COVID-19 pandemic or wildfires.
            </span>
            <span>
              <sup>b</sup> This category includes GHG emissions from refining
              processes and combustion of gas, liquid and solid fuels at
              refineries; it does not include GHG emissions generated during
              cogeneration at refineries, which is included in the
              Electricity/Co-Generation category.
            </span>
            <span>
              <sup>c</sup> This category includes GHG emissions from combustion
              and processes at cement plants, natural gas combustion, combustion
              of solid and liquid fuels in industries, natural gas distribution
              fugitive losses (primarily methane), and industrial process
              emissions.
            </span>
            <span>
              <sup>d</sup> These percentage estimates are developed based on the
              Air District’s currently available regional inventory data. These
              estimates do not reflect specific emissions changes in 2023 due to
              the impact of COVID-19 pandemic or wildfires.
            </span>
            <span>
              <sup>e</sup> This category includes wind-blown dust from
              agricultural land and dust from construction operations.
            </span>
            <span>
              <sup>f</sup> This category includes construction and mining
              equipment, agricultural equipment, industrial and light commercial
              equipment, and airport ground support equipment, etc.
            </span>
            <span>
              <sup>g</sup> This category includes trains, lawn and garden
              equipment and other off-road equipment.
            </span>
            <span>
              <sup>h</sup> This category includes passenger cars, buses,
              motorcycles, etc.
            </span>
          </Typography>
        </section>

        <Navigation nextLink="/community" prevLink="/achievements" />
      </main>
    </Controller>
  );
};

export default Document;
