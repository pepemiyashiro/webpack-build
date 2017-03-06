const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

let pluginsConfig = [
  // Add Plugins needed here
  // extractSass
  new ExtractTextPlugin(
    {
      filename: "../css/[name].css",
      allChunks: true
    }
  ),

  // Browsersync to watch changes
  new BrowserSyncPlugin(
    {
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['build']},
    },
    {
      // prevent BrowserSync from reloading the page
      // and let Webpack Dev Server take care of this
      reload: true
    }
  )
];


module.exports = pluginsConfig;
