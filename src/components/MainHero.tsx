import React from 'react';
import { Container } from '../__core__/components/Container';
import { Hero } from '../__core__/components/Hero';
import { HeroTitle } from '../__core__/components/HeroTitle';

export const MainHero = () => {
  return (
    <Container>
      <Hero imageUrl="https://images3.alphacoders.com/975/975819.jpg">
        <HeroTitle>
          Become a Pokemon <br />
          Master
        </HeroTitle>
      </Hero>
    </Container>
  );
};
