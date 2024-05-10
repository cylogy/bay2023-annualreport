import { Metadata } from 'next';
import Document from './Document';

type Props = {};

export const metadata: Metadata = {
  title: {
    template: '%s | Air District 2023 Annual Report',
    default: 'Executive Summary | Air District 202 3 Annual Report',
  },
  description:
    'A message from the Air District’s Executive Officer about the agency’s achievements in 2023',
  keywords: [
    'Transparency',
    'Collaboration',
    'Community',
    'Environmental justice',
    'Enforcement',
    'Partnerships',
    'Emissions reduction',
    'Climate solutions',
    'Strategic plan',
  ],
};

const Page = (props: Props) => {
  return <Document />;
};

export default Page;
