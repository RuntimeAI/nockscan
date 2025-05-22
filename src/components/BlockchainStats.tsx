"use client";

import { useState, useEffect } from 'react';

interface Stats {
  nckPrice: string;
  marketCap: string;
  totalTransactions: string;
  avgBlockTime: string;
  lastBlock: number;
  difficulty: string;
}

export default function BlockchainStats() {
  const [stats, setStats] = useState<Stats>({
    nckPrice: '$0.42',
    marketCap: '$42,000,000',
    totalTransactions: '1.5M',
    avgBlockTime: '15 sec',
    lastBlock: 1000,
    difficulty: '3.42 TH',
  });

  // Simulate live updates for demo
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        lastBlock: prev.lastBlock + 1,
      }));
    }, 15000); // Update every 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
          <div className="bg-blue-800 bg-opacity-50 rounded p-3">
            <div className="text-sm text-blue-200">NCK Price</div>
            <div className="font-bold">{stats.nckPrice}</div>
          </div>
          
          <div className="bg-blue-800 bg-opacity-50 rounded p-3">
            <div className="text-sm text-blue-200">Market Cap</div>
            <div className="font-bold">{stats.marketCap}</div>
          </div>
          
          <div className="bg-blue-800 bg-opacity-50 rounded p-3">
            <div className="text-sm text-blue-200">Transactions</div>
            <div className="font-bold">{stats.totalTransactions}</div>
          </div>
          
          <div className="bg-blue-800 bg-opacity-50 rounded p-3">
            <div className="text-sm text-blue-200">Avg Block Time</div>
            <div className="font-bold">{stats.avgBlockTime}</div>
          </div>
          
          <div className="bg-blue-800 bg-opacity-50 rounded p-3">
            <div className="text-sm text-blue-200">Last Block</div>
            <div className="font-bold">{stats.lastBlock.toLocaleString()}</div>
          </div>
          
          <div className="bg-blue-800 bg-opacity-50 rounded p-3">
            <div className="text-sm text-blue-200">Difficulty</div>
            <div className="font-bold">{stats.difficulty}</div>
          </div>
        </div>
      </div>
    </div>
  );
} 