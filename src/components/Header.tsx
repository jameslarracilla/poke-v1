import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { LoginState } from '../@types';
import { Container } from '../__core__/components/Container';
import { GridContainer } from '../__core__/components/Grid';
import { Hamburger } from '../__core__/components/Hamburger';
import { NavActions } from '../__core__/components/NavActions';
import { Navbar } from '../__core__/components/Navbar';
import { NavIcon } from '../__core__/components/NavIcon';
import {
  NavItem,
  NavLoginItem,
  NavLogoutItem,
} from '../__core__/components/NavItem';

const LoginIcon = styled.img`
  width: 20px;
  margin-right: 5px;
`;

interface HeaderProps {
  onLogout: () => void;
  userLogged: LoginState;
}

export const Header: React.FC<HeaderProps> = ({ onLogout, userLogged }) => {
  const [isOpenActions, setIsOpenActions] = useState<boolean>(false);

  const onToggleNavActions = () => {
    setIsOpenActions((prev) => !prev);
  };

  return (
    <Container>
      <Navbar>
        <NavLink to="/">
          <NavIcon
            src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Pokemon_%28letters%29.png"
            width="200px"
            alt="app-pokemon"
          />
        </NavLink>
        <NavActions className={isOpenActions ? 'is-open' : ''}>
          {userLogged.isLogged && (
            <>
              <NavItem to="/battlefield">Battlefield</NavItem>
              <NavItem to="/pokedex">Pokedex</NavItem>
            </>
          )}
          {!userLogged.isLogged ? (
            <NavLoginItem to="/login">
              <GridContainer alignItems="center">
                <LoginIcon src="https://i.pinimg.com/originals/32/eb/23/32eb230b326ee3c76e64f619a06f6ebb.png" />
                Catch 'Em
              </GridContainer>
            </NavLoginItem>
          ) : (
            <NavLogoutItem to="/" onClick={onLogout}>
              Logout
            </NavLogoutItem>
          )}
        </NavActions>
        <Hamburger onClick={onToggleNavActions} />
      </Navbar>
    </Container>
  );
};
