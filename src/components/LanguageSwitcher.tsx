"use client";

import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <span className="text-xs text-blue-200">{t('language')}:</span>
      <div className="flex border rounded overflow-hidden">
        <button
          className={`px-2 py-0.5 text-xs ${
            language === 'en'
              ? 'bg-blue-600 text-white'
              : 'bg-blue-800 text-blue-200 hover:bg-blue-700'
          }`}
          onClick={() => setLanguage('en')}
        >
          EN
        </button>
        <button
          className={`px-2 py-0.5 text-xs ${
            language === 'zh'
              ? 'bg-blue-600 text-white'
              : 'bg-blue-800 text-blue-200 hover:bg-blue-700'
          }`}
          onClick={() => setLanguage('zh')}
        >
          中文
        </button>
      </div>
    </div>
  );
} 