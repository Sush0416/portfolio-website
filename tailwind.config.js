/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        }
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'typing': 'typing 3s steps(30, end), blink 0.75s step-end infinite',
        'blink': 'blink 0.75s step-end infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        typing: {
          from: { width: '0%' },
          to: { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#ec4899' }, // pink-500
        }
      }
    },
  },
  plugins: [],
}
