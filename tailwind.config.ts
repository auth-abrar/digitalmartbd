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
        brand: {
          purple: '#4C1D95',
          'purple-dark': '#3B0764',
          violet: '#7C3AED',
          'violet-hover': '#6D28D9',
          magenta: '#C026D3',
          'magenta-light': '#D946EF',
          pink: '#EC4899',
          indigo: '#4338CA',
          dark: '#0B0F19',
          'dark-surface': '#111827',
          'dark-card': '#1E293B',
          accent: '#38BDF8',
          'soft-purple': '#F5F3FF',
          'soft-pink': '#FDF2F8',
        },
        surface: {
          canvas: '#F8FAFC',
          card: '#FFFFFF',
          subtle: '#F1F5F9',
          border: '#E2E8F0',
        },
        semantic: {
          success: '#10B981',
          'success-bg': '#ECFDF5',
          warning: '#F59E0B',
          'warning-bg': '#FFFBEB',
          danger: '#EF4444',
          'danger-bg': '#FEF2F2',
          info: '#3B82F6',
          'info-bg': '#EFF6FF',
        },
      },
      fontFamily: {
        bangla: ['SolaimanLipi', 'Noto Sans Bengali', 'Hind Siliguri', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(15, 23, 42, 0.06), 0 1px 2px -1px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 10px 25px -3px rgba(124, 58, 237, 0.12), 0 4px 6px -4px rgba(124, 58, 237, 0.08)',
        brand: '0 4px 20px -2px rgba(124, 58, 237, 0.35)',
        magenta: '0 4px 20px -2px rgba(192, 38, 211, 0.35)',
        glow: '0 0 25px rgba(168, 85, 247, 0.25)',
      },
      borderRadius: {
        brand: '10px',
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [],
}

export default config
