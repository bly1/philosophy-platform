#!/bin/bash

echo "🌐 启动哲学与精神分析学习平台（允许外部访问）"
echo "=========================================="
echo ""

# 获取本机IP地址
IP=$(ipconfig | grep -A 4 "无线局域网适配器 WLAN\|以太网适配器 以太网" | grep "IPv4" | awk '{print $NF}' | head -1)

echo "✅ 服务器启动中..."
echo "📍 本地访问: http://localhost:3000"
if [ -n "$IP" ]; then
    echo "🌍 外部访问: http://$IP:3000"
    echo "🔗 分享给朋友: http://$IP:3000"
else
    echo "⚠️  无法获取IP地址，请手动检查 ipconfig"
fi

echo ""
echo "📝 页面列表:"
echo "   首页: /"
echo "   探索页面: /explore"
echo "   哲学家列表: /philosophers"
echo "   苏格拉底: /philosophers/socrates"
echo "   柏拉图: /philosophers/plato"
echo "   笛卡尔: /philosophers/descartes"
echo ""
echo "⚠️  按 Ctrl+C 停止服务器"
echo "=========================================="
echo ""

# 启动服务器，允许外部访问
npm run dev -- --hostname 0.0.0.0