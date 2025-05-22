"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Address, Transaction, mockAddresses, mockTransactions, formatTimestamp, truncateHash } from '@/lib/mockData';

export default function ClientComponent({ address }: { address: string }) {
  const [addressInfo, setAddressInfo] = useState<Address | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    // Find the address in our mock data
    // In a real app, this would be an API call
    const foundAddress = mockAddresses.find(a => a.address === address);
    
    if (foundAddress) {
      setAddressInfo(foundAddress);
      
      // Find transactions involving this address
      const addressTransactions = mockTransactions.filter(
        tx => tx.from === address || tx.to === address
      );
      
      setTransactions(addressTransactions);
    }
  }, [address]);

  if (!addressInfo) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Address Not Found</h1>
          <p className="text-gray-600 mb-6">The address {address} could not be found.</p>
          <Link href="/" className="text-blue-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Address</h1>
      
      <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
        <div className="p-4 bg-blue-900 text-white">
          <h2 className="text-lg font-medium">Address Information</h2>
        </div>
        
        <div className="p-6">
          <div className="space-y-6">
            <div>
              <div className="font-medium text-gray-500">Address</div>
              <div className="break-all">{addressInfo.address}</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="font-medium text-gray-500">Balance</div>
                <div className="text-lg font-semibold">{addressInfo.balance} NCK</div>
              </div>
              
              <div>
                <div className="font-medium text-gray-500">Transactions</div>
                <div>{addressInfo.transactionCount}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {transactions.length > 0 && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-4 bg-blue-900 text-white flex justify-between items-center">
            <h2 className="text-lg font-medium">Transactions</h2>
            {transactions.length < addressInfo.transactionCount && (
              <span className="text-sm bg-blue-700 px-2 py-1 rounded">
                Showing the most recent {transactions.length} transactions
              </span>
            )}
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
                    <span className="ml-auto text-gray-500 text-sm">
                      {formatTimestamp(tx.timestamp)}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-12 gap-2 text-sm">
                    <div className="col-span-2 text-gray-500">From</div>
                    <div className="col-span-10 truncate">
                      <Link 
                        href={`/address/${tx.from}`} 
                        className={`hover:underline ${tx.from === address ? 'text-green-600 font-semibold' : 'text-blue-600'}`}
                      >
                        {truncateHash(tx.from)}
                      </Link>
                    </div>
                    
                    <div className="col-span-2 text-gray-500">To</div>
                    <div className="col-span-10 truncate">
                      <Link 
                        href={`/address/${tx.to}`} 
                        className={`hover:underline ${tx.to === address ? 'text-green-600 font-semibold' : 'text-blue-600'}`}
                      >
                        {truncateHash(tx.to)}
                      </Link>
                    </div>
                    
                    <div className="col-span-2 text-gray-500">Value</div>
                    <div className="col-span-10">{tx.value} NCK</div>
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