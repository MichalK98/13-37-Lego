import styled from 'styled-components';
import * as theme from '@Components/theme';

type Media = {
  desktop: number;
  tablet: number;
  mobile: number;
};

type FlexProps = {
  justify?: string;
  align?: string;
};

type GridProps = {
  grid: Media;
};

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 20px 15px;
`;

export const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${({ justify }) => (justify ? `${justify}` : 'flex-start')};
  align-items: ${({ align }) => (align ? `${align}` : 'normal')};
`;

export const StyledStat = styled.div`
  display: flex;
  align-items: center;

  img {
    max-width: 25px;
    margin: 0;
    margin-right: 10px;
  }
`;

export const Grid = styled.div<GridProps>`
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(${({ grid }) => grid.desktop}, 1fr);
  gap: 10px;

  @media (max-width: ${theme.media.tablet}) {
    grid-template-columns: repeat(${({ grid }) => grid.tablet}, 1fr);
  }

  @media (max-width: ${theme.media.mobile}) {
    grid-template-columns: repeat(${({ grid }) => grid.mobile}, 1fr);
  }
`;
