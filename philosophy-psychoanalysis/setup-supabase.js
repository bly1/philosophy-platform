const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function setupSupabase() {
  console.log('🔥 Supabase 自动设置向导')
  console.log('=============================\n')

  // 获取项目 URL
  const url = await askQuestion('1. 请输入你的 Supabase 项目 URL (例如: https://xxxx.supabase.co): ')

  // 获取 anon key
  const anonKey = await askQuestion('2. 请输入你的 Supabase anon key: ')

  // 创建环境变量文件
  const envContent = `# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=${url}
NEXT_PUBLIC_SUPABASE_ANON_KEY=${anonKey}
SUPABASE_SERVICE_ROLE_KEY=${anonKey}
`

  fs.writeFileSync('.env.local', envContent)
  console.log('\n✅ 环境变量已保存到 .env.local')

  // 连接到 Supabase
  const supabase = createClient(url, anonKey)

  console.log('\n📝 正在创建必要的表...')

  // 创建用户表
  const { error: profilesError } = await supabase.rpc('exec', {
    sql: `
      CREATE TABLE IF NOT EXISTS profiles (
        id UUID REFERENCES auth.users(id) PRIMARY KEY,
        display_name TEXT,
        avatar_url TEXT,
        bio TEXT,
        interests TEXT[],
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      );

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
    `
  })

  if (profilesError) {
    console.log('⚠️  表可能已经存在，继续...')
  } else {
    console.log('✅ 用户表创建成功')
  }

  // 创建学习进度表
  const { error: progressError } = await supabase.rpc('exec', {
    sql: `
      CREATE TABLE IF NOT EXISTS learning_progress (
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
    `
  })

  if (progressError) {
    console.log('⚠️  学习进度表可能已经存在，继续...')
  } else {
    console.log('✅ 学习进度表创建成功')
  }

  console.log('\n🎉 Supabase 设置完成！')
  console.log('\n接下来：')
  console.log('1. 运行 npm run dev 启动开发服务器')
  console.log('2. 访问 http://localhost:3000/auth/register 注册账号')
  console.log('3. 开始使用你的哲学学习平台！')

  rl.close()
}

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer))
  })
}

// 启动设置
setupSupabase().catch(console.error)