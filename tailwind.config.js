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
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        body: ['"Outfit"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        cinema: {
          bg: '#0B0A09',
          surface: '#151413',
          border: '#262422',
          text: '#F0ECE6',
          muted: '#7A756E',
          accent: '#3B82F6',
          accentAlt: '#60A5FA',
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
