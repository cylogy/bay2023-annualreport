import Image from 'next/image'
import React, { FC } from 'react'
import bannerImage from '../../public/img/frame-19722-3.png'
import Typography from '../components/Typography'
import TitleSection from '../components/TitleSection'

const page: FC = () => {
  return (
    <div className='h-screen flex flex-col'>

      <TitleSection
        bannerImage={bannerImage}
        title='community'
        subTitle='How Do We Reduce Emissions and Protect Communities and the Climate?'
      />
    </div>
  )
}

export default page