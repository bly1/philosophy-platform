# 🌍 让任何人通过互联网访问你的网站

## 方法一：使用 Ngrok（推荐）

### 步骤 1：安装 Ngrok

**选项 A：使用 winget（Windows 10/11）**
```cmd
winget install ngrok.ngrok
```

**选项 B：手动下载**
1. 访问 https://ngrok.com/download
2. 下载 Windows 版本
3. 解压到任意文件夹
4. 将路径添加到系统环境变量

### 步骤 2：启动隧道

确保你的服务器在 3002 端口运行后，执行：

```cmd
ngrok http 3002
```

### 步骤 3：获取公网地址

运行后会显示类似：
```
ngrok by @inconshreveable

Session Status                online
Version                       3.5.0
Region                        United States (us-cal-1)
Web Interface                 http://127.0.0.1:4040
Forwarding                    https://abc123-def456.ngrok-free.app -> http://localhost:3002
```

**分享这个地址给任何人**：
```
https://abc123-def456.ngrok-free.app
```

---

## 方法二：使用 localtunnel（更简单）

```cmd
npx localtunnel --port 3002
```

会生成类似：`https://loose-mouse-90.loca.lt` 的地址

---

## 方法三：使用 Cloudflare Tunnel（高级但免费）

1. 安装 cloudflared：
   ```cmd
   winget install cloudflare.cloudflared
   ```

2. 登录 Cloudflare：
   ```cmd
   cloudflared tunnel login
   ```

3. 创建隧道：
   ```cmd
   cloudflared tunnel --url http://localhost:3002
   ```

---

## 📱 测试步骤

1. 本地测试：
   - 打开浏览器访问 http://localhost:3002

2. 获取公网地址：
   - 运行上述任一命令
   - 复制显示的 https://... 地址

3. 分享测试：
   - 用手机（使用移动数据）访问
   - 发给朋友测试

---

## ⚠️ 注意事项

1. **免费版限制**：
   - Ngrok 免费版有时间限制（8小时）
   - 地址每次启动会变化

2. **付费版优势**：
   - 固定子域名
   - 更长时间
   - 更多并发

3. **安全建议**：
   - 发布网站时移除敏感信息
   - 考虑添加基础认证

---

## 🚀 快速开始脚本

运行 `setup-ngrok.bat` 自动完成设置

或直接执行：
```cmd
winget install ngrok.ngrok
ngrok http 3002
```

---

## 故障排除

**问题：** 端口被占用
```cmd
netstat -ano | findstr :3002
taskkill /PID [PID号] /F
```

**问题：** 无法访问
- 检查防火墙
- 确保本地服务器在运行
- 试试不同的端口

---

## 🎉 成功标志

当你的朋友通过 https://xxx.ngrok-free.app 能看到你的哲学网站时，就成功了！