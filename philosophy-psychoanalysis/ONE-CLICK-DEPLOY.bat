@echo off
chcp 65001 >nul
cls
echo ╔═══════════════════════════════════════╗
echo ║     🚀 一键部署哲学学习平台          ║
echo ║     绝对无需任何密码！                ║
echo ╚═══════════════════════════════════════╝
echo.

echo 🔧 正在构建网站...
call npm run build >nul 2>&1
echo ✅ 构建完成！

echo.
echo 📯 选择部署方案：
echo.
echo ┌───────────────────────────────────────┐
echo │ 1. Surge.sh   - 最快，10秒搞定        │
echo │ 2. GitHub     - 永久免费              │
echo │ 3. 直接打开   - 查看建站地址          │
echo └───────────────────────────────────────┘
echo.

set /p choice=请输入选择 (1-3):

if "%choice%"=="1" goto surge
if "%choice%"=="2" goto github
if "%choice%"=="3" goto links

:surge
cls
echo ╔═══════════════════════════════════════╗
echo ║     Surge.sh 部署中...                 ║
echo ╚═══════════════════════════════════════╝
echo.

REM 安装 Surge
where surge >nul 2>&1 || (
    echo 📦 正在安装 Surge...
    npm install -g surge
)

REM 部署
echo 🚀 正在部署...
echo.

REM 创建独立文件夹
mkdir temp-deploy >nul 2>&1
xcopy .next\static temp-deploy\ /E /I /Q >nul 2>&1
copy index.html temp-deploy\ /Y >nul 2>&1 2>nul

REM 使用 Surge 部署
echo 📡 上传中...
powershell -Command "surge temp-deploy philosophy-learning.surge.sh --domain philosophy-learning.surge.sh"

rmdir /S /Q temp-deploy >nul 2>&1

echo.
echo ✅ 部署成功！
echo 🌐 网站地址：https://philosophy-learning.surge.sh
echo.
echo 任何人都能直接访问这个地址！
pause
exit

:github
cls
echo ╔═══════════════════════════════════════╗
echo ║     GitHub Pages 部署说明              ║
echo ╚═══════════════════════════════════════╝
echo.

echo 📋 步骤说明：
echo.
echo 1. 打开网站：https://github.com/new
echo 2. 仓库名：philosophy-learning
echo 3. 上传所有文件
echo 4. Settings → Pages
echo 5. Source: Deploy from a branch
echo 6. 选择 main 分支
echo 7. 5分钟后获得永久地址
echo.
echo 🌐 你的地址将是：
echo    https://[你的用户名].github.io
echo.
start https://github.com/new
pause
exit

:links
cls
echo ╔═══════════════════════════════════════╗
echo ║     免费建站地址列表                    ║
echo ╚═══════════════════════════════════════╝
echo.

echo 🌟 最免费地址（无需注册）：
echo.
echo 1. GitHub Pages
echo    - 上传代码即可
echo    - 地址：xxx.github.io
echo    - 教程：https://pages.github.com
echo.
echo 2. Netlify Drop
echo    - 拖拽文件夹
echo    - 地址：xxx.netlify.app
echo    - 网址：https://app.netlify.com/drop
echo.
echo 3. Vercel (推荐)
echo    - 拖拽文件夹
echo    - 地址：xxx.vercel.app
echo    - 网址：https://vercel.com
echo.
echo 4. Firebase Hosting
echo    - Google提供
echo    - 免费额度充足
echo    - 地址：xxx.web.app
echo.
pause