import BlockchainStats from '@/components/BlockchainStats';
import LatestBlocks from '@/components/LatestBlocks';
import LatestTransactions from '@/components/LatestTransactions';
import { mockBlocks, mockTransactions } from '@/lib/mockData';

export default function Home() {
  return (
    <div>
      <BlockchainStats />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <LatestBlocks blocks={mockBlocks.slice(0, 5)} />
          <LatestTransactions transactions={mockTransactions.slice(0, 5)} />
        </div>
        
        <div className="mt-12 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">About Nockscan</h2>
          <p className="text-gray-600">
            Nockscan is the leading block explorer for the Nockchain network. 
            Nockchain is a lightweight blockchain for heavyweight verifiable applications, 
            focusing on trustless settlement of heavyweight verifiable computation.
          </p>
          <div className="mt-4">
            <h3 className="text-lg font-medium mb-2">Key Features:</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Real-time tracking of blocks and transactions</li>
              <li>Detailed information about addresses, transactions, and blocks</li>
              <li>Search functionality for quick access to blockchain data</li>
              <li>Network statistics and analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
