/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'manrope': "'Manrope', 'sans-serif'"
      },
      maxWidth : {
        'mlg' : '1340px',
        'maxl': '1063px'
      }
    },
    backgroundImage: {
      'hero-img':"url('../image/hero-img.png')"
    }
  },
  plugins: [],
}

