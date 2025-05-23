"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { mockTransactions, formatTimestamp, truncateHash } from '../../lib/mockData';

// Define the transaction type to match our actual data structure
interface Transaction {
  hash: string;
  from: string;
  to: string;
  value: string;
  timestamp: string;
  block: number;
  gasUsed: number;
  gasPrice: number;
  status: string;
  formattedTime?: string; // Add this for pre-formatted times
}

export default function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const txsPerPage = 20;

  useEffect(() => {
    // Sort transactions by timestamp in descending order (newest first)
    const sortedTransactions = [...mockTransactions].sort((a, b) => {
      const dateA = new Date(a.timestamp).getTime();
      const dateB = new Date(b.timestamp).getTime();
      return dateB - dateA;
    }).map(tx => ({
      ...tx,
      formattedTime: new Date(tx.timestamp).toLocaleTimeString() // Pre-format times to avoid hydration mismatch
    }));
    
    setTransactions(sortedTransactions);
  }, []);

  // Pagination
  const totalPages = Math.ceil(transactions.length / txsPerPage);
  const indexOfLastTx = currentPage * txsPerPage;
  const indexOfFirstTx = indexOfLastTx - txsPerPage;
  const currentTxs = transactions.slice(indexOfFirstTx, indexOfLastTx);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Transactions</h1>
      
      <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
        <div className="p-4 bg-blue-900 text-white">
          <h2 className="text-lg font-medium">Latest Transactions</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Txn Hash
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Block
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Age
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  From
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  To
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Value
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fee
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentTxs.map((tx) => (
                <tr key={tx.hash} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link href={`/tx/${tx.hash}`} className="text-blue-600 hover:underline">
                      {truncateHash(tx.hash)}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link href={`/block/${tx.block}`} className="text-blue-600 hover:underline">
                      {tx.block}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {tx.formattedTime}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link href={`/address/${tx.from}`} className="text-blue-600 hover:underline">
                      {truncateHash(tx.from, 6)}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link href={`/address/${tx.to}`} className="text-blue-600 hover:underline">
                      {truncateHash(tx.to, 6)}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {tx.value} NOCK
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {(tx.gasUsed * tx.gasPrice / 1e9).toFixed(5)} NOCK
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-6 py-4 flex justify-between items-center bg-gray-50">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          >
            Previous
          </button>
          <span className="text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
} 