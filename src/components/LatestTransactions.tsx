"use client";

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

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
}

export default function LatestTransactions({ transactions }: { transactions: Transaction[] }) {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="border-b border-gray-200 px-4 py-3 flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-800">{t('txs_footer')}</h2>
        <Link href="/txs" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
          {t('browse')} &rarr;
        </Link>
      </div>
      
      <div className="divide-y divide-gray-100">
        {transactions.map((tx) => (
          <div key={tx.hash} className="px-4 py-3 hover:bg-gray-50 transition-colors">
            <div className="flex justify-between">
              <div>
                <Link href={`/tx/${tx.hash}`} className="font-medium text-blue-600 hover:text-blue-800">
                  {tx.hash.slice(0, 10)}...{tx.hash.slice(-8)}
                </Link>
                <div className="text-xs text-gray-500 mt-1">
                  <span>
                    {new Date(tx.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-sm">
                  <span className="text-gray-600">{tx.value} NOCK</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  <span className="mr-1">From</span>
                  <Link href={`/address/${tx.from}`} className="text-blue-600 hover:text-blue-800">
                    {tx.from.slice(0, 6)}...{tx.from.slice(-4)}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="border-t border-gray-200 px-4 py-3 text-center">
        <Link href="/txs" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
          {t('txs_footer')} &rarr;
        </Link>
      </div>
    </div>
  );
} 