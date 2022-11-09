const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './Client/index.html'),
      filename: 'index.html',
    })],
  entry: './Client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }, {
      test: /\.css$/i,
      include: path.resolve(__dirname, 'client'),
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader'
      ]
    },
    {
      test: /\.png|svg|jpg|gif$/,
      use: ['file-loader'],
    }]
  },
  devServer: {
    proxy: {},
    compress: true,
    port: 8080,
  }
};