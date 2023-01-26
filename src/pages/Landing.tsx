import React from 'react';
import { Footer } from '../components/Footer';
import { Info } from '../components/Info';
import { Levels } from '../components/Levels';
import { MainHero } from '../components/MainHero';

export const Landing = () => {
  return (
    <>
      <MainHero />
      <Levels />
      <Info />
      <Footer />
    </>
  );
};
