/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        kuba: {
          green: '#C8F000',
          greenDark: '#8FB800',
          black: '#080808',
          dark: '#0F0F0F',
          card: '#141414',
          border: '#222222',
          muted: '#555555',
          dim: '#888888',
          txt: '#E8E6E0',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
