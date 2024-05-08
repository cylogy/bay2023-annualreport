'use client'

import React, { FC } from 'react'
import Hero from '../../components/Hero'
import TextBlock from '@/app/components/TextBlock'
import Typography from '@/app/components/Typography'
import Navigation from '@/app/components/Navigation'
import SectionGraph from '@/app/components/SectionGraph'
import Image from 'next/image'
import PieChartWithoutSSR from '@/app/components/PieChartWithoutSSR'
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

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

  const executiveManagementData = [
    {
      name: "Philip M. Fine",
      position: "Executive Officer/Air Pollution Control Officer"
    },
    {
      name: "Alexander Crockett",
      position: "General Counsel"
    },
    {
      name: "Meredith Bauer",
      position: "Deputy Executive Officer of Engineering and Compliance"
    },
    {
      name: "Hyacinth Hinojosa",
      position: "Deputy Executive Officer of Finance and Administration"
    },
    {
      name: "GREGORY NUDD",
      position: "Deputy Executive Officer of Science and Policy"
    },
    {
      name: "Viet Tran",
      position: "Deputy Executive Officer of Public Affairs"
    },
    {
      name: "Arsenio Mataka",
      position: "Deputy Executive Officer of Equity and Community Programs"
    },
    {
      name: "JOHN CHILADAKIS",
      position: "Chief Technology Officer"
    },
    {
      name: "Vanessa Johnson",
      position: "Manager, Executive Operations"
    }
  ];

  const divisionDirectorsAndOfficersData = [
    {
      name: "ALAN ABBS",
      position: "Legislative Officer"
    },
    {
      name: "SONG BAI",
      position: "Assessment, Inventory and Modeling"
    },
    {
      name: "LISA BAKER",
      position: "Human Resources"
    },
    {
      name: "RANYEE CHIANG",
      position: "Meteorology and Measurements"
    },
    {
      name: "JUDITH CUTINO",
      position: "Health Officer"
    },
    {
      name: "LISA F. FASANO",
      position: "External Affairs"
    },
    {
      name: "ANTHONY FOURNIER",
      position: "Technology Implementation"
    },
    {
      name: "Wendy Goodfriend",
      position: "Planning and Climate Protection"
    },
    {
      name: "Jeffrey Gove",
      position: "Compliance and Enforcement"
    },
    {
      name: "PAMELA LEONG",
      position: "Engineering"
    },
    {
      name: "Maricela Martinez",
      position: "Administrative Resources"
    },
    {
      name: "Stephanie Osaze",
      position: "Finance"
    },
    {
      name: "Suma Peesapati",
      position: "Environmental Justice and Community Engagement"
    },
    {
      name: "Patricia Roman",
      position: "My Air Online"
    },
    {
      name: "Kristine Roselius",
      position: "Communications"
    },
    {
      name: "Karen Schkolnick",
      position: "Strategic Incentives"
    },
    {
      name: "POSITION CURRENTLY VACANT",
      position: "Rules and Strategic Policy"
    }
  ];


  const demographicsData = [
    { name: 'White', value: 0.47, color: '#7F7A7F' },
    { name: 'Hispanic', value: 0.2, color: '#94B3EF' },
    { name: 'Asian', value: 0.24, color: '#1D67C7' },
    { name: 'Black', value: 0.05, color: '#ADFBE8' },
    { name: 'Other/ Unkown', value: 0.04, color: '#006E6E' },
    { name: 'American Indian/ Alaskan Native', value: 0.01, color: '#E87551' },
  ];

  const genderData = [
    { name: 'Male', value: 0.5, color: '#3368B2' },
    { name: 'Female', value: 0.5, color: '#7F7A7F' },
  ];

  const raceListData = [
    { name: 'Hispanic', value: 0.5, color: '#94B3EF' },
    { name: 'Asian', value: 0.5, color: '#1D67C7' },
    { name: 'Black', value: 0.5, color: '#ADFBE8' },
  ];

  const data = [
    {
      name: '2023',
      w: 0.4,
      h: 0.4,
      a: 0.1,
      b: 0.07,
      o: 0.03,
      aa: 0.01,
    },
    {
      name: '2022',
      w: 0.42,
      h: 0.4,
      a: 0.09,
      b: 0.08,
      o: 0.02,
      aa: 0.01,
    },
    {
      name: '2021',
      w: 0.4,
      h: 0.41,
      a: 0.09,
      b: 0.08,
      o: 0.02,
      aa: 0.01,
    },
    {
      name: '2020',
      w: 0.4,
      h: 0.42,
      a: 0.08,
      b: 0.08,
      o: 0.01,
      aa: 0.01,
    },
    {
      name: '2019',
      w: 0.39,
      h: 0.44,
      a: 0.08,
      b: 0.08,
      aa: 0.01,
    },
  ];

  const genderBarData = [
    {
      name: '2023',
      w: 0.42,
      h: 0.56,
    },
    {
      name: '2022',
      w: 0.44,
      h: 0.56,
    },
    {
      name: '2021',
      w: 0.42,
      h: 0.58,
    },
    {
      name: '2020',
      w: 0.43,
      h: 0.57,
    },
    {
      name: '2019',
      w: 0.42,
      h: 0.58,
    },
  ];

  const raceBarData = [
    {
      name: '2023',
      w: 0.29,
      h: 0.13,
      b: 0.04,
    },
    {
      name: '2019',
      w: 0.15,
      h: 0.10,
    },
  ];

  const genderSecondBarData = [
    {
      name: '2023',
      w: 0.38,
      h: 0.63,
    },
    {
      name: '2019',
      w: 0.65,
      h: 0.35,
    },
  ];

  const RADIAN = Math.PI / 180;
  let fontSize = '19px';
  let factor = 1.4;
  
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: {
    [key: string]: number;
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * factor;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) + 10;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) - 10;
    if (percent >= 0.06)
      return (
        <text
          x={x}
          y={y}
          fill="#0A215B"
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline="central"
          style={{ fontSize, fontWeight: 400, fontFamily: 'Anton' }}
        >
          {`${(percent * 100).toFixed(1)}%`}
        </text>
      );
  };


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
      desktop:space-y-[100px] pb-25 desktop:pb-36 desktop:px-20 desktop:space-x-0
      relative flex w-full flex-col justify-center space-y-9 px-6'>
         <div className="w-full pb-1 border-b-2 border-dark-blue mb-6 desktop:mb-0">
          <Typography as="h2" className=" text-dark-blue uppercase">
            Demographics by gender
          </Typography>
        </div>

        <SectionGraph
          title="EXECUTIVE MANAGEMENT"
          options={[]}
          background="white"
          headChildren={
            <div className='flex flex-col w-full'>
            {genderData.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="flex w-full items-center pb-2 border-b-2 mb-2"
              >
                <div
                  className="w-7 h-7 mr-6"
                  style={{
                    backgroundColor: item.color
                  }}
                />
                <Typography
                    as="span"
                    className="text-start w-full"
                  >
                   {item.name}
                </Typography>  
              </div>
            ))}
              <Typography
                as="span"
                className="text-start w-full"
              >
                *American Community Survey (ACS) Census Bureau
              </Typography>
              <Typography
                as="span"
                className="text-start w-full"
              >
                ** Total percentages may vary by 1% due to rounding
              </Typography>  
            </div>
          }
        >
        <div className="flex w-full h-[320px] flex-col">
          <Typography
              as="h5"
              className=" mb-4 border-b-2 pb-2 text-start"
            >
             Air District Staff
          </Typography>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              height={300}
              data={genderBarData}
              layout="vertical"
              margin={{top: 5, bottom: 5}}
            >
              <XAxis hide type="number" />
              <YAxis
                type="category" 
                dataKey="name"
                axisLine={false}
                tickLine={false}
              />
              <Bar dataKey="w" stackId="a" fill="#3368B2" />
              <Bar dataKey="h" stackId="a" fill="#7F7A7F" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        </SectionGraph>

        <SectionGraph
          title=""
          options={[]}
          background="white"
          headChildren={
            <div>
            </div>
          }
        >
          <div className="flex w-full h-[310px] flex-col">
            <Typography
                as="h5"
                className=" mb-4 border-b-2 pb-2 text-start"
              >
                Bay Area
            </Typography>
            <Typography
                as="span"
                className=" mb-4 text-start"
              >
                5 YEAR AVERAGE   Ages 18 — 64*
            </Typography>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={100}
                  rotate={'45deg'}
                  fill="#000000"
                  dataKey="value"
                  startAngle={-270}
                >

                    {genderData.reverse().map((entry, index) => (
                      <Cell
                        stroke="#000000"
                        key={`cell-${index}`}
                        fill={entry.color}
                      />
                    ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </SectionGraph>
      </section>

      <section className='
      desktop:space-y-[100px] pb-25 desktop:pb-36 desktop:px-20 desktop:space-x-0
      relative flex w-full flex-col justify-center space-y-9 px-6'>
         <div className="w-full pb-1 border-b-2 border-dark-blue mb-6 desktop:mb-0">
          <Typography as="h2" className=" text-dark-blue uppercase">
            Air District Executive Management (Directors & Above)
          </Typography>
        </div>

        <SectionGraph
          title="EXECUTIVE MANAGEMENT"
          options={[]}
          background="white"
          headChildren={
            <div className='flex flex-col w-full'>
            {raceListData.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="flex w-full items-center pb-2 border-b-2 mb-2"
              >
                <div
                  className="w-7 h-7 mr-6"
                  style={{
                    backgroundColor: item.color
                  }}
                />
                <Typography
                    as="span"
                    className="text-start w-full"
                  >
                   {item.name}
                </Typography>  
              </div>
            ))}
            </div>
          }
        >
        <div className="flex w-full h-[193px] flex-col">
          <Typography
              as="h5"
              className=" mb-4 border-b-2 pb-2 text-start"
            >
             Race and Ethnicity
          </Typography>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              height={300}
              data={raceBarData}
              layout="vertical"
              margin={{top: 5, bottom: 5}}
            >
              <XAxis hide type="number" />
              <YAxis
                type="category" 
                dataKey="name"
                axisLine={false}
                tickLine={false}
              />
              <Bar dataKey="w" stackId="a" fill="#3368B2" />
              <Bar dataKey="h" stackId="a" fill="#94B3EF" />
              <Bar dataKey="b" stackId="a" fill="#ADFBE8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        </SectionGraph>

        <SectionGraph
          title="EXECUTIVE MANAGEMENT"
          options={[]}
          background="white"
          headChildren={
            <div className='flex flex-col w-full'>
            {genderData.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="flex w-full items-center pb-2 border-b-2 mb-2"
              >
                <div
                  className="w-7 h-7 mr-6"
                  style={{
                    backgroundColor: item.color
                  }}
                />
                <Typography
                    as="span"
                    className="text-start w-full"
                  >
                   {item.name}
                </Typography>  
              </div>
            ))}
            </div>
          }
        >
        <div className="flex w-full h-[193px] flex-col">
          <Typography
              as="h5"
              className=" mb-4 border-b-2 pb-2 text-start"
            >
            Gender
          </Typography>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              height={300}
              data={genderSecondBarData}
              layout="vertical"
              margin={{top: 5, bottom: 5}}
            >
              <XAxis hide type="number" />
              <YAxis
                type="category" 
                dataKey="name"
                axisLine={false}
                tickLine={false}
              />
              <Bar dataKey="w" stackId="a" fill="#3368B2" />
              <Bar dataKey="h" stackId="a" fill="#7F7A7F" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        </SectionGraph>
      </section>

      <section className='
      desktop:space-y-[100px] pb-25 desktop:pb-36 desktop:px-20 desktop:space-x-0
      relative flex w-full flex-col justify-center space-y-9 px-6'>
        <Image
          src="/img/Frame 19855.png"
          fill
          className="-z-[5] flex object-top"
          alt="Group of cyclists wearing helmets"
        />
         <div className="w-full pb-1 border-b-2 border-dark-blue mb-6 desktop:mb-0">
          <Typography as="h2" className=" text-dark-blue uppercase">
            DEMOGRAPHICS BY RACE AND ETHNICITY**
          </Typography>
        </div>

        <SectionGraph
          title="EXECUTIVE MANAGEMENT"
          options={[]}
          background="white"
          headChildren={
            <div className='flex flex-col w-full'>
            {demographicsData.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="flex w-full items-center pb-2 border-b-2 mb-2"
              >
                <div
                  className="w-7 h-7 mr-6"
                  style={{
                    backgroundColor: item.color
                  }}
                />
                <Typography
                    as="span"
                    className="text-start w-full"
                  >
                   {item.name}
                </Typography>  
              </div>
            ))}
              <Typography
                as="span"
                className="text-start w-full"
              >
                *American Community Survey (ACS) Census Bureau
              </Typography>
              <Typography
                as="span"
                className="text-start w-full"
              >
                ** Total percentages may vary by 1% due to rounding
              </Typography>  
            </div>
          }
        >
        <div className="flex w-full h-[320px] flex-col">
          <Typography
              as="h5"
              className=" mb-4 border-b-2 pb-2 text-start"
            >
              Air District Staff
          </Typography>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              height={300}
              data={data}
              layout="vertical"
              margin={{top: 5, bottom: 5}}
            >
              <XAxis hide type="number" />
              <YAxis
                type="category" 
                dataKey="name"
                axisLine={false}
                tickLine={false}
              />
              <Bar dataKey="w" stackId="a" fill="#3368B2" />
              <Bar dataKey="h" stackId="a" fill="#7F7A7F" />
              <Bar dataKey="a" stackId="a" fill="#94B3EF" />
              <Bar dataKey="b" stackId="a" fill="#ADFBE8" />
              <Bar dataKey="o" stackId="a" fill="#006E6E" />
              <Bar dataKey="aa" stackId="a" fill="#E77550" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        </SectionGraph>

        <SectionGraph
          title=""
          options={[]}
          background="white"
          headChildren={
            <div>
            </div>
          }
        >
          <div className="flex w-full h-[310px] flex-col">
            <Typography
                as="h5"
                className=" mb-4 border-b-2 pb-2 text-start"
              >
                Bay Area
            </Typography>
            <Typography
                as="span"
                className=" mb-4 text-start"
              >
                5 YEAR AVERAGE   Ages 18 — 64*
            </Typography>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={demographicsData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={100}
                  rotate={'45deg'}
                  fill="#000000"
                  dataKey="value"
                  startAngle={-270}
                >

                    {demographicsData.reverse().map((entry, index) => (
                      <Cell
                        stroke="#000000"
                        key={`cell-${index}`}
                        fill={entry.color}
                      />
                    ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </SectionGraph>
      </section>

      <section className='
      desktop:space-y-[100px] py-25 desktop:py-36 desktop:px-20 desktop:space-x-0
      relative flex w-full flex-col justify-center space-y-9 px-6'>
        <div className="w-full pb-1 border-b-2 border-dark-blue mb-6 desktop:mb-0">
          <Typography as="h2" className=" text-dark-blue uppercase">
            Our Leadership
          </Typography>
        </div>
        <SectionGraph
          title="EXECUTIVE MANAGEMENT"
          options={[]}
          background="white"
        >
          {executiveManagementData.map((person, index) => (
            <div
              key={index}
              className='flex flex-col desktop:w-full desktop:justify-between mb-4'
            >
              <Typography as="h5" className="uppercase">
                {person.name}
              </Typography>
              <Typography as="span" className={`capitalize desktop:text-[21px] desktop:mt-1 ${executiveManagementData?.length > index + 1 && "border-b-2 border-dark-blue pb-4" } `}>
                {person.position}
              </Typography>   
            </div>
          ))
        }
        </SectionGraph>

        <SectionGraph
          title="Division Directors and Officers"
          options={[]}
          background="dark-blue"
        >
          {divisionDirectorsAndOfficersData.map((person, index) => (
            <div
              key={index}
              className='flex flex-col desktop:w-full desktop:justify-between mb-4'
            >
              <Typography as="h5" className="uppercase">
                {person.name}
              </Typography>
              <Typography as="span" className={`capitalize desktop:text-[21px] desktop:mt-1 ${divisionDirectorsAndOfficersData?.length > index + 1 && "pb-4 border-b-2 border-white" } `}>
                {person.position}
              </Typography>   
            </div>
          ))}
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