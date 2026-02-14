'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useAuth } from '@/components/auth/AuthProvider'
import { RequireAuth } from '@/components/auth/RequireAuth'

export default function HomePage() {
  const { user } = useAuth()

  return (
    <RequireAuth>
      <div className="min-h-screen bg-gradient-to-br from-sage-50 to-primary-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
                探索思想的
                <span className="text-transparent bg-clip-text bg-primary-600">
                  {" "}深度之旅
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                在这里，哲学与精神分析相遇，带你深入理解人类意识的奥秘。
                通过系统化的学习路径，掌握核心概念，开启心智探索之旅。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/explore"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 transition-colors"
                >
                  开始探索
                </Link>
                <Link
                  href="/philosophers"
                  className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  了解哲学家
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-sage-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                为什么选择我们？
              </h2>
              <p className="text-lg text-gray-600">
                系统化的学习体验，让复杂的理论变得易于理解
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 p-4 bg-primary-100 rounded-full group-hover:bg-primary-200 transition-colors">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">系统化内容</h3>
                <p className="text-gray-600">从古希腊哲学到现代精神分析，构建完整的知识体系</p>
              </div>

              {/* Feature 2 */}
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 p-4 bg-sage-100 rounded-full group-hover:bg-sage-200 transition-colors">
                  <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">深度思辨</h3>
                <p className="text-gray-600">通过引导性问题和案例，培养批判性思维能力</p>
              </div>

              {/* Feature 3 */}
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 p-4 bg-primary-100 rounded-full group-hover:bg-primary-200 transition-colors">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 017.072 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">社区互动</h3>
                <p className="text-gray-600">与志同道合的学习者交流，获得导师专业指导</p>
              </div>

              {/* Feature 4 */}
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 p-4 bg-sage-100 rounded-full group-hover:bg-sage-200 transition-colors">
                  <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">进度追踪</h3>
                <p className="text-gray-600">可视化学习路径，记录你的成长轨迹</p>
              </div>
            </div>
          </div>
        </section>

        {/* Spotlight Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                今日思考
              </h2>
              <p className="text-lg text-gray-600 font-serif italic">
                &ldquo;未经审视的人生不值得过。&rdquo; —— 苏格拉底
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                  什么是自我认知？
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  自我认知是人类最深刻的探索之一。从古希腊德尔斐神庙的&ldquo;认识你自己&rdquo;，
                  到现代心理学的自我理论，我们一直在追问：我是谁？我为何如此思考与行动？
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  哲学提供了理性思辨的工具，精神分析揭示了无意识的奥秘。
                  当这两种视角相遇，我们将获得前所未有的深度理解。
                </p>
                <Link
                  href="/explore/self-awareness"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  深入阅读
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-sage-100 rounded-2xl shadow-xl"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-200 rounded-lg opacity-50 blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-sage-200 rounded-lg opacity-50 blur-xl"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </RequireAuth>
  )
}