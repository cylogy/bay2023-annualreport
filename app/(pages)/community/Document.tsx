'use client';

import AnimatedImage from '@/app/components/AnimatedImage';
import Carousel from '@/app/components/Carousel';
import Hero from '@/app/components/Hero';
import { InfoCard } from '@/app/components/InfoCard';
import InfoCardImage from '@/app/components/InfoCardImage';
import Navigation from '@/app/components/Navigation';
import TextBlock from '@/app/components/TextBlock';
import Typography from '@/app/components/Typography';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { Controller, Scene } from 'react-scrollmagic-r18';

type Props = {};

const Document = (props: Props) => {
  const [load, setLoad] = useState(false);
  const videoRef = useRef(null);

  const slides = [
    () => (
      <InfoCardImage
        backgroundColor="bg-green text-white flex-1 h-full"
        imageSrc="/img/cranes.jpeg"
        alt="Aerial views of West Oakland"
        imageFirst
        title="WEST OAKLAND"
        body={() => (
          <Typography as="p">
            In West Oakland, through our AB 617 project that began four years
            ago, we continued our partnership with West Oakland Environmental
            Indicators Project (WOEIP) with monthly meetings and implementation
            teams to support emissions reduction strategies. WOEIP’s Health
            Equity Advisory Committee focused on the public health aspects of
            hyperlocal emissions reductions and outreach and recruitment efforts
            to increase West Oakland resident engagement.
          </Typography>
        )}
      />
    ),
    () => (
      <InfoCardImage
        backgroundColor="bg-blue text-white"
        imageSrc="/img/image-square-16.png"
        alt="Aerial views of Richmond-North Richmond-San Pablo"
        imageFirst
        title="Richmond-North Richmond-San Pablo"
        body={() => (
          <Typography as="p">
            We continued to partner with 21 steering committee members that
            represent Richmond, North Richmond and San Pablo working to develop
            and finalize the Community Emission Reduction Plan. The plan remains
            focused on six priority areas that include mobile, public health,
            marine and rail, commercial and industrial, fuel refining, and land
            use and urban greening. Within the last year, an additional subset
            of strategies has been developed that include compliance and
            enforcement, penalties, emissions inventory improvement and
            reporting.
          </Typography>
        )}
      />
    ),
    () => (
      <InfoCardImage
        backgroundColor="bg-light-blue text-dark-blue"
        imageSrc="/img/image-square-17.png"
        alt="Aerial views of East Oakland"
        imageFirst
        title="East Oakland"
        body={() => (
          <Typography as="p">
            In East Oakland, we collaborated with Communities for a Better
            Environment and a 26-member steering committee to start a Community
            Emissions Reduction Plan to address air quality and environmental
            justice issues. We developed the vision and principles, confirmed
            the community boundary, completed the emissions inventory, and
            compiled community knowledge on pollution sources and community
            assets into a community mapping project of the area.
          </Typography>
        )}
      />
    ),
    () => (
      <InfoCardImage
        backgroundColor="bg-dark-blue text-white"
        imageSrc="/img/image-square-18.png"
        alt="Female members of the Community Steering Committee"
        imageFirst
        title="Bayview Hunters Point/Southeast San Francisco"
        body={() => (
          <Typography as="p">
            In Bayview Hunters Point/Southeast San Francisco, we worked with
            community co-leads from the Marie Harrison Community Foundation and
            Bayview Hunters Point Community Advocates to recruit members to the
            Community Steering Committee (BVHP CSC) to develop a Community
            Emissions Reduction Plan. We have held two gatherings with the BVHP
            CSC members to introduce them to the project and began holding
            monthly meetings in September.
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
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Hero
        title="Community"
        description="What Community Partnerships Have We Built?"
        background="bg-blue text-white"
        image="/img/community Large.jpeg"
        imageTablet="/img/frame-19722-2-2.jpg"
        alt="Woman smiling while engaging with a whiteboard"
      />
      <TextBlock align="left">
        <div className="mt-22.5 flex w-full flex-col desktop:mx-25 desktop:mt-40 desktop:max-w-[855px]">
          <Typography
            as="h2"
            className="px-6 uppercase text-dark-blue tablet-portrait:px-15 desktop:p-0"
          >
            AB 617 Community Health Protection Program
          </Typography>
          <Typography
            as="blockquote"
            className="mb-20 mt-6 px-6 text-dark-blue tablet-portrait:px-15 desktop:p-0"
          >
            We continued to work in collaboration with community members and
            other stakeholders to{' '}
            <span className="font-pull-quote-mobile-bold tablet-portrait:font-pull-quote-tablet-bold desktop:font-pull-quote-desktop-bold">
              {' '}
              develop and implement health-protective measures in highly
              impacted communities
            </span>{' '}
            as part of statewide AB 617 implementation.
          </Typography>
        </div>
      </TextBlock>
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
      <section className="my-25 flex h-[171px] w-full max-w-[1018px] flex-col px-2 tablet-portrait:h-[330px] tablet-portrait:px-7 tablet-landscape:px-24 desktop:mb-40 desktop:mt-12 desktop:h-[573px] desktop:px-25">
        <div className="iframeContainer" ref={videoRef}>
          {load ? (
            <iframe
              className="responsive-iframe"
              src="https://www.youtube.com/embed/_JXqUX0sMmk?si=4CgvMCS9VmWTR8HZ&autoplay=1&mute=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </section>
      <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
        <Scene pin triggerElement="#slide1">
          <section
            id="slide0"
            className="flex w-full justify-center bg-white desktop:mb-40"
          >
            <div className="hidden flex-[0.33] desktop:flex">&nbsp;</div>
            <div className=" flex w-full flex-grow flex-col items-center justify-center px-6 desktop:flex-[0.67] desktop:justify-start desktop:pr-15 ">
              <div className="flex w-full flex-col  space-y-6 desktop:max-w-[1141px] desktop:items-start">
                <Typography
                  as="h3"
                  className="uppercase text-dark-blue desktop:p-0"
                >
                  at a glance
                </Typography>
                <div className="flex flex-col gap-4 desktop:flex-row">
                  <InfoCard
                    backgroundColor="dark-blue"
                    cardTitle="22"
                    small
                    cardBody="James Cary Smith Community Grant awardees continued on to a second year of capacity-building projects"
                  />
                  <InfoCard
                    backgroundColor="white"
                    cardTitle="594"
                    small
                    cardBody="home air filtration units and replacement filters were distributed through the Home and School Air Filtration Program"
                  />

                  <InfoCard
                    backgroundColor="light-blue"
                    cardTitle="17"
                    small
                    cardBody="community leaders serve on the Community Advisory Council, helping to direct our environmental justice policies"
                  />
                </div>
              </div>
            </div>
          </section>
        </Scene>
        <Scene pin triggerElement="#slide2" triggerHook={'onLeave'}>
          <section
            id="slide1"
            className=" flex min-h-screen w-full flex-col desktop:bg-lighter-green"
          >
            <div className="relative flex w-full justify-center overflow-hidden fill-blue  desktop:justify-end">
              <div className="hidden flex-[0.33] desktop:flex">&nbsp;</div>
              <div className=" mt-40 flex w-full flex-grow flex-col items-start justify-center desktop:flex-[0.67] desktop:justify-start ">
                <div className="mb-10 flex w-full  flex-col space-y-6 desktop:max-w-[1141px] desktop:items-start desktop:pr-15">
                  <Typography
                    as="h3"
                    className="px-6 uppercase text-dark-blue desktop:p-0"
                  >
                    James Cary Smith Community Grant Program
                  </Typography>
                  <Typography
                    as="p"
                    className="my-6 px-6 text-dark-gray desktop:p-0"
                  >
                    The grant program funded 33 nonprofits to{' '}
                    <span className="font-bold">
                      {' '}
                      engage community members in decisions that impact their
                      air quality and health,{' '}
                    </span>
                    focusing on neighborhoods most impacted by air pollution.
                    Twenty-two eligible awardees continued on to a second year
                    of capacity-building projects, including bilingual
                    environmental justice academies and interactive youth
                    advocacy campaigns.
                  </Typography>
                </div>
                <AnimatedImage
                  key={67}
                  className="relative flex h-[350px] w-full desktop:h-[531px]"
                >
                  <Image
                    src="/img/rectangle-255-2-2.jpg"
                    fill
                    className="object-cover object-top"
                    alt="Group of cyclists wearing helmets"
                  />
                </AnimatedImage>
              </div>
            </div>
            <div className=" flex w-full justify-center desktop:bg-lighter-green desktop:pb-40 desktop:pt-40">
              <InfoCardImage
                title="HOME AND SCHOOL AIR FILTRATION PROGRAM"
                body={() => (
                  <Typography as="p">
                    The program engaged with six partners in the Asthma
                    Mitigation Program, five local health centers, two
                    community-based organizations, and six James Cary Smith
                    Community grantees to
                    <span className="font-bold">
                      {' '}
                      distribute 594 home air filtration units and replacement
                      filters to vulnerable populations and communities impacted
                      by air pollution.
                    </span>{' '}
                    We installed high-performance air filtration systems in four
                    West Contra Costa Unified District Schools: King Elementary
                    School, Washington Elementary School, Riverside Elementary
                    School, and Dover Elementary School.
                  </Typography>
                )}
                backgroundColor="bg-blue text-white"
                imageFirst
                imageSrc="/img/image-square-13-2x.png"
                imageTablet="/img/image-square-13-2x.png"
                alt="Mother sitting beside toddler using an inhaler"
              />
            </div>
          </section>
        </Scene>
        <Scene pin triggerElement="#slide4">
          <section
            id="slide2"
            className="relative flex w-full items-start justify-center overflow-hidden fill-blue desktop:h-[1181px] desktop:justify-end"
          >
            <div className="hidden flex-[0.33] desktop:flex">&nbsp;</div>
            <article className=" flex w-full flex-col items-center justify-center overflow-hidden desktop:flex-[0.67]  desktop:items-end">
              <div className=" mt-22.5 flex w-full flex-col overflow-hidden desktop:mt-40 desktop:max-w-[1317px] desktop:self-start desktop:pr-10">
                <Typography
                  as="h3"
                  className="px-6 uppercase text-dark-blue desktop:p-0"
                >
                  Community Advisory Council
                </Typography>
                <Typography as="p" className="my-6 px-6 text-gray desktop:p-0">
                  The Community Advisory Council (CAC), consisting of 17 members
                  from across the Bay Area, was created in 2021 to advise our
                  leadership on community-related matters, advance an
                  equity-forward policy agenda, and provide input on key
                  policies and programs. In 2023, the CAC recommended, and our
                  Board approved, the CAC’s foundational documents: the
                  Community Advisory Council Charter and the Community Advisory
                  Council Compensation Policy and Procedures. The Board also
                  approved the Resolution Establishing a Governance Structure
                  for the Community Advisory Council. The CAC ad hoc committees
                  developed an annual work plan and environmental justice policy
                  goals for integration into our strategic plan. In September,
                  the CAC held its inaugural retreat, an event focused on
                  environmental justice and community action.
                </Typography>
              </div>
              <AnimatedImage
                key={33}
                className="relative flex h-[531px] w-full"
              >
                <Image
                  src="/img/rectangle-255-3-2.jpg"
                  fill
                  className="object-cover object-[50%_10%]"
                  alt="Women speaking into microphone"
                />
              </AnimatedImage>
            </article>
          </section>
        </Scene>
        <Scene pin triggerElement="#slide4">
          <>
            <section
              id="slide3"
              className="z-10 flex w-full justify-center bg-lighter-blue pb-10 desktop:pt-40 "
            >
              <InfoCardImage
                title="Bay Area Healthy Homes Initiative"
                body={() => (
                  <Typography as="p">
                    In January 2023, we launched this initiative to improve
                    health outcomes and climate resilience in overburdened
                    communities in Contra Costa and Alameda counties. The
                    program brings{' '}
                    <span className="font-bold">
                      {' '}
                      asthma services and home retrofits to address health
                      triggers, improve energy efficiency, and keep outdoor
                      pollution out of the home
                    </span>{' '}
                    through a unique partnership between our agency, the Bay
                    Area Regional Energy Network, county health departments, and
                    a local nonprofit. By the end of 2023, the program had
                    enrolled 71 residents in both multifamily and single-family
                    homes.
                  </Typography>
                )}
                backgroundColor="bg-blue text-white"
                imageFirst
                imageSrc="/img/image-square-12-22.png"
                imageTablet="/img/image-square-12-2.png"
                alt="Mother sitting beside toddler using an inhaler"
              />
            </section>

            <section
              id="slide4"
              className="z-10 flex w-full justify-center bg-lighter-blue py-10 desktop:pb-40 "
            >
              <div className="hidden flex-[0.33] desktop:flex">&nbsp;</div>
              <div className=" flex w-full flex-grow flex-col items-center justify-center px-6 desktop:flex-[0.67] desktop:justify-start desktop:pr-15 ">
                <div className="flex w-full flex-col  space-y-6 desktop:max-w-[1141px] desktop:items-start">
                  <Typography
                    as="h3"
                    className="uppercase text-dark-blue desktop:p-0"
                  >
                    US EPA Regional Climate Planning Grant
                  </Typography>
                  <Typography
                    as="p"
                    className="my-6 text-dark-gray desktop:p-0"
                  >
                    We secured a $1 million grant from the US EPA’s Climate
                    Pollution Reduction Grant Program to lead the development of
                    a regional climate action plan that incorporates input from
                    and reflects the priorities of the region’s local
                    governments and communities. The plan will highlight{' '}
                    <span className="font-bold">
                      priority greenhouse gas (GHG) reduction measures that
                      benefit frontline communities — communities that are
                      marginalized, underserved, and overburdened by pollution.
                    </span>{' '}
                    Measures included in the plan will be eligible for
                    nationally competitive $4.6 billion in implementation
                    funding. We are leading this effort in collaboration with a
                    regional advisory work group, consisting of staff from Bay
                    Area regional agencies and local governments.
                  </Typography>
                  <div className="flex flex-col gap-4 desktop:flex-row">
                    <InfoCard
                      backgroundColor="white"
                      cardTitle="$1M"
                      cardBody="in funding was secured through the US EPA's Climate Protection Grant Program"
                    />
                    <InfoCard
                      backgroundColor="light-blue"
                      cardTitle="71"
                      cardBody="residents enrolled in the Bay Area Healthy Homes Initiative"
                    />

                    <InfoCard
                      backgroundColor="dark-blue"
                      cardTitle="&ldquo;"
                      centered
                      cardBody="priority greenhouse gas (GHG) reduction measures that benefit frontline communities."
                    />
                  </div>
                </div>
              </div>
            </section>
          </>
        </Scene>
      </Controller>
      <Navigation nextLink="/incentives" prevLink="/air-quality" />
    </main>
  );
};

export default Document;
