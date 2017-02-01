let moduleConfig = {
  rules: [
    {
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ["es2015", "stage-0"]
        }
      }],
    }
  ]
};

module.exports = moduleConfig;
