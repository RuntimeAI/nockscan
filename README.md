# Nockscan - Nockchain Explorer

Nockscan is a blockchain explorer for Nockchain, a lightweight blockchain for heavyweight verifiable applications. This project provides a user-friendly interface to explore blocks, transactions, and addresses on the Nockchain network.

## Features

- 🔍 Search functionality for blocks, transactions, and addresses
- 📊 Real-time blockchain statistics
- 📦 Detailed block information
- 💸 Transaction tracking and history
- 👛 Address balances and transaction history
- 📱 Responsive design for mobile and desktop

## Technology Stack

- Next.js 14 (React framework)
- TypeScript
- Tailwind CSS
- Mock data for development purposes

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/RuntimeAI/nockscan.git
cd nockscan
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Deployment

This project is configured for GitHub Pages deployment. The site is automatically built and deployed to GitHub Pages whenever changes are pushed to the main branch.

You can access the live version at: https://runtimeai.github.io/nockscan/

To manually deploy:

1. Build the static export:

```bash
npm run build
```

2. The output will be in the `out` directory, which can be deployed to any static hosting service.

## Project Structure

```
nockscan/
├── src/
│   ├── app/
│   │   ├── address/[address]/         # Address details page
│   │   ├── block/[id]/                # Block details page
│   │   ├── blocks/                    # All blocks listing page
│   │   ├── tx/[hash]/                 # Transaction details page
│   │   ├── txs/                       # All transactions listing page
│   │   ├── layout.tsx                 # App layout with header/footer
│   │   └── page.tsx                   # Homepage
│   ├── components/                    # Reusable UI components
│   │   ├── BlockchainStats.tsx        # Network statistics component
│   │   ├── Footer.tsx                 # Site footer
│   │   ├── Header.tsx                 # Site header with search
│   │   ├── LatestBlocks.tsx           # Latest blocks list component
│   │   └── LatestTransactions.tsx     # Latest transactions list component
│   └── lib/
│       └── mockData.ts                # Mock data for development
├── public/                            # Static assets
└── package.json                       # Project dependencies
```

## Future Improvements

- Connect to a real Nockchain node via API
- Implement pagination for large dataset handling
- Add real-time data updates using websockets
- Implement advanced search and filtering options
- Add charting and analytics features
- Create an API service layer

## About Nockchain

Nockchain is a lightweight blockchain for heavyweight verifiable applications, focusing on trustless settlement of heavyweight verifiable computation. It replaces verifiability-via-public-replication with verifiability-via-private-proving, where proving happens off-chain and verification is on-chain.

For more information, visit the [Nockchain GitHub repository](https://github.com/zorp-corp/nockchain).

## License

This project is licensed under the MIT License - see the LICENSE file for details.
