"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

type TranslationDictionary = {
  [key: string]: string;
}

const translations: Record<Language, TranslationDictionary> = {
  en: {
    // Header
    "blocks": "Blocks",
    "transactions": "Transactions",
    "docs": "Docs",
    "search_placeholder": "Search by Address / Txn Hash / Block / Token",
    
    // Stats
    "network_status": "Nockchain Network Status",
    "launching_soon": "Fair launching with no pre-mine on May 21, 2025. Powered by ZK-Proof of Work.",
    "nock_price": "NOCK Price",
    "presale": "Presale",
    "total_supply": "Total Supply",
    "supply_cap": "Cap 2³²",
    "latest_block": "Latest Block",
    "seconds_ago": "seconds ago",
    "zkpow_rate": "ZK-PoW Rate",
    "network_hashrate": "Network Hashrate",
    "total_txs": "Total Transactions",
    "avg_block_time": "Avg Block Time",
    "difficulty": "Difficulty",
    "market_cap": "Market Cap",
    
    // Alert
    "alert_title": "Notice:",
    "alert_message": "This is a mock version of Nockscan. The data displayed is for demonstration purposes only and does not represent real Nockchain blockchain data.",
    
    // Home
    "about_nockscan": "About Nockscan",
    "about_content_1": "Nockscan is the preferred block explorer for the Nockchain network. Nockchain is a lightweight blockchain platform designed for heavyweight verifiable applications, focusing on trustless settlement of heavyweight verifiable computation through zero-knowledge proofs (ZK-Proof-of-Work).",
    "about_content_2": "Nockchain will fair launch on May 21, 2025, with no pre-mine, using the ZK-Proof-of-Work consensus mechanism. The total supply of $NOCK tokens will be capped at 2³² (4,294,967,296).",
    "key_features": "Key Features:",
    "feature_1": "Real-time tracking of blocks and transactions",
    "feature_2": "Detailed information about addresses, transactions, and blocks",
    "feature_3": "Efficient search functionality for quick access to blockchain data",
    "feature_4": "Network statistics and analytics tools",
    "feature_5": "Support for ZK-Proof-of-Work miner queries and verification",
    "dev_resources": "Developer Resources:",
    "github_repo": "GitHub Repository",
    "repo_desc": "Nockchain protocol source code",
    "official_site": "Official Website",
    "site_desc": "Learn about the latest Nockchain updates",
    
    // Footer
    "footer_desc": "Nockscan is a block explorer and analytics platform for the Nockchain blockchain, supporting heavyweight verifiable applications on a lightweight blockchain.",
    "browse": "Browse",
    "blocks_footer": "Blocks",
    "txs_footer": "Transactions",
    "stats": "Stats",
    "validators": "Validators",
    "resources": "Resources",
    "dev_docs": "Developer Docs",
    "api_docs": "API Docs",
    "network_status_footer": "Network Status",
    "community": "Community",
    "telegram": "Telegram Forum",
    "faq": "FAQ",
    "copyright": "© 2025 Nockscan",
    "launch_info": "Fair launching on May 21, 2025 with ZK-Proof-of-Work",
    
    // Subscription
    "subscribe_title": "Subscribe for Updates",
    "subscribe_desc": "Subscribe for NockScan's Official Launch and to win the free $NOCK.",
    "email_placeholder": "Enter your email",
    "subscribe_button": "Subscribe",
    "language": "Language",
  },
  zh: {
    // 头部
    "blocks": "区块",
    "transactions": "交易",
    "docs": "文档",
    "search_placeholder": "搜索地址 / 交易哈希 / 区块 / 代币",
    
    // 统计
    "network_status": "Nockchain 网络状态",
    "launching_soon": "将于 2025 年 5 月 21 日公平启动，无预挖矿，采用 ZK-Proof-of-Work",
    "nock_price": "NOCK 价格",
    "presale": "预售前",
    "total_supply": "总供应量",
    "supply_cap": "上限 2³²",
    "latest_block": "最新区块",
    "seconds_ago": "秒前",
    "zkpow_rate": "ZK-PoW 算力",
    "network_hashrate": "全网算力",
    "total_txs": "交易总数",
    "avg_block_time": "平均区块时间",
    "difficulty": "难度",
    "market_cap": "市值",
    
    // 提醒
    "alert_title": "注意：",
    "alert_message": "这是一个模拟版本的 Nockscan。显示的数据仅用于演示目的，不代表真实的 Nockchain 区块链数据。",
    
    // 首页
    "about_nockscan": "关于 Nockscan",
    "about_content_1": "Nockscan 是 Nockchain 网络的首选区块浏览器。Nockchain 是一个轻量级区块链平台，专为重量级可验证应用而设计，专注于通过零知识证明（ZK-Proof-of-Work）实现可信任的重量级可验证计算结算。",
    "about_content_2": "Nockchain 将于 2025 年 5 月 21 日公平启动，无预挖矿，采用 ZK-Proof-of-Work 共识机制。$NOCK 代币总供应量将被限制在 2³²（4,294,967,296）枚。",
    "key_features": "核心功能：",
    "feature_1": "实时跟踪区块和交易信息",
    "feature_2": "提供地址、交易和区块的详细信息",
    "feature_3": "高效的搜索功能，快速访问区块链数据",
    "feature_4": "网络统计和分析工具",
    "feature_5": "支持 ZK-Proof-of-Work 矿工查询和验证",
    "dev_resources": "开发者资源：",
    "github_repo": "GitHub 代码库",
    "repo_desc": "Nockchain 协议源代码",
    "official_site": "官方网站",
    "site_desc": "了解 Nockchain 的最新动态",
    
    // 页脚
    "footer_desc": "Nockscan 是 Nockchain 区块链的区块浏览器和分析平台，为轻量级区块链提供重量级可验证应用的支持。",
    "browse": "浏览",
    "blocks_footer": "区块",
    "txs_footer": "交易",
    "stats": "统计",
    "validators": "验证节点",
    "resources": "资源",
    "dev_docs": "开发文档",
    "api_docs": "API 文档",
    "network_status_footer": "网络状态",
    "community": "社区",
    "telegram": "Telegram 论坛",
    "faq": "常见问题",
    "copyright": "© 2025 Nockscan",
    "launch_info": "将于 2025 年 5 月 21 日公平启动，采用 ZK-Proof-of-Work",
    
    // 订阅
    "subscribe_title": "订阅更新",
    "subscribe_desc": "订阅 NockScan 的官方发布消息，有机会赢取免费 $NOCK",
    "email_placeholder": "输入您的邮箱",
    "subscribe_button": "订阅",
    "language": "语言",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // 检测系统语言
    const detectLanguage = () => {
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('zh')) {
        setLanguage('zh');
      } else {
        setLanguage('en');
      }
    };

    detectLanguage();
  }, []);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 