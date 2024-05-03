import React, { FC } from 'react'
import Hero from '../../components/Hero'

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

    </div>
  )
}

export default page