#!/bin/bash

echo "🚀 初始化哲学与精神分析学习平台..."

# 检查 Node.js 版本
NODE_VERSION=$(node -v | cut -d'v' -f2)
REQUIRED_NODE="18.0.0"

if [ "$(printf '%s\n' "$REQUIRED_NODE" "$NODE_VERSION" | sort -V | head -n1)" != "$REQUIRED_NODE" ]; then
    echo "❌ 需要 Node.js >= 18.0.0，当前版本：$NODE_VERSION"
    exit 1
fi

# 安装依赖
echo "📦 安装依赖..."
npm install

# 检查环境变量
if [ ! -f ".env.local" ]; then
    echo "⚠️  创建环境变量文件..."
    cp .env.local.example .env.local
    echo ""
    echo "请编辑 .env.local 文件，填入你的 Supabase 配置："
    echo "- NEXT_PUBLIC_SUPABASE_URL"
    echo "- NEXT_PUBLIC_SUPABASE_ANON_KEY"
    echo ""
fi

# 启动开发服务器
echo "🌟 启动开发服务器..."
echo "访问 http://localhost:3000 查看应用"
echo ""
echo "按 Ctrl+C 停止服务器"
echo ""

npm run dev