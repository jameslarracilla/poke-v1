import React from 'react';
import styled from 'styled-components';

interface CardWrapperProps {
  width?: string;
  boxColor?: string;
}

const CardWrapper = styled.div<CardProps>`
  width: ${({ width }) => width || '100%'};
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.2);

  ${({ boxColor }) =>
    boxColor ? `box-shadow: -2px 2px 5px ${boxColor}cc;` : ''}

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
`;

interface CardProps extends CardWrapperProps, React.PropsWithChildren {
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  width,
  className,
  boxColor,
}) => {
  return (
    <CardContainer>
      <CardWrapper width={width} className={className} boxColor={boxColor}>
        {children}
      </CardWrapper>
    </CardContainer>
  );
};
