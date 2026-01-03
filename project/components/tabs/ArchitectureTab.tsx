'use client';

import React from 'react';
import { Layers, Database, Cpu, Shield, Cloud, Code, Lock, Zap } from 'lucide-react';

const layers = [
  {
    name: 'Presentation Layer',
    icon: Code,
    color: 'from-blue-500 to-blue-600',
    description: 'User Interface & Experience',
    technologies: [
      { name: 'React 18', description: 'Component-based UI library' },
      { name: 'Next.js 14', description: 'Server-side rendering framework' },
      { name: 'Tailwind CSS', description: 'Utility-first styling' },
      { name: 'TypeScript', description: 'Type-safe development' },
    ],
    features: [
      'Responsive dashboard with real-time updates',
      'Role-based access control (RBAC)',
      'Interactive data visualizations',
      'Multi-device compatibility',
    ]
  },
  {
    name: 'Application Layer',
    icon: Cpu,
    color: 'from-purple-500 to-purple-600',
    description: 'Business Logic & APIs',
    technologies: [
      { name: 'Node.js', description: 'JavaScript runtime' },
      { name: 'Python FastAPI', description: 'High-performance API framework' },
      { name: 'Express.js', description: 'Web application framework' },
      { name: 'GraphQL', description: 'Query language for APIs' },
    ],
    features: [
      'RESTful APIs for data operations',
      'Microservices architecture',
      'Event-driven processing',
      'API gateway with rate limiting',
    ]
  },
  {
    name: 'AI/ML Layer',
    icon: Zap,
    color: 'from-orange-500 to-orange-600',
    description: 'Intelligence & Automation',
    technologies: [
      { name: 'TensorFlow 2.x', description: 'Deep learning framework' },
      { name: 'XGBoost', description: 'Gradient boosting library' },
      { name: 'Azure ML', description: 'Cloud-based ML platform' },
      { name: 'Scikit-learn', description: 'Machine learning library' },
    ],
    features: [
      'Recovery prediction models (85% accuracy)',
      'Smart case prioritization engine',
      'DCA performance matching algorithm',
      'Fraud detection with Isolation Forest',
    ]
  },
  {
    name: 'Data & Infrastructure Layer',
    icon: Database,
    color: 'from-green-500 to-green-600',
    description: 'Storage & Processing',
    technologies: [
      { name: 'PostgreSQL', description: 'Relational database' },
      { name: 'MongoDB', description: 'NoSQL document store' },
      { name: 'Redis', description: 'In-memory cache' },
      { name: 'Azure Blob Storage', description: 'Cloud object storage' },
    ],
    features: [
      'Scalable data warehouse',
      'Real-time data streaming',
      'Encrypted data at rest and in transit',
      'Automated backup and recovery',
    ]
  },
];

const integrations = [
  { name: 'Legacy ERP Systems', icon: Database, status: 'Connected' },
  { name: 'RPA Bots (UiPath)', icon: Cpu, status: 'Active' },
  { name: 'Blockchain Audit', icon: Shield, status: 'Enabled' },
  { name: 'Power Automate', icon: Zap, status: 'Running' },
  { name: 'Azure Cloud', icon: Cloud, status: 'Deployed' },
  { name: 'Multi-Factor Auth', icon: Lock, status: 'Enforced' },
];

export default function ArchitectureTab() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white shadow-2xl">
        <div className="flex items-center space-x-4 mb-4">
          <Layers className="w-12 h-12" />
          <div>
            <h2 className="text-3xl font-bold">4-Layer Technical Architecture</h2>
            <p className="text-slate-300 text-lg mt-1">
              Enterprise-grade, scalable, and secure infrastructure
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="text-sm opacity-90">Architecture Pattern</div>
            <div className="text-xl font-bold mt-1">Microservices</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="text-sm opacity-90">Deployment Model</div>
            <div className="text-xl font-bold mt-1">Cloud-Native</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="text-sm opacity-90">Scalability</div>
            <div className="text-xl font-bold mt-1">Auto-Scaling</div>
          </div>
        </div>
      </div>

      {/* Architecture Layers */}
      <div className="space-y-6">
        {layers.map((layer, idx) => {
          const Icon = layer.icon;
          return (
            <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className={`bg-gradient-to-r ${layer.color} p-6 text-white`}>
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{layer.name}</h3>
                    <p className="text-white/90 mt-1">{layer.description}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <Code className="w-5 h-5 mr-2 text-gray-600" />
                      Technologies
                    </h4>
                    <div className="space-y-3">
                      {layer.technologies.map((tech, techIdx) => (
                        <div key={techIdx} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <div>
                            <div className="font-semibold text-gray-900">{tech.name}</div>
                            <div className="text-sm text-gray-600">{tech.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-gray-600" />
                      Key Features
                    </h4>
                    <div className="space-y-3">
                      {layer.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <div className="text-gray-700">{feature}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* System Integrations */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">System Integrations & Security</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {integrations.map((integration, idx) => {
            const Icon = integration.icon;
            return (
              <div key={idx} className="border-2 border-gray-200 rounded-xl p-4 hover:border-fedex-purple transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <Icon className="w-8 h-8 text-fedex-purple" />
                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    {integration.status}
                  </span>
                </div>
                <div className="font-semibold text-gray-900">{integration.name}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Security Features */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border-2 border-orange-200">
        <div className="flex items-center space-x-3 mb-4">
          <Shield className="w-8 h-8 text-orange-600" />
          <h3 className="text-xl font-bold text-gray-900">Enterprise Security</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <Lock className="w-5 h-5 text-orange-600 mt-1" />
            <div>
              <div className="font-semibold text-gray-900">End-to-End Encryption</div>
              <div className="text-sm text-gray-600">AES-256 encryption for data at rest and TLS 1.3 in transit</div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Shield className="w-5 h-5 text-orange-600 mt-1" />
            <div>
              <div className="font-semibold text-gray-900">Blockchain Audit Trail</div>
              <div className="text-sm text-gray-600">Immutable records of all transactions and changes</div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Lock className="w-5 h-5 text-orange-600 mt-1" />
            <div>
              <div className="font-semibold text-gray-900">Multi-Factor Authentication</div>
              <div className="text-sm text-gray-600">Mandatory MFA for all user access</div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Shield className="w-5 h-5 text-orange-600 mt-1" />
            <div>
              <div className="font-semibold text-gray-900">Role-Based Access Control</div>
              <div className="text-sm text-gray-600">Granular permissions for different user roles</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
