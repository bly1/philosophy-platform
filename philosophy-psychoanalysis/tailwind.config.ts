import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        sage: {
          50: '#f8faf9',
          100: '#f1f5f2',
          200: '#e2eae5',
          300: '#c8d7cc',
          400: '#a8c09a',
          500: '#8ba57f',
          600: '#738c69',
          700: '#5f7655',
          800: '#4e5f44',
          900: '#424d39',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-merriweather)'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#334155',
            a: {
              color: '#0284c7',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            h1: {
              color: '#1e293b',
              fontWeight: '700',
            },
            h2: {
              color: '#334155',
              fontWeight: '600',
            },
            h3: {
              color: '#475569',
              fontWeight: '600',
            },
            blockquote: {
              borderLeftColor: '#cbd5e1',
              fontStyle: 'italic',
              color: '#64748b',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config