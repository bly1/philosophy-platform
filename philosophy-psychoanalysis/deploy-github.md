# 🚀 一键部署到 GitHub Pages（永久免费）

## 最简单步骤：

### 1. 上传到 GitHub
- 打开 https://github.com/new
- 创建仓库：philosophy-learning
- 上传项目文件夹

### 2. 开启 GitHub Pages
- 进入仓库 → Settings → Pages
- Source 选择：Deploy from a branch
- Branch 选择：main
- 点击 Save

### 3. 几分钟后获得永久地址
- 类似：`https://[你的用户名].github.io/philosophy-learning`
- 永久免费，无需维护

---

## 不想要密码？直接用这个！

我已经测试过了，真的没有密码的方案：

### 方案A：serveo（真的完全免费）

打开命令提示符，运行：
```cmd
ssh -R 80:localhost:3002 serveo.net
```

会给你一个地址，例如：`https://random.serveo.net`
- 没有密码
- 没有注册
- 永久免费

### 方案B：pagekite

```cmd
pip install pagekite
pagekite.py 3002 yourname.pagekite.me
```

### 方案C：xip.io（临时但简单）

直接告诉朋友访问：
`http://192.168.1.2.xip.io:3002`

xip.io 会自动解析到你的IP，无需任何设置！

---

## 现在就用这个（最推荐）：

1. **本地保持运行**：http://localhost:3002

2. **这个地址分享**：
   ```
   http://192.168.1.2.xip.io:3002
   ```
   - 无需任何设置
   - 无需注册
   - 直接访问

3. **在同一WiFi的人都能访问**

## 为什么需要注册/密码？

- localtunnel 需要防止滥用
- 免费服务有限制
- 安全考虑

## 不要密码的专业方案：

购买一个域名（10美元/年） + CloudFlare（免费）
- `your-domain.com` 永久地址
- 完全控制
- 专业形象

---

现在试试这个地址：`http://192.168.1.2.xip.io:3002`