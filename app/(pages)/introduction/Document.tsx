'use client';

import AnimatedImage from '@/app/components/AnimatedImage';
import AnimatedTile from '@/app/components/AnimatedTile';
import Hero from '@/app/components/Hero';
import Navigation from '@/app/components/Navigation';
import TextBlock from '@/app/components/TextBlock';
import Typography from '@/app/components/Typography';
import Image from 'next/image';
import React from 'react';

type Props = {};

const Document = (props: Props) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Hero
        title="Introduction"
        description="message from our new executive officer"
        background="bg-green text-white"
        image="/img/frame-19722-14.png"
        imageTablet="/img/Frame 19722 (1).png"
        alt="Dr. Philip Fine"
      />
      <TextBlock align="left">
        <div className="flex w-full flex-col place-self-start px-5 pb-6 pt-20 tablet-portrait:px-15 tablet-portrait:pb-20 tablet-portrait:pt-22.5 desktop:max-w-[855px] desktop:pb-20 desktop:pl-25 desktop:pt-40">
          <Typography as="h2" className=" capitalize text-dark-blue">
            EXECUTIVE SUMMARY 2023
          </Typography>
          <Typography
            as="p"
            className=" mt-6  text-pull-quote-mobile leading-10 text-dark-blue"
          >
            This year was a year of{' '}
            <span className="font-bold">renewal and change</span> at the Air
            District. I joined as Executive Officer in February and am joined by
            a new executive team. This new executive team will help steer our
            work towards{' '}
            <span className="font-bold">
              increasing transparency, collaboration, and protection for
              communities with environmental justice concerns.
            </span>
          </Typography>
        </div>
      </TextBlock>
      <TextBlock align="right">
        <div className="flex w-full flex-col items-start justify-start place-self-end desktop:max-w-[1200px]">
          <Typography
            as="p"
            className="mb-6 px-5 text-body-text-tablet text-dark-gray tablet-portrait:px-15 tablet-portrait:pb-15 desktop:mt-10"
          >
            <span className="font-bold">
              Our mission is to significantly reduce the disproportionate levels
              of air pollution that many communities face and provide clean air
              for all Bay Area residents.
            </span>{' '}
            Through the AB 617 Community Health Protection Program and other
            community-focused programs, we will continue to implement stronger
            air quality protections for those most impacted. This year, Bayview
            Hunters Point was adopted as the fourth AB 617 community, joining
            East Oakland, Richmond-North Richmond-San Pablo, and West Oakland,
            to receive resources for much-needed air pollution reductions.
            <br />
            <br />
            Our groundbreaking rule amendments for natural gas furnaces and
            water heaters will phase out the most polluting appliances in homes
            and businesses to protect Bay Area residents from the harmful air
            pollution they cause. Our innovative climate protection programs are
            funding and supporting cutting-edge technologies and projects to
            reduce greenhouse gas emissions. Through our extensive grant
            programs, communities and businesses can reduce their air quality
            impacts, upgrade to cleaner technologies, and educate and engage
            others on air quality and climate improvements.
          </Typography>
        </div>
      </TextBlock>
      <section className="flex w-full flex-col desktop:h-[490px] desktop:flex-row">
        <div className="relative z-20 flex h-[350px] w-full desktop:h-full desktop:w-1/2">
          <div className="z-20 flex w-full overflow-hidden bg-white">
            <AnimatedImage
              key={11}
              className="relative flex h-full w-full flex-col items-center justify-center"
            >
              <Image
                src="/img/Bayview cropped sample.jpeg"
                fill
                alt="Two hikers on a mountain trail"
                className="object-cover "
              />
            </AnimatedImage>
          </div>
        </div>
        <AnimatedTile
          id={10}
          className="flex h-full w-full flex-col items-start justify-center bg-blue px-6 py-10 text-white tablet-portrait:px-15 desktop:w-1/2 desktop:p-20"
        >
          <h2 className="font-anton mb-28 text-left font-h2 text-[145px] leading-none desktop:mb-10">
            &rdquo;
          </h2>
          <Typography
            as="p"
            className="-mt-20 font-body-text text-pull-quote-desktop desktop:-mt-16"
          >
            Our mission is to significantly reduce the disproportionate levels
            of air pollution that many communities face.
          </Typography>
        </AnimatedTile>
      </section>
      <TextBlock align="right">
        <div className="flex w-full flex-col items-start justify-start place-self-end px-5 text-body-text-tablet tablet-portrait:px-15 desktop:max-w-[1200px]">
          <Typography
            as="p"
            className="mt-10 text-dark-gray tablet-portrait:pb-15 "
          >
            As part of our efforts to increase transparency around our
            enforcement work, we developed an online tool that allows the public
            to view air quality violations and penalties issued to local
            facilities. Our ongoing partnerships with environmental justice
            leaders from around the Bay Area, including through the AB 617
            Community Steering Committees and Community Advisory Council, are
            giving the most impacted communities a leading voice in developing
            strategies, plans and implementation of on-the-ground improvements
            in air quality.
            <br />
            <br />
            Our new Strategic Plan, which will be finalized in late-2024, will
            guide our agency over the next five years. The plan will be grounded
            in equity and align with the environmental justice priorities
            developed by the Community Advisory Council, integrating staff
            expertise and real-life experiences of communities through shared
            leadership.
            <br />
            <br />
            After my first year at the Air District, I am confident that we can
            achieve our goals based on staff’s and community partners’
            dedication and determination to address longstanding air quality and
            environmental justice issues. I am confident that together we can
            strengthen our efforts to protect our air, our climate, and our
            communities.
          </Typography>
          <div className="mb-15 flex flex-col items-start justify-center desktop:mb-40">
            <Image
              src="/img/signature.png"
              width={233}
              height={149}
              alt="signature"
            />
            <Typography
              as="p"
              className="text-body-text-desktop-bold font-bold text-dark-gray"
            >
              Dr. Philip Fine
            </Typography>
            <Typography as="p" className="text-dark-gray">
              Executive Officer /Air Pollution Control Officer
            </Typography>
          </div>
        </div>
      </TextBlock>
      <Navigation prevLink="/" nextLink="/achievements" />
    </main>
  );
};

export default Document;
