import React from 'react';
import styled from 'styled-components';

const HamburguerIcon = styled.div`
  width: 30px;
  height: 15px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  span {
    width: 100%;
    height: 2px;
    background-color: gray;
  }

  @media (max-width: 630px) {
    display: flex;
  }
`;

interface HamburgerProps {
  onClick: () => void;
}

export const Hamburger: React.FC<HamburgerProps> = ({ onClick }) => {
  return (
    <HamburguerIcon onClick={onClick}>
      <span />
      <span />
      <span />
    </HamburguerIcon>
  );
};
