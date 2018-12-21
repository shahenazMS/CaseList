// By default eslint assumes packages imported are supposed to be dependencies,
// not devDependencies. Disabling this rule in webpack.conig.js
/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = () => ({
  entry: {
    'training': path.resolve(path.join(__dirname, 'src', 'site', 'Index')), //'src/site/Index'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'site',
      template: path.resolve(path.join(__dirname, 'src', 'site', 'index.html')),
      chunks: ['raf', 'babel-polyfill', 'training'],
    }),
  ],
});

module.exports = config;
