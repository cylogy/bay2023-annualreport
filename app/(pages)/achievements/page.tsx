import { Metadata } from 'next';
import React from 'react';
import Document from './Document';

type Props = {};

export const metadata: Metadata = {
  title: {
    template: '%s | Air District 2023 Annual Report',
    default:
      'Achievements: What are some new steps forward in our work? | Air District 2023 Annual Report',
  },
  description: 'Notable achievements in 2023.',
  keywords: [
    'Regulations',
    'Emissions reductions',
    'Facility violations',
    'CEQA',
    'Environmental justice',
    'Particulate matter',
    'Modeling tool',
  ],
};

const Achievements = (props: Props) => {
  return <Document />;
};

export default Achievements;
