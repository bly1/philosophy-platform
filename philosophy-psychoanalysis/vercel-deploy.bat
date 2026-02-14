@echo off
echo ==========================================
echo    🚀 哲学学习平台 - Vercel 部署
echo ==========================================
echo.

echo 📍 正在准备部署...
echo ✅ 1. 确保项目构建成功
npm run build

echo.
echo ✅ 2. 检查 Vercel CLI...
where vercel >nul 2>&1
if %errorlevel% neq 0 (
    echo 正在安装 Vercel CLI...
    npm install -g vercel
)

echo.
echo ✅ 3. 打开 Vercel 网站部署页面...
echo.
echo 请在浏览器中：
echo 1. 访问 https://vercel.com
echo 2. 用 GitHub 或 Google 登录
echo 3. 点击 "New Project"
echo 4. 选择 GitHub 或直接拖拽文件
echo.
echo 📁 你的项目位置：
echo E:\代码\auto-coding-agent-demo\philosophy-psychoanalysis
echo.
echo 🎯 或者使用命令行部署（需要先连接 GitHub）：
echo.
setlocal enabledelayedexpansion
choice /c yn /m "是否使用命令行部署 (y/n)"

if !errorlevel!==2 goto manual
goto cli

:cli
echo.
echo 🔄 使用 Vercel CLI 部署...
vercel --prod
goto end

:manual
echo.
echo 🌐 正在打开 Vercel 网站...
start https://vercel.com/new
echo.
echo 📝 部署说明：
echo 1. 点击 "Browse" 或 "Import Git Repository"
echo 2. 选择 philosophy-psychoanalysis 文件夹
echo 3. 点击 "Deploy"
echo 4. 等待 2-3 分钟
echo.
echo 🔥 成功后你会得到一个 .vercel.app 地址！
echo.

:end
pause