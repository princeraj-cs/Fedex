# FedEx DCA Management Platform - Quick Start Guide

Write-Host "======================================" -ForegroundColor Cyan
Write-Host "FedEx DCA Management Platform" -ForegroundColor Cyan
Write-Host "Quick Start Installation" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

# Check Node.js
Write-Host "Checking Node.js installation..." -ForegroundColor Yellow
if (Get-Command node -ErrorAction SilentlyContinue) {
    $nodeVersion = node --version
    Write-Host "✓ Node.js $nodeVersion found" -ForegroundColor Green
} else {
    Write-Host "✗ Node.js not found. Please install Node.js 18+ from https://nodejs.org" -ForegroundColor Red
    exit 1
}

# Check Python
Write-Host "Checking Python installation..." -ForegroundColor Yellow
if (Get-Command python -ErrorAction SilentlyContinue) {
    $pythonVersion = python --version
    Write-Host "✓ Python $pythonVersion found" -ForegroundColor Green
} else {
    Write-Host "✗ Python not found. Please install Python 3.10+ from https://python.org" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "======================================" -ForegroundColor Cyan
Write-Host "Installing Dependencies..." -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

# Install frontend dependencies
Write-Host "Installing frontend dependencies (this may take a few minutes)..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Frontend dependencies installed successfully" -ForegroundColor Green
} else {
    Write-Host "✗ Failed to install frontend dependencies" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Install backend dependencies
Write-Host "Installing backend dependencies..." -ForegroundColor Yellow
Set-Location backend
pip install -r requirements.txt
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Backend dependencies installed successfully" -ForegroundColor Green
} else {
    Write-Host "✗ Failed to install backend dependencies" -ForegroundColor Red
    exit 1
}
Set-Location ..

Write-Host ""
Write-Host "======================================" -ForegroundColor Cyan
Write-Host "Installation Complete!" -ForegroundColor Green
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "To start the application:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Start the backend API:" -ForegroundColor White
Write-Host "   cd backend" -ForegroundColor Cyan
Write-Host "   python app.py" -ForegroundColor Cyan
Write-Host "   (API will run on http://localhost:8000)" -ForegroundColor Gray
Write-Host ""
Write-Host "2. In a new terminal, start the frontend:" -ForegroundColor White
Write-Host "   npm run dev" -ForegroundColor Cyan
Write-Host "   (Dashboard will open on http://localhost:3000)" -ForegroundColor Gray
Write-Host ""
Write-Host "Or use the start script:" -ForegroundColor White
Write-Host "   .\start.ps1" -ForegroundColor Cyan
Write-Host ""
Write-Host "Happy Hacking! 🚀" -ForegroundColor Green
