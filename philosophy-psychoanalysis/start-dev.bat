@echo off
echo ========================================
echo    哲学与精神分析学习平台
echo ========================================
echo.

:: 获取本机IP
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr IPv4') do (
    for /f "tokens=1" %%b in ("%%a") do set IP=%%b
)

echo   正在启动开发服务器...
echo.
echo   访问地址:
echo   ┌────────────────────────────────────────┐
echo   │ 本地访问: http://localhost:3000      │
if defined IP (
    echo   │ 外部访问: http://%IP%:3000            │
) else (
    echo   │ 外部访问: [无法获取IP]               │
)
echo   └────────────────────────────────────────┘
echo.
echo   重要页面:
echo   • 首页: http://localhost:3000
echo   • 探索: http://localhost:3000/explore
echo   • 哲学家: http://localhost:3000/philosophers
echo   • 苏格拉底: http://localhost:3000/philosophers/socrates
echo.
echo   按 Ctrl+C 停止服务器
echo ========================================
echo.

:: 启动开发服务器
npm run dev -- --hostname 0.0.0.0

pause