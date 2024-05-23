'use client';

import React, { FC, useEffect, useRef, useState } from 'react';
import Hero from '../../components/Hero';
import SectionGraph from '../../components/SectionGraph';
import SubSectionGraph from '../../components/SectionGraph/SubSectionGraph';
import Navigation from '@/app/components/Navigation';
import Image from 'next/image';
import Typography from '@/app/components/Typography';
import 'swiper/css';
import 'swiper/css/pagination';
import Carousel from '@/app/components/Carousel';
import Head from 'next/head';

const slides = [
  () => (
    <div className="flex flex-col">
      <div className="flex h-full flex-1 flex-col rounded-[20px] border-2 border-dark-blue bg-white p-6 px-6 py-15 text-left text-dark-blue desktop:mx-15 desktop:rounded-[20px] desktop:p-[80px]">
        <div className="flex w-full flex-col justify-between desktop:flex-row">
          <Typography
            as="h5"
            className=" mb-4 border-b-2 pb-2 text-start text-dark-blue desktop:mb-0 desktop:border-b-0 desktop:pb-0"
          >
            Bay Area Permitted Facilities
          </Typography>
        </div>

        <div className="mt-6 flex flex-col text-dark-gray desktop:flex-row desktop:justify-between">
          <Typography as="span" className="text-start">
            Refineries
          </Typography>
          <Typography as="h5" className="text-start">
            5
          </Typography>
        </div>
        <div className="mt-6 flex flex-col text-dark-gray desktop:flex-row desktop:justify-between">
          <Typography as="span" className="text-start">
            Major Facilities (excludes refineries)
          </Typography>
          <Typography as="h5" className="text-start">
            73
          </Typography>
        </div>
        <div className="mt-6 flex flex-col text-dark-gray desktop:flex-row desktop:justify-between">
          <Typography as="span" className="text-start">
            Gasoline Dispensing Facilities
          </Typography>
          <Typography as="h5" className="text-start">
            2,264
          </Typography>
        </div>
        <div className="mt-6 flex flex-col text-dark-gray desktop:flex-row desktop:justify-between">
          <Typography as="span" className="text-start">
            All Other Facilities
          </Typography>
          <Typography as="h5" className="text-start">
            8,090
          </Typography>
        </div>
        <div className="mt-6 flex w-full flex-col justify-between border-dark-blue pt-4 text-dark-gray desktop:flex-row desktop:border-t-2">
          <Typography
            as="h5"
            className=" border-b-2 border-t-2 pb-2 pt-4 text-start desktop:border-0 desktop:pb-0 desktop:pt-0"
          >
            Total Permitted Facilities
          </Typography>
          <Typography as="h5" className=" mt-2 text-start  desktop:mt-0">
            10,432
          </Typography>
        </div>
        <div className="flex w-full flex-col justify-between border-dark-blue pt-4 text-dark-gray desktop:flex-row">
          <Typography
            as="h5"
            className=" border-b-2 border-t-2 pb-2 pt-4 text-start  desktop:border-0 desktop:pb-0 desktop:pt-0"
          >
            Permitted Devices and Operations
          </Typography>
          <Typography as="h5" className=" mt-2 text-start  desktop:mt-0">
            23,325
          </Typography>
        </div>
      </div>
    </div>
  ),
  () => (
    <div className="flex flex-col">
      <div className="flex h-full flex-1 flex-col rounded-[20px] border-2 border-dark-blue bg-white p-6 px-6 py-15 text-left text-dark-blue desktop:mx-15 desktop:min-h-[530px] desktop:rounded-[20px] desktop:p-[80px]">
        <div className="flex w-full flex-col justify-between text-dark-gray desktop:flex-row">
          <Typography
            as="h5"
            className=" mb-4 border-b-2 pb-2 text-start text-dark-blue desktop:mb-0 desktop:border-b-0 desktop:pb-0"
          >
            New Permit Applications
          </Typography>
        </div>

        <div className="mt-6 flex flex-col text-dark-gray desktop:flex-row desktop:justify-between">
          <Typography as="span" className="text-start">
            Major Source Review (Title V)
          </Typography>
          <Typography as="h5" className="text-start">
            47
          </Typography>
        </div>
        <div className="mt-6 flex flex-col text-dark-gray desktop:flex-row desktop:justify-between">
          <Typography as="span" className="text-start">
            New Source Review (NSR)
          </Typography>
          <Typography as="h5" className="text-start">
            907
          </Typography>
        </div>
        <div className="mt-6 flex flex-col text-dark-gray desktop:flex-row desktop:justify-between">
          <Typography as="span" className="text-start">
            All other applications
          </Typography>
          <Typography as="h5" className="text-start">
            42
          </Typography>
        </div>
        <div className="mt-6 flex w-full flex-col justify-between border-dark-blue pt-4 desktop:flex-row desktop:border-t-2">
          <Typography
            as="h5"
            className=" border-b-2 border-t-2 pb-2 pt-4 text-start  text-dark-gray desktop:border-0 desktop:pb-0 desktop:pt-0"
          >
            Total New Permits Applications
          </Typography>
          <Typography
            as="h5"
            className=" mt-2 text-start  text-dark-gray desktop:mt-0"
          >
            996
          </Typography>
        </div>
      </div>
    </div>
  ),
  () => (
    <div className="flex flex-col">
      <div className="flex h-full flex-1 flex-col rounded-[20px] border-2 border-dark-blue bg-white p-6 px-6 py-15 text-left text-dark-blue desktop:mx-15 desktop:min-h-[530px] desktop:rounded-[20px] desktop:p-[80px]">
        <div className="flex w-full flex-col justify-between desktop:flex-row">
          <Typography
            as="h5"
            className=" mb-4 border-b-2 pb-2 text-start text-dark-blue desktop:mb-0 desktop:border-b-0 desktop:pb-0"
          >
            Application Health Risk Assessments
          </Typography>
        </div>
        <div className="mt-6 flex flex-col text-dark-gray desktop:flex-row desktop:justify-between">
          <Typography as="span" className="text-start">
            Diesel Engines
          </Typography>
          <Typography as="h5" className="text-start">
            243
          </Typography>
        </div>
        <div className="mt-6 flex flex-col text-dark-gray desktop:flex-row desktop:justify-between">
          <Typography as="span" className="text-start">
            Gasoline Dispensing Facilities
          </Typography>
          <Typography as="h5" className="text-start">
            8
          </Typography>
        </div>
        <div className="mt-6 flex flex-col text-dark-gray desktop:flex-row desktop:justify-between">
          <Typography as="span" className="text-start">
            Other Commercial/Industrial Facilities
          </Typography>
          <Typography as="h5" className="text-start">
            56
          </Typography>
        </div>
        <div className="mt-6 flex w-full flex-col justify-between border-dark-blue pt-4 desktop:flex-row desktop:border-t-2">
          <Typography
            as="h5"
            className=" border-b-2 border-t-2 pb-2 pt-4 text-start  text-dark-gray desktop:border-0 desktop:pb-0 desktop:pt-0"
          >
            Total Health Risk Assessments
          </Typography>
          <Typography
            as="h5"
            className=" mt-2 text-start  text-dark-gray desktop:mt-0"
          >
            307
          </Typography>
        </div>
      </div>
    </div>
  ),
];

