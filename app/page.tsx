import { Metadata } from 'next';
import Document from './Document';

export const metadata: Metadata = {
  title: {
    template: '%s | Air District 2023 Annual Report',
    default: 'Homepage | Air District 2023 Annual Report',
  },
  description: '',
};

export default function Home() {
  return <Document />;
}
