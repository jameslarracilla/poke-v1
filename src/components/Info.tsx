import React from 'react';
import styled from 'styled-components';
import { Container } from '../__core__/components/Container';
import { GridContainer, GridItem } from '../__core__/components/Grid';
import { SectionTitle } from '../__core__/components/SectionHeader';
import { Text } from '../__core__/components/Text';

const InfoContent = styled(Text)`
  margin-top: 30px;
  color: gray;

  @media (max-width: 576px) {
    margin-top: 10px;
  }
`;

const InfoHeader = styled(Text)`
  color: #0c87d3;

  @media (max-width: 576px) {
    font-size: 1.7rem;
  }
`;

export const Info = () => {
  return (
    <Container style={{ margin: '50px auto' }}>
      <GridContainer alignItems="center">
        <GridItem md={6}>
          <InfoHeader variant="h3">
            Did you know what a pokemon master really is?
          </InfoHeader>
          <InfoContent>
            Pokémon Master (Japanese: ポケモンマスター Pokémon Master) is a
            title in the Pokémon world. It is the goal of many Pokémon Trainers
            to become a Pokémon Master.
          </InfoContent>
        </GridItem>
        <GridItem md={6}>
          <img
            style={{ width: '100%' }}
            src="https://www.freeiconspng.com/uploads/3d-pokeball-pok-mon-go-png-24.png"
            alt="poke-ball"
          />
        </GridItem>
      </GridContainer>
    </Container>
  );
};
