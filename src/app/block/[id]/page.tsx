import { mockBlocks } from '@/lib/mockData';
import ClientComponent from './client';

// Server component for generating static params
export function generateStaticParams() {
  return mockBlocks.map(block => ({
    id: block.number.toString(),
  }));
}

export default function BlockDetail({ params }: { params: { id: string } }) {
  // Just pass the params to the client component
  return <ClientComponent id={params.id} />;
} 