@echo off
echo ========================================
echo    设置互联网访问 (Ngrok)
echo ========================================
echo.

:: 检查 ngrok 是否已安装
where ngrok >nul 2>&1
if %errorlevel% neq 0 (
    echo 正在安装 ngrok...
    winget install ngrok.ngrok
    echo.
)

:: 登录 ngrok (如果需要)
echo 如果你有 ngrok 账号，请先登录：
echo ngrok authtoken YOUR_AUTH_TOKEN
echo.
echo 如果没有账号，免费版本就够用了！
echo.

:: 启动隧道
echo 正在启动互联网隧道...
echo ========================================
echo.
ngrok http 3002

pause