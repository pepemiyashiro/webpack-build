const path = require('path');

let outputConfig = {
  // path : String - Target directory for output files
  path: path.join(__dirname, '../build/js'), 

  // publicPath: String - the url to the output directory resolved relative to the HTML page
  publicPath: '/js/',

  // filename: String - the filename template for entry chunks
  filename: '[name].js'
}


module.exports = outputConfig;
