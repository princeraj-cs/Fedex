'use client';

import React from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, DollarSign, Clock, Target, AlertTriangle, CheckCircle } from 'lucide-react';

const recoveryData = [
  { month: 'Jan', baseline: 62, current: 72, predicted: 75 },
  { month: 'Feb', baseline: 61, current: 74, predicted: 76 },
  { month: 'Mar', baseline: 63, current: 76, predicted: 77 },
  { month: 'Apr', baseline: 62, current: 77, predicted: 78 },
  { month: 'May', baseline: 61, current: 78, predicted: 79 },
  { month: 'Jun', baseline: 62, current: 78, predicted: 80 },
];

const dcaPerformanceData = [
  { name: 'Stellar Collections', recovery: 85, cases: 450, avgTime: 38 },
  { name: 'Prime Recovery', recovery: 82, cases: 380, avgTime: 41 },
  { name: 'Swift Debt Solutions', recovery: 78, cases: 520, avgTime: 45 },
  { name: 'Apex Financial', recovery: 75, cases: 290, avgTime: 48 },
  { name: 'Global Recovery Inc', recovery: 72, cases: 410, avgTime: 52 },
];

const caseDistribution = [
  { name: 'Active', value: 1250, color: '#4D148C' },
  { name: 'Recovered', value: 980, color: '#10B981' },
  { name: 'Pending Review', value: 340, color: '#F59E0B' },
  { name: 'Escalated', value: 120, color: '#EF4444' },
];

const aiPredictions = [
  { category: 'High Recovery Probability', count: 450, amount: '$2.3M', color: 'green' },
  { category: 'Medium Recovery Probability', count: 680, amount: '$3.8M', color: 'yellow' },
  { category: 'Low Recovery Probability', count: 340, amount: '$1.9M', color: 'red' },
  { category: 'Requires Investigation', count: 220, amount: '$1.7M', color: 'orange' },
];

export default function OverviewTab() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-fedex-purple to-purple-700 rounded-2xl p-8 text-white shadow-2xl">
        <h2 className="text-3xl font-bold mb-2">Live Performance Dashboard</h2>
        <p className="text-purple-100 text-lg">
          Real-time insights powered by AI/ML models with predictive analytics
        </p>
        <div className="mt-6 grid grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center space-x-3">
              <Target className="w-8 h-8" />
              <div>
                <div className="text-sm opacity-90">Active Cases</div>
                <div className="text-2xl font-bold">2,690</div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center space-x-3">
              <Users className="w-8 h-8" />
              <div>
                <div className="text-sm opacity-90">Active DCAs</div>
                <div className="text-2xl font-bold">12</div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center space-x-3">
              <DollarSign className="w-8 h-8" />
              <div>
                <div className="text-sm opacity-90">Total Outstanding</div>
                <div className="text-2xl font-bold">$8.7M</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recovery Rate Trends */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Recovery Rate Improvement</h3>
            <p className="text-sm text-gray-600 mt-1">Baseline vs Current vs AI Predictions</p>
          </div>
          <div className="flex items-center space-x-2 text-green-600 bg-green-50 px-4 py-2 rounded-lg">
            <TrendingUp className="w-5 h-5" />
            <span className="font-semibold">+16% Improvement</span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={recoveryData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
            />
            <Legend />
            <Line type="monotone" dataKey="baseline" stroke="#9ca3af" strokeWidth={2} name="Baseline (62%)" />
            <Line type="monotone" dataKey="current" stroke="#4D148C" strokeWidth={3} name="Current Performance" />
            <Line type="monotone" dataKey="predicted" stroke="#10B981" strokeWidth={2} strokeDasharray="5 5" name="AI Prediction" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* DCA Performance */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Top Performing DCAs</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dcaPerformanceData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis type="number" stroke="#6b7280" />
              <YAxis dataKey="name" type="category" width={150} stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
              <Bar dataKey="recovery" fill="#4D148C" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Case Distribution */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Case Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={caseDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {caseDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Predictions Grid */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900">AI Recovery Predictions</h3>
            <p className="text-sm text-gray-600 mt-1">Machine learning classification for 1,690 active cases</p>
          </div>
          <div className="flex items-center space-x-2 text-blue-600 bg-blue-50 px-4 py-2 rounded-lg">
            <CheckCircle className="w-5 h-5" />
            <span className="font-semibold">85% Accuracy</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {aiPredictions.map((pred, idx) => (
            <div 
              key={idx}
              className={`border-l-4 p-4 rounded-lg ${
                pred.color === 'green' ? 'border-green-500 bg-green-50' :
                pred.color === 'yellow' ? 'border-yellow-500 bg-yellow-50' :
                pred.color === 'red' ? 'border-red-500 bg-red-50' :
                'border-orange-500 bg-orange-50'
              }`}
            >
              <div className="text-sm font-medium text-gray-600 mb-2">{pred.category}</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{pred.count}</div>
              <div className="text-sm text-gray-600">Total: {pred.amount}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Real-time Alerts */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Real-time System Alerts</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <div className="flex-1">
              <div className="font-semibold text-gray-900">High-value recovery completed</div>
              <div className="text-sm text-gray-600">Stellar Collections recovered $127K from ABC Corp - 2 min ago</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg">
            <AlertTriangle className="w-6 h-6 text-yellow-600" />
            <div className="flex-1">
              <div className="font-semibold text-gray-900">SLA approaching deadline</div>
              <div className="text-sm text-gray-600">Case #45892 with Prime Recovery - Due in 4 hours</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            <div className="flex-1">
              <div className="font-semibold text-gray-900">AI model updated</div>
              <div className="text-sm text-gray-600">Recovery Predictor retrained with new data - Accuracy: 87%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
