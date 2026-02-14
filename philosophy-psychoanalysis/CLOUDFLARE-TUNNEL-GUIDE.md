# 🌐 Cloudflare Tunnel 完整设置指南

## 🚀 快速开始（推荐第一次使用）

### 方法一：一键启动脚本（最简单）

1. **打开命令提示符**
2. **进入项目目录**：
   ```cmd
   cd E:\代码\auto-coding-agent-demo\philosophy-psychoanalysis
   ```

3. **运行脚本**：
   ```cmd
   start-cloudflare-tunnel.bat
   ```

4. **按提示登录 Cloudflare**
   - 会自动打开浏览器
   - 免费登录即可
   - 授权账户访问

5. **复制分享地址**
   - 运行后会显示类似：
   ```
   https://random-words-1234.trycloudflare.com
   ```

---

### 方法二：设置永久隧道（可自定义域名）

1. **运行完整设置**：
   ```cmd
   setup-cloudflare.bat
   ```

2. **输入隧道名称**（如：philosophy-site）

3. **获取永久地址**（可选需要域名）

---

## ⚡ 命令行方式（高级用户）

### 安装 Cloudflared
```cmd
winget install cloudflare.cloudflared
```

### 快速启动临时隧道
```cmd
# 登录（只需一次）
cloudflared tunnel login

# 启动隧道
cloudflared tunnel --url http://localhost:3002
```

### 创建永久隧道
```cmd
# 创建命名隧道
cloudflared tunnel create philosophy-learning

# 创建配置文件
# 在 C:\Users\[用户名]\.cloudflared\config.yml
# 内容：
# tunnel: [tunnel-id]
# credentials-file: C:\Users\[用户名]\.cloudflared\[tunnel-id].json
#
# ingress:
#   - hostname: philosophy.yourdomain.com
#     service: http://localhost:3002
#   - service: http_status:404

# 运行隧道
cloudflared tunnel run philosophy-learning
```

---

## 📱 测试步骤

1. **确保本地服务运行**：
   - http://localhost:3002 应该可以访问

2. **启动 Cloudflare Tunnel**：
   - 运行上述任一方法

3. **测试访问**：
   - 用手机（4G/5G数据）访问显示的 https://... 地址
   - 分享给朋友测试

---

## 🎯 优点

✅ **完全免费**
✅ **无限流量**
✅ **HTTPS 自动**
✅ **稳定可靠**
✅ **全球 CDN 加速**
✅ **支持 WebSocket**

---

## 🔄 永久运行方案

### Windows 服务方式（全天候运行）

1. **安装为服务**：
   ```cmd
   cloudflared service install
   ```

2. **配置服务**：
   创建服务配置文件：%USERPROFILE%\.cloudflared\config.yml

3. **启动服务**：
   ```cmd
   net start cloudflared
   ```

---

## 📝 常见问题

### Q: 显示 403 Forbidden？
A: 确保已登录 Cloudflare 账户

### Q: 地址每次都变？
A: 使用永久隧道方法，可以固定子域名

### Q: 如何停止隧道？
A: 按 Ctrl+C 或关闭命令窗口

### Q: 是否有流量限制？
A: 免费版没有流量限制

---

## 🌍 分享你的网站

启动成功后，你会得到类似这样的地址：

```
https://silent-moon-1234.trycloudflare.com
```

**任何人都可以通过这个地址访问你的哲学学习平台！**

---

## 🎉 成功示例

当朋友告诉你"我看到了！很棒的哲学网站！"时，就是成功了！

---

## 💡 进阶技巧

1. **自定义子域名**：
   - 需要有自己的域名
   - 在 Cloudflare DNS 中添加 CNAME 记录

2. **多端口同时穿透**：
   ```yaml
   ingress:
     - hostname: app.trycloudflare.com
       service: http://localhost:3002
     - hostname: api.trycloudflare.com
       service: http://localhost:3003
   ```

3. **TCP/UDP 端口转发**：
   - 可以转发游戏端口、数据库等

---

## 🛠️ 故障排除

### Windows 防火墙问题
```cmd
# 添加防火墙规则
netsh advfirewall firewall add rule name="Cloudflared" dir=in action=allow program="%USERPROFILE%\.cloudflared\cloudflared.exe"
```

### 代理问题
如果在企业网络，可能需要配置代理：
```cmd
cloudflared tunnel --url http://localhost:3002 --http-host-header "localhost:3002"
```

---

## 📞 获取帮助

- Cloudflare 官方文档：https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/
- 项目文档：查看 `INTERNET-ACCESS.md`

---

现在开始吧！运行 `start-cloudflare-tunnel.bat` 几分钟内就能让全世界访问你的网站！