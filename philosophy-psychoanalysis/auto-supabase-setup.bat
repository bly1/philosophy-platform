@echo off
chcp 65001 >nul
cls
echo ╔═══════════════════════════════════════╗
echo ║    🚀 Supabase 自动设置向导             ║
echo ╚═══════════════════════════════════════╝
echo.

echo 📋 前置步骤：
echo.
echo 1. 访问 https://supabase.com
echo 2. 点击 "Start your project"
echo 3. 使用 GitHub 或 Google 登录
echo 4. 创建新项目，命名：philosophy-learning
echo 5. 等待项目创建完成
echo.
echo 📍 创建完成后：
echo - 点击 Settings → API
echo - 复制 Project URL
echo - 复制 anon public key
echo.
echo ==========================================
echo.
set /p ready=准备好继续了吗？ (按回车)

cls
echo ╔═══════════════════════════════════════╗
echo ║    🔌 正在连接 Supabase...             ║
echo ╚═══════════════════════════════════════╝
echo.

:: 安装依赖
echo 📦 检查依赖...
npm list @supabase/supabase-js >nul 2>&1
if %errorlevel% neq 0 (
    echo 正在安装 Supabase 客户端...
    npm install @supabase/supabase-js
)

:: 运行设置脚本
echo.
echo 🔧 启动自动配置...
node setup-supabase.js

echo.
echo ✅ 完成！现在你可以：
echo.
echo 1. 启动开发服务器：
echo    npm run dev
echo.
echo 2. 注册第一个账号：
echo    http://localhost:3000/auth/register
echo.
echo 3. 开始使用！
echo.

pause