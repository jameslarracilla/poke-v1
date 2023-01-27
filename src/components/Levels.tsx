import React from 'react';
import styled from 'styled-components';
import { Card } from '../__core__/components/Card';
import { CardContent } from '../__core__/components/CardContent';
import { CardHeader } from '../__core__/components/CardHeader';
import { CardMedia } from '../__core__/components/CardMedia';
import { Container } from '../__core__/components/Container';
import { GridContainer, GridItem } from '../__core__/components/Grid';
import { SectionTitle } from '../__core__/components/SectionHeader';

const CardLevel = styled(Card)`
  :hover {
    scale: 1.05;
    animation: 1s focusing infinite ease;
    transition: scale 0.3s ease;
  }

  @keyframes focusing {
    50% {
      box-shadow: -2px 2px 5px #ff00006f;
    }
  }
`;

export const Levels = () => {
  return (
    <Container>
      <SectionTitle>Levels</SectionTitle>
      <GridContainer rowSpacing={2}>
        <GridItem xs={12} md={6} lg={4}>
          <CardLevel width="90%">
            <CardMedia src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png" />
            <CardHeader>Trainee</CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
            </CardContent>
          </CardLevel>
        </GridItem>
        <GridItem xs={12} md={6} lg={4}>
          <CardLevel width="90%">
            <CardMedia src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" />
            <CardHeader>Inter</CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              delectus necessitatibus tenetur corporis similique.
            </CardContent>
          </CardLevel>
        </GridItem>
        <GridItem xs={12} md={6} lg={4}>
          <CardLevel width="90%">
            <CardMedia src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png" />
            <CardHeader>Master</CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              delectus necessitatibus tenetur corporis similique.
            </CardContent>
          </CardLevel>
        </GridItem>
      </GridContainer>
    </Container>
  );
};
