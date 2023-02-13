/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'public': ['Public Sans', 'sans-serif'],
      },
      colors: {
        light: {
          green: "#009641",
        },
        dark: {
          green: "#007D36",
        }
      },
      backgroundImage: {
        banner: "url('/public/assets/public/images/banner.png')",
      }
    },
  },
  plugins: [],
}
