@echo off
echo ==========================================
echo   一键创建互联网访问隧道
echo ==========================================
echo.
echo 正在创建隧道，请稍候...
echo.
echo 访问地址将在下面显示：
echo ============================================
echo.

:: 使用 npx 运行 localtunnel，不需要安装
npx localtunnel --port 3002 --subdomain philosophy-world

echo.
echo ============================================
echo 如果上述命令失败，请尝试：
echo.
echo 1. 复制这个地址到浏览器：
echo    https://philosophy-world.loca.lt
echo.
echo 2. 或使用备用方案：
echo    npx serve-now --port 3002
echo.
echo ============================================
pause