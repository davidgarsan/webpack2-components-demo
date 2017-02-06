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
  test: /app\.css/,
  use: plugins.styles.extract({
    use: 'css-loader?importLoaders=1&modules&localIdentName=[local]--[hash:base64:5]!postcss-loader',
  })
};

const Fonts = {
  test: /font\.css/,
  use: plugins.fonts.extract({
    use: 'css-loader',
  })
};

const URLs = {
  test: /\.(woff|woff2)$/,
  use: ['url-loader']
};

module.exports = {
  ESLint,
  Babel,
  Styles,
  Fonts,
  URLs
};