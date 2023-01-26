import React from 'react';
import styled, { css } from 'styled-components';

export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span';
type TextAlign = 'center' | 'left' | 'right' | 'justify';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  variant?: TextVariant;
  align?: TextAlign;
  as?: TextVariant;
}

const TextWrapper = styled.div<Props>`
  ${({ as }) => {
    switch (as) {
      case 'h1':
        return css`
          font-size: 6rem;
        `;
      case 'h2':
        return css`
          font-size: 3.75rem;
        `;
      case 'h3':
        return css`
          font-size: 3rem;
        `;
      case 'h4':
        return css`
          font-size: 2.125rem;
        `;
      case 'h5':
        return css`
          font-size: 1.5rem;
        `;
      case 'h6':
        return css`
          font-size: 1.25rem;
        `;
      default:
        return css`
          font-size: 1rem;
        `;
    }
  }}

  ${({ align }) => css`
    text-align: ${align};
  `}
`;

export const Text: React.FC<Props> = ({
  variant,
  children,
  align,
  className,
  style,
}) => {
  return (
    <TextWrapper
      style={style}
      className={className || ''}
      as={variant || 'p'}
      align={align || 'left'}
    >
      {children}
    </TextWrapper>
  );
};
