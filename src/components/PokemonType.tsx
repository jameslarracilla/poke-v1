import styled from 'styled-components';

interface PokemonTypeProps {
  bgColor: string;
}

export const PokemonType = styled.span<PokemonTypeProps>`
  padding: 5px;
  border-radius: 3px;
  color: white;
  background-color: ${({ bgColor }) => bgColor};
`;
