/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/*.ejs'],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('/public/img/wave.svg')",
        'footer': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}

