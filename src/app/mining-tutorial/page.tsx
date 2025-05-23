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
              {t('mining_hero_title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              {t('mining_hero_subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://github.com/wenqingyu/nockchain-mining-script/tree/v2"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                {t('get_advanced_script')}
              </a>
              <a 
                href="https://github.com/wenqingyu/nockchain-mining-script/tree/main"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                {t('get_basic_script')}
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
              { id: 'overview', label: t('tab_overview') },
              { id: 'requirements', label: t('tab_requirements') },
              { id: 'basic-setup', label: t('tab_basic_setup') },
              { id: 'advanced-setup', label: t('tab_advanced_setup') },
              { id: 'troubleshooting', label: t('tab_troubleshooting') }
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
                <h2 className="text-3xl font-bold mb-6 text-gray-800">{t('what_is_nockchain')}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-lg text-gray-700 mb-6">
                      {t('nockchain_desc')}
                    </p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✅</span>
                        {t('nockchain_feature_1')}
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✅</span>
                        {t('nockchain_feature_2')}
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✅</span>
                        {t('nockchain_feature_3')}
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✅</span>
                        {t('nockchain_feature_4')}
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">{t('why_mine_nockchain')}</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>{t('mine_reason_1')}</li>
                      <li>{t('mine_reason_2')}</li>
                      <li>{t('mine_reason_3')}</li>
                      <li>{t('mine_reason_4')}</li>
                      <li>{t('mine_reason_5')}</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
                  <h3 className="text-xl font-bold mb-3 text-amber-800">{t('important_note')}</h3>
                  <p className="text-amber-700">
                    {t('security_warning')}
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'requirements' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">{t('vps_requirements')}</h2>
                
                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('resource')}</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('minimum')}</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('recommended')}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{t('operating_system')}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700">Ubuntu 20.04+ (64-bit)</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700">Ubuntu 22.04+ LTS</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{t('cpu')}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700">8 vCPUs</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700">16+ vCPUs</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{t('memory')}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700">32 GB</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700">64+ GB</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{t('storage')}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700">200 GB SSD</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700">500+ GB NVMe SSD</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{t('network')}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700">Public IPv4 required</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700">1Gbps+ bandwidth</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 text-blue-800">{t('what_script_installs')}</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li>{t('install_feature_1')}</li>
                      <li>{t('install_feature_2')}</li>
                      <li>{t('install_feature_3')}</li>
                      <li>{t('install_feature_4')}</li>
                      <li>{t('install_feature_5')}</li>
                      <li>{t('install_feature_6')}</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 text-green-800">{t('memory_usage_64gb')}</h3>
                    <ul className="space-y-2 text-green-700">
                      <li>{t('memory_main_node')}</li>
                      <li>{t('memory_mining_nodes')}</li>
                      <li>{t('memory_system')}</li>
                      <li>{t('memory_total')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'basic-setup' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">{t('basic_setup_title')}</h2>
                
                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-3 text-blue-800">{t('v1_includes')}</h3>
                  <p className="text-blue-700 mb-4">
                    {t('v1_description')}
                  </p>
                  <ul className="space-y-2 text-blue-700">
                    <li>✅ {t('auto_install_1')}</li>
                    <li>✅ {t('auto_install_2')}</li>
                    <li>✅ {t('auto_install_3')}</li>
                    <li>✅ {t('install_feature_5')}</li>
                    <li>❌ No automated wallet generation</li>
                    <li>❌ No cluster mining setup</li>
                    <li>❌ Manual node management required</li>
                  </ul>
                </div>

                <div className="bg-gray-900 text-green-400 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-bold mb-3 text-white">{t('one_command_installation')}</h3>
                  <code className="block bg-gray-800 p-4 rounded text-green-300 overflow-x-auto">
                    bash &lt;(curl -s https://raw.githubusercontent.com/wenqingyu/nockchain-mining-script/main/setup-nockchain.sh)
                  </code>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-lg font-bold mb-2">{t('setup_step_1')}</h4>
                    <p className="text-gray-700">
                      {t('setup_step_1_desc')}
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-lg font-bold mb-2">{t('setup_step_2')}</h4>
                    <p className="text-gray-700 mb-3">
                      {t('setup_step_2_desc')}
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>{t('manual_config_1')}</li>
                      <li>{t('manual_config_2')}</li>
                      <li>{t('manual_config_3')}</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-lg font-bold mb-2">{t('setup_step_3')}</h4>
                    <p className="text-gray-700">
                      {t('setup_step_3_desc')}
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
                  <h3 className="text-lg font-bold mb-2 text-amber-800">{t('best_for_v1')}</h3>
                  <p className="text-amber-700">
                    {t('v1_best_for')}
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'advanced-setup' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">{t('advanced_setup_title')}</h2>
                
                <div className="bg-green-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-3 text-green-800">{t('v2_includes')}</h3>
                  <p className="text-green-700 mb-4">
                    {t('v2_description')}
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
                  <h3 className="text-lg font-bold mb-3 text-white">{t('one_command_installation')}</h3>
                  <code className="block bg-gray-800 p-4 rounded text-green-300 overflow-x-auto">
                    bash &lt;(curl -s https://raw.githubusercontent.com/wenqingyu/nockchain-mining-script/v2/setup-nockchain.sh)
                  </code>
                </div>

                <div className="space-y-8">
                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="text-xl font-bold mb-3">{t('v2_step_1')}</h4>
                    <p className="text-gray-700 mb-3">
                      {t('v2_step_1_desc')}
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>{t('auto_install_1')}</li>
                      <li>{t('auto_install_2')}</li>
                      <li>{t('auto_install_3')}</li>
                      <li>{t('auto_install_4')}</li>
                      <li>{t('auto_install_5')}</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="text-xl font-bold mb-3">{t('v2_step_2')}</h4>
                    <div className="bg-gray-100 p-4 rounded-lg mb-3">
                      <code className="text-gray-800">
                        cd ~/nockchain<br/>
                        nockchain-wallet keygen
                      </code>
                    </div>
                    <p className="text-gray-700">
                      {t('v2_step_2_desc')}
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="text-xl font-bold mb-3">{t('v2_step_3')}</h4>
                    <div className="bg-gray-100 p-4 rounded-lg mb-3">
                      <code className="text-gray-800">
                        cp env.template .env<br/>
                        nano .env
                      </code>
                    </div>
                    <p className="text-gray-700">
                      {t('v2_step_3_desc')}
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="text-xl font-bold mb-3">{t('v2_step_4')}</h4>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-bold mb-2 text-blue-800">{t('method_1_title')}</h5>
                        <div className="bg-white p-3 rounded border">
                          <code className="text-gray-800">make run-nockchain</code>
                        </div>
                        <p className="text-sm text-blue-700 mt-2">{t('method_1_desc')}</p>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h5 className="font-bold mb-2 text-green-800">{t('method_2_title')}</h5>
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
                        <p className="text-sm text-green-700 mt-2">{t('method_2_desc')}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="text-xl font-bold mb-3">{t('v2_step_5')}</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h6 className="font-bold mb-2">{t('pm2_commands')}</h6>
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
                        <h6 className="font-bold mb-2">{t('blockchain_monitoring')}</h6>
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
                  <h3 className="text-lg font-bold mb-2 text-green-800">{t('best_for_v2')}</h3>
                  <p className="text-green-700">
                    {t('v2_best_for')}
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'troubleshooting' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">{t('troubleshooting_title')}</h2>
                
                <div className="space-y-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-red-600">{t('common_issues')}</h3>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-400 pl-4">
                        <h4 className="font-bold mb-2">{t('issue_1_title')}</h4>
                        <p className="text-gray-700 mb-2">{t('issue_1_desc')}</p>
                        <div className="bg-gray-100 p-3 rounded">
                          <code className="text-gray-800">
                            lsb_release -a      # Check Ubuntu version<br/>
                            ping google.com     # Test connectivity
                          </code>
                        </div>
                      </div>

                      <div className="border-l-4 border-red-400 pl-4">
                        <h4 className="font-bold mb-2">{t('issue_2_title')}</h4>
                        <p className="text-gray-700 mb-2">{t('issue_2_desc')}</p>
                        <div className="bg-gray-100 p-3 rounded">
                          <code className="text-gray-800">
                            MAIN_NODE_MEMORY=8G     # Reduce if needed<br/>
                            MINER_NODE_MEMORY=6G    # Reduce if needed<br/>
                            MINER_COUNT=2           # Reduce miner count
                          </code>
                        </div>
                      </div>

                      <div className="border-l-4 border-red-400 pl-4">
                        <h4 className="font-bold mb-2">{t('issue_3_title')}</h4>
                        <p className="text-gray-700 mb-2">{t('issue_3_desc')}</p>
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
                    <h3 className="text-xl font-bold mb-3 text-blue-600">{t('performance_tips')}</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold mb-2">{t('optimization')}</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>{t('optimization_1')}</li>
                          <li>{t('optimization_2')}</li>
                          <li>{t('optimization_3')}</li>
                          <li>{t('optimization_4')}</li>
                          <li>{t('optimization_5')}</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">{t('monitoring')}</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>{t('monitoring_1')}</li>
                          <li>{t('monitoring_2')}</li>
                          <li>{t('monitoring_3')}</li>
                          <li>{t('monitoring_4')}</li>
                          <li>{t('monitoring_5')}</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-green-600">{t('useful_commands')}</h3>
                    
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
                    <h3 className="text-xl font-bold mb-3 text-blue-800">{t('get_help')}</h3>
                    <p className="text-blue-700 mb-4">
                      {t('get_help_desc')}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a 
                        href="https://github.com/wenqingyu/nockchain-mining-script/issues"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                      >
                        {t('github_issues')}
                      </a>
                      <a 
                        href="https://nockchain.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                      >
                        🌐 {t('official_site')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">{t('ready_to_start')}</h2>
            <p className="text-lg mb-6">
              {t('ready_desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://github.com/wenqingyu/nockchain-mining-script/tree/v2"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                {t('start_advanced')}
              </a>
              <Link 
                href="/"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors"
              >
                {t('view_network_stats')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 