import React, { FC } from 'react'
import Hero from '../../components/Hero'

const page: FC = () => {
  return (
    <div className='h-screen flex flex-col'>
      <Hero
        title='Incentives'
        description="How Do We Reduce Emissions and Protect Communities and the Climate?"
        image="/img/frame-19722.png"
        imageTablet="/img/frame-19722-3.png"
        background="bg-green text-white"
        finalReverse
      />

    </div>
  )
}

export default page