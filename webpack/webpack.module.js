const ExtractTextPlugin = require('extract-text-webpack-plugin');

const moduleConfig = {
  rules: [
    //Javascript ES6 + Babel Env 
    {
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['env', {
              'targets': {
                'browsers': ['last 2 versions', 'safari >= 7']
              }
            }]
          ]
        }
      }],
    },
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    }
  ]
};

module.exports = moduleConfig;
