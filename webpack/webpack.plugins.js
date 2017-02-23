const ExtractTextPlugin = require("extract-text-webpack-plugin");

let pluginsConfig = [
  // Add Plugins needed here
  // extractSass
  new ExtractTextPlugin(
    {
      filename: "../css/[name].css",
      allChunks: true
    }
  )
];


module.exports = pluginsConfig;
