import { mockAddresses } from '@/lib/mockData';
import ClientComponent from './client';

// Server component for generating static params
export function generateStaticParams() {
  return mockAddresses.map(addr => ({
    address: addr.address,
  }));
}

export default function AddressDetail({ params }: { params: { address: string } }) {
  // Just pass the params to the client component
  return <ClientComponent address={params.address} />;
} 