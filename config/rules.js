const plugins = require('./plugins');

const ESLint = {
  test: /\.js$/,
  enforce: "pre",
  loader: "eslint-loader",
  exclude: /node_modules/,
  options: {
    fix: true
  }
};

const Babel = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader'
};

const Styles = {
  test: /\.css/,
  exclude: /font\.css/,
  use: plugins.styles.extract({
    loader: 'css-loader?importLoaders=1&modules&localIdentName=[local]--[hash:base64:5]!postcss-loader'
  })
};

const Fonts = {
  test: /font\.css/,
  use: plugins.fonts.extract({
    loader: 'css-loader?limit=100000'
  })
};

const URLs = {
  test: /\.(svg|ttf|eot|woff|woff2)$/,
  use: ['url-loader']
};

module.exports = {
  ESLint,
  Babel,
  Styles,
  Fonts,
  URLs
};
