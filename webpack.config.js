const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CONTENT = path.resolve(__dirname, '../dist');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: CONTENT,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.js'],
  },
  plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],
  devServer: {
    port: 8080,
    contentBase: CONTENT,
  },
};
