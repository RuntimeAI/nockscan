"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Block, Transaction, mockBlocks, mockTransactions, formatTimestamp, truncateHash } from '@/lib/mockData';

export default function ClientComponent({ id }: { id: string }) {
  const [block, setBlock] = useState<Block | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [formattedDate, setFormattedDate] = useState<string>("");

  useEffect(() => {
    // Find the block with the matching ID in our mock data
    // In a real app, this would be an API call
    const blockNumber = parseInt(id, 10);
    const foundBlock = mockBlocks.find((b: Block) => b.number === blockNumber);
    
    if (foundBlock) {
      setBlock(foundBlock);
      // Find transactions in this block
      const blockTransactions = mockTransactions.filter((tx: Transaction) => tx.block === blockNumber);
      setTransactions(blockTransactions);
      
      // Pre-format the date to avoid hydration mismatch
      setFormattedDate(new Date(foundBlock.timestamp).toLocaleString());
    }
  }, [id]);

  if (!block) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Block Not Found</h1>
          <p className="text-gray-600 mb-6">The block #{id} could not be found.</p>
          <Link href="/" className="text-blue-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Block #{block.number}</h1>
      
      <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
        <div className="p-4 bg-blue-900 text-white">
          <h2 className="text-lg font-medium">Block Information</h2>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <div className="font-medium text-gray-500">Block Hash</div>
                <div className="break-all">{block.hash}</div>
              </div>
              
              <div>
                <div className="font-medium text-gray-500">Timestamp</div>
                <div>{formattedDate} ({formatTimestamp(block.timestamp)})</div>
              </div>
              
              <div>
                <div className="font-medium text-gray-500">Transactions</div>
                <div>{block.transactions}</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="font-medium text-gray-500">Mined by</div>
                <div>
                  <Link href={`/address/${block.miner}`} className="text-blue-600 hover:underline">
                    {truncateHash(block.miner)}
                  </Link>
                </div>
              </div>
              
              <div>
                <div className="font-medium text-gray-500">Gas Used</div>
                <div>{block.gasUsed.toLocaleString()} ({Math.round(block.gasUsed / block.gasLimit * 100)}%)</div>
              </div>
              
              <div>
                <div className="font-medium text-gray-500">Block Reward</div>
                <div>{block.reward} NOCK</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {transactions.length > 0 && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-4 bg-blue-900 text-white">
            <h2 className="text-lg font-medium">Transactions</h2>
          </div>
          
          <div className="divide-y divide-gray-200">
            {transactions.map((tx) => (
              <div key={tx.hash} className="p-4 hover:bg-gray-50">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">TX#</span>
                    <Link href={`/tx/${tx.hash}`} className="text-blue-600 hover:underline truncate">
                      {truncateHash(tx.hash)}
                    </Link>
                  </div>
                  
                  <div className="grid grid-cols-12 gap-2 text-sm">
                    <div className="col-span-2 text-gray-500">From</div>
                    <div className="col-span-10 truncate">
                      <Link href={`/address/${tx.from}`} className="text-blue-600 hover:underline">
                        {truncateHash(tx.from)}
                      </Link>
                    </div>
                    
                    <div className="col-span-2 text-gray-500">To</div>
                    <div className="col-span-10 truncate">
                      <Link href={`/address/${tx.to}`} className="text-blue-600 hover:underline">
                        {truncateHash(tx.to)}
                      </Link>
                    </div>
                    
                    <div className="col-span-2 text-gray-500">Value</div>
                    <div className="col-span-10">{tx.value} NOCK</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 