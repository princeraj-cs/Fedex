# Quick Installation Guide

## Prerequisites ✅
- Node.js 18+ ([Download](https://nodejs.org))
- Python 3.10+ ([Download](https://python.org))
- Git (optional)

## Installation Steps

### Option 1: Automated Setup (Recommended)
```powershell
cd e:\Hackathon\fedex\project
.\setup.ps1
```

### Option 2: Manual Setup

#### 1. Install Frontend Dependencies
```powershell
npm install
```

#### 2. Install Backend Dependencies
```powershell
cd backend
pip install -r requirements.txt
cd ..
```

## Running the Application

### Option 1: Using Start Script (Easiest)
```powershell
.\start.ps1
```
This will:
- Start the backend API on http://localhost:8000
- Start the frontend on http://localhost:3000
- Open both in separate windows

### Option 2: Manual Start

#### Terminal 1 - Backend
```powershell
cd backend
python app.py
```
Backend runs on: http://localhost:8000  
API Docs: http://localhost:8000/docs

#### Terminal 2 - Frontend
```powershell
npm run dev
```
Dashboard opens on: http://localhost:3000

## Accessing the Platform

Once running, open your browser to:
- **Dashboard**: http://localhost:3000
- **API Documentation**: http://localhost:8000/docs
- **API Endpoints**: http://localhost:8000/api/

## Features to Explore

### 1. Overview Tab
- Live KPIs and metrics
- Recovery rate trends
- DCA performance charts
- AI predictions

### 2. Architecture Tab
- 4-layer technical stack
- Technology breakdown
- System integrations
- Security features

### 3. AI Models Tab
- Click each model to see details
- View model logic and pipeline
- Check performance metrics

### 4. Workflow Tab
- 6-step automated process
- SLA requirements
- Automation features

### 5. Implementation Tab
- 18-month roadmap
- ROI analysis (238% Year 1!)
- Resource requirements

## Testing the API

### Using the Interactive API Docs
1. Go to http://localhost:8000/docs
2. Click on any endpoint
3. Click "Try it out"
4. Enter test data
5. Click "Execute"

### Example API Calls

#### Get Dashboard Stats
```bash
curl http://localhost:8000/api/dashboard/stats
```

#### Predict Recovery
```bash
curl -X POST http://localhost:8000/api/predict-recovery \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 50000,
    "days_overdue": 45,
    "customer_score": 720
  }'
```

#### Match DCA
```bash
curl -X POST http://localhost:8000/api/match-dca \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 100000,
    "industry": "manufacturing"
  }'
```

## Troubleshooting

### Port Already in Use
If ports 3000 or 8000 are in use:

**Frontend (port 3000):**
```powershell
npm run dev -- -p 3001
```

**Backend (port 8000):**
Edit `backend/app.py` line 186:
```python
uvicorn.run(app, host="0.0.0.0", port=8001)
```

### Dependencies Not Installing
**Frontend:**
```powershell
rm -r node_modules
rm package-lock.json
npm install
```

**Backend:**
```powershell
pip install --upgrade pip
pip install -r backend/requirements.txt
```

### Python Not Found
Make sure Python is in your PATH:
```powershell
python --version
```
If not found, reinstall Python and check "Add to PATH" during installation.

### Node Not Found
```powershell
node --version
npm --version
```
If not found, install Node.js from https://nodejs.org

## Project Structure
```
project/
├── app/                    # Next.js pages
├── components/             # React components
│   ├── Dashboard.tsx
│   └── tabs/              # 5 tab components
├── backend/               # Python FastAPI
│   ├── app.py            # Main API
│   └── requirements.txt
├── package.json          # Node dependencies
├── README.md            # Full documentation
├── DEMO_GUIDE.md        # Demo instructions
├── setup.ps1            # Installation script
└── start.ps1            # Start script
```

## Next Steps

1. ✅ Install dependencies
2. ✅ Start the application
3. ✅ Open http://localhost:3000
4. ✅ Explore all 5 tabs
5. ✅ Test API endpoints
6. ✅ Read DEMO_GUIDE.md for presentation tips

## Need Help?

- Check README.md for detailed documentation
- Check DEMO_GUIDE.md for demo tips
- API docs at http://localhost:8000/docs

## Production Deployment

For production deployment:
```powershell
npm run build
npm start
```

Backend for production:
```powershell
cd backend
pip install gunicorn
gunicorn -w 4 -k uvicorn.workers.UvicornWorker app:app
```

---

**Happy Hacking! 🚀**

Built for FedEx Hackathon 2026
