@echo off
title Mahmoud Al-Juaidi - AI Portfolio
echo ========================================================
echo   Mahmoud Al-Juaidi - AI Portfolio Launcher
echo   Starting local web server on http://localhost:8000 ...
echo ========================================================
start "" http://localhost:8000
python -m http.server 8000
pause
