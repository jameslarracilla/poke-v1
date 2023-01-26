import styled from 'styled-components';

export const Button = styled.button`
  font-size: 1.1rem;
  padding: 5px;
  width: 100%;
  transition: transform 0.3s ease;
  border: none;
  cursor: pointer;

  :focus {
    outline: none;
  }

  :hover {
    transform: translateY(-2px);
  }
`;
