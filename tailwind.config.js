/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    // "./index.html"
    "./src/components/*.html"
],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        headerbg: "#0C111B",
        overlay: "rgba(0, 0, 0, 0.5)"
      },
    },
  },
  plugins: [],
}