const airPolutionComplaintsData = [
  {
    title: 'Odor',
    value: 1720,
    percents: 45.6,
  },
  {
    title: 'Wood Smoke',
    value: 1220,
    percents: 32.4,
  },
  {
    title: 'Dust/Particulates',
    value: 283,
    percents: 7.5,
  },
  {
    title: 'Other*',
    value: 164,
    percents: 4.4,
  },
  {
    title: 'Fire Out/Illegal Outdoor Fires',
    value: 125,
    percents: 3.3,
  },
  {
    title: 'Smoke',
    value: 107,
    percents: 2.8,
  },
  {
    title: 'Asbestos ',
    value: 96,
    percents: 2.5,
  },
  {
    title: 'Idling Commercial Vehicles',
    value: 30,
    percents: 0.8,
  },
  {
    title: 'Gas Stations',
    value: 23,
    percents: 0.6,
  },
];

const complianceInspectionsData = [
  {
    title: 'Source Inspections',
    value: 4755,
  },
  {
    title: 'Air Pollution Complaints (excludes smoking vehicles)',
    value: 3768,
  },
  {
    title: 'Gasoline Dispensing Facility Inspections',
    value: 965,
  },
  {
    title: 'Asbestos Inspections',
    value: 2070,
  },
  {
    title: 'Reportable Compliance Activities',
    value: 734,
  },
  {
    title: 'Diesel Compliance and Grant Inspections',
    value: 125,
  },
  {
    title: 'Portable Equipment Registration Program (PERP) Inspections',
    value: 7,
  },
  {
    title: 'Open Burn Inspections',
    value: 4,
  },
  {
    title: 'Naturally Occurring Asbestos (NOA) Inspections',
    value: 23,
  },
];

