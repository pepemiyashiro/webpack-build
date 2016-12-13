module.exports = {
  
  entry: {
    'build' : './source/scripts/app.js'
  },
  
  output: {
    path: './build/js',
    filename: '[name].js'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015','stage-0']
      }
    }]
  }
}
