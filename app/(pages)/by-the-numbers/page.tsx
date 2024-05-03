import React, { FC } from 'react'
import Hero from '../../components/Hero'

const page: FC = () => {
  return (
    <div className='h-screen flex flex-col'>
      <Hero
        title='By the Numbers'
        description="How do we track and improve air quality protections?"
        image="/img/number-page-small.png"
        imageTablet="/img/number-page-tablet.png"
        background="bg-dark-blue text-white"
      />

    </div>
  )
}

export default page