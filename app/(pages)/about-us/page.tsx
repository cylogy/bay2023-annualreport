import React, { FC } from 'react'
import Hero from '../../components/Hero'
import TextBlock from '@/app/components/TextBlock'
import Typography from '@/app/components/Typography'

const page: FC = () => {
  return (
    <div className='h-screen flex flex-col'>
      <Hero
        title='About us'
        description="Who Are We?"
        image="/img/about-us-mobile-tablet.png"
        imageTablet="/img/about-us-mobile-tablet.png"
        background="bg-green text-white"
        finalReverse
      />
      <div className="inline-block">
        <TextBlock align="left">
          <div className="desktop:pt-40 desktop:pl-25 tablet-portrait:px-15 tablet-portrait:pt-22.5 tablet-portrait:pb-20 desktop:pb-20 desktop:max-w-[855px] flex w-full flex-col place-self-start px-5 pb-6 pt-20">
            <Typography as="h2" className=" text-dark-blue uppercase">
            Climate Tech Finance
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
    </div>
  )
}

export default page