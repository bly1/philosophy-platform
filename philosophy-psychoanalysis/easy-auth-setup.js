// 简单的自托管认证方案 - 无需 Supabase
const fs = require('fs');
const path = require('path');

// 创建本地认证系统
const authConfig = {
  // 使用 localStorage 存储用户数据
  storage: 'localStorage',
  // 默认管理员账号
  defaultAdmin: {
    email: 'demo@philosophy.com',
    password: 'demo123456',
    displayName: '演示用户'
  }
};

// 创建认证 API 路由
const authRoute = `
import { NextRequest, NextResponse } from 'next/server';

const users = [
  {
    id: '1',
    email: 'demo@philosophy.com',
    password: 'demo123456',
    displayName: '演示用户',
    role: 'admin'
  }
];

export async function POST(request) {
  const { email, password } = await request.json();

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    const { password: _, ...userWithoutPassword } = user;
    return NextResponse.json({
      success: true,
      user: userWithoutPassword,
      token: btoa(JSON.stringify(userWithoutPassword))
    });
  }

  return NextResponse.json({ success: false, error: '账号或密码错误' });
}
`;

// 创建 AuthProvider 的本地版本
const authProviderCode = `'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface User {
  id: string
  email: string
  displayName: string
  role: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // 从 localStorage 恢复用户信息
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      const data = await response.json()

      if (data.success) {
        setUser(data.user)
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        return true
      }
      return false
    } catch (error) {
      console.error('Login error:', error)
      return false
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/auth/login')
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
`;

// 创建简单的中间件
const middlewareCode = `
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isAuthPage = request.nextUrl.pathname.startsWith('/auth')
  const token = request.cookies.get('token')?.value || localStorage.getItem('token')

  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
`;

// 创建目录和文件
console.log('🔧 创建本地认证系统...');

// 确保 API 目录存在
if (!fs.existsSync('src/app/api')) {
  fs.mkdirSync('src/app/api', { recursive: true });
}

// 创建认证 API
fs.writeFileSync('src/app/api/auth/route.ts', authRoute);
console.log('✅ 创建了 src/app/api/auth/route.ts');

// 更新 AuthProvider
fs.writeFileSync('src/components/auth/AuthProvider.tsx', authProviderCode);
console.log('✅ 更新了 AuthProvider.tsx');

// 更新中间件
fs.writeFileSync('src/middleware.ts', middlewareCode);
console.log('✅ 更新了 middleware.ts');

// 创建使用说明
const usageGuide = `
# 🎉 本地认证系统已设置完成！

## 📋 默认账号信息

- **邮箱**: demo@philosophy.com
- **密码**: demo123456

## 🚀 启动方法

1. 运行开发服务器：
   \`\`\`bash
   npm run dev
   \`\`\`

2. 访问：http://localhost:3000

3. 使用默认账号登录

## ✨ 特点

- ✅ 无需任何账号注册
- ✅ 数据存储在浏览器本地
- ✅ 完全免费
- ✅ 支持多用户（需要修改代码）
- ✅ 支持会话持久化

## 🔧 如何添加新用户？

编辑 \`src/app/api/auth/route.ts\`，在 users 数组中添加新的用户：

\`\`\`javascript
const users = [
  {
    id: '1',
    email: 'demo@philosophy.com',
    password: 'demo123456',
    displayName: '演示用户',
    role: 'admin'
  },
  {
    id: '2',
    email: 'user@example.com',
    password: 'user123',
    displayName: '普通用户',
    role: 'user'
  }
];
\`\`\`

现在就可以直接使用了！
`;

fs.writeFileSync('LOCAL-AUTH-SETUP.md', usageGuide);
console.log('✅ 创建了 LOCAL-AUTH-SETUP.md');

console.log('\n🎉 本地认证系统设置完成！');
console.log('\n📋 默认账号：');
console.log('   邮箱: demo@philosophy.com');
console.log('   密码: demo123456');
console.log('\n🚀 现在运行 npm run dev 即可使用！');