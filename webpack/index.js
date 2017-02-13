const webpackEntry = require('./webpack.entry');
const webpackModule = require('./webpack.module');
const webpackOutput = require('./webpack.output');
const webpackPlugins = require('./webpack.plugins');

module.exports = {
  
  devtool: 'source-map',

  entry : webpackEntry,
  
  output: webpackOutput,

  module: webpackModule,

  plugins: webpackPlugins

}
