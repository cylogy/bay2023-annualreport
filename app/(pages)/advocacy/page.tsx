import React, { FC } from 'react'
import Hero from '../../components/Hero'

const page: FC = () => {
  return (
    <div className='h-screen flex flex-col'>
      <Hero
        title='Advocacy'
        description="How Are We Championing Legislation to Protect Air Quality?"
        image="/img/frame-19722-2.png"
        imageTablet="/img/frame-19722-2.png"
        background="bg-light-blue text-white"
      />

    </div>
  )
}

export default page