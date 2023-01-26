import React from 'react';
import { Header } from '../components/Header';
import { Outlet } from 'react-router-dom';
import { LoginState } from '../@types';

interface HomeProps {
  onLogout: () => void;
  userLogged: LoginState;
}

export const Home: React.FC<HomeProps> = ({ onLogout, userLogged }) => {
  return (
    <>
      <Header onLogout={onLogout} userLogged={userLogged} />
      <Outlet />
    </>
  );
};
