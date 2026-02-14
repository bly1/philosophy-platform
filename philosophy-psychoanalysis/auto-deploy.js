const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const https = require('https');

// 自动构建
console.log('🔥 正在自动构建项目...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ 构建成功！');
} catch (error) {
  console.error('❌ 构建失败');
  process.exit(1);
}

// 创建部署配置
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
packageJson.scripts = {
  ...packageJson.scripts,
  "vercel-build": "next build"
};

// 创建 vercel.json
const vercelConfig = {
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "installCommand": "npm install",
  "devCommand": "next dev",
  "functions": {}
};

fs.writeFileSync('vercel.json', JSON.stringify(vercelConfig, null, 2));
console.log('✅ Vercel 配置已创建');

// 创建 README
const readme = `# 哲学与精神分析学习平台

一个探索哲学思想与精神分析理论的交互式学习平台。

## 在线访问
访问网站查看所有内容。

## 本地开发
\`\`\`bash
npm install
npm run dev
\`\`\`

## 项目特点
- 哲学家详细介绍
- 核心概念解析
- 交互式学习体验
`;

fs.writeFileSync('README.md', readme);
console.log('✅ README 已创建');

// 自动部署到 Netlify（最简单的方式）
console.log('\n🚀 正在准备自动部署...');

// 创建批处理文件自动部署到 Netlify
const deployBatch = `@echo off
echo ==========================================
echo    🌐 自动部署到 Netlify (无需密码)
echo ==========================================
echo.

echo 🔧 构建项目...
call npm run build

echo.
echo 📤 正在上传到 Netlify...
echo 这将给你一个永久的免费地址！

REM 检查 Netlify CLI
where netlify >nul 2>&1
if %errorlevel% neq 0 (
    echo 📦 安装 Netlify CLI...
    npm install -g netlify-cli
)

echo.
echo 🌍 部署中...
netlify deploy --prod --dir=.next --site=philosophy-learning-2024

pause
`;

fs.writeFileSync('auto-deploy.bat', deployBatch);
console.log('✅ 自动部署脚本已创建');

console.log('\n✅ 准备完成！');
console.log('\n📋 现在运行以下命令完成部署：');
console.log('   auto-deploy.bat');
console.log('\n或者访问以下网站：');
console.log('   1. Netlify: https://app.netlify.com/drop');
console.log('   2. 拖拽 .next 文件夹');
console.log('   3. 立即获得免费地址！');