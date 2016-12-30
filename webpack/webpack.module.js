module.exports = {
  rules: [
    {
      test: /\.js$/,
      use: [{
        loader: 'babel-loader'
      }],
    }
  ]
}
