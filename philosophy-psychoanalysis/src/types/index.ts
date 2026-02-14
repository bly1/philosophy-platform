// 基础类型定义
export interface BaseEntity {
  id: string
  created_at: string
  updated_at: string
}

// 哲学家相关类型
export interface Philosopher extends BaseEntity {
  name: string
  name_en: string
  era: string
  era_years: string
  nationality: string
  avatar_url?: string
  biography: string
  main_works: Work[]
  core_concepts: CoreConcept[]
  schools_of_thought: string[]
  influences: string[]
  influenced: string[]
}

export interface Work extends BaseEntity {
  title: string
  title_en: string
  year?: string
  description: string
  philosopher_id: string
}

export interface CoreConcept extends BaseEntity {
  name: string
  name_en: string
  definition: string
  explanation: string
  philosopher_id: string
  category: 'metaphysics' | 'epistemology' | 'ethics' | 'aesthetics' | 'political' | 'other'
}

// 精神分析相关类型
export interface Psychoanalyst extends BaseEntity {
  name: string
  name_en: string
  era: string
  nationality: string
  avatar_url?: string
  biography: string
  main_theories: PsychoanalyticTheory[]
  key_concepts: PsychoanalyticConcept[]
  approach: string
  legacy: string
}

export interface PsychoanalyticTheory extends BaseEntity {
  name: string
  name_en: string
  description: string
  psychoanalyst_id: string
  applications: string[]
}

export interface PsychoanalyticConcept extends BaseEntity {
  name: string
  name_en: string
  definition: string
  examples: string[]
  psychoanalyst_id: string
  related_concepts: string[]
}

// 主题探索类型
export interface Theme extends BaseEntity {
  name: string
  description: string
  philosopher_ids: string[]
  psychoanalyst_ids: string[]
  related_themes: string[]
  exploration_questions: ExplorationQuestion[]
}

export interface ExplorationQuestion extends BaseEntity {
  question: string
  hint?: string
  reflection_points: string[]
  theme_id: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
}

// 用户相关类型
export interface User extends BaseEntity {
  email: string
  username: string
  display_name: string
  avatar_url?: string
  bio?: string
  interests: string[]
  learning_progress: LearningProgress[]
}

export interface LearningProgress extends BaseEntity {
  user_id: string
  content_type: 'philosopher' | 'psychoanalyst' | 'theme' | 'concept'
  content_id: string
  status: 'not_started' | 'in_progress' | 'completed'
  completion_percentage: number
  notes?: string
  last_accessed: string
}

// 社区相关类型
export interface Discussion extends BaseEntity {
  title: string
  content: string
  author_id: string
  category: 'philosophy' | 'psychoanalysis' | 'cross_disciplinary' | 'general'
  tags: string[]
  replies: Reply[]
  views: number
  likes: number
}

export interface Reply extends BaseEntity {
  content: string
  author_id: string
  discussion_id: string
  parent_reply_id?: string
  likes: number
}

// 案例研究类型
export interface CaseStudy extends BaseEntity {
  title: string
  description: string
  scenario: string
  analysis_approaches: AnalysisApproach[]
  key_insights: string[]
  related_concepts: string[]
  difficulty: 'beginner' | 'intermediate' | 'advanced'
}

export interface AnalysisApproach extends BaseEntity {
  name: string
  description: string
  steps: string[]
  case_study_id: string
  type: 'philosophical' | 'psychoanalytic' | 'integrated'
}

// 学习路径类型
export interface LearningPath extends BaseEntity {
  title: string
  description: string
  duration_weeks: number
  level: 'beginner' | 'intermediate' | 'advanced'
  modules: PathModule[]
  prerequisites: string[]
}

export interface PathModule extends BaseEntity {
  title: string
  description: string
  order_index: number
  learning_path_id: string
  content_items: PathContentItem[]
  estimated_hours: number
}

export interface PathContentItem extends BaseEntity {
  content_type: 'philosopher' | 'psychoanalyst' | 'theme' | 'concept' | 'case_study'
  content_id: string
  path_module_id: string
  order_index: number
  is_required: boolean
}