import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: #0075be;
  font-family: inherit;
  font-size: 1.2rem;
  border-bottom: 2px solid transparent;

  &.active,
  :hover {
    border-bottom: 2px solid #ffcc00;
  }
`;

export const NavLoginItem = styled(NavLink)`
  border-radius: 5px;
  border: 1px solid #0075be;
  background-color: #fff;
  color: #0075be;
  font-size: 1.2rem;
  padding: 7px 10px;
  box-shadow: -2px 2px 3px rgba(0, 0, 0, 0.212);
  text-decoration: none;
  transition: all 200ms ease;

  :hover {
    color: #fff;
    background-color: #0075be;
  }
`;
export const NavLogoutItem = styled(NavLink)`
  border-radius: 5px;
  border: 1px solid #f00;
  background-color: #fff;
  color: #f00;
  font-size: 1.2rem;
  padding: 7px 10px;
  box-shadow: -2px 2px 3px rgba(0, 0, 0, 0.212);
  text-decoration: none;
  transition: all 200ms ease;

  :hover {
    color: #fff;
    background-color: #f00;
  }
`;
