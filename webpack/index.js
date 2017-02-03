const webpackEntry = require('./webpack.entry');
const webpackModule = require('./webpack.module');
const webpackOutput = require('./webpack.output');
const webpackPlugins = require('./webpack.plugins');

module.exports = {
  
  entry : webpackEntry,
  
  output: webpackOutput,

  module: webpackModule,

  devtool: 'source-map'

  // plugins: webpackPlugins

}
