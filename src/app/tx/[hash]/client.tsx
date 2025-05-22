"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Transaction, mockTransactions, formatTimestamp } from '@/lib/mockData';

export default function ClientComponent({ hash }: { hash: string }) {
  const [transaction, setTransaction] = useState<Transaction | null>(null);

  useEffect(() => {
    // Find the transaction with the matching hash in our mock data
    // In a real app, this would be an API call
    const foundTransaction = mockTransactions.find((tx: Transaction) => tx.hash === hash);
    
    if (foundTransaction) {
      setTransaction(foundTransaction);
    }
  }, [hash]);

  if (!transaction) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Transaction Not Found</h1>
          <p className="text-gray-600 mb-6">The transaction {hash} could not be found.</p>
          <Link href="/" className="text-blue-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Transaction Details</h1>
      
      <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
        <div className="p-4 bg-blue-900 text-white">
          <h2 className="text-lg font-medium">Transaction Information</h2>
        </div>
        
        <div className="p-6">
          <div className="space-y-6">
            <div>
              <div className="font-medium text-gray-500">Transaction Hash</div>
              <div className="break-all">{transaction.hash}</div>
            </div>
            
            <div>
              <div className="font-medium text-gray-500">Block</div>
              <div>
                <Link href={`/block/${transaction.block}`} className="text-blue-600 hover:underline">
                  {transaction.block}
                </Link>
              </div>
            </div>
            
            <div>
              <div className="font-medium text-gray-500">Timestamp</div>
              <div>{new Date(transaction.timestamp).toLocaleString()} ({formatTimestamp(transaction.timestamp)})</div>
            </div>
            
            <div>
              <div className="font-medium text-gray-500">From</div>
              <div>
                <Link href={`/address/${transaction.from}`} className="text-blue-600 hover:underline">
                  {transaction.from}
                </Link>
              </div>
            </div>
            
            <div>
              <div className="font-medium text-gray-500">To</div>
              <div>
                <Link href={`/address/${transaction.to}`} className="text-blue-600 hover:underline">
                  {transaction.to}
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="font-medium text-gray-500">Value</div>
                <div className="text-lg font-semibold">{transaction.value} NOCK</div>
              </div>
              
              <div>
                <div className="font-medium text-gray-500">Transaction Fee</div>
                <div>{(transaction.gasUsed * transaction.gasPrice / 1e9).toFixed(5)} NOCK</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 