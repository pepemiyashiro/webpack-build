const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

let pluginsConfig = [
  new BrowserSyncPlugin({
    // browse to http://localhost:3000/ during development, 
    // ./public directory is being served 
    host: 'localhost',
    port: 3000,
    server: { baseDir: ['build'] }
  })
];


module.exports = pluginsConfig;
