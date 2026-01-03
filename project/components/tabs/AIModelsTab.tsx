'use client';

import React, { useState } from 'react';
import { Brain, Target, Users, Shield, Activity, CheckCircle, TrendingUp, AlertCircle } from 'lucide-react';

const models = [
  {
    id: 1,
    name: 'Recovery Predictor',
    icon: Target,
    color: 'from-blue-500 to-blue-600',
    accuracy: '80-95%',
    algorithm: 'XGBoost (Gradient Boosting)',
    description: 'Predicts likelihood of successful debt recovery based on historical patterns',
    inputs: [
      'Outstanding amount and age',
      'Customer payment history',
      'Industry and credit score',
      'Previous communication attempts',
      'Economic indicators',
    ],
    outputs: [
      'Recovery probability score (0-100%)',
      'Predicted recovery amount',
      'Recommended collection strategy',
      'Optimal contact timing',
    ],
    logic: `
1. Feature Engineering:
   - Extract 50+ features from case data
   - Calculate debt age, customer lifetime value
   - Aggregate historical payment patterns

2. Model Training:
   - Train on 100K+ historical cases
   - Use cross-validation (5-fold)
   - Optimize for F1-score

3. Prediction Pipeline:
   - Real-time scoring on new cases
   - Confidence intervals calculated
   - Threshold: >70% = High probability

4. Continuous Learning:
   - Weekly model retraining
   - A/B testing for improvements
   - Performance monitoring
    `,
    metrics: {
      precision: '87%',
      recall: '84%',
      f1Score: '85.5%',
      auc: '0.92',
    }
  },
  {
    id: 2,
    name: 'Smart Prioritization Engine',
    icon: Activity,
    color: 'from-purple-500 to-purple-600',
    accuracy: '92%',
    algorithm: 'Multi-Factor Scoring Algorithm',
    description: 'Intelligently prioritizes cases based on urgency, value, and recovery likelihood',
    inputs: [
      'Recovery prediction score',
      'Outstanding amount',
      'Days past due',
      'Customer risk profile',
      'Resource availability',
    ],
    outputs: [
      'Priority score (1-10)',
      'Urgency level (Critical/High/Medium/Low)',
      'Recommended action',
      'Queue position',
    ],
    logic: `
1. Scoring Components:
   - Value Score = Amount × Recovery Probability
   - Urgency Score = f(Days Overdue, SLA)
   - Risk Score = Credit Risk × Complexity

2. Weighted Calculation:
   Priority = 0.4×Value + 0.35×Urgency + 0.25×Risk

3. Dynamic Adjustments:
   - SLA deadlines boost priority by 30%
   - VIP customers get +2 priority boost
   - Fraud flags trigger immediate escalation

4. Queue Management:
   - Auto-rebalancing every 2 hours
   - Load balancing across DCAs
   - Prevent case aging
    `,
    metrics: {
      precision: '92%',
      recall: '89%',
      f1Score: '90.5%',
      avgResponseTime: '2.3 min',
    }
  },
  {
    id: 3,
    name: 'DCA Matcher',
    icon: Users,
    color: 'from-green-500 to-green-600',
    accuracy: '88%',
    algorithm: 'Collaborative Filtering + Performance-Based Matching',
    description: 'Assigns cases to the optimal DCA based on historical performance and specialization',
    inputs: [
      'DCA historical performance metrics',
      'Case characteristics (amount, industry, geography)',
      'DCA current workload',
      'Specialization areas',
      'SLA compliance rates',
    ],
    outputs: [
      'Top 3 recommended DCAs',
      'Match confidence score',
      'Expected recovery rate',
      'Estimated completion time',
    ],
    logic: `
1. Performance Profiling:
   - Calculate DCA success rates by:
     * Debt amount range
     * Industry vertical
     * Geographic region
   
2. Matching Algorithm:
   - Find DCAs with highest success in similar cases
   - Factor in current capacity (max 500 active cases)
   - Consider SLA compliance history

3. Assignment Rules:
   - High-value cases (>$100K) → Top 3 DCAs only
   - VIP customers → DCAs with 95%+ satisfaction
   - Fraud-flagged → Specialized investigation DCAs

4. Load Balancing:
   - Prevent overloading (max 80% capacity)
   - Round-robin for equal-performing DCAs
   - Automatic reassignment if SLA at risk
    `,
    metrics: {
      precision: '88%',
      recall: '85%',
      f1Score: '86.5%',
      avgMatchTime: '1.2 sec',
    }
  },
  {
    id: 4,
    name: 'Fraud Detection System',
    icon: Shield,
    color: 'from-red-500 to-red-600',
    accuracy: '94%',
    algorithm: 'Isolation Forest (Anomaly Detection)',
    description: 'Identifies fraudulent claims and suspicious patterns in real-time',
    inputs: [
      'Transaction patterns',
      'Communication behavior',
      'Document authenticity',
      'Payment method anomalies',
      'Identity verification data',
    ],
    outputs: [
      'Fraud risk score (0-100)',
      'Anomaly flags',
      'Recommended investigation actions',
      'Confidence level',
    ],
    logic: `
1. Anomaly Detection:
   - Train Isolation Forest on normal cases
   - Identify outliers in high-dimensional space
   - Features: 80+ behavioral indicators

2. Rule-Based Checks:
   - Duplicate invoice submissions
   - Mismatched payment details
   - Suspicious timing patterns
   - Document tampering indicators

3. Scoring System:
   - Anomaly score: 0-100
   - >75 = High risk (auto-flag)
   - 50-75 = Medium risk (review)
   - <50 = Low risk (proceed)

4. Response Actions:
   - High risk → Immediate hold + investigation
   - Medium risk → Secondary verification
   - Pattern learning from confirmed fraud
   - Weekly model updates
    `,
    metrics: {
      precision: '94%',
      recall: '91%',
      f1Score: '92.5%',
      falsePositiveRate: '2.1%',
    }
  },
];

