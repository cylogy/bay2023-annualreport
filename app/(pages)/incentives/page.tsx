import React from 'react';
import Document from './Document';
import { Metadata } from 'next';

type Props = {};

export const metadata: Metadata = {
  title: {
    template: '%s | Air District 2023 Annual Report',
    default:
      'Incentives: How we reduce emissions and protect communities and the climate | Air District 2023 Annual Report',
  },
  description:
    'Air District innovative programs that protect the climate and reduce emissions.',
  keywords: [
    'Innovation',
    'Greenhouse gases',
    'Electrification',
    'Emissions reductions',
    'Public health',
    'Ports',
    'School buses',
  ],
};

const Incentives = (props: Props) => {
  return <Document />;
};

export default Incentives;
