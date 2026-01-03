'use client';

import React, { useState } from 'react';
import { 
  BarChart3, 
  Network, 
  Brain, 
  GitBranch, 
  Rocket,
  TrendingUp,
  Clock,
  DollarSign,
  Target,
  AlertCircle
} from 'lucide-react';
import OverviewTab from './tabs/OverviewTab';
import ArchitectureTab from './tabs/ArchitectureTab';
import AIModelsTab from './tabs/AIModelsTab';
import WorkflowTab from './tabs/WorkflowTab';
import ImplementationTab from './tabs/ImplementationTab';

const tabs = [
  { id: 'overview', name: 'Overview', icon: BarChart3, description: 'Live KPIs & Performance Metrics' },
  { id: 'architecture', name: 'Architecture', icon: Network, description: '4-Layer Technical Stack' },
  { id: 'ai-models', name: 'AI Models', icon: Brain, description: '4 Specialized ML Models' },
  { id: 'workflow', name: 'Workflow', icon: GitBranch, description: 'Automated Process Flow' },
  { id: 'implementation', name: 'Implementation', icon: Rocket, description: '18-Month Roadmap & ROI' },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab />;
      case 'architecture':
        return <ArchitectureTab />;
      case 'ai-models':
        return <AIModelsTab />;
      case 'workflow':
        return <WorkflowTab />;
      case 'implementation':
        return <ImplementationTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-fedex-purple">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-fedex-purple to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  FedEx DCA Management Platform
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  AI-Powered Debt Collection Agency Management System
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-gray-600">System Status</div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-sm font-semibold text-green-600">Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Stats Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Recovery Rate</p>
                <p className="text-2xl font-bold text-gray-900">78%</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +16% improvement
                </p>
              </div>
              <Target className="w-10 h-10 text-green-500 opacity-20" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Collection Time</p>
                <p className="text-2xl font-bold text-gray-900">42 days</p>
                <p className="text-xs text-blue-600 flex items-center mt-1">
                  <Clock className="w-3 h-3 mr-1" />
                  -38% reduction
                </p>
              </div>
              <Clock className="w-10 h-10 text-blue-500 opacity-20" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Outstanding Debt</p>
                <p className="text-2xl font-bold text-gray-900">$8.7M</p>
                <p className="text-xs text-purple-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  -42% reduction
                </p>
              </div>
              <DollarSign className="w-10 h-10 text-purple-500 opacity-20" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Year 1 ROI</p>
                <p className="text-2xl font-bold text-gray-900">238%</p>
                <p className="text-xs text-orange-600 flex items-center mt-1">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  3.5mo payback
                </p>
              </div>
              <Rocket className="w-10 h-10 text-orange-500 opacity-20" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex overflow-x-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 min-w-[180px] px-6 py-4 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-fedex-purple to-purple-700 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                      <span>{tab.name}</span>
                    </div>
                    <div className={`text-xs mt-1 ${isActive ? 'text-purple-100' : 'text-gray-400'}`}>
                      {tab.description}
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {renderTabContent()}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-8 mt-8">
        <div className="text-center text-sm text-gray-600">
          <p>© 2026 FedEx Corporation. AI-Powered DCA Management Platform v1.0</p>
          <p className="mt-1">Built with React, Next.js, TensorFlow, and Azure ML</p>
        </div>
      </footer>
    </div>
  );
}
