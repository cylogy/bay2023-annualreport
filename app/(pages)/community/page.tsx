'use client';

import Carousel from '@/app/components/Carousel';
import Hero from '@/app/components/Hero';
import { InfoCard } from '@/app/components/InfoCard';
import InfoCardImage from '@/app/components/InfoCardImage';
import TextBlock from '@/app/components/TextBlock';
import Typography from '@/app/components/Typography';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

type Props = {};

const Community = (props: Props) => {
  const [load, setLoad] = useState(false);
  const videoRef = useRef(null);

  const slides = [
    () => (
      <InfoCardImage
        backgroundColor="bg-green text-white flex-1 h-full"
        imageSrc="/img/image-square-15.png"
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
            In Richmond-North Richmond-San Pablo, we continued to partner with
            21 steering committee members that represent Richmond, North
            Richmond and San Pablo working to develop and finalize the Community
            Emission Reduction Plan. The plan remains focused on six priority
            areas that include mobile, public health, marine and rail,
            commercial and industrial, fuel refining, and land use and urban
            greening. Within the last year, an additional subset of strategies
            has been developed that include compliance and enforcement,
            penalties, emissions inventory improvement and reporting.
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
        image="/img/frame-19722-2-2.png"
        imageTablet="/img/frame-19722-2-2.png"
        alt="Woman smiling while engaging with a whiteboard"
      />
      <TextBlock align="left">
        <div className="desktop:mt-40 mt-22.5 desktop:max-w-[855px] desktop:mx-25 flex w-full flex-col">
          <Typography
            as="h2"
            className="text-dark-blue desktop:p-0 px-15 uppercase"
          >
            AB 617 Community Health Protection Program
          </Typography>
          <Typography
            as="blockquote"
            className="text-dark-blue desktop:p-0 px-15 mb-20 mt-6"
          >
            We continued to work in collaboration with community members and
            other stakeholders to{' '}
            <span className="font-pull-quote-mobile-bold desktop:font-pull-quote-desktop-bold tablet-portrait:font-pull-quote-tablet-bold">
              {' '}
              develop and implement health-protective measures in highly
              impacted communities
            </span>{' '}
            as part of statewide AB 617 implementation.
          </Typography>
        </div>
      </TextBlock>
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
      <section className="tablet-portrait:h-[330px] desktop:h-[573px] tablet-portrait:px-7 tablet-landscape:px-24 desktop:px-25 my-25 desktop:mb-40 desktop:mt-12 flex h-[171px] w-full max-w-[1018px] flex-col px-2">
        <div className="iframeContainer" ref={videoRef}>
          {load ? (
            <iframe
              className="responsive-iframe"
              src="https://www.youtube.com/embed/_JXqUX0sMmk?si=4CgvMCS9VmWTR8HZ"
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
      <section className="desktop:mb-40 flex w-full justify-center">
        <div className="desktop:flex hidden flex-[0.33]">&nbsp;</div>
        <div className=" desktop:pr-15 desktop:flex-[0.67] desktop:justify-start flex w-full flex-grow flex-col items-center justify-center px-6 ">
          <div className="desktop:max-w-[1141px] desktop:items-start flex  w-full flex-col space-y-6">
            <Typography
              as="h3"
              className="text-dark-blue desktop:p-0 uppercase"
            >
              at a glance
            </Typography>
            <div className="desktop:flex-row flex flex-col gap-4">
              <InfoCard
                backgroundColor="dark-blue"
                cardTitle="22"
                cardBody="James Cary Smith Community Grant awardees continued on to a second year of capacity-building projects"
              />
              <InfoCard
                backgroundColor="white"
                cardTitle="594"
                cardBody="home air filtration units and replacement filters were distributed through the Home and School Air Filtration Program"
              />

              <InfoCard
                backgroundColor="light-blue"
                cardTitle="17"
                cardBody="community leaders serve on the Community Advisory Council, helping to direct our environmental justice policies"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="desktop:bg-lighter-green desktop:pt-40 pt-25 flex w-full justify-center">
        <div className="desktop:flex hidden flex-[0.33]">&nbsp;</div>
        <div className=" desktop:pr-15 desktop:flex-[0.67] desktop:justify-start flex w-full flex-grow flex-col items-center justify-center ">
          <div className="desktop:max-w-[1141px] desktop:items-start flex  w-full flex-col space-y-6">
            <Typography
              as="h3"
              className="text-dark-blue desktop:p-0 px-6 uppercase"
            >
              James Cary Smith Community Grant Program
            </Typography>
            <Typography as="p" className="text-gray desktop:p-0 my-6 px-6">
              The grant program funded 33 nonprofits to{' '}
              <span className="font-bold">
                {' '}
                engage community members in decisions that impact their air
                quality and health,{' '}
              </span>
              focusing on neighborhoods most impacted by air pollution.
              Twenty-two eligible awardees continued on to a second year of
              capacity-building projects, including bilingual environmental
              justice academies and interactive youth advocacy campaigns.
            </Typography>
            <div className="desktop:h-[531px] relative flex h-[350px] w-full">
              <Image
                src="/img/rectangle-255-2-2.png"
                fill
                className="object-cover"
                alt="Group of cyclists wearing helmets"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="desktop:mb-40 desktop:pt-40 desktop:bg-lighter-green desktop:pb-40 flex w-full justify-center">
        <InfoCardImage
          title="Home and School Air Filtration Program"
          body={() => (
            <Typography as="p">
              The program engaged with six partners in the Asthma Mitigation
              Program, five local health centers, two community-based
              organizations, and six James Cary Smith Community grantees to
              <span className="font-bold">
                {' '}
                distribute 594 home air filtration units and replacement filters
                to vulnerable populations and communities impacted by air
                pollution.
              </span>{' '}
              We installed high-performance air filtration systems in four West
              Contra Costa Unified District Schools: King Elementary School,
              Washington Elementary School, Riverside Elementary School, and
              Dover Elementary School.
            </Typography>
          )}
          backgroundColor="bg-blue text-white"
          imageFirst
          imageSrc="/img/image-square-13-2x.png"
          imageTablet="/img/image-square-13-2x.png"
          alt="Mother sitting beside toddler using an inhaler"
        />
      </section>
      <section className=" pt-25 desktop:mb-40 flex w-full justify-center bg-white">
        <div className="desktop:flex hidden flex-[0.33]">&nbsp;</div>
        <div className=" desktop:pr-15 desktop:flex-[0.67] desktop:justify-start flex w-full flex-grow flex-col items-center justify-center ">
          <div className="desktop:max-w-[1141px] desktop:items-start flex  w-full flex-col space-y-6">
            <Typography
              as="h3"
              className="text-dark-blue desktop:p-0 px-6 uppercase"
            >
              Community Advisory Council
            </Typography>
            <Typography as="p" className="text-gray desktop:p-0 my-6 px-6">
              The Community Advisory Council (CAC), consisting of 17 members
              from across the Bay Area, was created in 2021 to advise our
              leadership on community-related matters, advance an equity-forward
              policy agenda, and provide input on key policies and programs. In
              2023, the CAC recommended, and our Board approved, the CAC’s
              foundational documents: the Community Advisory Council Charter and
              the Community Advisory Council Compensation Policy and Procedures.
              The Board also approved the Resolution Establishing a Governance
              Structure for the Community Advisory Council. The CAC ad hoc
              committees developed an annual work plan and environmental justice
              policy goals for integration into our strategic plan. In
              September, the CAC held its inaugural retreat, an event focused on
              environmental justice and community action.
            </Typography>
            <div className="desktop:h-[531px] relative flex h-[350px] w-full">
              <Image
                src="/img/rectangle-255-3-2.png"
                fill
                className="object-cover"
                alt="Group of cyclists wearing helmets"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-lighter-blue desktop:pt-40 flex w-full justify-center pb-20 ">
        <InfoCardImage
          title="Bay Area Healthy Homes Initiative"
          body={() => (
            <Typography as="p">
              We launched the initiative to improve health outcomes and climate
              resilience in overburdened communities of Contra Costa and Alameda
              counties in January 2023. The program brings{' '}
              <span className="font-bold">
                {' '}
                asthma services and home retrofits to address health triggers,
                improve energy efficiency, and keep outdoor pollution out of the
                home
              </span>{' '}
              through a unique partnership between our agency, the Bay Area
              Regional Energy Network, county health departments, and a local
              non-profit. By the end of 2023, the program had enrolled 71
              residents in both multifamily and single-family homes.
            </Typography>
          )}
          backgroundColor="bg-blue text-white"
          imageFirst
          imageSrc="/img/image-square-12-22.png"
          imageTablet="/img/image-square-12-2.png"
          alt="Mother sitting beside toddler using an inhaler"
        />
      </section>
      <section className="flex w-full justify-center bg-[#E4EEFC] py-20 ">
        <div className="desktop:flex hidden flex-[0.33]">&nbsp;</div>
        <div className=" desktop:pr-15 desktop:flex-[0.67] desktop:justify-start flex w-full flex-grow flex-col items-center justify-center px-6 ">
          <div className="desktop:max-w-[1141px] desktop:items-start flex  w-full flex-col space-y-6">
            <Typography
              as="h3"
              className="text-dark-blue desktop:p-0 uppercase"
            >
              US EPA Regional Climate Planning Grant
            </Typography>
            <Typography as="p" className="text-gray desktop:p-0 my-6">
              We secured a $1 million grant from the US EPA’s Climate Pollution
              Reduction Grant Program to lead the development of a regional
              climate action plan that incorporates input from and reflects the
              priorities of the region’s local governments and communities. The
              plan will highlight{' '}
              <span className="font-bold">
                priority greenhouse gas (GHG) reduction measures that benefit
                frontline communities — communities that are marginalized,
                underserved, and overburdened by pollution.
              </span>{' '}
              Measures included in the plan will be eligible for nationally
              competitive $4.6 billion in implementation funding. We are leading
              this effort in collaboration with a regional advisory work group,
              consisting of staff from Bay Area regional agencies and local
              governments.
            </Typography>
            <div className="desktop:flex-row flex flex-col gap-4">
              <InfoCard
                backgroundColor="white"
                cardTitle="$1M"
                cardBody="in funding was secured through the US EPA's Climate Protection Grant Program"
              />
              <InfoCard
                backgroundColor="light-blue"
                cardTitle="67"
                cardBody="residents enrolled in the Bay Area Healthy Homes Initiative"
              />

              <InfoCard
                backgroundColor="dark-blue"
                cardTitle="&ldquo"
                cardBody="priority greenhouse gas (GHG) reduction measures that benefit frontline communities."
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Community;
