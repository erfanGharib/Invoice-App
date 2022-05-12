module.exports = {
  purge: [
    './public/index.html',
    './src/*.js',
    './*.js',
    './src/components/*.jsx',
    './src/*.svg',
    './src/pages/**/**/*.{jsx,js}',
    './src/pages/**/*.{jsx,js}',
    './src/assets/icons/*svg'
  ],
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      colors: {
        'l-purple': '#8589b0',
        'purple': '#7c5dfa',
        'mid-dark-blue': '#1f213a',
        'dark-blue': '#141625',
        'red': '#e95653',
        'secondry-l-purple': '#8589b040',
      },
      minHeight: {
        20: '4.7rem',
        52: '13rem',
      },
      minWidth: {
        20: '4.7rem'
      },
      height: {
        22: '5.5rem',
        'full-20': 'calc(100vh - 4.7rem)'
      }
    },
  },
  plugins: [],
}
