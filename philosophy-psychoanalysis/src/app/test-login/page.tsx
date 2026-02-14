'use client'

import { useState } from 'react'

export default function TestLoginPage() {
  const [email, setEmail] = useState('demo@philosophy.com')
  const [password, setPassword] = useState('demo123')
  const [result, setResult] = useState('')
  const [token, setToken] = useState('')

  const handleLogin = async () => {
    setResult('登录中...')

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      const data = await response.json()

      if (data.success) {
        setToken(data.user.email)
        setResult(`✅ 登录成功！用户: ${data.user.displayName}`)
        // 存储到 localStorage
        localStorage.setItem('user', JSON.stringify(data.user))
      } else {
        setResult(`❌ 登录失败: ${data.error}`)
      }
    } catch (error) {
      setResult(`❌ 错误: ${error.message}`)
    }
  }

  const checkToken = () => {
    const user = localStorage.getItem('user')
    if (user) {
      const userData = JSON.parse(user)
      setUserToken(userData.email)
    } else {
      setUserToken('未登录')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    setToken('')
    setUserToken('未登录')
    setResult('')
  }

  const setUserToken = (email: string) => {
    setToken(email)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold text-center mb-8">
            登录测试页面
          </h1>

          {/* 当前 token */}
          <div className="mb-6 p-4 bg-gray-100 rounded">
            <p className="text-sm text-gray-600">当前用户：</p>
            <p className="font-medium">{token || '未登录'}</p>
          </div>

          {/* 标题 */}
          <h2 className="text-lg font-semibold mb-4">
            简单测试
          </h2>

          {/* 测试表单 */}
          <div className="space-y-4">
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="demo@philosophy.com"
            />
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="demo123"
            />

            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              登录
            </button>
          </div>

          {/* 结果 */}
          {result && (
            <div className={`mt-4 p-4 rounded ${result.includes('✅') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {result}
            </div>
          )}

          <div className="mt-6 space-x-4">
            <button
              onClick={checkToken}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
            >
              检查 Token
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
              disabled={!token}
            >
              退出
            </button>
          </div>

          {/* 测试说明 */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-md font-semibold mb-2">测试说明：</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 使用默认账号: demo@philosophy.com / demo123</li>
              <li>• 点击登录测试 API 连接</li>
li•• 登录成功后 token 会存储到 localStorage</li>
              <li>• 刷新页面后检查 Token 可持久化存储</li>
            </ul>
          </div>

          {/* 快速链接 */}
          <div className="mt-4 space-x-4">
            <a
              href="/auth/login"
              target="_blank"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              查看实际登录页
            </a>
            <a
              href="/"
              target="_blank"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              查看主页
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}