const webpack = require('webpack');
const path = require('path');
const paths = require('./paths');
const plugins = require('./plugins');
const rules = require('./rules');
const version = '0.0.1';

module.exports = env => {
  return {
    context: path.resolve(__dirname, '../'),
    // target: 'node',
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
        rules.URLs,
        {
          test: /\.ejs$/,
          use: 'ejs-compiled-loader?strict=true&variable=data!babel-loader'
        }
      ],
    },
    devtool: 'cheap-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
  },
   /* 'ejs-compiled-loader': {
      'htmlmin': true,  
      'htmlminOptions': {
        removeComments: true
      }
    },*/
    plugins: [
      plugins.styles,
      plugins.fonts,
      plugins.html
    ]
  }
};