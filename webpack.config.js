const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
  mode: 'none',
  devtool: 'source-map',
  entry: {
    filename: './app.js'
  },
  output: {
    path: path.resolve(__dirname, "_build"),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          mangle: true
        },
        sourceMap: true
      })
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv)}
    })
  ]
}
