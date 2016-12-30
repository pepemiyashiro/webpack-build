const webpackEntrie = require('./webpack.entrie');
const webpackModule = require('./webpack.module');
const webpackOutput = require('./webpack.output');
const webpackPlugins = require('./webpack.plugins');

module.exports = {
  
  entry : webpackEntrie,
  
  output: webpackOutput,

  module: webpackModule,

  devtool: 'source-map',

  plugins: webpackPlugins
}
