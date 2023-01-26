import styled from 'styled-components';

interface CardMediaProps {
  height?: string;
}

export const CardMedia = styled.img<CardMediaProps>`
  height: 200px;
  align-self: center;
`;
