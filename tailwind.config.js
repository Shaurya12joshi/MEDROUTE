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
      colors: {
        red:    { DEFAULT: '#D0423A', dark: '#B8362F', light: '#FDECEA' },
        bg:     '#F8F2ED',
        border: '#E2E8F0',
        text:   '#1E293B',
        muted:  '#64748B',
        subtle: '#94A3B8',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans:  ['"DM Sans"', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%,100%': { opacity: '1',   transform: 'scale(1)'   },
          '50%':     { opacity: '0.5', transform: 'scale(1.3)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.35s ease both',
        blink:  'blink 1.4s ease-in-out infinite',
      },
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
