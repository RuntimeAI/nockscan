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

    // Mining Tutorial
    "mining_hero_title": "Nockchain Mining Guide",
    "mining_hero_subtitle": "Complete automated setup for Nockchain nodes and mining on Ubuntu servers",
    "get_advanced_script": "Get Advanced Script (v2)",
    "get_basic_script": "Get Basic Script (v1)",
    "tab_overview": "Overview",
    "tab_requirements": "Requirements",
    "tab_basic_setup": "Basic Setup (v1)",
    "tab_advanced_setup": "Advanced Setup (v2)",
    "tab_troubleshooting": "Troubleshooting",
    "what_is_nockchain": "What is Nockchain?",
    "nockchain_desc": "Nockchain is next-generation blockchain infrastructure optimized for running \"Nock\" smart contracts. It combines principles from Urbit and EVM-compatible logic to provide:",
    "nockchain_feature_1": "Decentralized agent execution environment",
    "nockchain_feature_2": "Deterministic computing using Hoon and Nock",
    "nockchain_feature_3": "Compact and secure innovative VM layer",
    "nockchain_feature_4": "Early-stage network with growth potential",
    "why_mine_nockchain": "Why Mine Nockchain?",
    "mine_reason_1": "Early adoption opportunity",
    "mine_reason_2": "Secure and innovative technology",
    "mine_reason_3": "Help decentralize the network",
    "mine_reason_4": "Potential rewards for early miners",
    "mine_reason_5": "Join a growing community",
    "important_note": "Important Note",
    "security_warning": "Nockchain is still in early stages. By running a node or participating in mining, you're helping to decentralize and grow the network. Always use secure practices and never risk more than you can afford.",
    "vps_requirements": "VPS Requirements",
    "resource": "Resource",
    "minimum": "Minimum",
    "recommended": "Recommended",
    "operating_system": "Operating System",
    "cpu": "CPU",
    "memory": "Memory",
    "storage": "Storage",
    "network": "Network",
    "what_script_installs": "What the Script Installs",
    "install_feature_1": "System dependencies",
    "install_feature_2": "Rust (stable)",
    "install_feature_3": "Official Nockchain repository",
    "install_feature_4": "All necessary components (hoonc, wallet, node)",
    "install_feature_5": "Configuration files and environment setup",
    "install_feature_6": "PM2 cluster management (v2)",
    "memory_usage_64gb": "Memory Usage (64GB Server)",
    "memory_main_node": "Main node: 12GB",
    "memory_mining_nodes": "3x Mining nodes: 30GB (10GB each)",
    "memory_system": "System & other processes: ~22GB",
    "memory_total": "Total: 64GB",
    "basic_setup_title": "Basic Setup (v1) - Setup Only",
    "v1_includes": "What v1 Includes",
    "v1_description": "The basic version provides automated installation and setup of Nockchain components. Perfect for developers who want to manually configure their mining setup.",
    "one_command_installation": "One-Command Installation",
    "setup_step_1": "Step 1: Run Installation Script",
    "setup_step_1_desc": "Execute the one-command installation on your fresh Ubuntu VPS. The script will automatically handle all dependencies and setup.",
    "setup_step_2": "Step 2: Manual Configuration",
    "setup_step_2_desc": "After installation, you'll need to manually:",
    "manual_config_1": "Generate wallet keys using nockchain-wallet",
    "manual_config_2": "Configure mining public key in environment variables",
    "manual_config_3": "Start nodes manually or create your own process management",
    "setup_step_3": "Step 3: Manual Node Management",
    "setup_step_3_desc": "Use standard command line tools to manage your nodes. Suitable for experienced users who prefer granular control over their mining setup.",
    "best_for_v1": "Best For",
    "v1_best_for": "Developers and advanced users who want to understand the setup process and prefer manual control over their mining configuration.",
    "advanced_setup_title": "Advanced Setup (v2) - Complete Solution",
    "v2_includes": "What v2 Includes",
    "v2_description": "The advanced version provides a complete, production-ready mining solution with automated setup, wallet management, and cluster mining for maximum efficiency.",
    "v2_step_1": "Step 1: Automated Installation",
    "v2_step_1_desc": "Run the installation script on your Ubuntu VPS. It will automatically:",
    "auto_install_1": "Install all system dependencies",
    "auto_install_2": "Setup Rust toolchain",
    "auto_install_3": "Clone and build Nockchain",
    "auto_install_4": "Download configuration files",
    "auto_install_5": "Create default environment setup",
    "v2_step_2": "Step 2: Wallet Generation",
    "v2_step_2_desc": "This generates your wallet with mnemonic phrase, private/public keys, and chain code. Save this information securely!",
    "v2_step_3": "Step 3: Configuration",
    "v2_step_3_desc": "Update the MINING_PUBKEY with your generated public key. Memory settings are pre-optimized for 64GB servers.",
    "v2_step_4": "Step 4: Choose Running Method",
    "method_1_title": "Method 1: Make Command",
    "method_1_desc": "Simple direct execution",
    "method_2_title": "Method 2: PM2 Cluster (Recommended)",
    "method_2_desc": "Production-ready with monitoring",
    "v2_step_5": "Step 5: Monitoring & Management",
    "pm2_commands": "PM2 Commands",
    "blockchain_monitoring": "Blockchain Monitoring",
    "best_for_v2": "Best For",
    "v2_best_for": "Miners who want a complete, production-ready solution with maximum efficiency and minimal setup time. Ideal for serious miners and those running multiple nodes.",
    "troubleshooting_title": "Troubleshooting & FAQ",
    "common_issues": "Common Issues",
    "issue_1_title": "Installation Script Fails",
    "issue_1_desc": "Check your Ubuntu version and internet connection:",
    "issue_2_title": "Out of Memory Errors",
    "issue_2_desc": "Adjust memory limits in ecosystem.config.js:",
    "issue_3_title": "Nodes Won't Start",
    "issue_3_desc": "Check logs and socket permissions:",
    "performance_tips": "Performance Tips",
    "optimization": "Optimization",
    "optimization_1": "Use NVMe SSD for better I/O",
    "optimization_2": "Enable swap if memory is limited",
    "optimization_3": "Monitor CPU temperature",
    "optimization_4": "Use dedicated VPS (not shared)",
    "optimization_5": "Ensure stable network connection",
    "monitoring": "Monitoring",
    "monitoring_1": "Use htop for resource monitoring",
    "monitoring_2": "Check pm2 monit regularly",
    "monitoring_3": "Monitor log files for errors",
    "monitoring_4": "Track blockchain synchronization",
    "monitoring_5": "Set up alerts for downtime",
    "useful_commands": "Useful Commands",
    "get_help": "Get Help",
    "get_help_desc": "Need more help? Join the community and get support:",
    "github_issues": "GitHub Issues",
    "ready_to_start": "Ready to Start Mining Nockchain?",
    "ready_desc": "Join the early miners and help secure the Nockchain network while earning rewards",
    "start_advanced": "Start with Advanced Script (v2)",
    "view_network_stats": "View Network Stats",

    // Homepage Mining Promotion
    "start_mining_today": "Start Mining Nockchain Today!",
    "join_early_miners": "Join early miners and help secure the network while earning rewards",
    "early_adoption_title": "Early Adoption",
    "early_adoption_desc": "Get in early while the network is growing. Early miners have the best opportunities.",
    "one_click_setup_title": "One-Click Setup", 
    "one_click_setup_desc": "Our automated script sets up everything for you. No complex configuration needed.",
    "earn_rewards_title": "Earn Rewards",
    "earn_rewards_desc": "Mine NOCK tokens and earn rewards for securing the Nockchain network.",
    "view_mining_tutorial": "View Mining Tutorial",
    "get_mining_script": "Get Mining Script",
    "mining_features": "Works on Ubuntu servers • Automated setup • Production ready"
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

    // 挖矿教程
    "mining_hero_title": "🚀 Nockchain 挖矿指南",
    "mining_hero_subtitle": "在 Ubuntu 服务器上完整自动化设置 Nockchain 节点和挖矿",
    "get_advanced_script": "📥 获取高级脚本 (v2)",
    "get_basic_script": "📥 获取基础脚本 (v1)",
    "tab_overview": "🌟 概览",
    "tab_requirements": "💻 要求",
    "tab_basic_setup": "🔧 基础设置 (v1)",
    "tab_advanced_setup": "⚡ 高级设置 (v2)",
    "tab_troubleshooting": "🛠️ 故障排除",
    "what_is_nockchain": "什么是 Nockchain？",
    "nockchain_desc": "Nockchain 是为运行 \"Nock\" 智能合约而优化的新一代区块链基础设施。它结合了 Urbit 的原理和 EVM 兼容逻辑，提供：",
    "nockchain_feature_1": "去中心化代理执行环境",
    "nockchain_feature_2": "使用 Hoon 和 Nock 的确定性计算",
    "nockchain_feature_3": "紧凑而安全的创新虚拟机层",
    "nockchain_feature_4": "具有增长潜力的早期网络",
    "why_mine_nockchain": "🎯 为什么要挖 Nockchain？",
    "mine_reason_1": "🚀 早期采用机会",
    "mine_reason_2": "🔒 安全创新的技术",
    "mine_reason_3": "🌐 帮助网络去中心化",
    "mine_reason_4": "💰 早期矿工的潜在奖励",
    "mine_reason_5": "🤝 加入不断增长的社区",
    "important_note": "⚠️ 重要提示",
    "security_warning": "Nockchain 仍处于早期阶段。通过运行节点或参与挖矿，您正在帮助网络去中心化和发展。始终使用安全实践，永远不要承担超出您承受能力的风险。",
    "vps_requirements": "💻 VPS 要求",
    "resource": "资源",
    "minimum": "最低要求",
    "recommended": "推荐配置",
    "operating_system": "操作系统",
    "cpu": "CPU",
    "memory": "内存",
    "storage": "存储",
    "network": "网络",
    "what_script_installs": "🔧 脚本安装内容",
    "install_feature_1": "✅ 系统依赖",
    "install_feature_2": "✅ Rust (稳定版)",
    "install_feature_3": "✅ 官方 Nockchain 仓库",
    "install_feature_4": "✅ 所有必要组件 (hoonc, wallet, node)",
    "install_feature_5": "✅ 配置文件和环境设置",
    "install_feature_6": "✅ PM2 集群管理 (v2)",
    "memory_usage_64gb": "💡 内存使用情况（64GB 服务器）",
    "memory_main_node": "🖥️ 主节点：12GB",
    "memory_mining_nodes": "⛏️ 3个挖矿节点：30GB（每个10GB）",
    "memory_system": "🔧 系统和其他进程：~22GB",
    "memory_total": "📊 总计：64GB",
    "basic_setup_title": "🔧 基础设置 (v1) - 仅安装",
    "v1_includes": "📋 v1 版本包含内容",
    "v1_description": "基础版本提供 Nockchain 组件的自动化安装和设置。适合希望手动配置挖矿设置的开发者。",
    "one_command_installation": "🚀 一键安装",
    "setup_step_1": "步骤 1：运行安装脚本",
    "setup_step_1_desc": "在您的全新 Ubuntu VPS 上执行一键安装。脚本将自动处理所有依赖和设置。",
    "setup_step_2": "步骤 2：手动配置",
    "setup_step_2_desc": "安装后，您需要手动：",
    "manual_config_1": "使用 nockchain-wallet 生成钱包密钥",
    "manual_config_2": "在环境变量中配置挖矿公钥",
    "manual_config_3": "手动启动节点或创建自己的进程管理",
    "setup_step_3": "步骤 3：手动节点管理",
    "setup_step_3_desc": "使用标准命令行工具管理您的节点。适合希望对挖矿设置进行精细控制的有经验用户。",
    "best_for_v1": "💡 最适合",
    "v1_best_for": "希望了解设置过程并偏好手动控制挖矿配置的开发者和高级用户。",
    "advanced_setup_title": "⚡ 高级设置 (v2) - 完整方案",
    "v2_includes": "🎯 v2 版本包含内容",
    "v2_description": "高级版本提供完整的生产就绪挖矿解决方案，包括自动化设置、钱包管理和集群挖矿，以实现最大效率。",
    "v2_step_1": "步骤 1：自动化安装",
    "v2_step_1_desc": "在您的 Ubuntu VPS 上运行安装脚本。它将自动：",
    "auto_install_1": "安装所有系统依赖",
    "auto_install_2": "设置 Rust 工具链",
    "auto_install_3": "克隆并构建 Nockchain",
    "auto_install_4": "下载配置文件",
    "auto_install_5": "创建默认环境设置",
    "v2_step_2": "步骤 2：钱包生成",
    "v2_step_2_desc": "这将生成包含助记词、私钥/公钥和链码的钱包。请安全保存这些信息！",
    "v2_step_3": "步骤 3：配置",
    "v2_step_3_desc": "使用生成的公钥更新 MINING_PUBKEY。内存设置已针对 64GB 服务器进行预优化。",
    "v2_step_4": "步骤 4：选择运行方式",
    "method_1_title": "🔧 方式 1：Make 命令",
    "method_1_desc": "简单直接执行",
    "method_2_title": "⚡ 方式 2：PM2 集群（推荐）",
    "method_2_desc": "生产就绪，带监控功能",
    "v2_step_5": "步骤 5：监控和管理",
    "pm2_commands": "PM2 命令",
    "blockchain_monitoring": "区块链监控",
    "best_for_v2": "🏆 最适合",
    "v2_best_for": "希望获得完整、生产就绪解决方案，具有最大效率和最少设置时间的矿工。非常适合认真的矿工和运行多个节点的用户。",
    "troubleshooting_title": "🛠️ 故障排除和常见问题",
    "common_issues": "❌ 常见问题",
    "issue_1_title": "安装脚本失败",
    "issue_1_desc": "检查您的 Ubuntu 版本和网络连接：",
    "issue_2_title": "内存不足错误",
    "issue_2_desc": "在 ecosystem.config.js 中调整内存限制：",
    "issue_3_title": "节点无法启动",
    "issue_3_desc": "检查日志和套接字权限：",
    "performance_tips": "💡 性能提示",
    "optimization": "🚀 优化",
    "optimization_1": "• 使用 NVMe SSD 获得更好的 I/O 性能",
    "optimization_2": "• 如果内存有限，请启用交换分区",
    "optimization_3": "• 监控 CPU 温度",
    "optimization_4": "• 使用专用 VPS（非共享）",
    "optimization_5": "• 确保稳定的网络连接",
    "monitoring": "📊 监控",
    "monitoring_1": "• 使用 htop 进行资源监控",
    "monitoring_2": "• 定期检查 pm2 monit",
    "monitoring_3": "• 监控日志文件中的错误",
    "monitoring_4": "• 跟踪区块链同步状态",
    "monitoring_5": "• 设置停机警报",
    "useful_commands": "📚 有用命令",
    "get_help": "🤝 获得帮助",
    "get_help_desc": "需要更多帮助？加入社区获得支持：",
    "github_issues": "📝 GitHub Issues",
    "ready_to_start": "准备开始挖 Nockchain 了吗？",
    "ready_desc": "加入早期矿工，帮助保护 Nockchain 网络的同时获得奖励",
    "start_advanced": "🚀 使用高级脚本开始 (v2)",
    "view_network_stats": "📊 查看网络统计",

    // Homepage Mining Promotion
    "start_mining_today": "⛏️ 今天就开始挖 Nockchain！",
    "join_early_miners": "加入早期矿工，在获得奖励的同时帮助保护网络安全",
    "early_adoption_title": "🚀 早期采用",
    "early_adoption_desc": "趁网络发展初期尽早加入。早期矿工拥有最佳机会。",
    "one_click_setup_title": "⚡ 一键设置", 
    "one_click_setup_desc": "我们的自动化脚本为您设置一切。无需复杂配置。",
    "earn_rewards_title": "💰 赚取奖励",
    "earn_rewards_desc": "挖掘 NOCK 代币，通过保护 Nockchain 网络获得奖励。",
    "view_mining_tutorial": "📚 查看挖矿教程",
    "get_mining_script": "🛠️ 获取挖矿脚本",
    "mining_features": "✅ 支持 Ubuntu 服务器 • ✅ 自动化设置 • ✅ 生产就绪"
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