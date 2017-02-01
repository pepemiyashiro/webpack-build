let moduleConfig = {
  rules: [
    {
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ["env", {
              "targets": {
                "browsers": ["last 2 versions", "safari >= 7"]
              }
            }]
          ]
        }
      }],
    }
  ]
};

module.exports = moduleConfig;
