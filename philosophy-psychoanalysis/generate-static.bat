@echo off
echo ==========================================
echo    🌐 生成静态网站文件
echo ==========================================
echo.

REM 生成静态文件
npm run build

REM 生成导出配置
echo {
  "output": "export",
  "trailingSlash": true,
  "images": {
    "remotePatterns": [
      {
        "protocol": "https",
        "hostname": "images.unsplash.com",
      },
      {
        "protocol": "https",
        "hostname": "avatars.githubusercontent.com",
      },
    ],
  }
} > next.config.json

REM 重新构建
npm run build

echo.
echo ✅ 静态文件已生成在 out 文件夹！
echo.
echo 📁 文件夹位置：philosophy-psychoanalysis\out
echo.
echo 🌐 现在可以上传到任何免费托管：
echo.
echo 选项 1：GitHub Pages
echo   - 上传 out 文件夹内容到 GitHub
echo   - 开启 Pages 功能
echo   - 获得 .github.io 地址
echo.
echo 选项 2：Neocities (免费静态主机)
echo   - 访问 https://neocities.org
echo   - 上传 out 文件夹
echo   - 立即获得免费地址
echo.
echo 选项 3：Surge.sh (命令行部署)
echo   - surge philosophy-psychoanalysis\out
echo   - 自动获得免费地址
echo.

pause