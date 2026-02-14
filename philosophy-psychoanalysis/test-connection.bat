@echo off
echo ========================================
echo    网络连接测试
echo ========================================
echo.

echo 检查服务器是否在运行...
netstat -an | findstr :3002

echo.
echo 检查本地连接...
ping 127.0.0.1 -n 2

echo.
echo 检查网络IP...
ipconfig | findstr "IPv4"

echo.
echo ========================================
echo   测试结果说明：
echo   - 如果看到 ":3002" 行，说明服务器在运行
echo   - 如果 ping 成功，说明网络正常
echo   - IP 应该显示为你的内网地址
echo ========================================
echo.
pause