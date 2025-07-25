const { Kode_Mono } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*{js,ts,jsx,tsx}',
    './pages/**/*.{js,tx,jsx,tsx}',
    './components/**/*.{js,tx,jsx,tsx}',

  ],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        // Kode_Mono: "Kode-Regular",
        Thunky: "Thunky",
        custom: ["Kode_Mono", "serif"],
        sans: ['Inter', 'ui-sans-serif', 'systemui']
      }
    },
  },
  plugins: [],
}

