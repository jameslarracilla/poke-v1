import React, { useState } from 'react';
import { Home } from './layout/Home';
import { GlobalStyle } from './__core__/components/GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Auth } from './pages/Auth';
import { BattleField } from './pages/BattleField';
import { ProtectedRoute } from './routes/ProtectedRoute';
import { Pokedex } from './pages/Pokedex';
import { LoginState } from './@types';

const initLoginState: LoginState = {
  id: '',
  name: '',
  lastname: '',
  username: '',
  isLogged: false,
};

const App = () => {
  const [userLogged, setUserLogged] = useState<LoginState>({
    ...initLoginState,
  });

  const loginHandle = (user: Omit<LoginState, 'isLogged'>) => {
    setUserLogged({ ...user, isLogged: true });
  };

  const logoutHandle = () => {
    setUserLogged({ ...initLoginState });
  };

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home onLogout={logoutHandle} userLogged={userLogged} />}
          >
            <Route index element={<Landing />} />
            <Route path="/login" element={<Auth onLogin={loginHandle} />} />
            <Route
              path="/battlefield"
              element={
                <ProtectedRoute
                  conditional={userLogged.isLogged}
                  ToRender={<BattleField />}
                  redirect={'/login'}
                />
              }
            />
            <Route
              path="/pokedex"
              element={
                <ProtectedRoute
                  conditional={userLogged.isLogged}
                  ToRender={<Pokedex user={userLogged} />}
                  redirect={'/login'}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
