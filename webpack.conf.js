const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

process.env.BABEL_ENV = process.env.NODE_ENV || 'development';

const plugins = [
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') },
    "__DEV__": process.env.BABEL_ENV === "development"
  }),
  new HTMLWebpackPlugin({
    filename: path.resolve(path.join('./build', 'index.html')),
    template: path.resolve(path.join('./src', 'index.html'))
  }),
  new webpack.optimize.OccurrenceOrderPlugin()
];

if(process.env.NODE_ENV !== "production") {
  plugins.push(new webpack.SourceMapDevToolPlugin({
    exclude: /node_modules/,
  }));
}

module.exports = {
  entry: ['@babel/polyfill', path.resolve(path.join('./src', 'index.js')),],

  mode: process.env.BABEL_ENV || 'none',

  output: {
    path: path.resolve("./build"),
    filename: 'index.js'
  },

  devtool: process.env.NODE_ENV !== "production" ? "eval" : undefined,

  plugins: plugins,

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: './build'
  }
}
