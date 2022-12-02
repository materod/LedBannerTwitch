const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const pages = ['login', 'index', 'banner', 'edit', 'error404'];

module.exports = {
  mode: 'development',
  entry: pages.reduce((config, page) => {
    config[page] = `./src/controllers/${page}.js`;
    return config;
  }, {}),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/assets/img', to: 'img' },
        { from: 'src/assets/css', to: 'css' },
      ],
    }),
  ].concat(
    pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          inject: true,
          template: `./src/views/${page}.html`,
          filename: `${page}.html`,
          chunks: [page],
        })
    )
  ),
  watch: true,
};
