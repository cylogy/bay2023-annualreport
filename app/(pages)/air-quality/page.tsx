import React from 'react';
import Document from './Document';
import { Metadata } from 'next';

type Props = {};

export const metadata: Metadata = {
  title: {
    template: '%s | Air District 2023 Annual Report',
    default:
      'Air Quality: How do we track air quality | Air District 2023 Annual Report',
  },
  description:
    'Map showing Air District’s 31 air monitoring and 13 meteorological measurement sites throughout the Bay Area, and air quality monitoring programs, analysis and exceedances.',
  keywords: [
    'Air monitoring',
    'Meteorology',
    'Air quality standards',
    'Data',
    'Technical guidance',
    'Community',
    'Incident response',
    'Pollution sources',
    'Pollutant analyses',
    'Air quality exceedances',
  ],
};

const AirQuality = (props: Props) => {
  return <Document />;
};

export default AirQuality;
