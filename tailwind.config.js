/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kaisei: ["Kaisei HarunoUmi", "serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
    },
    screens: {
      sm: "720px",
      md: "1024px",
    },
  },
  plugins: [],
}
