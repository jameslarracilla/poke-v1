const apiMocker = require('connect-api-mocker');
import type Server from 'webpack-dev-server';

export const apiMockerServer = (devServer: Server) => {
  if (!devServer) {
    throw new Error('Webpack server is not defined');
  }

  devServer.app?.use('/user/auth', apiMocker('mocks/auth'));
  devServer.app?.use('/pokemon/battlefield', apiMocker('mocks/battlefield'));
  devServer.app?.use('/pokemon/pokedex', apiMocker('mocks/pokedex'));
};
