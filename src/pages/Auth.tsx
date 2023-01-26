import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { LoginState } from '../@types';
import { LoginForm } from '../components/LoginForm';
import { LoginInput } from '../components/LoginInput';
import { Button } from '../__core__/components/Button';
import { Container } from '../__core__/components/Container';
import { GridContainer, GridItem } from '../__core__/components/Grid';
import { Text } from '../__core__/components/Text';

const SubmitButton = styled(Button)`
  margin: 10px 0 20px;
  background-color: gray;
  color: white;
  border-radius: 5px;
`;

interface userCredentials {
  email: string;
  password: string;
}

const initFormFields: userCredentials = {
  email: '',
  password: '',
};

interface AuthProps {
  onLogin: (user: Omit<LoginState, 'isLogged'>) => void;
}

export const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [formFields, setFormFields] = useState<userCredentials>({
    ...initFormFields,
  });
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormFields((prevForm) => {
      return { ...prevForm, [event.target.name]: event.target.value };
    });
  };

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();

    if (formFields.email === '' || formFields.password === '') return;

    const URL_AUTH = process.env.URL_AUTH as string;
    const response = await axios.post(URL_AUTH, {
      email: formFields.email,
      password: formFields.password,
    });
    onLogin(response.data);
    setFormFields({ ...initFormFields });
    navigate('/pokedex');
  };

  return (
    <Container style={{ minHeight: '70vh' }}>
      <GridContainer justifyContent="center">
        <GridItem xs={12} md={8} lg={5}>
          <Text variant="h4" style={{ textAlign: 'center', color: '#f73434' }}>
            Begin the adventure an catch some pokemons
          </Text>
          <LoginForm onSubmit={handleLogin}>
            <LoginInput
              type="text"
              name="email"
              legend="Email"
              onChange={handleChange}
              value={formFields.email}
            />
            <LoginInput
              type="password"
              name="password"
              legend="Password"
              onChange={handleChange}
              value={formFields.password}
            />
            <Text style={{ textAlign: 'center', color: 'gray' }}>
              By signing in, you agree to Pokemons's Privacy Policy and Terms of
              Use.
            </Text>
            <SubmitButton type="submit">Send</SubmitButton>
          </LoginForm>
        </GridItem>
      </GridContainer>
    </Container>
  );
};
