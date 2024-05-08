import React from 'react';
import Document from './Document';
import { Metadata } from 'next';

type Props = {};

export const metadata: Metadata = {
  title: {
    template: '%s | Air District 2023 Annual Report',
    default:
      'Air Quality: How do we track air quality | Air District 202 3 Annual Report',
  },
  description: '',
};

const AirQuality = (props: Props) => {
  return <Document />;
};

export default AirQuality;
