'use client';

import AnimatedImage from '@/app/components/AnimatedImage';
import Hero from '@/app/components/Hero';
import { InfoCard } from '@/app/components/InfoCard';
import InfoCardImage from '@/app/components/InfoCardImage';
import Navigation from '@/app/components/Navigation';
import TextBlock from '@/app/components/TextBlock';
import Typography from '@/app/components/Typography';
import Head from 'next/head';
import Image from 'next/image';

type Props = {};

const Document = (props: Props) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Head>
        <title>
          Achievements: What are some new steps forward in our work? | Air
          District 202 3 Annual Report
        </title>
      </Head>

      <Hero
        title="Notable Achievements"
        description="What are some new steps forward in our work? "
        background="bg-dark-blue text-white"
        image="/img/NA section header.jpg"
        imageTablet="/img/NA section header.jpg"
        alt="?"
      />
      <TextBlock>
        <div className="mt-22.5 flex w-full flex-col items-start justify-start place-self-end desktop:mt-40 desktop:max-w-[1200px]">
          <Typography
            as="h3"
            className="px-15 capitalize text-dark-blue desktop:pl-0"
          >
            Building Appliance Rule Amendments
          </Typography>
          <Typography as="p" className="mt-6 px-15 text-dark-gray desktop:pl-0">
            Amendments to Regulation 9, Rules 4 and 6, were adopted to eliminate
            emissions of nitrogen oxides, or NOx, from{' '}
            <span className="font-bold">
              residential and commercial natural gas furnaces and water heaters
              in the Bay Area by requiring new appliances to be zero-NOx.
            </span>{' '}
            Collectively, the 1.8 million water heaters and furnaces are one of
            the largest NOx-emitting stationary sources of air pollution in the
            region. The rule amendments would apply only to new appliances sold
            in the Bay Area and will improve overall regional air quality from
            the outdoor venting of these appliances, lower exposure to
            particulate matter — particularly in communities of color — and
            eliminate up to $890 million per year in health impacts due to air
            pollution exposure.
            <br />
            <br />
            We established a multi-stakeholder Implementation Working Group to
            track and assess market readiness, technology accessibility, and
            identify barriers and solutions to an equitable transition. The
            diverse stakeholders include utility and energy service providers,
            technology manufacturers, environmental justice and community-based
            organizations, state agencies, local and regional governments,
            incentive program administrators, labor unions, contractors, and
            others.
          </Typography>
          <AnimatedImage
            key={18}
            className="relative mt-12 flex h-[350px] w-full desktop:h-[531px]"
          >
            <Image
              fill
              alt="Close-up of a building appliance"
              src={'/img/rectangle-fire.png'}
              className="object-cover"
            />
          </AnimatedImage>
          <div className="mt-15 flex w-full flex-col gap-9 px-5 desktop:flex-row desktop:pl-0 desktop:pr-15">
            <InfoCard
              backgroundColor="blue"
              cardTitle="$890M"
              cardBody="per year in health impacts due to air pollution exposure will be eliminated through these rule amendments."
            />
            <InfoCard
              backgroundColor="white"
              cardTitle="1.8M"
              cardBody="water heaters and furnaces are one of the largest sources of NOx pollution in the Bay Area"
            />
          </div>
          <Typography
            as="h3"
            className="mt-25 px-15 capitalize text-dark-blue desktop:pl-0"
          >
            Air Quality Violation Data Tool
          </Typography>
          <Typography as="p" className="mt-6 px-15 text-dark-gray desktop:pl-0">
            In September, we launched a notices of violation data tool on our
            website that provides searchable information of all violations that
            our agency has issued within the past five years. Members of the
            public may now access information pertaining to violations and
            penalties issued by our inspectors. Violations can be sorted by
            city, zip code and facility name and penalty amount and downloaded
            for ease of review. This tool serves to{' '}
            <span className="font-bold">
              better inform communities about enforcement activities and
              streamlines accessibility.
            </span>
          </Typography>
        </div>
      </TextBlock>
      <div className="flex w-full flex-col pt-40 desktop:mb-40 desktop:space-y-40">
        <InfoCardImage
          backgroundColor="bg-gray text-white"
          title="First-of-its-Kind Environmental Justice Guidance"
          body={() => (
            <Typography as="p" className="leading-8">
              We have included{' '}
              <span className="font-bold">
                an environmental justice chapter
              </span>{' '}
              – the first of its kind to be published in California – in its
              recently-updated CEQA Guidelines. This chapter recognizes the
              policy imperative to address long-standing and emerging inequities
              in the siting, design, and development of potential sources of
              pollution. Apart from mitigating the impacts of pollution, this
              guidance promotes meaningful participation of community members in
              all phases of the environmental and land use decision making
              process.
            </Typography>
          )}
          imageSrc="/img/EJ Guidance.jpg"
          alt="Aerial view of intersecting highways"
        />
        <InfoCardImage
          backgroundColor="bg-green text-white"
          title="Developing Methodology and Tools for CEQA Air Quality Assessment"
          body={() => (
            <Typography as="p" className="leading-8">
              We developed a{' '}
              <span className="font-bold">
                methodology and modeling tools for assessing air quality and
                health impacts
              </span>{' '}
              from exposure to toxic air contaminants and PM2.5 from individual
              projects. The step-by-step methodology and innovative modeling
              tools support lead agencies and practitioners in conducting
              cumulative impact analysis during the CEQA environmental review
              process, with visualization maps of screening-level cancer risks,
              chronic hazards, and PM2.5 concentrations from the Bay Area
              highways and surface streets, freight and passenger rail services,
              selected railyards, and permitted stationary sources.
            </Typography>
          )}
          imageSrc="/img/highway.png"
          imageFirst
          alt="Heavy traffic on the highway"
        />
      </div>
      <Navigation prevLink="/introduction" nextLink="/air-quality" />
    </main>
  );
};

export default Document;
