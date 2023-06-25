/** @type {import('tailwindcss').Config} */
// const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
        "archivo-black": ["Archivo Black", "sans-serif"],
      },
      fontSize: {
        "4xl": "3rem",
      },
      colors: {
        primary: "#FFC70C",
      },
      boxShadow: {
        primary: '0px 4px 4px 0px rgba(0, 0, 0, 1)'
      }
    },
  },
  plugins: ['taos/plugin'],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ]
};
