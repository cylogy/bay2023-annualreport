'use client';

import Image from 'next/image';
import Typography from './components/Typography';
import { Button } from './components/Button';
import { motion } from 'framer-motion';
import Animated from './components/Typography/animated';
import AnimatedTile from './components/AnimatedTile';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="flex w-full flex-col overflow-hidden desktop:flex-row">
        <div className="z-30 flex w-full flex-1 bg-white desktop:order-1 desktop:flex-[0.3]">
          <AnimatedTile
            key={1}
            className="flex w-full items-center justify-center bg-blue p-9 desktop:h-[384px]"
          >
            <Animated
              as="h1"
              className="overflow-hidden whitespace-nowrap font-h1 font-h6-desktop uppercase leading-none text-white desktop:text-h1-tablet"
              text="Protecting"
            />
          </AnimatedTile>
        </div>
        <div className="z-10 flex bg-white desktop:order-3">
          <AnimatedTile
            key={3}
            className="flex w-full items-center justify-center whitespace-nowrap bg-dark-blue p-9 desktop:h-[384px] desktop:w-[335px]"
          >
            <Animated
              as="h1"
              className="overflow-hidden whitespace-nowrap font-h1 font-h6-desktop uppercase text-white desktop:text-h1-tablet"
              text="Our Air,"
            />
          </AnimatedTile>
        </div>
        <div className="z-20 flex overflow-hidden bg-white desktop:order-2 desktop:flex-1">
          <AnimatedTile
            key={2}
            className="relative flex h-[384px] w-full items-center justify-center bg-dark-blue px-9 "
          >
            <Image
              src="/img/image-square-1.png"
              className="hidden h-[350px] flex-1 flex-grow object-cover object-center transition-all duration-300 hover:scale-105 desktop:flex"
              fill
              alt="White clouds against a blue sky"
            />
            <Image
              src="/img/image-square-4-2x.png"
              className="flex h-96 flex-1 flex-grow object-cover object-center desktop:hidden"
              fill
              alt="White clouds against a blue sky"
            />
          </AnimatedTile>
        </div>
      </section>
      <section className="flex h-[768px] w-full flex-1 flex-col overflow-hidden md:flex-row">
        <div className="z-30 flex overflow-hidden bg-white  desktop:w-1/2 desktop:flex-[0.5]">
          <AnimatedTile
            key={4}
            className="relative hidden h-full desktop:flex desktop:w-full"
          >
            <Image
              src="/img/image-large-desktop.png"
              alt="Flower field set against mountains"
              fill
              className="object-cover transition-all duration-300 hover:scale-105 "
            />
          </AnimatedTile>
        </div>
        <article className="z-20 flex w-full flex-col desktop:w-1/2 desktop:flex-[0.5]">
          <article className="flex flex-col desktop:flex-row">
            <div className="z-20 flex bg-white desktop:flex-1">
              <AnimatedTile
                key={5}
                className="flex flex-grow items-center justify-center bg-light-blue p-9 desktop:h-[384px]"
              >
                <Animated
                  as="h1"
                  className="overflow-hidden whitespace-nowrap font-h1 font-h6-desktop uppercase leading-none text-white desktop:text-h1-tablet"
                  text="Climate"
                />
              </AnimatedTile>
            </div>
            <AnimatedTile
              key={6}
              className="relative hidden h-full min-w-[335px] desktop:flex"
            >
              <Image
                src="/img/image-square-5-2x.png"
                alt="Above view of pedestrians crossing the street"
                fill
                className="object-cover transition-all duration-300 hover:scale-105 "
              />
            </AnimatedTile>
            <AnimatedTile
              key={7}
              className="relative flex h-[350px] w-full desktop:hidden"
            >
              <Image
                src="/img/image-large.png"
                alt="landscape"
                fill
                className="object-cover"
              />
            </AnimatedTile>
          </article>
          <AnimatedTile
            key={7}
            className="flex h-[384px] w-full flex-col items-center justify-center bg-green p-9  text-left md:order-3"
          >
            <div className="flex flex-col text-left">
              <Animated
                as="h1"
                className="overflow-hidden whitespace-nowrap font-h1 font-h6-desktop uppercase leading-none text-white desktop:text-h1-tablet"
                text="And Communities"
              />
              <Animated
                as="h6"
                className="overflow-hidden whitespace-nowrap font-h6 font-h6-desktop uppercase leading-none text-white desktop:text-h6-tablet"
                text="2023 Annual Report"
              />
            </div>
          </AnimatedTile>
        </article>
      </section>
      <section className="flex w-full flex-1 flex-col overflow-hidden desktop:h-[569px] desktop:flex-row">
        <div className="z-20 flex bg-white desktop:order-2  desktop:flex-[0.5]">
          <AnimatedTile
            key={8}
            className="relative flex h-[350px] w-full flex-col items-center justify-center px-9 desktop:h-full desktop:w-full"
          >
            <Image
              src="/img/adobestock-526164757-1.png"
              fill
              alt="Two teenagers swinging in a park"
              className="object-cover transition-all duration-300 hover:scale-105 "
            />
          </AnimatedTile>
        </div>
        <div className="z-30 flex bg-white desktop:order-1 desktop:flex-[0.5]">
          <AnimatedTile
            key={9}
            className="flex h-full w-full flex-col items-start justify-center space-y-6 bg-dark-blue px-15 py-20 desktop:w-full"
          >
            <Typography
              as="h3"
              className="font-h6-desktop uppercase text-white"
            >
              CLIMATE CHANGE BRINGS NEW CHALLENGES FOR US ALL.
            </Typography>
            <Typography as="p" className="text-white">
              In 2022, we continued to partner with Bay Area communities most
              impacted by pollution and sought new paths forward to reduce
              climate-warming greenhouse gases. Our innovative grant programs
              enabled residents and businesses to lower emissions and overall
              carbon footprint through funds for cleaner engines and electric
              vehicles to programs that educate residents on how to reduce their
              impact.
            </Typography>
            <Button
              className="w-full self-start"
              color="white"
              downloadPdfClassName="button-instance"
              icon
              size="large"
              text="BEGIN THE REPORT"
              type="outlined"
            />
          </AnimatedTile>
        </div>
      </section>
      <section className="hidden h-[384px] w-full overflow-hidden desktop:flex">
        <div className="z-30 flex w-1/3 bg-white">
          <AnimatedTile key={10} className="block h-full w-full bg-light-blue">
            &nbsp;
          </AnimatedTile>
        </div>
        <div className="z-20 flex w-1/3 overflow-hidden bg-white">
          <AnimatedTile
            key={11}
            className="relative flex h-full w-full flex-col items-center justify-center px-9"
          >
            <Image
              src="/img/rectangle-251.png"
              fill
              alt="Two hikers on a mountain trail"
              className="object-cover transition-all duration-300 hover:scale-105 "
            />
          </AnimatedTile>
        </div>
        <AnimatedTile key={12} className="block h-full w-1/3 bg-blue">
          &nbsp;
        </AnimatedTile>
      </section>
    </main>
  );
}
