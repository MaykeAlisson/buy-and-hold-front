const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
var webpack = require('webpack');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Buy and Hold',
      template: path.resolve(__dirname, './src/html/template.html'), // template file
      filename: 'index.html', // output file
    }),
    new CleanWebpackPlugin(),
    // Atualize apenas o que mudou no hot reload
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      // Fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      // CSS, PostCSS, and Sass
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      Contexts: path.resolve(__dirname, 'src', 'contexts'),
      Services: path.resolve(__dirname, 'src', 'service'),
      Components: path.resolve(__dirname, 'src', 'components'),
      Util: path.resolve(__dirname, 'src', 'utils'),
      Repository: path.resolve(__dirname, 'src', 'repository')
    },
    extensions: ['.js', '.jsx']
  },
}