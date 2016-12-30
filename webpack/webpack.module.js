let moduleConfig = {
  rules: [
    {
      test: /\.js$/,
      use: [{
        loader: 'babel-loader'
      }],
    }
  ]
};

module.exports = moduleConfig;
