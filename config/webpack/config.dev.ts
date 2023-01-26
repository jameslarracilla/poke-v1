import { Configuration } from 'webpack';
import { configCommonWebpack, ROOT_DIST } from './config.common';
import { Configuration as DevServerConfig } from 'webpack-dev-server';
import { apiMockerServer } from './apiMocker/config-serve';

interface WebpackConfigDev extends Configuration {
  devServer?: DevServerConfig;
}

const devConfigWebpack = (env: any, arg: any): WebpackConfigDev => {
  return {
    ...configCommonWebpack(env, arg),
    mode: 'development',
    devtool: 'source-map',
    devServer: {
      static: ROOT_DIST,
      port: 3000,
      open: true,
      liveReload: true,
      hot: true,
      historyApiFallback: true,
      setupMiddlewares: (middlewares, devServer) => {
        apiMockerServer(devServer);
        return middlewares;
      },
    },
  };
};

export default devConfigWebpack;
