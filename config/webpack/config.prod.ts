import { Configuration } from 'webpack';
import path from 'path';
import merge from 'webpack-merge';
import CommonWepackConfig from './config.common';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const ROOT_DIR = path.resolve(__dirname, '../../');
const BUILD_DIR = `${ROOT_DIR}/build`;

const ProdConfig: Configuration = {
  mode: 'production',
  output: {
    path: BUILD_DIR,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `${ROOT_DIR}/public/index.html`,
      inject: true,
      minify: true,
    }),
  ],
};

export default merge(CommonWepackConfig, ProdConfig);
