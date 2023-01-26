import React from 'react';
import { Container } from '../__core__/components/Container';
import { GridContainer } from '../__core__/components/Grid';
import { Text } from '../__core__/components/Text';

export const Footer = () => {
  return (
    <Container>
      <GridContainer justifyContent="center">
        <Text style={{ color: 'gray', textAlign: 'center' }}>
          This is a Footer &mdash; James &copy; Its just a test. Please, don't
          sue me. (:
        </Text>
      </GridContainer>
    </Container>
  );
};
