'use client';

import React from 'react';
import { Rocket, Calendar, DollarSign, TrendingUp, CheckCircle, Clock, Target, Users, Package } from 'lucide-react';

const phases = [
  {
    phase: 'Phase 1: Foundation',
    duration: '0-6 months',
    color: 'from-blue-500 to-blue-600',
    icon: Package,
    investment: '$850K',
    deliverables: [
      'Core platform development (React, Node.js, FastAPI)',
      'Recovery Predictor ML model (XGBoost)',
      'Basic DCA portal with authentication',
      'Integration with primary ERP system',
      'PostgreSQL database setup',
      'User training and onboarding',
    ],
    milestones: [
      { month: 'M1-2', task: 'Requirements & architecture design' },
      { month: 'M3-4', task: 'Core platform & ML model development' },
      { month: 'M5', task: 'Integration testing & QA' },
      { month: 'M6', task: 'Pilot launch with 2 DCAs' },
    ],
    outcomes: [
      'Platform live with basic functionality',
      'AI predictions for 500 cases/day',
      '2 DCAs onboarded and trained',
    ],
  },
  {
    phase: 'Phase 2: Intelligence',
    duration: '6-12 months',
    color: 'from-purple-500 to-purple-600',
    icon: Target,
    investment: '$720K',
    deliverables: [
      'Smart Prioritization Engine deployment',
      'DCA Matcher algorithm implementation',
      'Fraud Detection System (Isolation Forest)',
      'RPA bot development for legacy systems',
      'Real-time dashboard & analytics',
      'Automated SLA monitoring',
    ],
    milestones: [
      { month: 'M7-8', task: 'Deploy 3 additional ML models' },
      { month: 'M9-10', task: 'RPA bot integration with 5 legacy systems' },
      { month: 'M11', task: 'Full dashboard & reporting suite' },
      { month: 'M12', task: 'Scale to all 12 DCAs' },
    ],
    outcomes: [
      'All 4 ML models operational',
      'Full automation of case routing',
      '12 DCAs on platform',
      'SLA compliance: 85%',
    ],
  },
  {
    phase: 'Phase 3: Scale & Optimize',
    duration: '12-18 months',
    color: 'from-green-500 to-green-600',
    icon: TrendingUp,
    investment: '$630K',
    deliverables: [
      'Blockchain audit trail implementation',
      'Advanced sentiment analysis on communications',
      'Mobile app for DCA field agents',
      'Azure ML deployment for auto-scaling',
      'Advanced analytics & predictive reporting',
      'International expansion readiness',
    ],
    milestones: [
      { month: 'M13-14', task: 'Blockchain integration & testing' },
      { month: 'M15', task: 'Mobile app launch' },
      { month: 'M16-17', task: 'Performance optimization & tuning' },
      { month: 'M18', task: 'Full production scale' },
    ],
    outcomes: [
      '3x volume capacity (handle 9,000 cases/day)',
      'Recovery rate: 78%',
      'Avg collection time: 42 days',
      '96% SLA compliance',
    ],
  },
];

const roiData = [
  {
    metric: 'Total Investment',
    year1: '$2,200K',
    year2: '$400K',
    year3: '$300K',
    description: 'Initial development + ongoing maintenance',
  },
  {
    metric: 'Additional Revenue (Recovery)',
    year1: '$3,840K',
    year2: '$4,800K',
    year3: '$5,280K',
    description: '+16% recovery rate improvement',
  },
  {
    metric: 'Cost Savings (Operational)',
    year1: '$1,580K',
    year2: '$2,100K',
    year3: '$2,400K',
    description: '85% reduction in manual work',
  },
  {
    metric: 'Fraud Prevention Savings',
    year1: '$2,100K',
    year2: '$2,300K',
    year3: '$2,500K',
    description: 'Detected fraudulent claims',
  },
  {
    metric: 'Net Benefit',
    year1: '$5,320K',
    year2: '$6,800K',
    year3: '$7,880K',
    description: 'Total revenue + savings - investment',
  },
  {
    metric: 'ROI',
    year1: '238%',
    year2: '1,600%',
    year3: '2,527%',
    description: 'Return on investment',
  },
];

