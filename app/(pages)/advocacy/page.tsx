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
  description: '',
};

const Advocacy = (props: Props) => {
  return <Document />;
};

export default Advocacy;
