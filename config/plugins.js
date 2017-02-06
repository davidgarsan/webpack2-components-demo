
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const html = new HtmlWebpackPlugin(
  {
    template: path.join(__dirname, '../src/index.html') 
});
const styles = new ExtractTextPlugin('css/app.css');
const fonts = new ExtractTextPlugin('css/fonts.css');

module.exports = {
  styles,
  fonts,
  html
};