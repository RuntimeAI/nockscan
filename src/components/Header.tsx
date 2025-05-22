"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

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
    <header className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="font-bold text-xl">NOCKSCAN</span>
              <span className="text-xs ml-2 bg-blue-700 px-2 py-1 rounded">Nockchain Explorer</span>
            </Link>
          </div>
          
          <form onSubmit={handleSearch} className="w-full md:w-2/3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by Address / Txn Hash / Block / Token"
                className="w-full py-2 px-4 rounded text-black"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button 
                type="submit"
                className="absolute right-0 top-0 h-full bg-blue-700 px-4 rounded-r"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
} 