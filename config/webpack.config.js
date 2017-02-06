const webpack = require('webpack');
const path = require('path');
const paths = require('./paths');
const plugins = require('./plugins');
const rules = require('./rules');
const version = '0.0.1';

module.exports = env => {
  return {
    context: path.resolve(__dirname, '../'),
    entry: {
      'js/app': paths.APP
    },
    output: {
      path: path.join(__dirname, '../dist'),
      filename: `[name]-${version}.js`
    },
    module: {
      rules: [
        rules.ESLint,
        rules.Babel,
        rules.Styles,
        rules.Fonts,
        rules.URLs
      ],
    },
    devtool: 'cheap-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
    },
    plugins: [
      plugins.styles,
      plugins.fonts,
      plugins.html
    ]
  }
};