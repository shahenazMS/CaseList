const merge = require('webpack-merge');
const defaultWebpackFunction = require('terra-toolkit/config/webpack/webpack.config');
const indexWebpackConfig = require('./index.webpack.config');

const mergedConfig = (env, argv) => (
  merge(defaultWebpackFunction(env, argv), indexWebpackConfig(env, argv))
);

module.exports = mergedConfig;
