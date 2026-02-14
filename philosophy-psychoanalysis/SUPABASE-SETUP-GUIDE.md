# 🔥 Supabase 认证设置完整指南

## 📋 快速开始

### 第1步：创建 Supabase 项目

1. **访问** https://supabase.com
2. **点击** "Start your project"
3. **登录**（使用 GitHub 或 Google，免费）
4. **创建新项目**：
   - Organization: 选择默认的
   - Project Name: `philosophy-learning`
   - Database Password: 创建一个强密码（保存好）
   - Region: 选择离你最近的
   - 点击 "Create new project"

### 第2步：获取项目信息

1. **等待项目创建完成**（约1-2分钟）
2. **点击** Settings → API
3. **复制**：
   - Project URL
   - anon public key

### 第3步：运行自动设置

**双击运行**：`auto-supabase-setup.bat`

这个脚本会：
- ✅ 安装必要的依赖
- ✅ 配置环境变量
- ✅ 创建数据库表
- ✅ 设置触发器

### 第4步：测试系统

1. **启动开发服务器**：
   ```cmd
   npm run dev
   ```

2. **访问** http://localhost:3000

3. **自动跳转到登录页**（如果没有登录）

4. **注册账号测试**：
   - 访问 http://localhost:3000/auth/register
   - 填写信息注册
   - 检查邮箱确认（可选）

## 🎯 完成后你将拥有

### ✅ 用户认证系统
- ✅ 注册/登录
- ✅ 密码重置
- ✅ 社交登录（Google 等）
- ✅ 会话管理

### ✅ 数据库表
- `profiles` - 用户资料
- `learning_progress` - 学习进度

### ✅ 安全功能
- 登录保护
- 路由守卫
- 会话持久化

## 📱 访问测试

完成设置后，访问流程：

1. **未登录用户** → 自动跳转到 `/auth/login`
2. **注册账号** → 填写表单 → 成功后跳转
3. **登录后** → 可以访问所有页面
4. **访问受保护页面** → 需要登录

## 🔧 手动配置（如果自动脚本失败）

### 1. 设置环境变量

创建 `.env.local` 文件：
```env
NEXT_PUBLIC_SUPABASE_URL=https://你的项目ID.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=你的密钥
```

### 2. 创建数据库表

在 Supabase Dashboard → SQL Editor 运行：

```sql
-- 用户资料表
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  display_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  interests TEXT[],
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 创建触发器
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name)
  VALUES (new.id, new.raw_user_meta_data->>'display_name');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 学习进度表
CREATE TABLE learning_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  content_type TEXT NOT NULL,
  content_id TEXT NOT NULL,
  status TEXT DEFAULT 'not_started',
  completion_percentage INTEGER DEFAULT 0,
  notes TEXT,
  last_accessed TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

## 🚀 部署到生产环境

使用 Vercel 部署时：

1. 在 Vercel 项目设置中添加环境变量
2. 在 Supabase 中添加你的 Vercel 域名到 Authentication → URL Configuration

## 💡 常见问题

### Q: 忘记数据库密码怎么办？
A: Supabase 不会显示密码，但你可以重置。在项目设置中操作。

### Q: 如何添加 Google 登录？
A: Supabase Dashboard → Authentication → Providers → Google

### Q: 如何修改认证设置？
A: Supabase Dashboard → Authentication → Settings

---

现在就开始吧！运行 `auto-supabase-setup.bat` 即可！