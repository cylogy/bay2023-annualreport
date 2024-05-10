import { Metadata } from 'next';
import Document from './Document';

export const metadata: Metadata = {
  title: {
    template: '%s | Air District 2023 Annual Report',
    default: 'Homepage | Air District 2023 Annual Report',
  },
  description: 'Website page menu',
  keywords: [
    'Air quality',
    'Air monitoring',
    'Public health',
    'Community partners',
    'Climate solutions',
    'Emissions reductions',
    'Legislation',
    'Leadership',
    'Contact information',
  ],
};

export default function Home() {
  return <Document />;
}
