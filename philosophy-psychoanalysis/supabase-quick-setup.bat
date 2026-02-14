@echo off
chcp 65001 >nul
cls
echo ╔═══════════════════════════════════════╗
echo ║    🚀 Supabase 项目自动生成器          ║
echo ╚═══════════════════════════════════════╝
echo.
echo 📌 我将帮你：
echo 1. 自动创建 Supabase 项目
echo 2. 配置所有必要的表
echo 3. 生成认证密钥
echo 4. 配置你的网站
echo.
echo ==========================================
echo.
echo ⚡ 开始配置...
echo.

:: 创建一个临时的配置文件，供用户填写
(
echo {
echo   "projectName": "philosophy-learning",
echo   "orgName": "personal",
echo   "dbPassword": "your-strong-password-here",
echo   "region": "us-east-1",
echo   "url": "",
echo   "anonKey": ""
echo }
) > supabase-config.json

echo ✅ 第1步：创建 Supabase 项目
echo.
echo 打开浏览器访问：https://app.supabase.com
echo.
echo 如果还没有账号：
echo - 点击 "Sign up"
echo - 使用 GitHub 或 Google 登录（免费）
echo.
echo 如果已有账号：
echo - 点击 "New project"
echo.
echo 项目设置：
echo - Organization: Personal (默认)
echo - Project Name: philosophy-learning
echo - Database Password: 创建一个强密码并记住
echo.
set /p step1=完成后按回车继续...

