import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 格式化日期
export function formatDate(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return dateObj.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// 格式化年份范围
export function formatYearRange(startYear?: string, endYear?: string): string {
  if (!startYear && !endYear) return ''
  if (!startYear) return `– ${endYear}`
  if (!endYear) return `${startYear} –`
  return `${startYear} – ${endYear}`
}

// 生成阅读时间估算
export function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200 // 中文阅读速度
  const wordCount = content.length
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return Math.max(1, minutes)
}

// 截取文本
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

// 获取难度等级显示文本
export function getDifficultyText(difficulty: string): string {
  const difficultyMap = {
    beginner: '入门',
    intermediate: '中级',
    advanced: '高级',
  }
  return difficultyMap[difficulty as keyof typeof difficultyMap] || difficulty
}

// 获取难度等级样式
export function getDifficultyClass(difficulty: string): string {
  const classMap = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800',
  }
  return classMap[difficulty as keyof typeof classMap] || 'bg-gray-100 text-gray-800'
}