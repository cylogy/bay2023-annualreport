'use client';

import Hero from '@/app/components/Hero';
import React from 'react';

type Props = {};

const Page = (props: Props) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero
        title="Introduction"
        description="message from our new executive officer"
        background="bg-green text-white"
        image="/img/frame-19722-14.png"
        imageTablet="/img/Frame 19722 (1).png"
      />
    </main>
  );
};

export default Page;
