/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        cinema: {
          bg: '#0a0a0a',
          surface: '#111111',
          border: '#222222',
          text: '#fafafa',
          muted: '#888888',
          accent: '#3b82f6',
          accentAlt: '#06b6d4',
        },
      },
    },
    screens: {
      sm: '720px',
      md: '1024px',
      lg: '1280px',
    },
  },
  plugins: [],
}
