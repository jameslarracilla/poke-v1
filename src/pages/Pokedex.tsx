import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { LoginState, UserPokemon } from '../@types';
import { PokemonType } from '../components/PokemonType';
import { getColorByType } from '../utils/getPokemonColorByType';
import { Card } from '../__core__/components/Card';
import { CardContent } from '../__core__/components/CardContent';
import { CardHeader } from '../__core__/components/CardHeader';
import { CardMedia } from '../__core__/components/CardMedia';
import { Container } from '../__core__/components/Container';
import { GridContainer, GridItem } from '../__core__/components/Grid';
import { SectionTitle } from '../__core__/components/SectionHeader';
import { Text } from '../__core__/components/Text';

const UserField = styled(Text)`
  span {
    color: gray;
  }

  :not(:last-child) {
    margin-bottom: 5px;
  }
`;

interface PokedexProps {
  user: LoginState;
}

export const Pokedex: React.FC<PokedexProps> = ({ user }) => {
  const [userPokemons, setUserPokemons] = useState<Array<UserPokemon>>([]);

  useEffect(() => {
    const getUserPokedex = async () => {
      const URL_POKEDEX =
        process.env.NODE_ENV === 'development'
          ? (process.env.URL_POKEDEX as string)
          : '/api/pokedex';
      const response = await axios.get(`${URL_POKEDEX}/${user.id}`);
      setUserPokemons(response.data);
    };

    getUserPokedex();
  }, []);

  return (
    <Container>
      <GridContainer justifyContent="flex-end" style={{ marginBottom: '10px' }}>
        <GridItem xs={12} md={7} lg={4}>
          <Card>
            <GridContainer justifyContent="space-between">
              <div>
                <UserField>
                  Username: <span>{user.username}</span>{' '}
                </UserField>
                <UserField>
                  Name: <span>{user.name}</span>
                </UserField>
                <UserField>
                  Lastname: <span>{user.lastname}</span>
                </UserField>
              </div>
              <img
                style={{ width: '50px' }}
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/26fac2c1-3d9b-4e75-a0cf-f7b7e0f2fa6a/dfkik0h-f2d233ab-fb6b-4bef-9ed9-fe1e61f8d01b.png/v1/fill/w_706,h_1132,strp/pokemon_world_championship_trophy_by_superherotimefan_dfkik0h-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTMwMTgiLCJwYXRoIjoiXC9mXC8yNmZhYzJjMS0zZDliLTRlNzUtYTBjZi1mN2I3ZTBmMmZhNmFcL2Rma2lrMGgtZjJkMjMzYWItZmI2Yi00YmVmLTllZDktZmUxZTYxZjhkMDFiLnBuZyIsIndpZHRoIjoiPD04MTIyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.A_36Nq1zj0y4TVxcIKdqVXPxrBIRI8-llNpp8O9Vh4k"
                alt="poke-trophy"
              />
            </GridContainer>
          </Card>
        </GridItem>
      </GridContainer>

      <SectionTitle>Pokedex</SectionTitle>
      <GridContainer rowSpacing={2}>
        {userPokemons.map((pokemon) => (
          <GridItem xs={12} md={6} lg={4} key={pokemon.id}>
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
                <Text style={{ marginTop: '5px', textAlign: 'right' }}>
                  You have {pokemon.quantity} catched
                </Text>
              </CardContent>
            </Card>
          </GridItem>
        ))}
      </GridContainer>
    </Container>
  );
};
