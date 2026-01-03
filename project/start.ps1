# FedEx DCA Management Platform - Start Script

Write-Host "======================================" -ForegroundColor Cyan
Write-Host "FedEx DCA Management Platform" -ForegroundColor Cyan
Write-Host "Starting Services..." -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

# Start backend in background
Write-Host "Starting Backend API (FastAPI)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\backend'; python app.py" -WindowStyle Normal
Start-Sleep -Seconds 3
Write-Host "✓ Backend API started on http://localhost:8000" -ForegroundColor Green
Write-Host "  API Docs: http://localhost:8000/docs" -ForegroundColor Gray
Write-Host ""

# Start frontend
Write-Host "Starting Frontend Dashboard (Next.js)..." -ForegroundColor Yellow
Start-Sleep -Seconds 2
Write-Host "✓ Starting development server..." -ForegroundColor Green
Write-Host ""
Write-Host "Dashboard will open at: http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop the frontend server" -ForegroundColor Yellow
Write-Host "The backend will continue running in a separate window" -ForegroundColor Gray
Write-Host ""

npm run dev
