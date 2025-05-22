"use client";

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

interface Block {
  number: number;
  hash: string;
  timestamp: string;
  miner: string;
  transactions: number;
  gasUsed: number;
  gasLimit: number;
  reward: number;
}

export default function LatestBlocks({ blocks }: { blocks: Block[] }) {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="border-b border-gray-200 px-4 py-3 flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-800">{t('blocks_footer')}</h2>
        <Link href="/blocks" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
          {t('browse')} &rarr;
        </Link>
      </div>
      
      <div className="divide-y divide-gray-100">
        {blocks.map((block) => (
          <div key={block.number} className="px-4 py-3 hover:bg-gray-50 transition-colors">
            <div className="flex justify-between">
              <div>
                <Link href={`/block/${block.number}`} className="font-medium text-blue-600 hover:text-blue-800">
                  {block.number}
                </Link>
                <div className="text-xs text-gray-500 mt-1">
                  <span>
                    {new Date(block.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-sm">
                  <span className="text-gray-600">{block.transactions} txns</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  <Link href={`/address/${block.miner}`} className="text-blue-600 hover:text-blue-800">
                    {block.miner.slice(0, 6)}...{block.miner.slice(-4)}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="border-t border-gray-200 px-4 py-3 text-center">
        <Link href="/blocks" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
          {t('blocks_footer')} &rarr;
        </Link>
      </div>
    </div>
  );
} 