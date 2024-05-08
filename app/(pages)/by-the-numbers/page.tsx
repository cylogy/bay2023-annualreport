import React from 'react';
import Document from './Document';
import { Metadata } from 'next';

type Props = {};

export const metadata: Metadata = {
  title: {
    template: '%s | Air District 2023 Annual Report',
    default:
      'By the Numbers: How do we track and improve air quality protections? | Air District 202 3 Annual Report',
  },
  description: '',
};

const ByTheNumbers = (props: Props) => {
  return <Document />;
};

export default ByTheNumbers;
