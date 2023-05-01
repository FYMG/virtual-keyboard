const path = require('path');

/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devConfig = require('./webpack.dev.config');
const prodConfig = require('./webpack.prod.config');
/* eslint-enable import/no-extraneous-dependencies */

const baseConfig = {
  entry: {
    index: './src/pages/main/app-index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      template: 'src/pages/main/index.html',
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'assets'),
          to: path.resolve(__dirname, 'dist', 'assets'),
        },
      ],
    }),
    new CleanWebpackPlugin(),
    new ESLintPlugin({
      extensions: ['.tsx', '.ts', '.js'],
      exclude: 'node_modules',
    }),
  ],
  optimization: {
    splitChunks: {
      name: 'common',
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(scss|css|sass)$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.html$/i,
        use: 'html-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};

module.exports = ({}, { mode }) => {
  const isProductionMode = mode === 'production';
  const envConfig = isProductionMode ? prodConfig : devConfig;

  return merge(baseConfig, envConfig);
};
