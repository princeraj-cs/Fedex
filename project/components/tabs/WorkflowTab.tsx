'use client';

import React from 'react';
import { ArrowRight, Clock, CheckCircle, AlertTriangle, Mail, Bot, Shield } from 'lucide-react';

const workflowSteps = [
  {
    id: 1,
    title: 'Case Intake & Data Collection',
    icon: Mail,
    color: 'bg-blue-500',
    duration: '5 min',
    automation: '95%',
    description: 'Automated extraction from ERP systems and email',
    process: [
      'RPA bots monitor ERP for overdue invoices',
      'Automatic data extraction and validation',
      'Customer profile enrichment from CRM',
      'Document scanning and OCR processing',
      'Quality checks and data normalization',
    ],
    sla: '< 10 minutes from invoice due date',
  },
  {
    id: 2,
    title: 'AI Analysis & Prediction',
    icon: Bot,
    color: 'bg-purple-500',
    duration: '2 min',
    automation: '100%',
    description: 'ML models predict recovery probability and detect fraud',
    process: [
      'Recovery Predictor scores likelihood (0-100%)',
      'Fraud Detection scans for anomalies',
      'Smart Prioritization calculates urgency',
      'Historical pattern analysis',
      'Risk assessment and categorization',
    ],
    sla: '< 5 minutes processing time',
  },
  {
    id: 3,
    title: 'DCA Assignment & Matching',
    icon: Shield,
    color: 'bg-green-500',
    duration: '3 min',
    automation: '100%',
    description: 'Optimal DCA selection based on performance data',
    process: [
      'DCA Matcher evaluates all agencies',
      'Performance-based scoring algorithm',
      'Workload balancing and capacity check',
      'Automatic assignment to top DCA',
      'Notification sent to DCA portal',
    ],
    sla: '< 15 minutes total case routing',
  },
  {
    id: 4,
    title: 'Active Collection Phase',
    icon: Clock,
    color: 'bg-orange-500',
    duration: '30-60 days',
    automation: '60%',
    description: 'DCAs work cases with real-time monitoring',
    process: [
      'DCA receives case in secure portal',
      'Automated communication templates',
      'Real-time status updates to FedEx',
      'Sentiment analysis on communications',
      'Escalation triggers for SLA breaches',
    ],
    sla: 'Based on priority: 7-90 days',
  },
  {
    id: 5,
    title: 'SLA Monitoring & Escalation',
    icon: AlertTriangle,
    color: 'bg-red-500',
    duration: 'Continuous',
    automation: '100%',
    description: 'Automated enforcement of service level agreements',
    process: [
      'Real-time SLA compliance tracking',
      'Auto-escalation at 80% of deadline',
      'Performance penalty calculations',
      'Manager notifications for critical cases',
      'Automatic case reassignment if needed',
    ],
    sla: 'Escalation at 80% of SLA deadline',
  },
  {
    id: 6,
    title: 'Recovery & Closure',
    icon: CheckCircle,
    color: 'bg-green-600',
    duration: '10 min',
    automation: '90%',
    description: 'Payment processing and case completion',
    process: [
      'Payment verification and posting',
      'Automatic case closure workflow',
      'Blockchain audit trail creation',
      'Performance metrics calculation',
      'Model feedback for continuous learning',
    ],
    sla: '< 1 hour from payment receipt',
  },
];

const slaMatrix = [
  { priority: 'Critical', amount: '>$100K', sla: '7 days', escalation: '5 days' },
  { priority: 'High', amount: '$50K-$100K', sla: '14 days', escalation: '11 days' },
  { priority: 'Medium', amount: '$10K-$50K', sla: '30 days', escalation: '24 days' },
  { priority: 'Low', amount: '<$10K', sla: '90 days', escalation: '72 days' },
];

