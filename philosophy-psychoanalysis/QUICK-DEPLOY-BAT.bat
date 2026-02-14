@echo off
echo ==========================================
echo    哲学网站一键部署 (绝对能访问)
echo ==========================================
echo.

echo 选择方案:
echo.
echo 1. Vercel 部署 (推荐 - 永久免费地址)
echo 2. Netlify 部署 (简单拖拽)
echo 3. GitHub Pages (需要GitHub账号)
echo 4. 本地测试 (同一WiFi)
echo.
set /p choice=请选择 (1-4):

if "%choice%"=="1" goto vercel
if "%choice%"=="2" goto netlify
if "%choice%"=="3" goto github
if "%choice%"=="4" goto local

:vercel
echo.
echo 正在打开 Vercel...
echo 1. 会打开 https://vercel.com
echo 2. 用GitHub登录
echo 3. 拖入整个 philosophy-psychoanalysis 文件夹
echo 4. 等待3分钟，获得永久地址
echo.
start https://vercel.com
echo 完成后你将得到类似：xxx.vercel.app 的地址
pause
exit

:netlify
echo.
echo 正在打开 Netlify Drop...
echo 1. 会打开 https://app.netlify.com/drop
echo 2. 编译项目: npm run build
echo 3. 拖入 .next 文件夹
echo 4. 立即获得免费地址
echo.
cd /d %~dp0
call npm run build
start https://app.netlify.com/drop
echo 地址类似： xxx.netlify.app
pause
exit

:github
echo.
echo GitHub Pages 部署指南:
echo.
echo 1. 去 GitHub 创建新仓库
echo 2. 上传所有代码
echo 3. 开启 Pages 功能
echo 4. 获得永久地址
echo.
echo 详细步骤已保存在 deploy-github.md
start https://github.com/new
pause
exit

:local
echo.
echo 本地网络访问方案:
echo.
echo 你的网站地址是:
echo ============================================
echo   http://192.168.1.2:3002
echo ============================================
echo.
echo 同一WiFi的人都能直接访问!
echo.
echo 或者试试 xip.io (无需设置):
echo   http://192.168.1.2.xip.io:3002
echo.
pause
exit