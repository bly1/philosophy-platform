@echo off
echo ==========================================
echo   哲学学习平台 - Cloudflare 快速隧道
echo ==========================================
echo.

:: 1. 登录 Cloudflare
echo 第一步：登录 Cloudflare
echo will open browser for login...
echo.
cloudflared tunnel login

:: 2. 创建临时隧道
echo.
echo 第二步：启动隧道（免费地址）
echo ============================================
echo.
echo 分享这个地址给任何人：
echo.
cloudflared tunnel --url http://localhost:3002

pause