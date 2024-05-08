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
  description: '',
};

const Achievements = (props: Props) => {
  return <Document />;
};

export default Achievements;
