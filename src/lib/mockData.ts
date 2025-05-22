export interface Block {
  number: number;
  hash: string;
  timestamp: number;
  miner: string;
  transactionCount: number;
  size: number;
  rewards: string;
}

export interface Transaction {
  hash: string;
  blockNumber: number;
  timestamp: number;
  from: string;
  to: string;
  value: string;
  fee: string;
}

export interface Address {
  address: string;
  balance: string;
  transactionCount: number;
}

// Fixed base timestamp to prevent hydration mismatches
const BASE_TIME = 1716469840000; // A fixed timestamp

// Mock Blocks
export const mockBlocks: Block[] = [
  {
    number: 1000,
    hash: "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b",
    timestamp: BASE_TIME - 60000, // 1 minute ago
    miner: "0xABC123def456GHI789jkl012MNO345pqr678STU",
    transactionCount: 10,
    size: 1024,
    rewards: "5.0"
  },
  {
    number: 999,
    hash: "0x2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3",
    timestamp: BASE_TIME - 120000, // 2 minutes ago
    miner: "0xDEF456ghi789JKL012mno345PQR678stu901VWX",
    transactionCount: 8,
    size: 893,
    rewards: "5.0"
  },
  {
    number: 998,
    hash: "0x3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4",
    timestamp: BASE_TIME - 180000, // 3 minutes ago
    miner: "0xGHI789jkl012MNO345pqr678STU901vwx234YZA",
    transactionCount: 12,
    size: 1156,
    rewards: "5.0"
  },
  {
    number: 997,
    hash: "0x4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5",
    timestamp: BASE_TIME - 240000, // 4 minutes ago
    miner: "0xJKL012mno345PQR678stu901VWX234yza567BCD",
    transactionCount: 6,
    size: 721,
    rewards: "5.0"
  },
  {
    number: 996,
    hash: "0x5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6",
    timestamp: BASE_TIME - 300000, // 5 minutes ago
    miner: "0xMNO345pqr678STU901vwx234YZA567bcd890EFG",
    transactionCount: 15,
    size: 1528,
    rewards: "5.0"
  }
];

// Mock Transactions
export const mockTransactions: Transaction[] = [
  {
    hash: "0xabcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789",
    blockNumber: 1000,
    timestamp: BASE_TIME - 30000, // 30 seconds ago
    from: "0xABC123def456GHI789jkl012MNO345pqr678STU",
    to: "0xDEF456ghi789JKL012mno345PQR678stu901VWX",
    value: "1.25",
    fee: "0.005"
  },
  {
    hash: "0x123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0",
    blockNumber: 1000,
    timestamp: BASE_TIME - 45000, // 45 seconds ago
    from: "0xGHI789jkl012MNO345pqr678STU901vwx234YZA",
    to: "0xJKL012mno345PQR678stu901VWX234yza567BCD",
    value: "0.75",
    fee: "0.003"
  },
  {
    hash: "0x56789abcdef0123456789abcdef0123456789abcdef0123456789abcdef01234",
    blockNumber: 999,
    timestamp: BASE_TIME - 90000, // 1.5 minutes ago
    from: "0xMNO345pqr678STU901vwx234YZA567bcd890EFG",
    to: "0xABC123def456GHI789jkl012MNO345pqr678STU",
    value: "3.5",
    fee: "0.008"
  },
  {
    hash: "0x789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456",
    blockNumber: 999,
    timestamp: BASE_TIME - 110000, // ~1.8 minutes ago
    from: "0xDEF456ghi789JKL012mno345PQR678stu901VWX",
    to: "0xGHI789jkl012MNO345pqr678STU901vwx234YZA",
    value: "2.1",
    fee: "0.006"
  },
  {
    hash: "0x9abcdef0123456789abcdef0123456789abcdef0123456789abcdef012345678",
    blockNumber: 998,
    timestamp: BASE_TIME - 150000, // 2.5 minutes ago
    from: "0xJKL012mno345PQR678stu901VWX234yza567BCD",
    to: "0xMNO345pqr678STU901vwx234YZA567bcd890EFG",
    value: "0.45",
    fee: "0.002"
  }
];

// Mock Addresses
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

// Helper function to format timestamps
export function formatTimestamp(timestamp: number): string {
  const now = typeof window !== 'undefined' ? Date.now() : BASE_TIME;
  const diff = now - timestamp;
  
  if (diff < 60000) { // Less than 1 minute
    const secs = Math.floor(diff / 1000);
    return `${secs} secs ago`;
  } else if (diff < 3600000) { // Less than 1 hour
    const mins = Math.floor(diff / 60000);
    return `${mins} min${mins > 1 ? 's' : ''} ago`;
  } else if (diff < 86400000) { // Less than 1 day
    const hours = Math.floor(diff / 3600000);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else {
    const days = Math.floor(diff / 86400000);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }
}

// Helper function to truncate addresses and hashes
export function truncateHash(hash: string, length = 8): string {
  if (!hash || hash.length < 20) return hash;
  return `${hash.substring(0, length)}...${hash.substring(hash.length - length)}`;
} 