export default function WorkflowTab() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-900 to-blue-900 rounded-2xl p-8 text-white shadow-2xl">
        <h2 className="text-3xl font-bold mb-2">End-to-End Automated Workflow</h2>
        <p className="text-teal-100 text-lg mb-6">
          From case intake to recovery - fully automated with intelligent decision-making
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="text-sm opacity-90">Total Process Time</div>
            <div className="text-2xl font-bold mt-1">42 days avg</div>
            <div className="text-xs text-teal-200 mt-1">-38% vs manual process</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="text-sm opacity-90">Automation Rate</div>
            <div className="text-2xl font-bold mt-1">85%</div>
            <div className="text-xs text-teal-200 mt-1">Only 15% requires human intervention</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="text-sm opacity-90">SLA Compliance</div>
            <div className="text-2xl font-bold mt-1">96%</div>
            <div className="text-xs text-teal-200 mt-1">Up from 73% baseline</div>
          </div>
        </div>
      </div>

      {/* Workflow Steps */}
      <div className="space-y-4">
        {workflowSteps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={step.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Step Header */}
              <div className={`${step.color} p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl font-bold">Step {step.id}</span>
                        <span className="text-xl font-semibold">{step.title}</span>
                      </div>
                      <p className="text-white/90 mt-1">{step.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 mb-2">
                      <div className="text-xs opacity-90">Duration</div>
                      <div className="text-lg font-bold">{step.duration}</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
                      <div className="text-xs opacity-90">Automation</div>
                      <div className="text-lg font-bold">{step.automation}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Process Details */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                      Process Steps
                    </h4>
                    <div className="space-y-2">
                      {step.process.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-blue-600">{itemIdx + 1}</span>
                          </div>
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* SLA Information */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-orange-600" />
                      SLA Requirements
                    </h4>
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-xl p-6">
                      <div className="text-2xl font-bold text-gray-900 mb-2">{step.sla}</div>
                      <div className="text-sm text-gray-600 mb-4">Maximum time allowed for this step</div>
                      
                      <div className="space-y-3 mt-4">
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <span className="text-sm text-gray-600">Auto-monitoring</span>
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <span className="text-sm text-gray-600">Escalation triggers</span>
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <span className="text-sm text-gray-600">Manager alerts</span>
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow to Next Step */}
              {idx < workflowSteps.length - 1 && (
                <div className="flex justify-center py-4">
                  <ArrowRight className="w-8 h-8 text-gray-400" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* SLA Matrix */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <AlertTriangle className="w-6 h-6 mr-2 text-orange-600" />
          SLA Matrix by Priority Level
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-fedex-purple to-purple-700 text-white">
                <th className="px-6 py-4 text-left font-semibold">Priority Level</th>
                <th className="px-6 py-4 text-left font-semibold">Debt Amount</th>
                <th className="px-6 py-4 text-left font-semibold">SLA Deadline</th>
                <th className="px-6 py-4 text-left font-semibold">Auto-Escalation</th>
              </tr>
            </thead>
            <tbody>
              {slaMatrix.map((item, idx) => (
                <tr key={idx} className={`border-b ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <td className="px-6 py-4">
                    <span className={`font-bold ${
                      item.priority === 'Critical' ? 'text-red-600' :
                      item.priority === 'High' ? 'text-orange-600' :
                      item.priority === 'Medium' ? 'text-yellow-600' :
                      'text-green-600'
                    }`}>
                      {item.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{item.amount}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">{item.sla}</td>
                  <td className="px-6 py-4 text-gray-700">{item.escalation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-200">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Workflow Automation Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
            <Bot className="w-6 h-6 text-purple-600 mt-1" />
            <div>
              <div className="font-semibold text-gray-900">RPA Bots for Legacy Systems</div>
              <div className="text-sm text-gray-600 mt-1">Automated data extraction from Excel and ERP systems without API integration</div>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
            <Shield className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <div className="font-semibold text-gray-900">Blockchain Audit Trail</div>
              <div className="text-sm text-gray-600 mt-1">Immutable record of all actions, decisions, and communications for compliance</div>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
            <Mail className="w-6 h-6 text-green-600 mt-1" />
            <div>
              <div className="font-semibold text-gray-900">Sentiment Analysis</div>
              <div className="text-sm text-gray-600 mt-1">Real-time analysis of customer communications to detect escalation needs</div>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
            <Clock className="w-6 h-6 text-orange-600 mt-1" />
            <div>
              <div className="font-semibold text-gray-900">Intelligent Escalation</div>
              <div className="text-sm text-gray-600 mt-1">Automatic escalation at 80% of SLA with manager notifications and case reassignment</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
