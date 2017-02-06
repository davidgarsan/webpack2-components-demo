const webpack = require('webpack');
const path = require('path');
const version = '0.0.1';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const html = new HtmlWebpackPlugin(
  {
    template: path.join(__dirname, 'src/index.html') 
});
const extractStyles = new ExtractTextPlugin('css/app.css');
const extractFonts = new ExtractTextPlugin('css/fonts.css');

module.exports = {
  context: path.resolve(__dirname, ''),
  entry: {
    'js/app': './src/js/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: `[name]-${version}.js`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        loader: "eslint-loader",
        exclude: /node_modules/,
        options: {
          fix: true
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /app\.css/,
        use: extractStyles.extract({
          use: 'css-loader?importLoaders=1&modules&localIdentName=[local]--[hash:base64:5]!postcss-loader',
        })
      },
      {
        test: /font\.css/,
        use: extractFonts.extract({
          use: 'css-loader',
        })
      },
      {
        test: /\.(woff|woff2)$/,
        use: ['url-loader']
      },
    ],
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  plugins: [
    extractStyles,
    extractFonts,
    html
  ]
}