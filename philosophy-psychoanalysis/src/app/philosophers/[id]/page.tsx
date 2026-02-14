'use client'

import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Badge from '@/components/ui/Badge'
import Card, { CardContent } from '@/components/ui/Card'

const philosopherData: Record<string, any> = {
  socrates: {
    id: 'socrates',
    name: '苏格拉底',
    name_en: 'Socrates',
    era: '古希腊',
    years: '公元前470-399年',
    nationality: '古希腊',
    bio: '苏格拉底（公元前470-399年）是西方哲学的奠基人之一，被誉为"哲学的化身"。他的一生都在雅典的街头广场上与人对话，通过不断追问的方式引导人们思考。苏格拉底从未写下任何著作，他的思想主要通过其学生柏拉图和色诺芬的对话录流传至今。\n\n他著名的"苏格拉底法"（又称诘问法）通过连续提问帮助人们认识到自己的无知。他曾说："我唯一知道的就是我一无所知。"这句看似矛盾的话体现了他对知识本质的深刻理解。\n\n公元前399年，苏格拉底被雅典法庭以"腐蚀青年"和"不敬神"的罪名判处死刑。他平静地接受判决，拒绝逃亡，最终饮下毒芹酒而死。他的殉道精神成为后世哲学家的榜样。',
    early_life: '苏格拉底出生在雅典的一个普通家庭，父亲是石匠，母亲是助产士。早年可能学习过雕刻艺术，参加过伯罗奔尼撒战争。据说他相貌奇特，鼻梁塌陷，眼睛突出，但拥有超凡的智慧和魅力。',
    main_works: [
      {
        title: '申辩篇',
        year: '公元前399年',
        description: '柏拉图记录的苏格拉底在法庭上的自我辩护。苏格拉底在辩护中不仅回应了指控，更重要的是阐述了自己的哲学使命。'
      },
      {
        title: '克里同篇',
        year: '公元前399年',
        description: '讨论了公民与法律的关系。苏格拉底拒绝朋友帮助他越狱，强调即使法律不公正，公民也应遵守。'
      },
      {
        title: '斐多篇',
        year: '公元前399年',
        description: '描述了苏格拉底临终前的最后一番谈话，探讨了灵魂不朽的问题，体现了他的生死观。'
      }
    ],
    key_concepts: [
      {
        name: '认识你自己',
        explanation: '镌刻在德尔斐神庙的箴言，苏格拉底将其发展为哲学方法。他认为真正的智慧始于认识自己的无知。'
      },
      {
        name: '苏格拉底法',
        explanation: '通过连续提问和对话揭示概念本质的方法。包括讽刺、归纳和定义三个阶段，帮助对话者获得真知。'
      },
      {
        name: '美德即知识',
        explanation: '苏格拉底的伦理学核心观点。他认为无人自愿作恶，恶行源于无知。因此，只有通过知识才能达到美德。'
      }
    ],
    influences: ['阿那克萨哥拉', '巴门尼德', '智者学派'],
    influenced: ['柏拉图', '色诺芬', '亚里士多德', '斯多葛学派'],
    legacy: '苏格拉底的影响超越了时代，他开创了西方哲学的理性主义传统。他的方法至今仍在教育和学术界广泛应用。"苏格拉底式对话"成为批判性思维训练的重要工具。他视死如归的精神和对真理的追求，激励着无数后来者。'
  },
  plato: {
    id: 'plato',
    name: '柏拉图',
    name_en: 'Plato',
    era: '古希腊',
    years: '公元前427-347年',
    nationality: '古希腊',
    bio: '柏拉图（公元前427-347年）是西方哲学史上最具影响力的哲学家之一。他是苏格拉底的学生，亚里士多德的老师。柏拉图在雅典建立了学园，被认为是西方第一所高等教育机构。\n\n柏拉图写了约30篇对话录，其中大部分以苏格拉底为主角。他的哲学体系涵盖了形而上学、认识论、伦理学、政治学、美学等几乎所有哲学领域。《理想国》是其最著名的作品，提出了理念论和理想政治制度。\n\n柏拉图的思想深刻影响了后世的哲学、宗教和政治思想。他的理念论成为西方唯心主义传统的源头。',
    early_life: '柏拉图出身高贵，父亲阿里斯顿是雅典末代国王的后裔。他原名阿里斯托勒斯，后因肩膀宽广被体育老师称为"柏拉图"（意为"宽阔"）。早年曾学习诗歌和绘画，20岁左右开始追随苏格拉底。',
    main_works: [
      {
        title: '理想国',
        year: '约公元前380年',
        description: '探讨什么是正义，提出理想城邦的构想，阐述了著名的理念论、洞穴寓言和哲学王概念。'
      },
      {
        title: '会饮篇',
        year: '约公元前385年',
        description: '通过宴会上关于爱神的演讲，探讨了美的本质和爱的哲学，提出从具体美到理念美的上升过程。'
      },
      {
        title: '斐德罗篇',
        year: '约公元前370年',
        description: '讨论爱、美和灵魂不朽，提出灵魂马车比喻，将爱视为追求真理的动力。'
      }
    ],
    key_concepts: [
      {
        name: '理念论',
        explanation: '认为存在一个永恒不变的理念世界，具体事物只是理念的不完美摹本。只有理念才是真正的实在。'
      },
      {
        name: '洞穴寓言',
        explanation: '描述囚徒在洞穴中看到影子，比喻人类对真实世界的无知，强调哲学教育的重要性。'
      },
      {
        name: '哲学王',
        explanation: '在理想国中，由真正理解理念的哲学家来统治，因为他们具有真正的知识和德性。'
      }
    ],
    influences: ['苏格拉底', '毕达哥拉斯学派', '巴门尼德'],
    influenced: ['亚里士多德', '普罗提诺', '奥古斯丁', '新柏拉图主义'],
    legacy: '柏拉图建立了西方哲学的基本框架，他的理念论影响了两千多年的哲学发展。他提出的"理想国"成为乌托邦思想的源头。学园作为学术机构存在了近900年，对古希腊学术传承起到关键作用。'
  },
  descartes: {
    id: 'descartes',
    name: '笛卡尔',
    name_en: 'René Descartes',
    era: '近代早期',
    years: '1596-1650年',
    nationality: '法国',
    bio: '勒内·笛卡尔（1596-1650）是法国哲学家、数学家、科学家，被誉为"现代哲学之父"。他开创了理性主义传统，为现代哲学奠定了基础。笛卡尔还是解析几何的创始人，至今我们在数学课上学到的直角坐标系就源自他的贡献。\n\n笛卡尔青年时期游历欧洲，曾在荷兰军队服役。1629年后定居荷兰，专心写作。1649年应瑞典女王邀请前往斯德哥尔摩，次年因肺炎去世。他最著名的命题"我思故我在"成为现代哲学的出发点。',
    early_life: '笛卡尔出生于法国拉艾镇的一个贵族家庭。母亲在他出生不久后去世。1604-1612年在拉弗莱什 Jesuit 学院接受教育，这里严格的学术训练培养了他的数学和逻辑思维。但正是这种教育让他意识到自己并非无所不知。',
    main_works: [
      {
        title: '谈谈方法',
        year: '1637年',
        description: '以法语写成，面向更广泛的读者。提出方法论四准则，为科学和哲学研究提供方法基础。'
      },
      {
        title: '第一哲学沉思录',
        year: '1641年',
        description: '拉丁文作品，通过六个沉思论证上帝存在、物质世界实在性等，提出著名的"我思故我在"。'
      },
      {
        title: '哲学原理',
        year: '1644年',
        description: '系统阐述其哲学体系，包括形而上学、物理学和宇宙论，是用作大学教材的作品。'
      }
    ],
    key_concepts: [
      {
        name: '我思故我在',
        explanation: '通过普遍怀疑最终确定无法怀疑的是"我正在思考"这一事实，以此作为哲学的确定性基础。'
      },
      {
        name: '身心二元论',
        explanation: '认为人由两种完全不同的实体组成：思想（心灵）和广延（身体），二者通过松果体相互作用。'
      },
      {
        name: '理性主义',
        explanation: '强调理性是获得真知的主要途径，清晰的观念比感官经验更可靠，数学方法是哲学的理想模型。'
      }
    ],
    influences: ['亚里士多德', '经院哲学', '伽利略'],
    influenced: ['斯宾诺莎', '莱布尼茨', '康德', '现代哲学'],
    legacy: '笛卡尔开创的现代哲学传统使哲学从神学中独立出来，确立了主体性在哲学中的中心地位。他的方法论和理性主义深刻影响了科学革命。笛卡尔坐标系将代数和几何结合，开创了现代数学的新纪元。'
  }
}

