const tailwindcss = require('tailwindcss')
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk','sans-serif']
      },
      colors:{
        truegray : colors.trueGray
      }
    },
  },
  plugins: [
    tailwindcss('./tailwind.config.js'), 
    require('autoprefixer'),
    process.env.NODE_ENV === 'production'
    ? require('@fullhuman/postcss-purgecss')({
      content:['./src/**/*.js','./public/index.html'],
      defaultExtrator: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    })
    : '',
  ]

}