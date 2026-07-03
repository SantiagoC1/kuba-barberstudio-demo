/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        kuba: {
          green: '#C8F000',
          greenDark: '#8FB800',
          bg: '#0A0A0A',
          card: '#111111',
          border: '#222222',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
