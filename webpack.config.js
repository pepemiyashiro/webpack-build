const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  // entry : string | object | array
  entry : {
    bundle: './source/scripts/app.js'
  },
  
  output: {
    // path : String - Target directory for output files
    path: path.join(__dirname, 'build/js'), 

    // publicPath: String - the url to the output directory resolved relative to the HTML page
    publicPath: '/js/', 

    // filename: String - the filename template for entry chunks
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }],
      }
    ]
      },      

  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development, 
      // ./public directory is being served 
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['build'] }
    })
  ]
}
