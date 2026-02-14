import Image from 'next/image'
import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import Card, { CardContent } from '@/components/ui/Card'

const philosophers = [
  {
    id: 'socrates',
    name: '苏格拉底',
    name_en: 'Socrates',
    era: '古希腊',
    years: '公元前470-399年',
    nationality: '古希腊',
    avatar: '/avatars/socrates.jpg',
    bio: '西方哲学的奠基人之一，以苏格拉底法和诘问法闻名。他认为"未经审视的人生不值得过"。',
    key_concepts: ['认识你自己', '苏格拉底法', '美德即知识'],
    main_works: ['申辩篇', '克里同篇', '斐多篇'],
    school: '古典哲学'
  },
  {
    id: 'plato',
    name: '柏拉图',
    name_en: 'Plato',
    era: '古希腊',
    years: '公元前427-347年',
    nationality: '古希腊',
    avatar: '/avatars/plato.jpg',
    bio: '苏格拉底的学生，建立学园(Academy)。著作《理想国》阐述了理念论和理想政治制度。',
    key_concepts: ['理念论', '洞穴寓言', '哲学王'],
    main_works: ['理想国', '斐德罗篇', '会饮篇'],
    school: '柏拉图主义'
  },
  {
    id: 'aristotle',
    name: '亚里士多德',
    name_en: 'Aristotle',
    era: '古希腊',
    years: '公元前384-322年',
    nationality: '古希腊',
    avatar: '/avatars/aristotle.jpg',
    bio: '柏拉图的学生，亚历山大大帝的老师。建立逻辑学体系，对后世的科学和哲学产生深远影响。',
    key_concepts: ['形式与质料', '四因说', '中庸之道'],
    main_works: ['形而上学', '尼各马可伦理学', '政治学'],
    school: '亚里士多德主义'
  },
  {
    id: 'descartes',
    name: '笛卡尔',
    name_en: 'René Descartes',
    era: '近代早期',
    years: '1596-1650年',
    nationality: '法国',
    avatar: '/avatars/descartes.jpg',
    bio: '现代哲学之父，提出"我思故我在"。开创了理性主义传统，强调理性在认识中的决定作用。',
    key_concepts: ['我思故我在', '身心二元论', '理性主义'],
    main_works: ['第一哲学沉思录', '谈谈方法', '哲学原理'],
    school: '理性主义'
  },
  {
    id: 'nietzsche',
    name: '尼采',
    name_en: 'Friedrich Nietzsche',
    era: '19世纪',
    years: '1844-1900年',
    nationality: '德国',
    avatar: '/avatars/nietzsche.jpg',
    bio: '存在主义的先驱之一，提出"上帝已死"、"超人"等概念。对传统道德和价值观进行深刻批判。',
    key_concepts: ['权力意志', '永恒轮回', '主人-奴隶道德'],
    main_works: ['查拉图斯特拉如是说', '善恶的彼岸', '道德的谱系'],
    school: '存在主义'
  },
  {
    id: 'heidegger',
    name: '海德格尔',
    name_en: 'Martin Heidegger',
    era: '20世纪',
    years: '1889-1976年',
    nationality: '德国',
    avatar: '/avatars/heidegger.jpg',
    bio: '20世纪最重要的哲学家之一，《存在与时间》探讨了存在的意义问题。',
    key_concepts: ['此在', '存在与时间', '向死而生'],
    main_works: ['存在与时间', '形而上学导论', '论真理的本质'],
    school: '现象学·存在主义'
  }
]

export default function PhilosophersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 font-serif mb-4">
            西方哲学家
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            穿越时空，与伟大的思想对话。了解塑造人类文明的关键哲学思想。
          </p>
        </div>
      </div>

      {/* Philosophers Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {philosophers.map((philosopher) => (
            <Card key={philosopher.id} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                {/* Avatar */}
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-sage-100 rounded-full flex items-center justify-center text-4xl">
                    {philosopher.name.charAt(0)}
                  </div>
                </div>

                {/* Name and Era */}
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 font-serif mb-1 group-hover:text-primary-600 transition-colors">
                    {philosopher.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium">
                    {philosopher.name_en} · {philosopher.era}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {philosopher.years}
                  </p>
                </div>

                {/* Bio Preview */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {philosopher.bio}
                </p>

                {/* School Badge */}
                <div className="mb-4">
                  <Badge variant="outline">
                    {philosopher.school}
                  </Badge>
                </div>

                {/* Key Concepts */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-700 mb-2">核心概念</p>
                  <div className="flex flex-wrap gap-1">
                    {philosopher.key_concepts.slice(0, 3).map((concept, index) => (
                      <Badge key={index} variant="secondary" size="sm">
                        {concept}
                      </Badge>
                    ))}
                    {philosopher.key_concepts.length > 3 && (
                      <Badge variant="outline" size="sm">
                        +{philosopher.key_concepts.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <Link
                  href={`/philosophers/${philosopher.id}`}
                  className="block w-full text-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors text-sm font-medium"
                >
                  了解更多
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
              开始你的哲学之旅
            </h2>
            <p className="text-gray-600 mb-6">
              选择一位哲学家，深入了解他的思想如何影响至今
            </p>
            <Link
              href="/learning-paths"
              className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors font-medium"
            >
              查看学习路径
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}