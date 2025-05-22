"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import BlockchainStats from '@/components/BlockchainStats';
import LatestBlocks from '@/components/LatestBlocks';
import LatestTransactions from '@/components/LatestTransactions';
import { mockBlocks, mockTransactions } from '@/lib/mockData';
import MockDataAlert from '@/components/MockDataAlert';
import SubscriptionForm from '@/components/SubscriptionForm';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const router = useRouter();
  const { t } = useLanguage();

  // Handle redirects from GitHub Pages 404.html
  useEffect(() => {
    // Check if we have query params from a 404 redirect
    const { pathname, search } = window.location;
    const hasQueryParams = search.includes('?p=/');
    
    if (hasQueryParams) {
      // Get the pathname from the query
      const path = search.split('?p=/')[1]?.split('&')[0] || '';
      if (path) {
        // Remove the query params
        window.history.replaceState(null, '', '/' + path);
        // Navigate to the path
        router.push('/' + path);
      }
    }
  }, [router]);

  return (
    <div>
      <MockDataAlert />
      <BlockchainStats />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <LatestBlocks blocks={mockBlocks.slice(0, 5)} />
          <LatestTransactions transactions={mockTransactions.slice(0, 5)} />
        </div>
        
        <SubscriptionForm />
        
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-800">{t('about_nockscan')}</h2>
          <p className="text-gray-700 mb-4">
            {t('about_content_1')}
          </p>
          
          <p className="text-gray-700 mb-6">
            {t('about_content_2')}
          </p>
          
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-2 text-blue-700">{t('key_features')}</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>{t('feature_1')}</li>
              <li>{t('feature_2')}</li>
              <li>{t('feature_3')}</li>
              <li>{t('feature_4')}</li>
              <li>{t('feature_5')}</li>
            </ul>
          </div>
          
          <div className="mt-6 border-t pt-6 border-gray-200">
            <h3 className="text-lg font-medium mb-3 text-blue-700">{t('dev_resources')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a 
                href="https://github.com/zorp-corp/nockchain" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-3 border rounded-lg hover:bg-blue-50 transition-colors"
              >
                <svg className="w-6 h-6 mr-2 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <div>
                  <p className="font-medium text-gray-800">{t('github_repo')}</p>
                  <p className="text-sm text-gray-600">{t('repo_desc')}</p>
                </div>
              </a>
              <a 
                href="https://www.nockchain.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-3 border rounded-lg hover:bg-blue-50 transition-colors"
              >
                <svg className="w-6 h-6 mr-2 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16h-2v-6h2v6zm-1-9c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z" />
                </svg>
                <div>
                  <p className="font-medium text-gray-800">{t('official_site')}</p>
                  <p className="text-sm text-gray-600">{t('site_desc')}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
