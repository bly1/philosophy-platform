import { NextRequest, NextResponse } from 'next/server'

// 默认用户数据（存储在内存中）
const users = [
  {
    id: '1',
    email: 'demo@philosophy.com',
    password: 'demo123',
    displayName: '演示用户',
  },
  {
    id: '2',
    email: 'guest@philosophy.com',
    password: 'guest123',
    displayName: '访客用户',
  }
]

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // 查找用户
    const user = users.find(u => u.email === email && u.password === password)

    if (user) {
      // 移除密码
      const { password: _, ...userWithoutPassword } = user

      return NextResponse.json({
        success: true,
        user: userWithoutPassword
      })
    }

    return NextResponse.json({
      success: false,
      error: '邮箱或密码错误'
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: '登录失败'
    })
  }
}