module.exports = {
  entry: {
    index: './src/index.js',
  },
  mode: 'development',
  module:{
    rules: [{
      test: /\.css$/, //arquivos em quais ele vai executar o loader
      use: ['style-loader','css-loader']
    }]
  }
}