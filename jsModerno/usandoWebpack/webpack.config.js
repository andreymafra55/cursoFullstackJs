const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    index: './src/index.js',
  },
  mode: 'development',
  module:{
    rules: [{
      test: /\.css$/, //arquivos em quais ele vai executar o loader
      use: [MiniCssExtractPlugin.loader,'css-loader']
    }]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
}