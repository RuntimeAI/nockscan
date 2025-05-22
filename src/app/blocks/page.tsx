"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Block, mockBlocks, formatTimestamp, truncateHash } from '@/lib/mockData';

export default function Blocks() {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blocksPerPage = 20;

  useEffect(() => {
    // Sort blocks by block number in descending order
    const sortedBlocks = [...mockBlocks].sort((a, b) => b.number - a.number);
    setBlocks(sortedBlocks);
  }, []);

  // Pagination
  const totalPages = Math.ceil(blocks.length / blocksPerPage);
  const indexOfLastBlock = currentPage * blocksPerPage;
  const indexOfFirstBlock = indexOfLastBlock - blocksPerPage;
  const currentBlocks = blocks.slice(indexOfFirstBlock, indexOfLastBlock);

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
      <h1 className="text-2xl font-bold mb-6">Blocks</h1>
      
      <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
        <div className="p-4 bg-blue-900 text-white">
          <h2 className="text-lg font-medium">All Blocks</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Block
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Age
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Txn
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Miner
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Size
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reward
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentBlocks.map((block) => (
                <tr key={block.hash} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link href={`/block/${block.number}`} className="text-blue-600 hover:underline">
                      {block.number}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {formatTimestamp(block.timestamp)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {block.transactionCount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link href={`/address/${block.miner}`} className="text-blue-600 hover:underline">
                      {truncateHash(block.miner, 6)}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {block.size} bytes
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {block.rewards} NCK
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