const resources = [
  { role: 'Product Manager', count: 2, phase: 'All phases' },
  { role: 'Full-Stack Developers', count: 5, phase: 'Phase 1-2' },
  { role: 'ML Engineers', count: 3, phase: 'Phase 1-2' },
  { role: 'Data Scientists', count: 2, phase: 'Phase 1-3' },
  { role: 'DevOps Engineers', count: 2, phase: 'Phase 1-3' },
  { role: 'QA Engineers', count: 3, phase: 'All phases' },
  { role: 'UX/UI Designers', count: 2, phase: 'Phase 1-2' },
  { role: 'Change Management', count: 2, phase: 'All phases' },
];

export default function ImplementationTab() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-900 to-red-900 rounded-2xl p-8 text-white shadow-2xl">
        <div className="flex items-center space-x-4 mb-4">
          <Rocket className="w-12 h-12" />
          <div>
            <h2 className="text-3xl font-bold">18-Month Implementation Roadmap</h2>
            <p className="text-orange-100 text-lg mt-1">
              Phased approach with measurable milestones and 238% Year 1 ROI
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="text-sm opacity-90">Total Investment</div>
            <div className="text-2xl font-bold mt-1">$2.9M</div>
            <div className="text-xs text-orange-200 mt-1">Over 3 years</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="text-sm opacity-90">Payback Period</div>
            <div className="text-2xl font-bold mt-1">3.5 months</div>
            <div className="text-xs text-orange-200 mt-1">Break-even point</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="text-sm opacity-90">3-Year ROI</div>
            <div className="text-2xl font-bold mt-1">2,527%</div>
            <div className="text-xs text-orange-200 mt-1">Cumulative return</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="text-sm opacity-90">NPV (5 years)</div>
            <div className="text-2xl font-bold mt-1">$28.4M</div>
            <div className="text-xs text-orange-200 mt-1">Net present value</div>
          </div>
        </div>
      </div>

      {/* Implementation Phases */}
      <div className="space-y-6">
        {phases.map((phase, idx) => {
          const Icon = phase.icon;
          return (
            <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Phase Header */}
              <div className={`bg-gradient-to-r ${phase.color} p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{phase.phase}</h3>
                      <p className="text-white/90 mt-1">{phase.duration}</p>
                    </div>
                  </div>
                  <div className="text-right bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
                    <div className="text-sm opacity-90">Investment</div>
                    <div className="text-2xl font-bold">{phase.investment}</div>
                  </div>
                </div>
              </div>

              {/* Phase Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  {/* Deliverables */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                      <Package className="w-5 h-5 mr-2 text-blue-600" />
                      Key Deliverables
                    </h4>
                    <div className="space-y-2">
                      {phase.deliverables.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Milestones */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-purple-600" />
                      Timeline & Milestones
                    </h4>
                    <div className="space-y-2">
                      {phase.milestones.map((milestone, milestoneIdx) => (
                        <div key={milestoneIdx} className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                          <div className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded flex-shrink-0">
                            {milestone.month}
                          </div>
                          <span className="text-gray-700 text-sm">{milestone.task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Outcomes */}
                <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-green-600" />
                    Expected Outcomes
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {phase.outcomes.map((outcome, outcomeIdx) => (
                      <div key={outcomeIdx} className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{outcome}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ROI Analysis */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 flex items-center">
              <DollarSign className="w-6 h-6 mr-2 text-green-600" />
              3-Year ROI Analysis
            </h3>
            <p className="text-sm text-gray-600 mt-1">Detailed financial projections and business case</p>
          </div>
          <div className="bg-green-50 border-2 border-green-500 rounded-xl px-6 py-3">
            <div className="text-sm text-gray-600">Payback Period</div>
            <div className="text-3xl font-bold text-green-600">3.5 mo</div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-fedex-purple to-purple-700 text-white">
                <th className="px-6 py-4 text-left font-semibold">Metric</th>
                <th className="px-6 py-4 text-center font-semibold">Year 1</th>
                <th className="px-6 py-4 text-center font-semibold">Year 2</th>
                <th className="px-6 py-4 text-center font-semibold">Year 3</th>
                <th className="px-6 py-4 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              {roiData.map((row, idx) => (
                <tr key={idx} className={`border-b ${
                  idx === roiData.length - 1 ? 'bg-green-50 font-bold' :
                  idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                }`}>
                  <td className="px-6 py-4 text-gray-900">{row.metric}</td>
                  <td className={`px-6 py-4 text-center font-semibold ${
                    idx === roiData.length - 1 ? 'text-green-600 text-lg' : 'text-gray-900'
                  }`}>
                    {row.year1}
                  </td>
                  <td className={`px-6 py-4 text-center font-semibold ${
                    idx === roiData.length - 1 ? 'text-green-600 text-lg' : 'text-gray-900'
                  }`}>
                    {row.year2}
                  </td>
                  <td className={`px-6 py-4 text-center font-semibold ${
                    idx === roiData.length - 1 ? 'text-green-600 text-lg' : 'text-gray-900'
                  }`}>
                    {row.year3}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{row.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Resource Requirements */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <Users className="w-6 h-6 mr-2 text-purple-600" />
          Team & Resource Requirements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {resources.map((resource, idx) => (
            <div key={idx} className="border-2 border-purple-200 rounded-xl p-4 bg-purple-50">
              <div className="flex items-center justify-between mb-2">
                <Users className="w-6 h-6 text-purple-600" />
                <span className="text-2xl font-bold text-purple-600">{resource.count}</span>
              </div>
              <div className="font-semibold text-gray-900 mb-1">{resource.role}</div>
              <div className="text-xs text-gray-600 bg-white px-2 py-1 rounded">
                {resource.phase}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Metrics */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border-2 border-green-200">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <TrendingUp className="w-6 h-6 mr-2 text-green-600" />
          Key Success Metrics (18-Month Target)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-sm text-gray-600 mb-2">Recovery Rate</div>
            <div className="text-4xl font-bold text-green-600 mb-2">78%</div>
            <div className="text-sm text-gray-600">
              <span className="text-green-600 font-semibold">↑ 16%</span> from 62% baseline
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-sm text-gray-600 mb-2">Avg Collection Time</div>
            <div className="text-4xl font-bold text-blue-600 mb-2">42 days</div>
            <div className="text-sm text-gray-600">
              <span className="text-blue-600 font-semibold">↓ 38%</span> from 68 days baseline
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-sm text-gray-600 mb-2">Outstanding Debt</div>
            <div className="text-4xl font-bold text-purple-600 mb-2">$8.7M</div>
            <div className="text-sm text-gray-600">
              <span className="text-purple-600 font-semibold">↓ 42%</span> from $15M baseline
            </div>
          </div>
        </div>
      </div>

      {/* Risk Mitigation */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Risk Mitigation Strategy</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded-lg">
            <div className="font-semibold text-gray-900 mb-2">Technical Risk</div>
            <div className="text-sm text-gray-600">
              <strong>Mitigation:</strong> Phased rollout, extensive testing, fallback to manual process, daily monitoring
            </div>
          </div>
          <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded-lg">
            <div className="font-semibold text-gray-900 mb-2">Adoption Risk</div>
            <div className="text-sm text-gray-600">
              <strong>Mitigation:</strong> Comprehensive training, change management team, DCA incentive program, pilot phase
            </div>
          </div>
          <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-lg">
            <div className="font-semibold text-gray-900 mb-2">Data Quality Risk</div>
            <div className="text-sm text-gray-600">
              <strong>Mitigation:</strong> Data validation rules, RPA bots for extraction, automated quality checks, human review
            </div>
          </div>
          <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-lg">
            <div className="font-semibold text-gray-900 mb-2">Performance Risk</div>
            <div className="text-sm text-gray-600">
              <strong>Mitigation:</strong> Cloud auto-scaling, load testing, performance monitoring, capacity planning
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
