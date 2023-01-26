import styled, { css } from 'styled-components';

interface NavIconProps {
  width: string;
}

export const NavIcon = styled.img<NavIconProps>`
  width: ${({ width }) => width};

  @media (max-width: 400px) {
    width: ${({ width }) => `calc(${width} * 0.8)`};
  }
`;
