const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  entry: {
    vue: 'vue',
    hello: './src/Hello.vue',
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {}
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vue', 'hello'],
      minChunks: Infinity,
    }),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};
