import React from 'react';
import Document from './Document';
import { Metadata } from 'next';

type Props = {};

export const metadata: Metadata = {
  title: {
    template: '%s | Air District 2023 Annual Report',
    default:
      'Community: What community partnerships have we built | Air District 2023 Annual Report',
  },
  description:
    'Air District programs and partnerships that address Bay Area communities most impacted by air pollution.',
  keywords: [
    'Community health protection',
    'Emission reductions',
    'Pollution exposure',
    'Equity',
    'Grants',
    'Air filtration',
    'Community advisory council',
    'Asthma protections',
    'Climate grant',
  ],
};

const Community = (props: Props) => {
  return <Document />;
};

export default Community;