const PenaltiesViolationsData = [
  {
    title: 'Penalties',
    value: '$3,403,279',
  },
  {
    title: 'Violations Resolved with Penalties',
    value: '421',
  },
];

const sourceTestData = [
  {
    items: [
      {
        label: 'Refinery Source Tests',
        value: '12',
      },
      {
        label: 'Compliance Rate',
        value: '100%',
        rigth: true,
      },
    ],
  },
  {
    items: [
      {
        label: 'Title V Source Tests (excludes refineries)',
        value: '19',
      },
      {
        label: 'Compliance Rate',
        value: '94.7%',
        rigth: true,
      },
    ],
  },
  {
    items: [
      {
        label: 'Non-Title V Source Tests',
        value: '13',
      },
      {
        label: 'Compliance Rate',
        value: '92.3%',
        rigth: true,
      },
    ],
  },
  {
    items: [
      {
        label: 'Synthetic Minor Source Tests',
        value: '3',
      },
      {
        label: 'Compliance Rate',
        value: '66.7%',
        rigth: true,
      },
    ],
  },
  {
    items: [
      {
        label: 'Gasoline Cargo Tanks',
        value: '127',
      },
      {
        label: 'Compliance Rate',
        value: '97.6%',
        rigth: true,
      },
    ],
  },
  {
    items: [
      {
        label: 'Other Facility Source Tests Reviewed in 2023 (contractors)',
        value: '338',
      },
      {
        label: 'Compliance Rate (reviewed and approved)',
        value: '88.8%',
        rigth: true,
      },
    ],
  },
  {
    items: [
      {
        label:
          'Other Facility Source Tests Disapproved or Invalidated in 2023 (contractors)',
        value: '145',
      },
      {
        label: 'Disapproval Rate (reviewed)',
        value: '42.9%',
        rigth: true,
      },
    ],
  },
  {
    items: [
      {
        label:
          'Other Facility Source Test Protocols Reviewed in 2023 (contractors)',
        value: '196',
      },
    ],
  },
  {
    items: [
      {
        label:
          'Facility CEMS Excess Emission Reports Reviewed in 2023 (reviewed)',
        value: '201',
      },
      {
        label: 'Compliance Rate (reviewed)',
        value: '26.9%',
        rigth: true,
      },
    ],
  },
  {
    items: [
      {
        label: 'Gasoline Dispensing Facilities (GDF)',
        value: '92',
      },
      {
        label: 'Compliance Rate',
        value: '53.3%',
        rigth: true,
      },
    ],
  },
  {
    items: [
      {
        label: 'Other GDF Source Tests (contractors)',
        value: '15,714',
      },
      {
        label: 'Compliance Rate',
        value: '99.7%',
        rigth: true,
      },
    ],
  },
];

