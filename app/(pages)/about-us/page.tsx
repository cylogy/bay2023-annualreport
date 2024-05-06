import React, { FC } from 'react'
import Hero from '../../components/Hero'
import TextBlock from '@/app/components/TextBlock'
import Typography from '@/app/components/Typography'
import Navigation from '@/app/components/Navigation'
import SectionGraph from '@/app/components/SectionGraph'
import Image from 'next/image'

const page: FC = () => {
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

  return (
    <div className='flex flex-col min-h-screen'>
      <Hero
        title='About us'
        description="Who Are We?"
        image="/img/about-us-mobile-tablet.png"
        imageTablet="/img/about-us-mobile-tablet.png"
        background="bg-green text-white"
        finalReverse
        alt='About us'
      />
      <div className="inline-block">
        <TextBlock align="left">
          <div className="desktop:pt-40 desktop:pl-25 tablet-portrait:px-15 tablet-portrait:pt-22.5 tablet-portrait:pb-20 desktop:pb-20 desktop:max-w-[855px] flex w-full flex-col place-self-start px-5 pb-6 pt-20">
            <Typography as="h2" className=" text-dark-blue uppercase">
              Strengthening Diversity, Equity and Inclusion Within the Air District
            </Typography>
            <Typography as="p" className=" text-dark-blue mt-6">
            Staff participated in a variety of internal events, activities, and trainings to strengthen DEI principles throughout our work, including events featuring labor leader and civil rights activist
              <span className="font-bold"> Dolores Huerta, </span>
            Chinese American author
              <span className="font-bold"> Amy Tan, </span>
            the
              <span className="font-bold"> GLBT Historical Society, </span>
            and environmental justice professional 
              <span className="font-bold"> Bruce Strouble, Ph.D. </span>
            We created our first formal
              <span className="font-bold"> Anti-Bullying Policy </span>
            to ensure a workplace free from all forms of violence, intimidation and interpersonal abuse. We updated our
              <span className="font-bold"> Plan for Language Services to Limited English Proficient Populations </span>
            with the goal of ensuring that all community members are able to meaningfully access our services and programs. Staff also participated in
              <span className="font-bold"> Cultural Competency Training </span>
            to encourage integration of these values in the planning, implementation, and evaluation of programming.
            </Typography>
          </div>
        </TextBlock>
      </div>

      <section className='
      desktop:space-y-[100px] py-25 desktop:py-36 desktop:px-20 desktop:space-x-0
      relative flex w-full flex-col justify-center space-y-9 px-6'>
        <div className="w-full pb-1 border-b-2 border-dark-blue mb-6 desktop:mb-0">
          <Typography as="h2" className=" text-dark-blue uppercase">
            Our Leadership
          </Typography>
        </div>
        <SectionGraph
          title="EXECUTIVE MANAGEMENT "
          options={[]}
          background="white"
        >
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4'
          >
            <Typography as="h5" className="uppercase">
            Philip M. Fine
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] desktop:mt-1 pb-4 border-b-2 border-dark-blue">
              Executive Officer/Air Pollution Control Officer    
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4'
          >
            <Typography as="h5" className="uppercase">
              Alexander Crockett
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] desktop:mt-1 pb-4 border-b-2 border-dark-blue">
              General Counsel
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4'
          >
            <Typography as="h5" className="uppercase">
              Meredith Bauer
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] desktop:mt-1 pb-4 border-b-2 border-dark-blue">
              Deputy Executive Officer of Engineering and Compliance
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4'
          >
            <Typography as="h5" className="uppercase">
              Hyacinth Hinojosa
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] desktop:mt-1 pb-4 border-b-2 border-dark-blue">
              Deputy Executive Officer of Finance and Administration
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4'
          >
            <Typography as="h5" className="uppercase">
              GREGORY NUDD
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] desktop:mt-1 pb-4 border-b-2 border-dark-blue">
              Deputy Executive Officer of Science and Policy
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4'
          >
            <Typography as="h5" className="uppercase">
              Viet Tran
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] desktop:mt-1 pb-4 border-b-2 border-dark-blue">
              Deputy Executive Officer of Public Affairs
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4'
          >
            <Typography as="h5" className="uppercase">
              Arsenio Mataka
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] desktop:mt-1 pb-4 border-b-2 border-dark-blue">
              Deputy Executive Officer of Equity and Community Programs
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4'
          >
            <Typography as="h5" className="uppercase">
              JOHN CHILADAKIS
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] desktop:mt-1 pb-4 border-b-2 border-dark-blue">
              Chief Technology Officer
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4'
          >
            <Typography as="h5" className="uppercase">
              Vanessa Johnson
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] desktop:mt-1 pb-4">
              Manager, Executive Operations
            </Typography>   
          </div>
        </SectionGraph>

        <SectionGraph
          title="Division Directors and Officers"
          options={[]}
          background="dark-blue"
        >
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4'
          >
            <Typography as="h5" className="uppercase">
            ALAN ABBS
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] desktop:mt-1 pb-4 border-b-2 border-white">
            Legislative Officer
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4'
          >
            <Typography as="h5" className="uppercase">
            SONG BAI
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] desktop:mt-1 pb-4 border-b-2 border-white">
            Assessment, Inventory and Modeling
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4'
          >
            <Typography as="h5" className="uppercase">
            LISA BAKER
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] desktop:mt-1 pb-4 border-b-2 border-white">
            Human Resources
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4'
          >
            <Typography as="h5" className="uppercase">
            RANYEE CHIANG
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] desktop:mt-1 pb-4 border-b-2 border-white">
            Meteorology and Measurements 
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4'
          >
            <Typography as="h5" className="uppercase">
            JUDITH CUTINO
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] desktop:mt-1 pb-4 border-b-2 border-white">
            Health Officer
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4'
          >
            <Typography as="h5" className="uppercase">
            LISA F. FASANO
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] desktop:mt-1 pb-4 border-b-2 border-white">
              External Affairs
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4'
          >
            <Typography as="h5" className="uppercase">
            ANTHONY FOURNIER
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] desktop:mt-1 pb-4 border-b-2 border-white">
            Technology Implementation
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4'
          >
            <Typography as="h5" className="uppercase">
            Wendy Goodfriend
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] desktop:mt-1 pb-4 border-b-2 border-white">
            Planning and Climate Protection
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4'
          >
            <Typography as="h5" className="uppercase">
            Jeffrey Gove
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] desktop:mt-1 pb-4 border-b-2 border-white">
            Compliance and Enforcement
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4'
          >
            <Typography as="h5" className="uppercase">
            PAMELA LEONG
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] desktop:mt-1 pb-4 border-b-2 border-white">
            Engineering
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4'
          >
            <Typography as="h5" className="uppercase">
            Maricela Martinez
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] desktop:mt-1 pb-4 border-b-2 border-white">
            Administrative Resources
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4'
          >
            <Typography as="h5" className="uppercase">
            Stephanie Osaze
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] desktop:mt-1 pb-4 border-b-2 border-white">
            Finance
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4'
          >
            <Typography as="h5" className="uppercase">
            Suma Peesapati
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] desktop:mt-1 pb-4 border-b-2 border-white">
            Environmental Justice and Community Engagement
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4'
          >
            <Typography as="h5" className="uppercase">
            Patricia Roman
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] desktop:mt-1 pb-4 border-b-2 border-white">
            My Air Online
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4'
          >
            <Typography as="h5" className="uppercase">
            Kristine Roselius
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] desktop:mt-1 pb-4 border-b-2 border-white">
            Communications
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4'
          >
            <Typography as="h5" className="uppercase">
            Karen Schkolnick
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] desktop:mt-1 pb-4 border-b-2 border-white">
            Strategic Incentives
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4'
          >
            <Typography as="h5" className="uppercase">
            POSITION CURRENTLY VACANT
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] desktop:mt-1 pb-4">
            Rules and Strategic Policy
            </Typography>   
          </div>
        </SectionGraph>
      </section>

      <section className="
      desktop:space-y-[100px] py-25 desktop:py-36 desktop:px-20 desktop:space-x-0
      relative flex w-full flex-col justify-center space-y-9 px-6 bg-transparent">
        <Image
          src="/img/frame-19851.png"
          alt="Close-up of foliage"
          className="object-top -z-[5]"
          fill
        />
        <SectionGraph
          title="CURRENT BOARD MEMBERS"
          options={[]}
          background="white">
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4 desktop:mb-6'
          >
            <Typography as="h5" className="uppercase">
              ALAMEDA
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] mt-4 pb-1">
            Juan Gonzalez
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] mt-1 pb-1">
            David Haubert
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] mt-1 pb-1">
            Nate Miley
            </Typography>  
            <Typography as="span" className="capitalize mt-1 desktop:text-[21px] pb-4 border-b-2 border-dark-blue">
            Mark Sanchez
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4 desktop:mb-6'
          >
            <Typography as="h5" className="uppercase">
            CONTRA COSTA
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] mt-4 pb-1">
            Ken Carlson
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] mt-1 pb-1">
            John Gioia
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] mt-1 pb-1">
            David E. Hudson
            </Typography>  
            <Typography as="span" className="capitalize mt-1 desktop:text-[21px] pb-4 border-b-2 border-dark-blue">
            Mark Ross
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4 desktop:mb-6'
          >
            <Typography as="h5" className="uppercase">
            MARIN
            </Typography>
            <Typography as="span" className="capitalize mt-1 desktop:text-[21px] pb-4 border-b-2 border-dark-blue">
            Katie Rice
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4 desktop:mb-6'
          >
            <Typography as="h5" className="uppercase">
            NAPA
            </Typography>
            <Typography as="span" className="capitalize mt-1 desktop:text-[21px] pb-4 border-b-2 border-dark-blue">
            Joelle Gallagher
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4 desktop:mb-6'
          >
            <Typography as="h5" className="uppercase">
            SAN FRANCISCO
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] mt-4 pb-1">
            Tyrone Jue (Mayor’s Appointee)
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] mt-1 pb-1">
            Shamann Walton
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] mt-1 pb-4 border-b-2 border-dark-blue">
            One seat currently vacant
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4 desktop:mb-6'
          >
            <Typography as="h5" className="uppercase">
            SAN MATEO
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] mt-4 pb-1">
            Noelia Corzo
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] mt-1 pb-1">
            Davina Hurt, Chair
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] mt-1 pb-4 border-b-2 border-dark-blue">
            Ray Mueller
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4 desktop:mb-6'
          >
            <Typography as="h5" className="uppercase">
            SANTA CLARA
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] mt-4 pb-1">
            Margaret Abe-Koga
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] mt-1 pb-1">
            Otto Lee
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] mt-1 pb-1">
            Sergio Lopez
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] mt-1 pb-4 border-b-2 border-dark-blue">
            Vicki Veenker
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4 desktop:mb-6'
          >
            <Typography as="h5" className="uppercase">
            SOLANO
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] mt-4 pb-1">
            Erin Hannigan 
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] mt-1 pb-4 border-b-2 border-dark-blue">
            Steve Young
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4 desktop:mb-6'
          >
            <Typography as="h5" className="uppercase">
              SONOMA
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] mt-4 pb-1">
            Brian Barnacle
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] mt-1 pb-4 border-b-2 border-dark-blue">
            Lynda Hopkins, Vice Chair
            </Typography>   
          </div>
        </SectionGraph>
        <SectionGraph
          title="CONTACT INFORMATION"
          options={[]}
          background="white">
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4 desktop:mb-6'
          >
            <Typography as="h5" className="uppercase">
            AIR POLLUTION COMPLAINTS
            </Typography>
            <Typography as="span" className="capitalize mt-1 desktop:text-[21px] pb-4 border-b-2 border-dark-blue">
            800.334.ODOR (6367)
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4 desktop:mb-6'
          >
            <Typography as="h5" className="uppercase">
            AIR QUALITY INFO
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] mt-4 pb-1">
            800.HELP.AIR (435.7247)
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] mt-1 pb-1">
            Spare the Air Alerts,
            </Typography> 
            <Typography as="span" className="capitalize mt-1 desktop:text-[21px] pb-4 border-b-2 border-dark-blue">
            Agricultural Burn Days
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4 desktop:mb-6'
          >
            <Typography as="h5" className="uppercase">
            COMPLIANCE ASSISTANCE
            </Typography>
            <Typography as="span" className="capitalize mt-1 desktop:text-[21px] pb-4 border-b-2 border-dark-blue">
            415.749.4999
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4 desktop:mb-6'
          >
            <Typography as="h5" className="uppercase">
            ENGINEERING SERVICES
            </Typography>
            <Typography as="span" className="capitalize mt-1 desktop:text-[21px] pb-4 border-b-2 border-dark-blue">
            415.749.4990
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4 desktop:mb-6'
          >
            <Typography as="h5" className="uppercase">
            GENERAL BUSINESS
            </Typography>
            <Typography as="span" className="capitalize mt-1 desktop:text-[21px] pb-4 border-b-2 border-dark-blue">
            415.749.5000
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4 desktop:mb-6'
          >
            <Typography as="h5" className="uppercase">
            PUBLIC INFORMATION
            </Typography>
            <Typography as="span" className="capitalize mt-1 desktop:text-[21px] pb-4 border-b-2 border-dark-blue">
            415.749.5000
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4 desktop:mb-6'
          >
            <Typography as="h5" className="uppercase">
            REPORT SMOKING VEHICLES
            </Typography>
            <Typography as="span" className="capitalize mt-1 desktop:text-[21px] pb-4 border-b-2 border-dark-blue">
            800.EXHAUST (394.2878)
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4 desktop:mb-6'
          >
            <Typography as="h5" className="uppercase">
            WOOD BURNING BAN ALERTS
            </Typography>
            <Typography as="span" className="capitalize mt-1 desktop:text-[21px] pb-4">
            877.4NO.BURN (466.2876)
            </Typography>   
          </div>
        </SectionGraph>
      </section>

      <section className="
      desktop:space-y-[100px] py-25 desktop:py-36 desktop:px-20 desktop:space-x-0
      relative flex w-full flex-col justify-center space-y-9 px-6 bg-transparent">
        <SectionGraph
          title="SOCIAL + WEBSITES"
          options={[]}
          background="white">
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4 desktop:mb-6'
          >
            <Typography as="h4" className="uppercase">
            Bay Area Air District
            </Typography>
            <Typography as="span" className="mt-6 desktop:text-[21px]">
            sparetheair.org
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] pb-1 mt-6">
            @BayAreaAirDistrict
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] mt-1 pb-1">
            @AirDistrict
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] mt-1 pb-1">
            @BayAreaAirDistrict
            </Typography>  
            <Typography as="span" className="capitalize desktop:text-[21px] mt-1 pb-1">
            @BayAreaAirDistrict
            </Typography>  
            <Typography as="span" className="capitalize mt-1 desktop:text-[21px] pb-4 border-b-2 border-dark-blue desktop:pb-15 desktop:pt-6">
            Find us on Nextdoor and LinkedIn
            </Typography>   
          </div>
          <div
            className='flex flex-col desktop:w-full desktop:justify-between mb-4 desktop:mb-6'
          >
            <Typography as="h4" className="uppercase">
            Spare the Air
            </Typography>
            <Typography as="span" className="mt-6 desktop:text-[21px]">
            sparetheair.org
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] pb-1 mt-6">
            @SpareTheAir
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] mt-1 pb-1">
            @SpareTheAir
            </Typography>
            <Typography as="span" className="capitalize desktop:text-[21px] mt-1 pb-1">
            @SpareTheAir
            </Typography>  
            <Typography as="span" className="capitalize desktop:text-[21px] mt-1 pb-1">
            @SpareTheAirBayArea
            </Typography> 
          </div>
          </SectionGraph>
      </section>
      <Navigation nextLink="/about-us" prevLink="/advocacy" />
    </div>
  )
}

export default page