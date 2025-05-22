"use client";

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gradient-to-r from-slate-800 to-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10L12 5L17 10L12 15L7 10Z" fill="white" />
                <path d="M12 15L17 10L22 15L17 20L12 15Z" fill="white" />
                <path d="M2 15L7 10L12 15L7 20L2 15Z" fill="white" />
              </svg>
              <h3 className="font-bold text-lg text-white">NOCKSCAN</h3>
            </div>
            <p className="text-sm text-gray-400">
              {t('footer_desc')}
            </p>
            <div className="mt-4 flex space-x-3">
              <a href="https://github.com/zorp-corp/nockchain" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://www.nockchain.org/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16h-2v-6h2v6zm-1-9c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">{t('browse')}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blocks" className="text-gray-400 hover:text-blue-300 transition-colors">{t('blocks_footer')}</Link></li>
              <li><Link href="/txs" className="text-gray-400 hover:text-blue-300 transition-colors">{t('txs_footer')}</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-blue-300 transition-colors">{t('stats')}</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-blue-300 transition-colors">{t('validators')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">{t('resources')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/zorp-corp/nockchain" className="text-gray-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">{t('dev_docs')}</a></li>
              <li><a href="https://www.nockchain.org/" className="text-gray-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">{t('official_site')}</a></li>
              <li><Link href="/" className="text-gray-400 hover:text-blue-300 transition-colors">{t('api_docs')}</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-blue-300 transition-colors">{t('network_status_footer')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">{t('community')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/zorp-corp/nockchain" className="text-gray-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.nockchain.org/" className="text-gray-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">{t('telegram')}</a></li>
              <li><a href="https://www.nockchain.org/" className="text-gray-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">{t('faq')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
          <p>{t('copyright')} | <span className="text-xs">{t('launch_info')}</span></p>
        </div>
      </div>
    </footer>
  );
} 