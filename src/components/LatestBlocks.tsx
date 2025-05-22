import Link from 'next/link';
import { Block, formatTimestamp, truncateHash } from '../lib/mockData';

interface LatestBlocksProps {
  blocks: Block[];
}

export default function LatestBlocks({ blocks }: LatestBlocksProps) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4 bg-blue-900 text-white flex justify-between items-center">
        <h2 className="text-lg font-medium">Latest Blocks</h2>
        <Link href="/blocks" className="text-sm hover:underline">
          View all blocks
        </Link>
      </div>
      
      <div className="divide-y divide-gray-200">
        {blocks.map((block) => (
          <div key={block.hash} className="p-4 hover:bg-gray-50">
            <div className="flex justify-between">
              <div className="space-y-1">
                <Link href={`/block/${block.number}`} className="font-medium text-blue-600 hover:underline">
                  {block.number}
                </Link>
                <div className="text-gray-500 text-sm">
                  {formatTimestamp(block.timestamp)}
                </div>
              </div>
              
              <div className="text-right space-y-1">
                <div className="text-sm">
                  Miner <Link href={`/address/${block.miner}`} className="text-blue-600 hover:underline">
                    {truncateHash(block.miner, 6)}
                  </Link>
                </div>
                <div className="text-gray-500 text-sm">
                  {block.transactionCount} txns in {block.size} bytes
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 