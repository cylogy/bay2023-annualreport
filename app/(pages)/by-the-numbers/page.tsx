import React, { FC } from 'react'
import Hero from '../../components/Hero'
import SectionGraph from '../../components/SectionGraph'
import Navigation from '@/app/components/Navigation'

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

const page: FC = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Hero
        title='By the Numbers'
        description="How do we track and improve air quality protections?"
        image="/img/number-page-small.png"
        imageTablet="/img/number-page-tablet.png"
        background="bg-dark-blue text-white"
      />
      <SectionGraph
        title="AIR POLLUTION COMPLAINTS"
        options={airPolutionComplaintsData}
        footerTitles="*includes flaring, generators, and unpermitted sources"
        background="bg-white"
      />

      <SectionGraph
        title="Compliance Inspections"
        options={complianceInspectionsData}
        background="bg-white"
      />
      <Navigation prevLink="/incentives" nextLink="/advocacy" />
    </div>
  )
}

export default page