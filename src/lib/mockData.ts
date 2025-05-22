// BASE_TIME 是用于确保服务器端和客户端渲染一致的固定时间戳
export const BASE_TIME = 1714521600000; // 2024-05-01T00:00:00.000Z

// 格式化时间戳，使用固定的BASE_TIME，避免水合问题
export const formatTimestamp = (offsetOrTimestamp: number | string) => {
  // If it's already a timestamp string, just return a formatted date
  if (typeof offsetOrTimestamp === 'string') {
    return new Date(offsetOrTimestamp).toLocaleString();
  }
  
  // Otherwise, treat it as an offset from BASE_TIME
  // 确保offset是一个有效的数字，避免无效时间
  const safeOffset = typeof offsetOrTimestamp === 'number' ? offsetOrTimestamp : 0;
  // 防止负数时间戳导致错误
  const timestamp = Math.max(0, BASE_TIME - safeOffset * 1000);
  const date = new Date(timestamp);
  return date.toISOString();
};

// 截断哈希值，保留前面和后面的字符
export const truncateHash = (hash: string, startChars = 6, endChars = 4) => {
  if (!hash || hash.length <= startChars + endChars) {
    return hash;
  }
  
  return `${hash.substring(0, startChars)}...${hash.substring(hash.length - endChars)}`;
};

// 固定哈希值用于确保服务器/客户端一致性
const staticHashes = [
  '0x7ae3f3b24a276e605ce9a84adfd0f1f730a83d8b6728ad8972fd7a9a72b7d2c0',
  '0x95a24a5e62e8f6e59a3f1274fe73f3ba05c83b8e0867f443cb396dc3c2beec68',
  '0x3a0cf65d70b2df41a8308ce7d56ae7c50d712a3c6642c99c1616e0a636ef4df0',
  '0x2e4b327827a9b971f010726d8fe86553f047c0e029c47c9ec1b06a076f48bed1',
  '0x1c7da855c84c62afaf89c137caf2a3a992173a55cfd5c41c57c99b482ab46fe6',
  '0xdb98550ede4ccab1906618ba92a7ecd61e87f64c5e44c241765b9cd7595dc386',
  '0x4f73acd32116aa2235d8fc7d95db65bc3f12f6cd81f984fb62b95ac4bb04d10a',
  '0x6c92da5a423864ecc46c77cc577dcd7c7e106cedaf912e1c0dd81c7af8c3cd32',
  '0x8e4c6ad8b88ed34e1e8086f057c91abb75e012e528e5ada77342fac8e7f49e0a',
  '0xd7bf1dbeb7943e43a5c30890c7f0e92b1329affed95e3123478268e4bea5fc11'
];

// 创建模拟地址数组
const addressList = [
  '0x3a4e02f8F486CD1a39A80F5aFd64a38d83a7aedB',
  '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
  '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0'
];

// 固定的交易数量，避免服务器-客户端水合不匹配
const fixedTransactionCounts = [18, 24, 32, 15, 42, 28, 19, 37, 22, 30];
const fixedGasUsed = [4500000, 6200000, 3800000, 5100000, 7000000, 4200000, 6500000, 3900000, 5800000, 4700000];
const fixedDifficulties = [546.7, 612.3, 589.1, 632.8, 604.2, 578.9, 596.3, 621.5, 614.7, 587.2];

// Block interface
export interface Block {
  number: number;
  hash: string;
  timestamp: string;
  miner: string;
  transactions: number;
  difficulty: number;
  gasUsed: number;
  gasLimit: number;
  reward: number;
}

// 创建模拟区块
export const mockBlocks = Array.from({ length: 10 }, (_, i) => ({
  number: 1000 - i,
  hash: staticHashes[i],
  timestamp: formatTimestamp(i * 15),
  miner: addressList[i % addressList.length],
  transactions: fixedTransactionCounts[i],
  difficulty: fixedDifficulties[i],
  gasUsed: fixedGasUsed[i],
  gasLimit: 10000000,
  reward: 2
}));

// 为交易创建固定值
const fixedValues = ['3.4218', '7.5162', '1.2095', '5.8271', '0.9354', '2.1873', '4.6529', '8.3901', '6.7245', '9.0183'];
const fixedGasUsedTx = [21500, 45000, 32750, 68200, 125000, 84300, 37900, 92700, 56800, 145000];
const fixedGasPrices = [25, 18, 32, 27, 45, 39, 22, 15, 36, 28];

// Type for Transaction
export interface Transaction {
  hash: string;
  from: string;
  to: string;
  value: string;
  timestamp: string;
  block: number;
  gasUsed: number;
  gasPrice: number;
  status: string;
}

// 创建模拟交易
export const mockTransactions = Array.from({ length: 20 }, (_, i) => {
  const hashIndex = i % 10;
  const fromIndex = (i % 5);
  const toIndex = ((i + 2) % 5);
  
  return {
    hash: staticHashes[hashIndex],
    from: addressList[fromIndex],
    to: addressList[toIndex],
    value: fixedValues[i % 10],
    timestamp: formatTimestamp(i * 5),
    block: 1000 - Math.floor(i / 2),
    gasUsed: fixedGasUsedTx[i % 10],
    gasPrice: fixedGasPrices[i % 10],
    status: i % 7 === 0 ? 'failed' : 'success'
  };
});

// 地址类型定义
export interface Address {
  address: string;
  balance: string;
  transactionCount: number;
}

// 创建模拟地址数据
export const mockAddresses: Address[] = [
  {
    address: "0xABC123def456GHI789jkl012MNO345pqr678STU",
    balance: "125.75",
    transactionCount: 42
  },
  {
    address: "0xDEF456ghi789JKL012mno345PQR678stu901VWX",
    balance: "87.2",
    transactionCount: 28
  },
  {
    address: "0xGHI789jkl012MNO345pqr678STU901vwx234YZA",
    balance: "203.6",
    transactionCount: 56
  },
  {
    address: "0xJKL012mno345PQR678stu901VWX234yza567BCD",
    balance: "45.9",
    transactionCount: 19
  },
  {
    address: "0xMNO345pqr678STU901vwx234YZA567bcd890EFG",
    balance: "312.4",
    transactionCount: 78
  }
]; 