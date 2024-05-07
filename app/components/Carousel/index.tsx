import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { A11y, Navigation as SwiperNavigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';

type Props = {
  slideComponents: Array<() => React.JSX.Element>;
  breakpoints?: {
    [key: number]: {
      slidesPerView: number;
      spaceBetween: number;
    };
  };
};

const Carousel = ({
  slideComponents,
  breakpoints = {
    1441: {
      slidesPerView: 1.6,
      spaceBetween: 80,
    },
  },
}: Props) => {
  const swiperRef = useRef<SwiperType>();

  return (
    <Swiper
      modules={[SwiperNavigation, A11y]}
      pagination={{
        clickable: true,
      }}
      breakpoints={breakpoints}
      draggable
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
      style={{
        background: "transparent",
      }}
    >
      {slideComponents.map((Component, index: number) => (
        <SwiperSlide
          key={`carousel-${index}`}
          style={{ justifyContent: 'center', backgroundColor: 'transparent' }}
        >
          <Component />
        </SwiperSlide>
      ))}
      <div className="mt-15 flex w-full items-center justify-end px-6">
        <button title="previous" onClick={() => swiperRef.current?.slidePrev()}>
          <Image
            src={'/img/arrow-element-22.png'}
            width={68}
            height={48}
            alt="previous slide"
          />
        </button>
        <button title="next" onClick={() => swiperRef.current?.slideNext()}>
          <Image
            src={'/img/arrow-element-23.png'}
            width={68}
            height={48}
            alt="next slide"
          />
        </button>
      </div>
    </Swiper>
  );
};

export default Carousel;
