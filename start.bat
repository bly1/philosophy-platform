@echo off
echo 启动哲学学习平台增强版...
echo.
echo 请选择启动方式:
echo 1. 使用 Python HTTP Server (推荐)
echo 2. 使用 Node.js serve
echo.
set /p choice="请输入选择 (1 或 2): "

if "%choice%"=="1" (
    echo 正在启动 Python HTTP Server...
    start http://localhost:8080
    python -m http.server 8080
) else if "%choice%"=="2" (
    echo 正在启动 Node.js serve...
    start http://localhost:8080
    npx serve . -p 8080
) else (
    echo 无效选择
    pause
)
