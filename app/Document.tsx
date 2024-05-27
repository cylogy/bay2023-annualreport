'use client';

import Image from 'next/image';
import Typography from './components/Typography';
import { Button } from './components/Button';
import Animated from './components/Typography/animated';
import AnimatedTile from './components/AnimatedTile';
import AnimatedImage from './components/AnimatedImage';
import LightboxComponent from './components/Lightbox';
import Link from 'next/link';

type Props = {};

const Document = (props: Props) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <LightboxComponent />
      <section className="flex w-full flex-col overflow-hidden desktop:flex-row">
        <div className="z-30 flex w-full flex-1 bg-white desktop:order-1 desktop:flex-[0.3]">
          <AnimatedTile
            id={1}
            className="flex w-full items-center justify-center bg-blue p-9 desktop:h-[384px]"
          >
            <Animated
              as="h1"
              className="overflow-hidden whitespace-nowrap font-h1 text-h1-mobile font-h6-desktop uppercase leading-none text-white tablet-portrait:text-h1-tablet"
              text="Protecting"
            />
          </AnimatedTile>
        </div>
        <div className="z-10 flex bg-white desktop:order-3">
          <AnimatedTile
            id={3}
            className="flex w-full items-center justify-center whitespace-nowrap bg-dark-blue p-9 desktop:h-[384px] desktop:w-[335px]"
          >
            <Animated
              as="h1"
              className="flex w-full flex-nowrap items-center justify-center overflow-hidden whitespace-nowrap font-h1 text-h1-mobile font-h6-desktop uppercase text-white tablet-portrait:text-h1-tablet"
              text="Our Air,"
              oneLine
              centered
            />
          </AnimatedTile>
        </div>
        <div className="z-20 flex overflow-hidden bg-white desktop:order-2 desktop:flex-1">
          <AnimatedImage
            key={2}
            className="relative flex h-[384px] w-full items-center justify-center"
          >
            <Image
              src="/img/image-square-1.png"
              className="hidden h-[350px] flex-1 flex-grow object-cover object-center desktop:flex"
              fill
              priority
              alt="White clouds against a blue sky"
            />
            <Image
              src="/img/image-square-4-2x.png"
              className="flex h-96 flex-1 flex-grow object-cover object-center desktop:hidden"
              fill
              priority
              alt="White clouds against a blue sky"
            />
          </AnimatedImage>
        </div>
      </section>
      <section className="flex h-[768px] w-full flex-1 flex-col overflow-hidden md:flex-row">
        <div className="z-30 flex overflow-hidden bg-white  desktop:w-1/2">
          <AnimatedImage
            key={4}
            className="relative hidden h-full desktop:flex desktop:w-full"
          >
            <Image
              src="/img/image-large-desktop.png"
              alt="Flower field set against mountains"
              fill
              priority
              className="object-cover "
            />
          </AnimatedImage>
        </div>
        <article className="z-20 flex w-full flex-col overflow-hidden desktop:w-1/2">
          <div className="flex h-full w-full flex-col desktop:flex-row">
            <AnimatedTile
              id={5}
              className="flex w-full flex-1 flex-grow items-center justify-center bg-light-blue p-9 desktop:h-[384px] desktop:w-max"
            >
              <Animated
                as="h1"
                className="overflow-hidden whitespace-nowrap font-h1 text-h1-mobile font-h6-desktop uppercase text-white tablet-portrait:text-h1-tablet"
                text="Climate"
              />
            </AnimatedTile>
            <div className="flex w-min">
              <AnimatedImage
                key={6}
                className="flex-0 relative hidden h-full overflow-visible desktop:flex desktop:w-[335px]"
              >
                <Image
                  src="/img/image-square-5-2x.png"
                  alt="Above view of pedestrians crossing the street"
                  fill
                  priority
                  className="object-cover "
                />
              </AnimatedImage>
            </div>
          </div>
          <div className="z-20 flex bg-white desktop:flex-1">
            <AnimatedTile
              id={7}
              className="flex w-full flex-col items-center justify-center bg-green p-9 text-left  md:order-3 desktop:h-[384px]"
            >
              <div className="flex flex-col text-left">
                <Animated
                  as="h1"
                  className="overflow-hidden whitespace-nowrap font-h1 text-h1-mobile font-h6-desktop uppercase leading-none text-white tablet-portrait:text-h1-tablet "
                  text="And Communities"
                />
                <Animated
                  as="h2"
                  className="mt-2 overflow-hidden whitespace-nowrap font-h6 font-h6-desktop uppercase leading-none text-white desktop:text-h6-tablet"
                  text="2023 Annual Report"
                  oneLine
                />
              </div>
            </AnimatedTile>
          </div>
        </article>
      </section>
      <section className="flex w-full flex-1 flex-col overflow-hidden desktop:h-[569px] desktop:flex-row">
        <div className="z-20 flex bg-white desktop:order-2  desktop:flex-[0.5]">
          <AnimatedImage
            key={8}
            className="relative flex h-[350px] w-full flex-col items-center justify-center desktop:h-full desktop:w-full"
          >
            <Image
              src="/img/adobestock-526164757-1.jpg"
              fill
              priority
              alt="Two teenagers swinging in a park"
              className="object-cover "
            />
          </AnimatedImage>
        </div>
        <div className="z-30 flex bg-white desktop:order-1 desktop:flex-[0.5]">
          <AnimatedTile
            id={9}
            className="flex h-full w-full flex-col items-start justify-center space-y-6 bg-dark-blue px-15 py-20 desktop:w-full"
          >
            <Typography
              as="h3"
              className="font-h6-desktop uppercase text-white"
            >
              IMPROVING AIR QUALITY PROTECTIONS FOR ALL BAY AREA RESIDENTS.
            </Typography>
            <Typography as="p" className="text-white">
              In 2023, we continued to strengthen our partnerships with Bay Area
              communities most impacted by air pollution. Our innovative
              emission reduction and climate protection programs supported
              cutting-edge projects to reduce greenhouse gases. 
            </Typography>
            <Link href={'/introduction'}>
              <Button
                className="w-full self-start"
                color="white"
                downloadPdfClassName="button-instance tracking-widest"
                icon
                size="large"
                text="BEGIN THE REPORT"
                type="outlined"
              />
            </Link>
          </AnimatedTile>
        </div>
      </section>
      <section className="hidden h-[384px] w-full overflow-hidden desktop:flex">
        <div className="z-30 flex w-1/3 bg-white">
          <AnimatedTile id={10} className="block h-full w-full bg-light-blue">
            &nbsp;
          </AnimatedTile>
        </div>
        <div className="z-20 flex w-1/3 overflow-hidden bg-white">
          <AnimatedImage
            key={11}
            className="relative flex h-full w-full flex-col items-center justify-center"
          >
            <Image
              src="/img/rectangle-251.jpg"
              fill
              priority
              alt="Two hikers on a mountain trail"
              className="object-cover "
            />
          </AnimatedImage>
        </div>
        <AnimatedTile id={12} className="block h-full w-1/3 bg-blue">
          &nbsp;
        </AnimatedTile>
      </section>
    </main>
  );
};

export default Document;
