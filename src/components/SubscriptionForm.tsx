"use client";

import { useLanguage } from '@/context/LanguageContext';

export default function SubscriptionForm() {
  const { t } = useLanguage();
  const typeformUrl = 'https://form.typeform.com/to/OjPSdVqF';

  return (
    <div className="bg-black rounded-lg shadow-lg p-6 my-8">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-white mb-2">{t('subscribe_title')}</h3>
        <p className="text-gray-300 mb-6">{t('subscribe_desc')}</p>
        
        <a 
          href={typeformUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-white hover:bg-gray-100 text-gray-700 font-bold rounded-lg transition-colors text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          {t('subscribe_button')}
        </a>
      </div>
    </div>
  );
} 