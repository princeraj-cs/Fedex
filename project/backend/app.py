from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random
from datetime import datetime, timedelta
from typing import List, Dict

app = FastAPI(title="FedEx DCA Management API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Simulated ML Models
class RecoveryPredictor:
    """XGBoost-based recovery prediction model"""
    
    @staticmethod
    def predict(case_data: Dict) -> Dict:
        # Simulate XGBoost prediction
        amount = case_data.get('amount', 10000)
        days_overdue = case_data.get('days_overdue', 30)
        customer_score = case_data.get('customer_score', 650)
        
        # Simple scoring logic (in production, this would be actual ML model)
        base_score = 50
        if customer_score > 700:
            base_score += 20
        if amount < 50000:
            base_score += 15
        if days_overdue < 60:
            base_score += 10
            
        recovery_probability = min(95, max(20, base_score + random.randint(-5, 5)))
        
        return {
            'recovery_probability': recovery_probability,
            'confidence': random.uniform(0.75, 0.95),
            'predicted_amount': amount * (recovery_probability / 100) * random.uniform(0.85, 1.0),
            'recommended_strategy': 'aggressive' if recovery_probability > 70 else 'moderate',
            'model': 'XGBoost v2.1',
            'accuracy': '85%'
        }

class SmartPrioritizer:
    """Multi-factor scoring algorithm for case prioritization"""
    
    @staticmethod
    def prioritize(case_data: Dict) -> Dict:
        amount = case_data.get('amount', 10000)
        days_overdue = case_data.get('days_overdue', 30)
        recovery_prob = case_data.get('recovery_probability', 50)
        
        # Calculate priority score
        value_score = (amount / 100000) * 40
        urgency_score = (days_overdue / 90) * 35
        recovery_score = (recovery_prob / 100) * 25
        
        priority_score = min(10, value_score + urgency_score + recovery_score)
        
        if priority_score >= 8:
            urgency = 'Critical'
        elif priority_score >= 6:
            urgency = 'High'
        elif priority_score >= 4:
            urgency = 'Medium'
        else:
            urgency = 'Low'
            
        return {
            'priority_score': round(priority_score, 2),
            'urgency_level': urgency,
            'queue_position': random.randint(1, 100),
            'recommended_action': 'Immediate contact' if priority_score >= 8 else 'Standard follow-up'
        }

class DCAMatcher:
    """Performance-based DCA matching algorithm"""
    
    @staticmethod
    def match(case_data: Dict) -> List[Dict]:
        dcas = [
            {'name': 'Stellar Collections', 'success_rate': 85, 'capacity': 75, 'specialization': 'high-value'},
            {'name': 'Prime Recovery', 'success_rate': 82, 'capacity': 60, 'specialization': 'corporate'},
            {'name': 'Swift Debt Solutions', 'success_rate': 78, 'capacity': 85, 'specialization': 'volume'},
            {'name': 'Apex Financial', 'success_rate': 75, 'capacity': 50, 'specialization': 'complex'},
            {'name': 'Global Recovery Inc', 'success_rate': 72, 'capacity': 70, 'specialization': 'international'}
        ]
        
        # Sort by success rate and capacity
        ranked_dcas = sorted(dcas, key=lambda x: (x['success_rate'], -x['capacity']), reverse=True)[:3]
        
        return [
            {
                'dca_name': dca['name'],
                'match_confidence': round(random.uniform(0.75, 0.95), 2),
                'expected_recovery_rate': dca['success_rate'],
                'estimated_days': random.randint(30, 60),
                'current_capacity': dca['capacity']
            }
            for dca in ranked_dcas
        ]

class FraudDetector:
    """Isolation Forest for fraud/anomaly detection"""
    
    @staticmethod
    def detect(case_data: Dict) -> Dict:
        # Simulate anomaly detection
        anomaly_score = random.uniform(0, 100)
        
        if anomaly_score > 75:
            risk_level = 'High'
            flags = ['Unusual transaction pattern', 'Document inconsistency']
        elif anomaly_score > 50:
            risk_level = 'Medium'
            flags = ['Payment method anomaly']
        else:
            risk_level = 'Low'
            flags = []
            
        return {
            'fraud_risk_score': round(anomaly_score, 2),
            'risk_level': risk_level,
            'anomaly_flags': flags,
            'recommended_action': 'Investigate immediately' if risk_level == 'High' else 'Proceed with caution' if risk_level == 'Medium' else 'Proceed normally',
            'confidence': random.uniform(0.85, 0.98),
            'model': 'Isolation Forest',
            'false_positive_rate': '2.1%'
        }

# API Endpoints
@app.get("/")
def root():
    return {
        "service": "FedEx DCA Management API",
        "version": "1.0.0",
        "status": "online",
        "models": {
            "recovery_predictor": "XGBoost v2.1",
            "smart_prioritizer": "Multi-factor v1.0",
            "dca_matcher": "Collaborative Filtering v1.0",
            "fraud_detector": "Isolation Forest v1.0"
        }
    }

@app.post("/api/predict-recovery")
def predict_recovery(case_data: Dict):
    """Predict recovery probability for a case"""
    return RecoveryPredictor.predict(case_data)

@app.post("/api/prioritize")
def prioritize_case(case_data: Dict):
    """Calculate priority score for a case"""
    return SmartPrioritizer.prioritize(case_data)

@app.post("/api/match-dca")
def match_dca(case_data: Dict):
    """Find optimal DCA for a case"""
    return DCAMatcher.match(case_data)

@app.post("/api/detect-fraud")
def detect_fraud(case_data: Dict):
    """Detect fraud/anomalies in a case"""
    return FraudDetector.detect(case_data)

@app.get("/api/dashboard/stats")
def get_dashboard_stats():
    """Get real-time dashboard statistics"""
    return {
        'active_cases': random.randint(2500, 2800),
        'active_dcas': 12,
        'total_outstanding': random.uniform(8.5, 9.0),
        'recovery_rate': random.uniform(76, 79),
        'avg_collection_time': random.randint(40, 44),
        'sla_compliance': random.uniform(94, 97),
        'timestamp': datetime.now().isoformat()
    }

@app.get("/api/cases/recent")
def get_recent_cases():
    """Get recent case activities"""
    cases = []
    for i in range(10):
        cases.append({
            'case_id': f'CASE-{random.randint(10000, 99999)}',
            'amount': random.randint(5000, 150000),
            'status': random.choice(['Active', 'Recovered', 'Pending', 'Escalated']),
            'dca': random.choice(['Stellar Collections', 'Prime Recovery', 'Swift Debt Solutions']),
            'recovery_prob': random.randint(40, 95),
            'days_overdue': random.randint(10, 120),
            'created_at': (datetime.now() - timedelta(days=random.randint(1, 30))).isoformat()
        })
    return cases

@app.get("/api/dca/performance")
def get_dca_performance():
    """Get DCA performance metrics"""
    return [
        {'name': 'Stellar Collections', 'recovery': 85, 'cases': 450, 'avgTime': 38, 'sla_compliance': 96},
        {'name': 'Prime Recovery', 'recovery': 82, 'cases': 380, 'avgTime': 41, 'sla_compliance': 94},
        {'name': 'Swift Debt Solutions', 'recovery': 78, 'cases': 520, 'avgTime': 45, 'sla_compliance': 91},
        {'name': 'Apex Financial', 'recovery': 75, 'cases': 290, 'avgTime': 48, 'sla_compliance': 89},
        {'name': 'Global Recovery Inc', 'recovery': 72, 'cases': 410, 'avgTime': 52, 'sla_compliance': 87}
    ]

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
