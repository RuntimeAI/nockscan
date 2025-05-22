import Link from 'next/link';
import { Transaction, formatTimestamp, truncateHash } from '../lib/mockData';

interface LatestTransactionsProps {
  transactions: Transaction[];
}

export default function LatestTransactions({ transactions }: LatestTransactionsProps) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4 bg-blue-900 text-white flex justify-between items-center">
        <h2 className="text-lg font-medium">Latest Transactions</h2>
        <Link href="/txs" className="text-sm hover:underline">
          View all transactions
        </Link>
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
                  <Link href={`/address/${tx.from}`} className="text-blue-600 hover:underline">
                    {truncateHash(tx.from)}
                  </Link>
                </div>
                
                <div className="col-span-2 text-gray-500">To</div>
                <div className="col-span-10 truncate">
                  <Link href={`/address/${tx.to}`} className="text-blue-600 hover:underline">
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
  );
} 