@echo off
echo ========================================
echo    Cloudflare Tunnel - 免费互联网访问
echo ========================================
echo.

:: 检查是否已安装 cloudflared
where cloudflared >nul 2>&1
if %errorlevel% neq 0 (
    echo 正在安装 Cloudflared...
    winget install cloudflare.cloudflared
    echo.
    echo 安装完成！请重新运行此脚本。
    pause
    exit
)

echo 正在登录 Cloudflare...
echo.
echo 如果是第一次使用，会打开浏览器让您登录。
echo 登录后会自动下载认证文件。
echo.
cloudflared tunnel login

echo.
echo ========================================
echo 请输入你想要的隧道名称（例如：philosophy-site）
echo ========================================
set /p tunnel_name=隧道名称:

echo.
echo 正在创建隧道...
cloudflared tunnel create %tunnel_name%

echo.
echo 查看隧道 ID...
for /f "tokens=2 delims= " %%i in ('cloudflared tunnel list %tunnel_name%') do set tunnel_id=%%i
echo 隧道 ID: %tunnel_id%

echo.
echo 创建配置文件...
set config_dir=%USERPROFILE%\.cloudflared
if not exist %config_dir% mkdir %config_dir%

(
echo tunnel: %tunnel_id%
echo credentials-file: %config_dir%\%tunnel_id%.json
echo.
echo ingress:
echo   - hostname: philosophy-learning.trycloudflare.com
echo     service: http://localhost:3002
echo   - service: http_status:404
) > %config_dir%\config.yml

echo 配置文件已创建！

echo.
echo 正在启动隧道...
echo ========================================
echo.
echo 复制下面的地址分享给任何人：
echo https://philosophy-learning.trycloudflare.com
echo ========================================
echo 按 Ctrl+C 停止隧道
echo.
cloudflared tunnel run %tunnel_name%

pause