export default function PhilosopherDetailPage() {
  const params = useParams()
  const id = params.id as string

  const philosopher = philosopherData[id]

  if (!philosopher) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/philosophers"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回哲学家列表
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Basic Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {/* Avatar */}
                <div className="mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-sage-100 rounded-full flex items-center justify-center text-5xl mx-auto">
                    {philosopher.name.charAt(0)}
                  </div>
                </div>

                {/* Name and Basic Info */}
                <div className="text-center mb-6">
                  <h1 className="text-3xl font-bold text-gray-900 font-serif mb-2">
                    {philosopher.name}
                  </h1>
                  <p className="text-lg text-gray-600 font-medium mb-1">
                    {philosopher.name_en}
                  </p>
                  <p className="text-sm text-gray-500">
                    {philosopher.era} · {philosopher.years}
                  </p>
                  <p className="text-sm text-gray-500">
                    {philosopher.nationality}
                  </p>
                </div>

                {/* Quick Facts */}
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">关键信息</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="text-gray-500">时代：</span>
                        <span className="text-gray-900 ml-2">{philosopher.era}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">生卒年：</span>
                        <span className="text-gray-900 ml-2">{philosopher.years}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">国籍：</span>
                        <span className="text-gray-900 ml-2">{philosopher.nationality}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Related Philosophers */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">思想关联</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-2">受其影响：</p>
                        <div className="flex flex-wrap gap-2">
                          {philosopher.influences.map((name: string, index: number) => (
                            <Badge key={index} variant="outline" size="sm">
                              {name}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-2">影响了：</p>
                        <div className="flex flex-wrap gap-2">
                          {philosopher.influenced.map((name: string, index: number) => (
                            <Badge key={index} variant="secondary" size="sm">
                              {name}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Biography */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">生平简介</h2>
                  <div className="prose prose-lg max-w-none">
                    {philosopher.bio.split('\n\n').map((paragraph: string, index: number) => (
                      <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Major Works */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">主要著作</h2>
                  <div className="space-y-6">
                    {philosopher.main_works.map((work: any, index: number) => (
                      <div key={index} className="border-l-4 border-primary-500 pl-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {work.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">{work.year}</p>
                        <p className="text-gray-700">{work.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Concepts */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">核心概念</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {philosopher.key_concepts.map((concept: any, index: number) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {concept.name}
                        </h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {concept.explanation}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Legacy */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">历史影响</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {philosopher.legacy}
                  </p>
                </CardContent>
              </Card>

              {/* Related Topics */}
              <div className="bg-primary-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">探索相关主题</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link
                    href={`/explore/ethics`}
                    className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-semibold text-gray-900 mb-1">道德哲学</h3>
                    <p className="text-sm text-gray-600">探索善恶与美德的本质</p>
                  </Link>
                  <Link
                    href={`/explore/knowledge`}
                    className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-semibold text-gray-900 mb-1">认识论</h3>
                    <p className="text-sm text-gray-600">追问知识与真理的可能性</p>
                  </Link>
                  <Link
                    href={`/explore/education`}
                    className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-semibold text-gray-900 mb-1">教育哲学</h3>
                    <p className="text-sm text-gray-600">理解教育的目的与方法</p>
                  </Link>
                  <Link
                    href={`/explore/dialogue`}
                    className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-semibold text-gray-900 mb-1">对话与辩证法</h3>
                    <p className="text-sm text-gray-600">通过对话探索真理</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}