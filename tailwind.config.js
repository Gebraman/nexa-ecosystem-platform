/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#060913',
          900: '#0B0F19',
          850: '#0F1626',
          800: '#141D33',
          700: '#1E294B',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          glow: '#00F2FE',
        },
        emerald: {
          400: '#34d399',
          500: '#10b981',
          glow: '#059669',
        },
        amber: {
          400: '#fbbf24',
          500: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
