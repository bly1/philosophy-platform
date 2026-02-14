@echo off
echo ========================================
echo    添加防火墙规则
echo ========================================
echo.
echo 正在为端口 3002 添加防火墙规则...

:: 删除旧规则（如果存在）
netsh advfirewall firewall delete rule name="哲学学习平台" >nul 2>&1

:: 添加新规则
netsh advfirewall firewall add rule name="哲学学习平台" dir=in action=allow protocol=TCP localport=3002

echo.
echo ✅ 防火墙规则已添加！
echo.
echo 现在试试访问：
echo   本地: http://localhost:3002
echo   他人: http://192.168.1.2:3002
echo.
pause