const Document: FC = () => {
  const [load, setLoad] = useState(false);
  const videoRef = useRef(null);

  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>
          By the Numbers: How do we enforce and improve air quality protections?
          | Air District 2023 Annual Report
        </title>
      </Head>
      <Hero
        title="By the Numbers"
        description="How do we track and improve air quality protections?"
        image="/img/number-page-small.png"
        imageTablet="/img/number-page-tablet.png"
        background="bg-dark-blue text-white"
        alt="By the Numbers"
      />
      <section
        className="
      relative flex w-full flex-col justify-center
      space-y-9 bg-lighter-grey px-6 py-25 desktop:space-x-9 desktop:space-y-[100px] desktop:bg-transparent desktop:px-20 desktop:py-36"
      >
        <Image
          src="/img/frame-19851.png"
          alt="Close-up of foliage"
          className="-z-[5] hidden object-top desktop:flex"
          fill
        />
        <SectionGraph
          title="AIR POLLUTION COMPLAINTS"
          options={airPolutionComplaintsData}
          footerTitles="*includes flaring, generators, and unpermitted sources"
          background="white"
          textColor="dark-gray"
        />

        <SectionGraph
          title="Compliance Inspections"
          options={complianceInspectionsData}
          background="white"
          textColor="dark-gray"
        />
        <SubSectionGraph
          title="PENALTIES AND VIOLATIONS"
          options={PenaltiesViolationsData}
          background="bg-white"
          textColor="dark-gray"
        />
      </section>
      <section className="relative mt-12 hidden w-full flex-col bg-transparent pl-15 desktop:flex desktop:pl-6 desktop:pt-[160px]">
        <Typography
          as="h2"
          className=" ml-18 mb-15 h-fit border-b-2 border-dark-blue pb-2 uppercase text-dark-blue"
        >
          PERMITTING ACTIVITY
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
      </section>
      <section className="relative mt-12 flex w-full flex-col space-y-[60px] px-6 py-15 desktop:hidden desktop:px-0">
        <Typography
          as="h2"
          className=" h-fit border-b-2 border-dark-blue pb-2 uppercase text-dark-blue"
        >
          PERMITTING ACTIVITY
        </Typography>
        {slides.map((Component, index) => (
          <Component key={`slides-${index}`} />
        ))}
      </section>
      <section
        className="relative flex w-full flex-col justify-center
      gap-y-9 bg-transparent px-6 pt-25 desktop:gap-y-[100px] desktop:space-x-0 desktop:px-20 desktop:py-36"
      >
        <SectionGraph
          title="SOURCE TEST ACTIVITY"
          options={[]}
          background="blue"
        >
          <Typography as="h5" className="mb-6">
            Number of Source Tests and Reviews in 2023
          </Typography>
          <div className="flex flex-col gap-y-9">
            {sourceTestData.map((section, index) => (
              <div
                key={index}
                className=" flex flex-col desktop:w-full desktop:justify-between"
              >
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex w-full flex-col justify-between space-y-1 desktop:flex-row desktop:space-x-4 ${item?.rigth && ' desktop:pl-9 '}`}
                  >
                    <Typography
                      as="span"
                      className="capitalize desktop:mt-1 desktop:text-[21px]"
                    >
                      {item.label}
                    </Typography>
                    <Typography as="h5" className="uppercase">
                      {item.value}
                    </Typography>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="my-6 w-full border-b-2" />

          <div className="flex flex-col desktop:flex-row desktop:justify-between">
            <Typography as="h5" className="mb-6 uppercase">
              Total Source Tests
            </Typography>
            <Typography as="h5" className="mb-6 uppercase">
              16,318
            </Typography>
          </div>
          <div className="flex flex-col desktop:flex-row desktop:justify-between">
            <Typography as="h5" className="mb-6 uppercase">
              Total Source Test Related Violations
            </Typography>
            <Typography as="h5" className="mb-6 uppercase">
              134
            </Typography>
          </div>
          <div className="flex flex-col desktop:flex-row desktop:justify-between">
            <Typography as="h5" className="mb-6 uppercase">
              Compliance Rate
            </Typography>
            <Typography as="h5" className="mb-6 uppercase">
              99.2%
            </Typography>
          </div>
        </SectionGraph>
      </section>
      <section
        className="relative flex w-full flex-col justify-center
      space-y-9 bg-transparent px-6 py-25 desktop:space-x-0 desktop:space-y-[100px] desktop:px-20 desktop:py-36"
      >
        <Image
          src="/img/frame-19851.png"
          alt="Close-up of foliage"
          className="-z-[5] object-top"
          fill
        />
        <SectionGraph
          title="RULEMAKING ACTIVITY"
          options={[]}
          background="white"
        >
          <div className="mb-4 flex flex-col desktop:mb-6 desktop:w-full desktop:justify-between">
            <Typography as="h5" className=" capitalize">
              Rules Adopted or Amended
            </Typography>
            <Typography as="h5" className="mt-6 capitalize">
              March 15, 2023 - Building Appliance Amendments
            </Typography>
            <Typography
              as="span"
              className="mt-2 pb-1 capitalize text-dark-gray  desktop:text-[21px]"
            >
              Regulation 9: Inorganic Gaseous Pollutants, Rule 4: Nitrogen
              Oxides from Fan Type Central Furnaces, and Rule 6: Nitrogen Oxides
              Emissions from Natural Gas-Fired Boilers and Water Heaters
            </Typography>

            <Typography as="h5" className="mt-6 ">
              June 7, 2023 - Fee Amendments
            </Typography>
            <Typography
              as="span"
              className="mt-2 pb-1 capitalize text-dark-gray  desktop:text-[21px]"
            >
              Regulation 3: Fees
            </Typography>

            <Typography as="h5" className="mt-6 ">
              December 20, 2023 - Refinery Wastewater Systems Amendments
            </Typography>
            <Typography
              as="span"
              className="mt-2 pb-1 capitalize text-dark-gray  desktop:text-[21px]"
            >
              Regulation 8: Organic Compounds, Rule 8: Wastewater Collection and
              Separation Systems
            </Typography>
          </div>
        </SectionGraph>
      </section>
      <Navigation prevLink="/incentives" nextLink="/advocacy" />
    </div>
  );
};

export default Document;
