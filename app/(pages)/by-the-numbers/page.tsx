'use client';
import React, { FC, useEffect, useRef, useState } from 'react'
import Hero from '../../components/Hero'
import SectionGraph from '../../components/SectionGraph'
import SubSectionGraph from '../../components/SectionGraph/SubSectionGraph'
import Navigation from '@/app/components/Navigation'
import Image from 'next/image'
import Typography from '@/app/components/Typography'
import { A11y, Navigation as SwiperNavigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const airPolutionComplaintsData = [
    {
      title: "Odor",
      value: 1720,
      percents: 45.6,
    },
    {
      title: "Wood Smoke",
      value: 1220,
      percents: 32.4,
    },
    {
      title: "Dust/Particulates",
      value: 283,
      percents: 7.5,
    },
    {
      title: "Other*",
      value: 164,
      percents: 4.4,
    },
    {
      title: "Fire Out/Illegal Outdoor Fires",
      value: 125,
      percents: 3.3,
    },
    {
      title: "Smoke",
      value: 107,
      percents: 2.8,
    },
    {
      title: "Asbestos ",
      value: 96,
      percents: 2.5,
    },
    {
      title: "Idling Commercial Vehicles",
      value: 30,
      percents: 0.8,
    },
    {
      title: "Gas Stations",
      value: 23,
      percents: 0.6,
    },
  ]

  const complianceInspectionsData = [
    {
      title: "Source Inspections",
      value: 4755,
    },
    {
      title: "Air Pollution Complaints (excludes smoking vehicles)",
      value: 3768,
    },
    {
      title: "Gasoline Dispensing Facility Inspections",
      value: 965,
    },
    {
      title: "Asbestos Inspections",
      value: 2070,
    },
    {
      title: "Reportable Compliance Activities",
      value: 734,
    },
    {
      title: "Diesel Compliance and Grant Inspections",
      value: 125,
    },
    {
      title: "Portable Equipment Registration Program (PERP) Inspections",
      value: 7,
    },
    {
      title: "Open Burn Inspections",
      value: 4,
    },
    {
      title: "Naturally Occurring Asbestos (NOA) Inspections",
      value: 23,
    },
  ]

  const PenaltiesViolationsData = [
    {
      title: "Civil Penalties",
      value: "$3,403,279",
    },
    {
      title: "Violations Resolved with Penalties",
      value: "421",
    },
  ]


const Page: FC = () => {
  const swiperRef = useRef<SwiperType>();
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(true)
  }, [])
  

  return (isOpen &&
    <div className='flex flex-col min-h-screen'>
      <Hero
        title='By the Numbers'
        description="How do we track and improve air quality protections?"
        image="/img/number-page-small.png"
        imageTablet="/img/number-page-tablet.png"
        background="bg-dark-blue text-white"
        alt='By the Numbers'
      />
      <section className='
      desktop:space-y-[100px] py-25 desktop:py-36 desktop:px-20 desktop:space-x-9
      relative flex w-full flex-col justify-center space-y-9 px-6 bg-lighter-grey desktop:bg-transparent'>
        <Image
          src="/img/frame-19851.png"
          alt="Close-up of foliage"
          className="object-top -z-[5] hidden desktop:flex"
          fill
        />
        <SectionGraph
          title="AIR POLLUTION COMPLAINTS"
          options={airPolutionComplaintsData}
          footerTitles="*includes flaring, generators, and unpermitted sources"
          background="white"
        />

        <SectionGraph
          title="Compliance Inspections"
          options={complianceInspectionsData}
          background="white"
        />
        <SubSectionGraph
          title="PENALTIES AND VIOLATIONS"
          options={PenaltiesViolationsData}
          background="bg-white"
        />
      </section>
      {/* <section className='pl-15 desktop:pl-25 mb-40 mt-12 flex w-full flex-col'>
        <Typography
          as="h3"
          className="text-dark-blue desktop:p-0 px-15 uppercase"
        >
          PERMITTING ACTIVITY
        </Typography>
        <Swiper
          modules={[SwiperNavigation, A11y]}
          slidesPerView={1.6}
          spaceBetween={80}
          pagination={{
            clickable: true,
          }}
          className="pl-25 flex h-[594px] w-full"
          draggable
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          <SwiperSlide>
            <div className="tablet-portrait:h-[617.17px] desktop:h-[786px] relative flex h-[247px] w-full">
              <Image
                src="/img/rectangle-255-2.png"
                fill
                className="object-cover"
                alt="Technicians analyzing machinery for air quality"
              />
            </div>
          </SwiperSlide>
          <div className="mt-15 flex w-full items-center justify-end px-6">
            <button
              title="previous"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <Image
                src={'/img/arrow-element-22.png'}
                width={68}
                height={48}
                alt="previous slide"
              />
            </button>
            <button
              title="previous"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <Image
                src={'/img/arrow-element-23.png'}
                width={68}
                height={48}
                alt="next slide"
              />
            </button>
          </div>
        </Swiper>
      </section> */}

      <Navigation prevLink="/incentives" nextLink="/advocacy" />
    </div>
  )
}

export default Page