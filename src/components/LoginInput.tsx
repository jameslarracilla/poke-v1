import React from 'react';
import styled from 'styled-components';
import { Text } from '../__core__/components/Text';

const LoggerInput = styled.input`
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: 400;
  padding: 5px 5px;
  outline: none;
  border-radius: 5px;
  border: 1px solid gray;
`;

interface LoginInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  legend?: string;
}

export const LoginInput: React.FC<LoginInputProps> = ({
  legend,
  onChange,
  value,
  type,
  name,
}) => {
  return (
    <>
      {legend && <Text>{legend}</Text>}
      <LoggerInput onChange={onChange} value={value} type={type} name={name} />
    </>
  );
};
