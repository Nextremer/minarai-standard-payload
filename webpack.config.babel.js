import webpack from 'webpack';
import path from 'path';
import nodeExternals from 'webpack-node-externals';

export default {
  target: 'node',
  entry: [path.join(__dirname, './src/index.js')],
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'index.js',
    library: 'minarai-standard-payload',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' }
    ]
  },
  plugins: [],
  externals: [nodeExternals()],
};

