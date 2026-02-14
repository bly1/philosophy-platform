@echo off
echo ==========================================
echo    🌐 自动部署到 Netlify (无需密码)
echo ==========================================
echo.

echo 🔧 构建项目...
call npm run build

echo.
echo 📤 正在上传到 Netlify...
echo 这将给你一个永久的免费地址！

REM 检查 Netlify CLI
where netlify >nul 2>&1
if %errorlevel% neq 0 (
    echo 📦 安装 Netlify CLI...
    npm install -g netlify-cli
)

echo.
echo 🌍 部署中...
netlify deploy --prod --dir=.next --site=philosophy-learning-2024

pause
