import React, { useEffect, useState } from 'react';
import { Card } from '../__core__/components/Card';
import { CardContent } from '../__core__/components/CardContent';
import { CardHeader } from '../__core__/components/CardHeader';
import { CardMedia } from '../__core__/components/CardMedia';
import { Container } from '../__core__/components/Container';
import { GridContainer, GridItem } from '../__core__/components/Grid';
import { SectionTitle } from '../__core__/components/SectionHeader';
import { getColorByType } from '../utils/getPokemonColorByType';
import { Button } from '../__core__/components/Button';
import { Text } from '../__core__/components/Text';
import styled from 'styled-components';
import { Pokemon } from '../@types';
import { PokemonType } from '../components/PokemonType';
import axios from 'axios';

const ButtonFight = styled(Button)`
  margin: 15px 0 0;
  color: white;
  border-radius: 5px;
  border: 1px solid black;
  background-color: transparent;

  img {
    width: 30px;
  }

  :hover {
    animation: 700ms strobe infinite ease;
  }

  @keyframes strobe {
    50% {
      background-color: red;
    }
  }
`;

interface BattleFieldProps {
  
};

export const BattleField = () => {
  const [battlePokemons, setBattlePokemons] = useState<Array<Pokemon>>([]);

  const onCatchPokemon = async (pokemonId: string) => {
    const URL_POKE_CATCH = process.env.NODE_ENV === 'development' ? process.env.URL_POKE_CATCH as string : '/api/battlefield';
    await axios.post(URL_POKE_CATCH, {
      id: 'james',
      pokemonId,
    });

    setBattlePokemons((prevState) =>
      prevState.filter((pokemon) => pokemon.id !== pokemonId)
    );
  };

  useEffect(() => {
    const getBattlefieldPokemons = async () => {
      const URL_BATTLEFIELD = process.env.NODE_ENV === 'development' ? process.env.URL_BATTLEFIELD as string : '/api/battlefield';
      const response = await axios(URL_BATTLEFIELD);
      setBattlePokemons(response.data);
    };

    getBattlefieldPokemons();
  }, []);

  return (
    <Container>
      <SectionTitle>BattleField</SectionTitle>
      <GridContainer rowSpacing={2}>
        {battlePokemons.map((pokemon) => (
          <GridItem xs={12} md={6} lg={4} key={`${pokemon.id}`}>
            <Card width="90%" boxColor={getColorByType(pokemon.types[0])}>
              <CardMedia src={pokemon.imageUrl} />
              <CardHeader>{pokemon.name}</CardHeader>
              <CardContent>
                <Text style={{ marginBottom: '10px' }}>{pokemon.category}</Text>
                <GridContainer style={{ columnGap: '10px' }}>
                  {pokemon.types.map((pokeType, index) => (
                    <PokemonType
                      key={`${pokeType + index + pokemon.id}`}
                      bgColor={getColorByType(pokeType)}
                    >
                      {pokeType}
                    </PokemonType>
                  ))}
                </GridContainer>
              </CardContent>
              <ButtonFight
                onClick={() => {
                  onCatchPokemon(pokemon.id);
                }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png"
                  alt="pokeball"
                />
              </ButtonFight>
            </Card>
          </GridItem>
        ))}
      </GridContainer>
    </Container>
  );
};
