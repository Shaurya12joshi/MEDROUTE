/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*.html",
    "./**/*.html",
    "./**/*.js"
  ],
  theme: {
    extend: {
      fontFamily:{
        'custom':[
          "Iserif" , "Instrument Serif", "serif"
        ],
        'custom2':[
          "Montserrat", "sans-serif"
        ]
      }
    },
  },
  plugins: [],
}