"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const { t } = useLanguage();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) return;
    
    // Simplified logic for demo purposes
    if (searchTerm.startsWith('0x')) {
      // If it's a valid hex string, could be an address, tx hash, or block hash
      if (searchTerm.length > 60) {
        router.push(`/tx/${searchTerm}`);
      } else {
        router.push(`/address/${searchTerm}`);
      }
    } else if (!isNaN(Number(searchTerm))) {
      // If it's a number, assume it's a block number
      router.push(`/block/${searchTerm}`);
    } else {
      // Default to address search
      router.push(`/address/${searchTerm}`);
    }
  };

  return (
    <header className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center">
              <svg className="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10L12 5L17 10L12 15L7 10Z" fill="white" />
                <path d="M12 15L17 10L22 15L17 20L12 15Z" fill="white" />
                <path d="M2 15L7 10L12 15L7 20L2 15Z" fill="white" />
              </svg>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-wide">NOCKSCAN</span>
                <span className="text-xs text-blue-200">Nockchain Explorer</span>
              </div>
            </Link>
          </div>
          
          <div className="flex space-x-4 items-center">
            <nav className="hidden md:flex space-x-6 mr-6 text-sm">
              <Link href="/blocks" className="hover:text-blue-200 transition-colors">
                {t('blocks')}
              </Link>
              <Link href="/txs" className="hover:text-blue-200 transition-colors">
                {t('transactions')}
              </Link>
              <a href="https://github.com/zorp-corp/nockchain" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
                {t('docs')}
              </a>
            </nav>

            <LanguageSwitcher />
            
            <form onSubmit={handleSearch} className="w-full md:w-auto flex-1 md:flex-none">
              <div className="relative">
                <input
                  type="text"
                  placeholder={t('search_placeholder')}
                  className="w-full md:w-80 py-2 px-4 rounded-lg border border-blue-700 bg-blue-800 bg-opacity-50 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button 
                  type="submit"
                  className="absolute right-0 top-0 h-full bg-blue-600 hover:bg-blue-700 px-4 rounded-r-lg transition-colors"
                >
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
} 