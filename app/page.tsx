'use client';

import Image from 'next/image';
import Typography from './components/Typography';
import { Button } from './components/Button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="desktop:flex-row flex w-full flex-col">
        <article className="bg-blue desktop:h-[384px] flex items-center justify-center p-9">
          <Typography as="h1" className="font-h6-desktop uppercase text-white">
            Protecting
          </Typography>
        </article>
        <article className="bg-dark-blue desktop:order-3 desktop:h-[384px] flex min-w-[335px] items-center justify-center whitespace-nowrap p-9">
          <Typography as="h1" className="font-h6-desktop uppercase text-white">
            Our Air,
          </Typography>
        </article>
        <article className="bg-dark-blue desktop:order-2 relative flex h-[384px] w-full items-center justify-center px-9">
          <Image
            src="/img/image-square-1.png"
            className="desktop:flex hidden h-[350px] flex-1 flex-grow object-cover object-center"
            fill
            alt="sky"
          />
          <Image
            src="/img/image-square-4-2x.png"
            className="desktop:hidden flex h-96 flex-1 flex-grow object-cover object-center"
            fill
            alt="sky"
          />
        </article>
      </section>
      <section className="flex h-[768px] w-full flex-col md:flex-row">
        <article className="desktop:flex desktop:w-1/2 relative hidden h-full">
          <Image
            src="/img/image-large.png"
            alt="landscape"
            fill
            className="object-cover"
          />
        </article>
        <article className="desktop:w-1/2 flex w-full flex-col">
          <article className="desktop:flex-row flex flex-col">
            <article className="bg-light-blue desktop:h-[384px] flex flex-grow items-center justify-center p-9">
              <Typography
                as="h1"
                className="font-h6-desktop uppercase text-white"
              >
                Climate
              </Typography>
            </article>
            <article className="desktop:flex relative hidden h-full min-w-[335px]">
              <Image
                src="/img/image-square-5-2x.png"
                alt="landscape"
                fill
                className="object-cover"
              />
            </article>
            <article className="desktop:hidden relative flex h-[350px] w-full">
              <Image
                src="/img/image-large.png"
                alt="landscape"
                fill
                className="object-cover"
              />
            </article>
          </article>
          <article className="bg-green flex h-[384px] w-full flex-col items-center justify-center p-9  text-left md:order-3">
            <div className="flex flex-col text-left">
              <Typography
                as="h1"
                className="font-h6-desktop uppercase text-white "
              >
                And Communities
              </Typography>
              <Typography as="h6" className="uppercase text-white">
                2023 Annual Report
              </Typography>
            </div>
          </article>
        </article>
      </section>
      <section className="desktop:flex-row desktop:h-[569px] flex flex-col">
        <article className="desktop:order-2 desktop:h-full desktop:w-1/2 relative flex h-[350px] w-full flex-col items-center justify-center px-9">
          <Image
            src="/img/adobestock-526164757-1.png"
            fill
            alt=" "
            className="object-cover"
          />
        </article>
        <article className="bg-dark-blue px-15 desktop:order-1 desktop:w-1/2 flex h-full w-full flex-col items-start justify-center space-y-6 py-20">
          <Typography as="h3" className="font-h6-desktop uppercase text-white">
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
        </article>
      </section>
      <section className="desktop:flex hidden h-[384px] w-full">
        <div className="bg-light-blue block h-full w-1/3">&nbsp;</div>
        <article className="relative flex h-full w-1/3 flex-col items-center justify-center px-9">
          <Image
            src="/img/rectangle-251.png"
            fill
            alt=" "
            className="object-cover"
          />
        </article>
        <div className="bg-blue block h-full w-1/3">&nbsp;</div>
      </section>
    </main>
  );
}
