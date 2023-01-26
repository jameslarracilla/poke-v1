import styled from 'styled-components';

export const NavActions = styled.ul`
  list-style: none;
  display: flex;
  column-gap: 20px;
  align-items: center;

  @media (max-width: 630px) {
    border: 1px solid black;
    position: absolute;
    flex-direction: column;
    row-gap: 10px;
    top: 60px;
    right: 0;
    padding: 15px;
    transform: translateX(150%);
    background-color: white;
    &.is-open {
      transform: translateX(-5px);
    }
  }
`;