export default function AIModelsTab() {
  const [selectedModel, setSelectedModel] = useState(models[0]);

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-2xl p-8 text-white shadow-2xl">
        <div className="flex items-center space-x-4 mb-4">
          <Brain className="w-12 h-12" />
          <div>
            <h2 className="text-3xl font-bold">4 Specialized AI/ML Models</h2>
            <p className="text-indigo-200 text-lg mt-1">
              Advanced machine learning for intelligent automation
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-6">
          {models.map((model) => {
            const Icon = model.icon;
            return (
              <button
                key={model.id}
                onClick={() => setSelectedModel(model)}
                className={`p-4 rounded-xl transition-all ${
                  selectedModel.id === model.id
                    ? 'bg-white text-purple-900 shadow-xl scale-105'
                    : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
                }`}
              >
                <Icon className={`w-8 h-8 mx-auto mb-2 ${
                  selectedModel.id === model.id ? 'text-purple-600' : 'text-white'
                }`} />
                <div className={`text-sm font-semibold ${
                  selectedModel.id === model.id ? 'text-purple-900' : 'text-white'
                }`}>
                  {model.name}
                </div>
                <div className={`text-xs mt-1 ${
                  selectedModel.id === model.id ? 'text-purple-600' : 'text-indigo-200'
                }`}>
                  {model.accuracy}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Model Details */}
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Model Header */}
        <div className={`bg-gradient-to-r ${selectedModel.color} p-8 text-white`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {React.createElement(selectedModel.icon, { className: 'w-12 h-12' })}
              <div>
                <h3 className="text-3xl font-bold">{selectedModel.name}</h3>
                <p className="text-white/90 text-lg mt-1">{selectedModel.description}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-90">Accuracy</div>
              <div className="text-4xl font-bold">{selectedModel.accuracy}</div>
              <div className="text-sm opacity-90 mt-1">{selectedModel.algorithm}</div>
            </div>
          </div>
        </div>

        {/* Model Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Inputs */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-blue-600" />
                Input Features
              </h4>
              <div className="space-y-2">
                {selectedModel.inputs.map((input, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span className="text-gray-700">{input}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outputs */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Target className="w-6 h-6 mr-2 text-green-600" />
                Output Predictions
              </h4>
              <div className="space-y-2">
                {selectedModel.outputs.map((output, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">{output}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Model Logic */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 mb-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Brain className="w-6 h-6 mr-2 text-purple-600" />
              Model Logic & Pipeline
            </h4>
            <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono bg-white p-6 rounded-xl border-2 border-gray-200">
{selectedModel.logic}
            </pre>
          </div>

          {/* Performance Metrics */}
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Activity className="w-6 h-6 mr-2 text-orange-600" />
              Performance Metrics
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(selectedModel.metrics).map(([key, value], idx) => (
                <div key={idx} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 border-2 border-orange-200">
                  <div className="text-sm text-gray-600 capitalize mb-1">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Model Training & Deployment */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Training & Deployment Pipeline</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border-2 border-blue-200 rounded-xl p-6 bg-blue-50">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
            </div>
            <h4 className="font-bold text-gray-900 text-center mb-2">Data Collection</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 100K+ historical cases</li>
              <li>• Real-time data streaming</li>
              <li>• Feature engineering</li>
              <li>• Data validation & cleaning</li>
            </ul>
          </div>

          <div className="border-2 border-purple-200 rounded-xl p-6 bg-purple-50">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
            </div>
            <h4 className="font-bold text-gray-900 text-center mb-2">Model Training</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Azure ML training pipeline</li>
              <li>• Hyperparameter tuning</li>
              <li>• Cross-validation (5-fold)</li>
              <li>• Weekly retraining</li>
            </ul>
          </div>

          <div className="border-2 border-green-200 rounded-xl p-6 bg-green-50">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
            </div>
            <h4 className="font-bold text-gray-900 text-center mb-2">Deployment</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Real-time API endpoints</li>
              <li>• A/B testing framework</li>
              <li>• Performance monitoring</li>
              <li>• Auto-rollback on errors</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Impact Summary */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border-2 border-green-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <TrendingUp className="w-6 h-6 mr-2 text-green-600" />
          AI Models Impact on Business Outcomes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
            <div>
              <div className="font-semibold text-gray-900">+16% Recovery Rate Improvement</div>
              <div className="text-sm text-gray-600">From 62% to 78% through intelligent prediction and prioritization</div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <div className="font-semibold text-gray-900">-38% Reduction in Collection Time</div>
              <div className="text-sm text-gray-600">From 68 to 42 days via optimal DCA matching</div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-6 h-6 text-purple-600 mt-1" />
            <div>
              <div className="font-semibold text-gray-900">94% Fraud Detection Accuracy</div>
              <div className="text-sm text-gray-600">Saving $2.1M annually in fraudulent claims</div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-6 h-6 text-orange-600 mt-1" />
            <div>
              <div className="font-semibold text-gray-900">85% Reduction in Manual Work</div>
              <div className="text-sm text-gray-600">Automated decision-making and case routing</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
