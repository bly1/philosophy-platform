import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import Card, { CardContent } from '@/components/ui/Card'

const themes = [
  {
    id: 'consciousness',
    name: '意识之谜',
    description: '探索意识的本质，从笛卡尔的"我思故我在"到现代认知科学',
    icon: '🧠',
    question: '意识究竟是什么？',
    topics: ['主观体验', '自我意识', '意识与物质'],
    difficulty: 'intermediate'
  },
  {
    id: 'unconscious',
    name: '无意识的领域',
    description: '深入弗洛伊德、荣格和拉康对无意识的理解',
    icon: '🌊',
    question: '无意识如何影响我们的行为？',
    topics: ['梦境解析', '原型理论', '欲望结构'],
    difficulty: 'advanced'
  },
  {
    id: 'existence',
    name: '存在的意义',
    description: '从海德格尔到萨特，探讨人类存在的本质',
    icon: '🌟',
    question: '什么是真实的存在？',
    topics: [' Being 与 Time ', '自由与责任', '荒诞与意义'],
    difficulty: 'advanced'
  },
  {
    id: 'desire',
    name: '欲望的哲学',
    description: '柏拉图的爱欲说与拉康的欲望理论对话',
    icon: '💝',
    question: '欲望驱动了什么？',
    topics: ['爱欲阶梯', '缺失与渴求', '欲望的辩证法'],
    difficulty: 'intermediate'
  },
  {
    id: 'ethics',
    name: '道德与良知',
    description: '从康德到现代心理学的道德发展理论',
    icon: '⚖️',
    question: '什么是善？',
    topics: ['绝对命令', '道德情感', '良知形成'],
    difficulty: 'beginner'
  },
  {
    id: 'truth',
    name: '真理的本质',
    description: '认识论与精神分析对真理的不同理解',
    icon: '🔍',
    question: '我们如何认识真理？',
    topics: ['符合论', '融贯论', '真理的主观性'],
    difficulty: 'intermediate'
  }
]

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 font-serif mb-4">
            探索核心主题
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            深入贯穿哲学与精神分析的核心概念，通过系统化的路径理解人类思想的最深层问题。
          </p>
        </div>
      </div>

      {/* Themes Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme) => (
            <Card key={theme.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{theme.icon}</span>
                  <Badge variant="secondary" size="sm">
                    {theme.difficulty === 'beginner' && '入门'}
                    {theme.difficulty === 'intermediate' && '中级'}
                    {theme.difficulty === 'advanced' && '高级'}
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-serif group-hover:text-primary-600 transition-colors">
                  {theme.name}
                </h3>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {theme.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">核心问题</p>
                  <p className="text-gray-900 font-serif italic">&ldquo;{theme.question}&rdquo;</p>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-700 mb-2">涉及概念</p>
                  <div className="flex flex-wrap gap-2">
                    {theme.topics.map((topic, index) => (
                      <Badge key={index} variant="outline" size="sm">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/explore/${theme.id}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm group"
                >
                  开始探索
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Related Content */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 font-serif">推荐学习路径</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-primary-500">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  哲学基础之旅
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  从古希腊哲学开始，系统学习西方哲学发展脉络
                </p>
                <Link
                  href="/learning-paths/philosophy-basics"
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  查看路径 →
                </Link>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-sage-500">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  精神分析入门
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  了解弗洛伊德、荣格、拉康的核心理论体系
                </p>
                <Link
                  href="/learning-paths/psychoanalysis-intro"
                  className="text-sage-600 hover:text-sage-700 font-medium text-sm"
                >
                  查看路径 →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}