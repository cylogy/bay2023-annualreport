import React from 'react';
import Document from './Document';
import { Metadata } from 'next';

type Props = {};

export const metadata: Metadata = {
  title: {
    template: '%s | Air District 2023 Annual Report',
    default:
      'Advocacy: How are we championing legislation to protect air quality | Air District 2023 Annual Report',
  },
  description: 'Details on state and federal legislative initiatives.',
  keywords: [
    'State legislature',
    'Funding',
    'Environmental justice',
    'Community',
    'Emission reductions',
    'Decarbonization',
    'Air quality violations',
    'Wildfire smoke',
    'Whale protections',
  ],
};

const Advocacy = (props: Props) => {
  return <Document />;
};

export default Advocacy;
