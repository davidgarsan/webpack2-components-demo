const webpack = require('webpack');
const path = require('path');
const version = '0.0.1';
const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
};
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const html = new HtmlWebpackPlugin(
  {
    title: 'Demo Webpack', 
    template: path.join(__dirname, 'index.html') 
});
const extractStyles = new ExtractTextPlugin('./src/css/app.css');
const extractFonts = new ExtractTextPlugin('./src/css/fonts.css');

module.exports = {
  context: path.resolve(__dirname, ''),
  entry: {
    app: [ './src/js/index.js' ]
  },
  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: `[name]-${version}.js`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { 
          presets: [ 
            [ 'es2015', { modules: false } ] 
          ] 
        }
      },
      {
        test: /app\.css/,
        use: extractStyles.extract({
          loader: 'css-loader?importLoaders=1!postcss-loader',
        })
      },
      {
        test: /font\.css/,
        use: extractFonts.extract({
          loader: 'css-loader',
        })
      },
      {
        test: /\.(woff|woff2)$/,
        use: ['url-loader']
      },
    ],
  },
  // devtool: "cheap-eval-source-map",
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