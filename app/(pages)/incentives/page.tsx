import React, { FC } from 'react'
import Hero from '../../components/Hero'
import TextBlock from '@/app/components/TextBlock'
import Typography from '@/app/components/Typography'
import Image from 'next/image'
import { InfoCard } from '@/app/components/InfoCard'
import Navigation from '@/app/components/Navigation'
import { InfoCardText } from '@/app/components/InfoCardText'

const page: FC = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Hero
        title='Incentives'
        description="How Do We Reduce Emissions and Protect Communities and the Climate?"
        image="/img/frame-19722.png"
        imageTablet="/img/frame-19722-3.png"
        background="bg-green text-white"
        finalReverse
        alt='Incentives'
      />
      <TextBlock>
        <div className="desktop:pt-40 desktop:pl-25 tablet-portrait:px-15 tablet-portrait:pt-22.5 tablet-portrait:pb-20 desktop:pb-20 desktop:max-w-[855px] flex w-full flex-col place-self-start px-5 pb-6 pt-20">
          <Typography as="h2" className=" text-dark-blue uppercase">
          Climate Tech Finance
          </Typography>
          <Typography as="p" className=" text-dark-blue mt-6">
            TThis year, in partnership with IBank, our Climate Tech Finance program took significant steps in
            <span className="font-bold"> endorsing sustainable technological advancements.</span> 
          </Typography>
        </div>
      </TextBlock>
      <TextBlock>
        <div className="desktop:max-w-[1200px] flex w-full flex-col items-start justify-start place-self-end">
          <Typography as="p" className="text-dark-gray desktop:pl-0 px-15">
            We awarded a loan guarantee to
              <span className="font-bold">
                 {" "}SPARKZ,{" "}
              </span>
            whose energy storage solution reduces the cost of domestic lithium battery production by eliminating the cobalt and nickel traditionally used in their manufacturing. The pioneering process developed by SPARKZ not only lowers the cost of lithium-ion batteries, it removes environmental concerns around mining cobalt, and reduces constrictions created by a foreign supply chain. Another loan guarantee was accorded to
              <span className="font-bold">
              {" "}EV Life,{" "}
              </span>
            a startup whose goal is making electric vehicles (EVs) more accessible by spearheading solutions to eliminate the 'green premium' — the additional cost often associated with eco-friendly options. Their efforts are focused on making electric driving an achievable dream for millions deterred by the hefty initial cost of EVs. The most recent loan guarantee we awarded was to
              <span className="font-bold">
              {" "}One Way Trigger,{" "}
              </span>
            a company that specializes in pavement preservation techniques as a greener and more cost-effective alternative to traditional road maintenance. This approach not only optimizes taxpayer dollars, but also reduces greenhouse gas emissions, curtails energy demands, and ensures quicker application times.
          </Typography>
        </div>
      </TextBlock>
      <TextBlock>
      <div className="mt-10 desktop:max-w-[1200px] flex w-full flex-col items-start justify-start place-self-end">
        <Typography
          as="h2"
          className="text-dark-blue desktop:pl-0 px-15 capitalize break-all"
        >
          Building Appliance Rule Amendments
        </Typography>
        <Typography as="p" className="text-dark-gray desktop:pl-0 px-15 mt-6">
            We continued our commitment to accelerating electric vehicle adoption in the Bay Area. The 
              <span className="font-bold">
              {" "}Charge! Program{" "}
              </span>
            provided nearly $10 million in grants to fund 1,070 charging stations at 100 sites across the Bay Area. The
              <span className="font-bold">
              {" "}Clean Cars for All (CCFA) Program{" "}
              </span>
            helped income-qualified residents replace older vehicles with clean air vehicles or mobility options, such as public transit cards or electric bicycles. CCFA received $31 million in funding from the California Air Resources Board in 2023, bringing the total program funding to $73 million. CCFA has awarded nearly $37 million to over 4,400 residents since the program began in March 2019. The program relaunched in Fall 2023 with increased grant award amounts and will expand zip code eligibility to all Bay Area residents in 2024.
          </Typography>
          <Typography as="p" className="text-dark-gray desktop:pl-0 px-15 mt-4">
            Additionally, we were awarded nearly $3 million in funding from the California Energy Commission (CEC) to expand equitable EV charging across the Bay Area. We are working with project partners and community stakeholders to deploy over 200 charging stations in Oakland, Richmond, San Pablo, and Vallejo. These chargers will serve multifamily residents, focusing on affordable and public housing residents. The CEC grant, in conjunction with our Charge! Program and CCFA Program, will help the Bay Area transition to a clean transportation economy and provide long-term economic, environmental, and health benefits.
          </Typography>
        </div>
      </TextBlock>

      <section className="
      mt-10 desktop:max-w-[1200px]
      desktop:flex-row desktop:h-[610px] desktop:space-y-0 py-25 desktop:py-36 desktop:space-x-9 relative flex w-full flex-col justify-center space-y-9  place-self-end px-6 desktop:px-0 desktop:pr-15">
        <InfoCard
          cardTitle="3"
          cardBody="sustainable technological advances were awarded loan guarantees through the Climate Tech Finance Program"
          backgroundColor="dark-blue"
        />
        <InfoCard
          cardTitle="1,070"
          cardBody="electric vehicle charging stations were funded through the Charge! Program"
          backgroundColor="white"
        />
        <InfoCard
          cardTitle="4,400+"
          cardBody="residents have participated in the Clean Cars For All Program since it began in March 2019"
          backgroundColor="blue"
        />
      </section>
      <section className='desktop:max-w-[1200px] desktop:space-y-0 relative flex w-full flex-col justify-center space-y-9  place-self-end px-6 desktop:px-0 desktop:pr-15'>
        <Typography
          as="h2"
          className="text-dark-blue capitalize"
        >
          Clean Ports
        </Typography>
        <Typography as="p" className="text-dark-gray pt-6">
          We prioritized grant funding for the upgrade and replacement of older diesel-powered equipment and marine vessels servicing ports to accelerate emissions reductions in West Oakland and Richmond communities.
        </Typography>
      </section>
      <section className='desktop:max-w-[1200px] mt-6 desktop:mt-0 h-[350px]
     desktop:h-[610px] desktop:space-y-0 py-25 desktop:py-36 relative flex w-full flex-col justify-center place-self-end desktop:px-0 desktop:pr-15'>
        <Image src="/img/port-image.png" alt='port image' fill className='object-cover desktop:h-[531px] block desktop:mt-12 mt-6' />
      </section>

    <section className='mt-6 desktop:mt-0 desktop:space-y-0 py-25 desktop:py-36 relative flex w-full flex-col justify-center place-self-end desktop:px-0 desktop:pr-15'>
        <InfoCardText
          firstTitle="$30M"
          secondTitle="Heavy-Duty Vehicle and Equipment Electric Charging Infrastructure"
          firstBody="in funding was offered for projects to install charging stations for heavy- and medium-duty vehicles and equipment"
          secondBody="This competitive grant program offered $30 million in funding for projects to install electric charging stations for heavy- and medium-duty vehicles and equipment. Installation of charging stations is a critical first step in helping accelerate the  transition toward zero-emission fleets that reduce emissions in Bay Area communities most affected by air pollution."
          backgroundColor="blue"
          position="left"
        />
        <InfoCardText
          firstTitle="40"
          secondTitle="CLEANER SCHOOL BUSES"
          firstBody="new school buses were funded through our grant program"
          secondBody="We prioritized grant funding to support the accelerated replacement of older, diesel-powered school buses with zero-emission buses to protect student health and achieve significant air quality benefits for this highly sensitive group."
          backgroundColor="dark-blue"
          position="rigth"
        />
      </section>

      <Navigation prevLink="/community" nextLink="/by-the-numbers" />
    </div>
  )
}

export default page