const path = require('path');
const webpack = require('webpack');

module.exports = [
  {
    mode: 'development',
    entry: __dirname + '/src/client.jsx',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'client.bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: [ 'env', 'react', 'stage-2' ],
          },
        },
      ],
    },
    devtool: 'cheap-module-eval-sourcemap',
    resolve: {
      extensions: [ '.js', '.jsx' ]
    }
  },
];

