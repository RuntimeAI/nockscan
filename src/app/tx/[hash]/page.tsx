import { Transaction, mockTransactions } from '@/lib/mockData';
import ClientComponent from './client';

// Server component for generating static params
export function generateStaticParams() {
  return mockTransactions.map(tx => ({
    hash: tx.hash,
  }));
}

export default function TransactionDetail({ params }: { params: { hash: string } }) {
  // Just pass the params to the client component
  return <ClientComponent hash={params.hash} />;
} 