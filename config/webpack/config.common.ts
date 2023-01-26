import type { Configuration } from 'webpack';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import Dotenv from 'dotenv-webpack';

const ROOT_DIR = path.resolve(__dirname, '../../');

const CommonWepackConfig: Configuration = {
  entry: `${ROOT_DIR}/src/index.tsx`,
  output: {
    filename: 'index.[contenthash].js',
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: [/\.(j|t)sx?$/, /\.(j|t)s?$/],
        use: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: [/\.css$/, /\.scss$/],
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        exclude: '/node_modules/',
      },
      {
        test: '/.html$/',
        exclude: '/node_modules/',
        use: 'html-loader',
      },
      {
        test: /\.(png|mp3|jpg|svg|jpge|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: 'assets/[name].[ext]',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
    new Dotenv({
      systemvars: true,
    }),
  ],
};

export default CommonWepackConfig;
