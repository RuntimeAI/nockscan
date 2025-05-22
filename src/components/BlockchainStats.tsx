"use client";

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface Stats {
  nckPrice: string;
  marketCap: string;
  totalTransactions: string;
  avgBlockTime: string;
  lastBlock: number;
  difficulty: string;
  totalSupply: string;
  zpowRate: string;
}

export default function BlockchainStats() {
  const { t } = useLanguage();
  const [stats, setStats] = useState<Stats>({
    nckPrice: '$0.00',
    marketCap: '-',
    totalTransactions: '1.5M',
    avgBlockTime: '15 sec',
    lastBlock: 1000,
    difficulty: '3.42 TH',
    totalSupply: '0/4,294,967,296',
    zpowRate: '42.5 ZH/s'
  });

  // Simulate live updates for demo - client-side only
  useEffect(() => {
    // Initial update to ensure client/server match
    setStats(currentStats => ({
      ...currentStats
    }));
    
    // Set up interval for updates
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        lastBlock: prev.lastBlock + 1,
      }));
    }, 15000); // Update every 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-800 text-white py-6 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold">{t('network_status')}</h2>
          <p className="text-blue-200 text-sm mt-1">{t('launching_soon')}</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-blue-800 to-indigo-900 rounded-lg p-4 shadow-inner">
            <div className="flex items-center">
              <div className="rounded-full bg-blue-700 p-2 mr-3">
                <svg className="h-5 w-5 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <div className="text-xs text-blue-300 mb-1">{t('nock_price')}</div>
                <div className="font-bold text-lg">{stats.nckPrice}</div>
                <div className="text-xs text-blue-200">{t('presale')}</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-800 to-indigo-900 rounded-lg p-4 shadow-inner">
            <div className="flex items-center">
              <div className="rounded-full bg-blue-700 p-2 mr-3">
                <svg className="h-5 w-5 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <div className="text-xs text-blue-300 mb-1">{t('total_supply')}</div>
                <div className="font-bold text-lg">{stats.totalSupply}</div>
                <div className="text-xs text-blue-200">{t('supply_cap')}</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-800 to-indigo-900 rounded-lg p-4 shadow-inner">
            <div className="flex items-center">
              <div className="rounded-full bg-blue-700 p-2 mr-3">
                <svg className="h-5 w-5 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <div className="text-xs text-blue-300 mb-1">{t('latest_block')}</div>
                <div className="font-bold text-lg">{stats.lastBlock.toLocaleString()}</div>
                <div className="text-xs text-blue-200">15 {t('seconds_ago')}</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-800 to-indigo-900 rounded-lg p-4 shadow-inner">
            <div className="flex items-center">
              <div className="rounded-full bg-blue-700 p-2 mr-3">
                <svg className="h-5 w-5 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <div className="text-xs text-blue-300 mb-1">{t('zkpow_rate')}</div>
                <div className="font-bold text-lg">{stats.zpowRate}</div>
                <div className="text-xs text-blue-200">{t('network_hashrate')}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div className="p-3 bg-blue-800 bg-opacity-30 rounded-lg text-center">
            <div className="text-xs text-blue-300 mb-1">{t('total_txs')}</div>
            <div className="font-bold">{stats.totalTransactions}</div>
          </div>
          
          <div className="p-3 bg-blue-800 bg-opacity-30 rounded-lg text-center">
            <div className="text-xs text-blue-300 mb-1">{t('avg_block_time')}</div>
            <div className="font-bold">{stats.avgBlockTime}</div>
          </div>
          
          <div className="p-3 bg-blue-800 bg-opacity-30 rounded-lg text-center">
            <div className="text-xs text-blue-300 mb-1">{t('difficulty')}</div>
            <div className="font-bold">{stats.difficulty}</div>
          </div>
          
          <div className="p-3 bg-blue-800 bg-opacity-30 rounded-lg text-center">
            <div className="text-xs text-blue-300 mb-1">{t('market_cap')}</div>
            <div className="font-bold">{stats.marketCap}</div>
          </div>
        </div>
      </div>
    </div>
  );
} 