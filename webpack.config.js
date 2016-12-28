const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry : {
    bundle: './source/scripts/app.js'
  },
  
  output: {
    path: path.join(__dirname, 'build/js'), 
    // String - Target directory for output files

    publicPath: '/js/', 
    // String - the url to the output directory resolved relative to the HTML page

    filename: '[name].js'
    // String - the filename template for entry chunks
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
  }
}
