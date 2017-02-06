const webpack = require('webpack');
const path = require('path');
const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = new webpack.DefinePlugin({
  'process.env.ASSETS': JSON.stringify(paths.ASSETS)
});
const html = new HtmlWebpackPlugin(
  {
    template: path.join(__dirname, '../src/index.html') 
});
//const styles = new ExtractTextPlugin('css/app.css');
const styles = new ExtractTextPlugin({
  filename: "css/[name].css?[hash]-[chunkhash]-[contenthash]-[name]",
  disable: false,
  allChunks: true
});
const fonts = new ExtractTextPlugin('css/fonts.css');

module.exports = {
  config,
  styles,
  fonts,
  html
};