import { Metadata } from 'next';
import Document from './Document';

type Props = {};

export const metadata: Metadata = {
  title: {
    template: '%s | Air District 2023 Annual Report',
    default: 'Executive Summary | Air District 202 3 Annual Report',
  },
  description: '',
};

const Page = (props: Props) => {
  return <Document />;
};

export default Page;
