/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#B09259',
          50: '#F4F0E8',
          100: '#EAE2D1',
          200: '#D6C7A4',
          300: '#C2AB77',
          400: '#B09259',
          500: '#8E7547',
          600: '#6C5936',
          700: '#4A3D24',
          800: '#282113',
          900: '#060501',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
    },
  },
  plugins: [],
};