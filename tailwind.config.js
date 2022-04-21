module.exports = {
  purge: [
    './public/index.html',
    './src/*.js',
    './*.js',
    './src/components/*.jsx',
    './src/*.svg'
  ],
  content: [
    './public/index.html',
    './src/*.js',
    './*.js',
    './src/components/*.jsx'
  ],
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
        20: '4.7rem'
      },
      minWidth: {
        20: '4.7rem'
      },
    },
  },
  plugins: [],
}