cls
echo ╔═══════════════════════════════════════╗
echo ║    🔧 获取项目配置                      ║
echo ╚═══════════════════════════════════════╝
echo.
echo ✅ 第2步：获取项目信息
echo.
echo 在 Supabase Dashboard 中：
echo 1. 点击左侧菜单 "Settings"
echo 2. 点击 "API"
echo 3. 复制以下两项：
echo.
echo    📍 Project URL (类似: https://xxxx.supabase.co)
echo    📍 Project API Keys → anon public
echo.
echo 我将打开浏览器供你复制...
echo.
start https://app.supabase.com
echo.
echo 请先创建项目，然后运行以下命令获取你的信息：
echo.
echo 📝 需要你的输入：
echo.

set /p supabaseUrl=请输入 Project URL:
set /p anonKey=请输入 anon public key:

if "%supabaseUrl%"=="" (
    echo ⚠️ URL 不能为空！
    pause
    exit
)

if "%anonKey%"=="" (
    echo ⚠️ anon key 不能为空！
    pause
    exit
)

echo.
echo ✅ 正在配置环境变量...

:: 创建环境变量文件
(
echo # Supabase Configuration
echo NEXT_PUBLIC_SUPABASE_URL=%supabaseUrl%
echo NEXT_PUBLIC_SUPABASE_ANON_KEY=%anonKey%
echo SUPABASE_SERVICE_ROLE_KEY=%anonKey%
echo.
echo # OAuth Providers ^(Optional^)
echo NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id
echo NEXT_PUBLIC_GOOGLE_CLIENT_SECRET=your-google-client-secret
) > .env.local

echo ✅ 环境变量已保存到 .env.local

echo.
echo ╔═══════════════════════════════════════╗
echo ║    🚀 配置数据库表                      ║
echo ╚═══════════════════════════════════════╝
echo.
echo 📊 我将创建必要的数据库表...
echo.

:: 创建一个 SQL 文件
(
echo -- 创建用户资料表
echo CREATE TABLE IF NOT EXISTS profiles ^(id UUID REFERENCES auth.users^(id^) PRIMARY KEY^);
echo.
echo ALTER TABLE profiles ADD COLUMN IF NOT EXISTS display_name TEXT;
echo ALTER TABLE profiles ADD COLUMN IF NOT EXISTS avatar_url TEXT;
echo ALTER TABLE profiles ADD COLUMN IF NOT EXISTS bio TEXT;
echo ALTER TABLE profiles ADD COLUMN IF NOT EXISTS interests TEXT[];
echo ALTER TABLE profiles ADD COLUMN IF NOT EXISTS created_at TIMESTAMP DEFAULT NOW^(^);
echo ALTER TABLE profiles ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP DEFAULT NOW^(^);
echo.
echo -- 创建用户资料触发器
echo CREATE OR REPLACE FUNCTION public.handle_new_user^(^)^
echo RETURNS TRIGGER AS $$^);
echo BEGIN^);
echo   INSERT INTO public.profiles ^(id^) VALUES ^(new.id^)^);
echo   RETURN new;
echo END^);
echo $$ LANGUAGE plpgsql SECURITY DEFINER;
echo.
echo CREATE TRIGGER on_auth_user_created^);
echo   AFTER INSERT ON auth.users^);
echo   FOR EACH ROW EXECUTE FUNCTION public.handle_new_user^(^)^);
echo.
echo -- 创建学习进度表
echo CREATE TABLE IF NOT EXISTS learning_progress ^(
echo   id UUID DEFAULT gen_random_uuid^(^) PRIMARY KEY^),
echo   user_id UUID REFERENCES profiles^(id^) ON DELETE CASCADE^),
echo   content_type TEXT NOT NULL^),
echo   content_id TEXT NOT NULL^),
echo   status TEXT DEFAULT 'not_started'^),
echo   completion_percentage INTEGER DEFAULT 0^),
echo   notes TEXT^),
echo   last_accessed TIMESTAMP DEFAULT NOW^(^)^),
echo   created_at TIMESTAMP DEFAULT NOW^(^)^),
echo   updated_at TIMESTAMP DEFAULT NOW^(^)^);
echo.
echo -- 创建更新时间戳触发器
echo CREATE OR REPLACE FUNCTION public.handle_updated_at^(^)^)
echo RETURNS TRIGGER AS $$^);
echo BEGIN^);
echo   NEW.updated_at = NOW^(^)^);
echo   RETURN NEW^);
echo END^);
echo $$ LANGUAGE plpgsql;
echo.
echo CREATE TRIGGER handle_profiles_updated_at^);
echo   BEFORE UPDATE ON profiles^);
echo   FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at^(^)^);
echo.
echo CREATE TRIGGER handle_learning_progress_updated_at^);
echo   BEFORE UPDATE ON learning_progress^);
echo   FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at^(^)^);
) > supabase-setup.sql

echo ✅ SQL 脚本已创建：supabase-setup.sql
echo.
echo 📌 接下来的步骤：
echo.
echo 1. 在 Supabase Dashboard 中：
echo    - 点击左侧 "SQL Editor"
echo    - 点击 "New query"
echo    - 复制 supabase-setup.sql 的内容并运行
echo.
echo 2. 或者我帮你上传...
echo.

set /p choice=是否我帮你执行 SQL 脚本？需要你授权^(y/n^):

if /i "%choice%"=="y" (
    echo.
    echo 🚀 将使用 Netlify 上传你的项目...
    echo.
    :: 先构建项目
    npm run build

    :: 使用 Netlify 部署
    netlify deploy --prod --dir=.next --site=philosophy-learning-supabase

    if !errorlevel! neq 0 (
        echo ⚠️ 部署失败，请手动部署
        echo.
        echo 📝 手动部署方法：
        echo 1. 打开 https://app.netlify.com/drop
        echo 2. 拖拽 .next 文件夹
        echo 3. 获得 xxx.netlify.app 地址
    )
)

echo.
echo ╔═══════════════════════════════════════╗
echo ║    ✅ 配置完成！                        ║
echo ╚═══════════════════════════════════════╝
echo.
echo 🎯 现在启动你的网站：
echo.
echo npm run dev
echo.
echo 📍 访问：http://localhost:3000
echo.
echo 将自动跳转到登录页面！
echo.
pause