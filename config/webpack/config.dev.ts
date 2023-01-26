import { Configuration } from 'webpack';
import {} from 'webpack-dev-server';
import path from 'path';
import merge from 'webpack-merge';
import CommonWepackConfig from './config.common';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { apiMockerServer } from './apiMocker/config-serve';

const ROOT_DIR = path.resolve(__dirname, '../../');
const DIST_DIR = `${ROOT_DIR}/dist`;

const DevConfig: Configuration = {
  mode: 'development',
  output: {
    path: DIST_DIR,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `${ROOT_DIR}/public/index.html`,
      inject: true,
    }),
  ],
  devtool: 'source-map',
  devServer: {
    static: DIST_DIR,
    port: 3000,
    liveReload: true,
    open: true,
    historyApiFallback: true,
    setupMiddlewares: (middlewares, devServer) => {
      apiMockerServer(devServer);
      return middlewares;
    },
  },
};

export default merge(CommonWepackConfig, DevConfig);
