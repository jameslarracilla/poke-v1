import * as CSS from 'csstype';
import React, {
  createContext,
  DetailedHTMLProps,
  HTMLAttributes,
  useContext,
} from 'react';
import styled from 'styled-components';

type GridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface GridResponsive {
  xs?: GridSize;
  sm?: GridSize;
  md?: GridSize;
  lg?: GridSize;
  xl?: GridSize;
}

interface FlexProperties {
  justifyContent?: CSS.Property.JustifyContent;
  alignItems?: CSS.Property.AlignItems;
  direction?: CSS.Property.FlexDirection;
}

const GridContext = createContext({
  spacing: 0,
  rowSpacing: 0,
  colSpacing: 0,
});

interface GridContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    FlexProperties {
  spacing?: number;
  rowSpacing?: number;
  colSpacing?: number;
}

interface GridItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    GridResponsive {
  spacing?: number;
  rowSpacing?: number;
  colSpacing?: number;
}

const GridItemWrapper = styled.div<GridItemProps>`
  box-sizing: border-box;
  width: 100%;
  flex-grow: 0;

  ${({ spacing, rowSpacing, colSpacing }) => {
    let space = '';

    if (colSpacing)
      space += `
      &:not(:first-child) {
        padding-left: ${colSpacing * 8}px;
      }`;

    if (rowSpacing)
      space += `
        padding-top: ${rowSpacing * 8}px;
      `;

    if (spacing) space += `padding: ${spacing * 8}px 0  0 ${spacing * 8}px;`;
    return space;
  }}

  ${({ xs, sm, md, lg, xl }) => {
    let mediaQueries: string = '';

    if (xs) {
      mediaQueries += `@media (min-width: 0px) {
         flex-basis: ${xs * (100 / 12)}%;
         max-width: ${xs * (100 / 12)}%;
        }`;
    }

    if (sm) {
      mediaQueries += `@media (min-width: 380px) {
         flex-basis: ${sm * (100 / 12)}%;
         max-width: ${sm * (100 / 12)}%;
        }`;
    }

    if (md) {
      mediaQueries += `@media (min-width: 576px) {
         flex-basis: ${md * (100 / 12)}%;
         max-width: ${md * (100 / 12)}%;
        }`;
    }

    if (lg) {
      mediaQueries += `@media (min-width: 768px) {
         flex-basis: ${lg * (100 / 12)}%;
         max-width: ${lg * (100 / 12)}%;
        }`;
    }

    if (xl) {
      mediaQueries += `@media (min-width: 1200px) {
         flex-basis: ${xl * (100 / 12)}%;
         max-width: ${xl * (100 / 12)}%;
        }`;
    }

    return mediaQueries;
  }}
`;

export const GridItem: React.FC<GridItemProps> = ({
  className,
  style,
  xs,
  sm,
  md,
  lg,
  xl,
  children,
}) => {
  const { spacing, colSpacing, rowSpacing } = useContext(GridContext);

  return (
    <GridItemWrapper
      className={className}
      style={style}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      spacing={spacing}
      colSpacing={colSpacing}
      rowSpacing={rowSpacing}
    >
      {children}
    </GridItemWrapper>
  );
};

const GridContainerWrapper = styled.div<FlexProperties>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
`;

export const GridContainer: React.FC<GridContainerProps> = (props) => {
  const { children, className, style } = props;
  const { rowSpacing = 0, colSpacing = 0, spacing = 0 } = props;
  const { justifyContent, alignItems, direction } = props;

  return (
    <GridContext.Provider value={{ spacing, rowSpacing, colSpacing }}>
      <GridContainerWrapper
        className={className}
        style={style}
        direction={direction}
        justifyContent={justifyContent}
        alignItems={alignItems}
      >
        {children}
      </GridContainerWrapper>
    </GridContext.Provider>
  );
};
