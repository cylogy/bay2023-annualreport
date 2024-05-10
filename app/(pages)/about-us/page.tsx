import React from 'react';
import Document from './Document';
import { Metadata } from 'next';

type Props = {};

export const metadata: Metadata = {
  title: {
    template: '%s | Air District 2023 Annual Report',
    default: 'About us: Who are we | Air District 2023 Annual Report',
  },
  description:
    'Staff demographics, financial report, leadership and contact information.',
  keywords: [
    'Diversity',
    'Equity',
    'Inclusion',
    'Gender',
    'Ethnicity',
    'Finances',
    'Executive management',
    'Directors',
    'Officers',
    'Board members',
    'Social media',
    'Websites',
    'Phone numbers',
  ],
};

const AboutUs = (props: Props) => {
  return <Document />;
};

export default AboutUs;
