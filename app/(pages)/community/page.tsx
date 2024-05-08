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
  description: '',
};

const Community = (props: Props) => {
  return <Document />;
};

export default Community;
