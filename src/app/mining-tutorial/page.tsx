"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function MiningTutorial() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              🚀 Nockchain Mining Guide
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Complete automated setup for Nockchain nodes and mining on Ubuntu servers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://github.com/wenqingyu/nockchain-mining-script/tree/v2"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                📥 Get Advanced Script (v2)
              </a>
              <a 
                href="https://github.com/wenqingyu/nockchain-mining-script/tree/main"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                📥 Get Basic Script (v1)
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              { id: 'overview', label: '🌟 Overview' },
              { id: 'requirements', label: '💻 Requirements' },
              { id: 'basic-setup', label: '🔧 Basic Setup (v1)' },
              { id: 'advanced-setup', label: '⚡ Advanced Setup (v2)' },
              { id: 'troubleshooting', label: '🛠️ Troubleshooting' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 shadow'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">What is Nockchain?</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-lg text-gray-700 mb-6">
                      Nockchain is next-generation blockchain infrastructure optimized for running "Nock" smart contracts. 
                      It combines principles from Urbit and EVM-compatible logic to provide:
                    </p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✅</span>
                        Decentralized agent execution environment
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✅</span>
                        Deterministic computing using Hoon and Nock
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✅</span>
                        Compact and secure innovative VM layer
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✅</span>
                        Early-stage network with growth potential
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">🎯 Why Mine Nockchain?</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>🚀 Early adoption opportunity</li>
                      <li>🔒 Secure and innovative technology</li>
                      <li>🌐 Help decentralize the network</li>
                      <li>💰 Potential rewards for early miners</li>
                      <li>🤝 Join a growing community</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
                  <h3 className="text-xl font-bold mb-3 text-amber-800">⚠️ Important Note</h3>
                  <p className="text-amber-700">
                    Nockchain is still in early stages. By running a node or participating in mining, 
                    you're helping to decentralize and grow the network. Always use secure practices and never risk more than you can afford.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'requirements' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">💻 VPS Requirements</h2>
                
                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resource</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Minimum</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recommended</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Operating System</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700">Ubuntu 20.04+ (64-bit)</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700">Ubuntu 22.04+ LTS</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">CPU</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700">8 vCPUs</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700">16+ vCPUs</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Memory</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700">32 GB</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700">64+ GB</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Storage</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700">200 GB SSD</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700">500+ GB NVMe SSD</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Network</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700">Public IPv4 required</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700">1Gbps+ bandwidth</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 text-blue-800">🔧 What the Script Installs</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li>✅ System dependencies</li>
                      <li>✅ Rust (stable)</li>
                      <li>✅ Official Nockchain repository</li>
                      <li>✅ All necessary components (hoonc, wallet, node)</li>
                      <li>✅ Configuration files and environment setup</li>
                      <li>✅ PM2 cluster management (v2)</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 text-green-800">💡 Memory Usage (64GB Server)</h3>
                    <ul className="space-y-2 text-green-700">
                      <li>🖥️ Main node: 12GB</li>
                      <li>⛏️ 3x Mining nodes: 30GB (10GB each)</li>
                      <li>🔧 System & other processes: ~22GB</li>
                      <li>📊 Total: 64GB</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'basic-setup' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">🔧 Basic Setup (v1) - Setup Only</h2>
                
                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-3 text-blue-800">📋 What v1 Includes</h3>
                  <p className="text-blue-700 mb-4">
                    The basic version provides automated installation and setup of Nockchain components. 
                    Perfect for developers who want to manually configure their mining setup.
                  </p>
                  <ul className="space-y-2 text-blue-700">
                    <li>✅ Automated system dependency installation</li>
                    <li>✅ Rust toolchain setup</li>
                    <li>✅ Nockchain repository cloning and building</li>
                    <li>✅ Basic configuration files</li>
                    <li>❌ No automated wallet generation</li>
                    <li>❌ No cluster mining setup</li>
                    <li>❌ Manual node management required</li>
                  </ul>
                </div>

                <div className="bg-gray-900 text-green-400 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-bold mb-3 text-white">🚀 One-Command Installation</h3>
                  <code className="block bg-gray-800 p-4 rounded text-green-300 overflow-x-auto">
                    bash &lt;(curl -s https://raw.githubusercontent.com/wenqingyu/nockchain-mining-script/main/setup-nockchain.sh)
                  </code>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-lg font-bold mb-2">Step 1: Run Installation Script</h4>
                    <p className="text-gray-700">
                      Execute the one-command installation on your fresh Ubuntu VPS. 
                      The script will automatically handle all dependencies and setup.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-lg font-bold mb-2">Step 2: Manual Configuration</h4>
                    <p className="text-gray-700 mb-3">
                      After installation, you'll need to manually:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Generate wallet keys using nockchain-wallet</li>
                      <li>Configure mining public key in environment variables</li>
                      <li>Start nodes manually or create your own process management</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-lg font-bold mb-2">Step 3: Manual Node Management</h4>
                    <p className="text-gray-700">
                      Use standard command line tools to manage your nodes. Suitable for experienced users 
                      who prefer granular control over their mining setup.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
                  <h3 className="text-lg font-bold mb-2 text-amber-800">💡 Best For</h3>
                  <p className="text-amber-700">
                    Developers and advanced users who want to understand the setup process and prefer manual control over their mining configuration.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'advanced-setup' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">⚡ Advanced Setup (v2) - Complete Solution</h2>
                
                <div className="bg-green-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-3 text-green-800">🎯 What v2 Includes</h3>
                  <p className="text-green-700 mb-4">
                    The advanced version provides a complete, production-ready mining solution with automated setup, 
                    wallet management, and cluster mining for maximum efficiency.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-green-700">
                      <li>✅ Everything from v1</li>
                      <li>✅ Automated wallet generation</li>
                      <li>✅ PM2 cluster management</li>
                      <li>✅ Multiple mining nodes (3x default)</li>
                      <li>✅ Production-ready configuration</li>
                    </ul>
                    <ul className="space-y-2 text-green-700">
                      <li>✅ Automated log management</li>
                      <li>✅ Health monitoring scripts</li>
                      <li>✅ Memory optimization</li>
                      <li>✅ Auto-restart capabilities</li>
                      <li>✅ Real-time monitoring</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-900 text-green-400 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-bold mb-3 text-white">🚀 One-Command Installation</h3>
                  <code className="block bg-gray-800 p-4 rounded text-green-300 overflow-x-auto">
                    bash &lt;(curl -s https://raw.githubusercontent.com/wenqingyu/nockchain-mining-script/v2/setup-nockchain.sh)
                  </code>
                </div>

                <div className="space-y-8">
                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="text-xl font-bold mb-3">Step 1: Automated Installation</h4>
                    <p className="text-gray-700 mb-3">
                      Run the installation script on your Ubuntu VPS. It will automatically:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Install all system dependencies</li>
                      <li>Setup Rust toolchain</li>
                      <li>Clone and build Nockchain</li>
                      <li>Download configuration files</li>
                      <li>Create default environment setup</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="text-xl font-bold mb-3">Step 2: Wallet Generation</h4>
                    <div className="bg-gray-100 p-4 rounded-lg mb-3">
                      <code className="text-gray-800">
                        cd ~/nockchain<br/>
                        nockchain-wallet keygen
                      </code>
                    </div>
                    <p className="text-gray-700">
                      This generates your wallet with mnemonic phrase, private/public keys, and chain code. 
                      <strong className="text-red-600"> Save this information securely!</strong>
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="text-xl font-bold mb-3">Step 3: Configuration</h4>
                    <div className="bg-gray-100 p-4 rounded-lg mb-3">
                      <code className="text-gray-800">
                        cp env.template .env<br/>
                        nano .env
                      </code>
                    </div>
                    <p className="text-gray-700">
                      Update the MINING_PUBKEY with your generated public key. 
                      Memory settings are pre-optimized for 64GB servers.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="text-xl font-bold mb-3">Step 4: Choose Running Method</h4>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-bold mb-2 text-blue-800">🔧 Method 1: Make Command</h5>
                        <div className="bg-white p-3 rounded border">
                          <code className="text-gray-800">make run-nockchain</code>
                        </div>
                        <p className="text-sm text-blue-700 mt-2">Simple direct execution</p>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h5 className="font-bold mb-2 text-green-800">⚡ Method 2: PM2 Cluster (Recommended)</h5>
                        <div className="bg-white p-3 rounded border text-sm">
                          <code className="text-gray-800">
                            # Install Node.js & PM2<br/>
                            curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -<br/>
                            sudo apt-get install -y nodejs<br/>
                            npm install -g pm2<br/><br/>
                            # Start cluster<br/>
                            pm2 start ecosystem.config.js
                          </code>
                        </div>
                        <p className="text-sm text-green-700 mt-2">Production-ready with monitoring</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="text-xl font-bold mb-3">Step 5: Monitoring & Management</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h6 className="font-bold mb-2">PM2 Commands</h6>
                        <div className="bg-gray-100 p-3 rounded text-sm">
                          <code className="text-gray-800">
                            pm2 status        # Check status<br/>
                            pm2 logs          # View logs<br/>
                            pm2 monit         # Real-time monitor<br/>
                            pm2 restart all   # Restart nodes
                          </code>
                        </div>
                      </div>
                      <div>
                        <h6 className="font-bold mb-2">Blockchain Monitoring</h6>
                        <div className="bg-gray-100 p-3 rounded text-sm">
                          <code className="text-gray-800">
                            ./check-blockchain.sh  # Status check<br/>
                            # Automated balance & block monitoring
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                  <h3 className="text-lg font-bold mb-2 text-green-800">🏆 Best For</h3>
                  <p className="text-green-700">
                    Miners who want a complete, production-ready solution with maximum efficiency and minimal setup time. 
                    Ideal for serious miners and those running multiple nodes.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'troubleshooting' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">🛠️ Troubleshooting & FAQ</h2>
                
                <div className="space-y-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-red-600">❌ Common Issues</h3>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-400 pl-4">
                        <h4 className="font-bold mb-2">Installation Script Fails</h4>
                        <p className="text-gray-700 mb-2">Check your Ubuntu version and internet connection:</p>
                        <div className="bg-gray-100 p-3 rounded">
                          <code className="text-gray-800">
                            lsb_release -a      # Check Ubuntu version<br/>
                            ping google.com     # Test connectivity
                          </code>
                        </div>
                      </div>

                      <div className="border-l-4 border-red-400 pl-4">
                        <h4 className="font-bold mb-2">Out of Memory Errors</h4>
                        <p className="text-gray-700 mb-2">Adjust memory limits in ecosystem.config.js:</p>
                        <div className="bg-gray-100 p-3 rounded">
                          <code className="text-gray-800">
                            MAIN_NODE_MEMORY=8G     # Reduce if needed<br/>
                            MINER_NODE_MEMORY=6G    # Reduce if needed<br/>
                            MINER_COUNT=2           # Reduce miner count
                          </code>
                        </div>
                      </div>

                      <div className="border-l-4 border-red-400 pl-4">
                        <h4 className="font-bold mb-2">Nodes Won't Start</h4>
                        <p className="text-gray-700 mb-2">Check logs and socket permissions:</p>
                        <div className="bg-gray-100 p-3 rounded">
                          <code className="text-gray-800">
                            pm2 logs                                    # Check PM2 logs<br/>
                            ls -la /tmp/nockchain-*.socket             # Check sockets<br/>
                            sudo chown $USER:$USER /tmp/nockchain-*    # Fix permissions
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-blue-600">💡 Performance Tips</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold mb-2">🚀 Optimization</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Use NVMe SSD for better I/O</li>
                          <li>• Enable swap if memory is limited</li>
                          <li>• Monitor CPU temperature</li>
                          <li>• Use dedicated VPS (not shared)</li>
                          <li>• Ensure stable network connection</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">📊 Monitoring</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Use <code>htop</code> for resource monitoring</li>
                          <li>• Check <code>pm2 monit</code> regularly</li>
                          <li>• Monitor log files for errors</li>
                          <li>• Track blockchain synchronization</li>
                          <li>• Set up alerts for downtime</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-green-600">📚 Useful Commands</h3>
                    
                    <div className="bg-gray-100 p-4 rounded">
                      <code className="text-gray-800 text-sm">
                        # Wallet operations<br/>
                        nockchain-wallet --nockchain-socket /tmp/nockchain-main.socket scan<br/>
                        nockchain-wallet --nockchain-socket /tmp/nockchain-main.socket update-balance<br/>
                        nockchain-wallet --nockchain-socket /tmp/nockchain-main.socket list-pubkeys<br/><br/>
                        
                        # Real-time monitoring<br/>
                        tail -f logs/nockchain-main-out.log | grep -a -i -E 'block|transaction|height'<br/>
                        watch -n 5 'pm2 status'<br/><br/>
                        
                        # System monitoring<br/>
                        htop                    # CPU/Memory usage<br/>
                        df -h                   # Disk usage<br/>
                        iotop                   # I/O monitoring
                      </code>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6 bg-blue-50">
                    <h3 className="text-xl font-bold mb-3 text-blue-800">🤝 Get Help</h3>
                    <p className="text-blue-700 mb-4">
                      Need more help? Join the community and get support:
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a 
                        href="https://github.com/wenqingyu/nockchain-mining-script/issues"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                      >
                        📝 GitHub Issues
                      </a>
                      <a 
                        href="https://nockchain.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                      >
                        🌐 Official Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Mining Nockchain?</h2>
            <p className="text-lg mb-6">
              Join the early miners and help secure the Nockchain network while earning rewards
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://github.com/wenqingyu/nockchain-mining-script/tree/v2"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                🚀 Start with Advanced Script (v2)
              </a>
              <Link 
                href="/"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors"
              >
                📊 View Network Stats
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 