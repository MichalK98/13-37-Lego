import styled from 'styled-components';
import * as theme from '@Components/theme';

import { Figure } from '@Interfaces';
import Img from '@Components/Img';
import { Flex, Grid, StyledStat } from '@Components/elements';

const StyledFigure = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 15px;
  background: ${theme.colors.white};
  color: ${theme.colors.blue};
  text-decoration: none;

  h3 {
    max-width: calc(100% - 80px);
  }

  h3,
  p {
    margin: 0;
  }
`;

interface FiguresListProps {
  figures: Figure[];
}

const FiguresList: React.FC<FiguresListProps> = ({ figures }) => {
  return (
    <Grid grid={{ desktop: 3, tablet: 2, mobile: 1 }}>
      {figures.map((data: any, index) => {
        return (
          <StyledFigure key={index} href={data.minifig.set_url}>
            <Img src={data.minifig.set_img_url} alt={data.minifig.name} />
            <Flex justify="space-between" align="flex-end">
              <h3>{data.minifig.name}</h3>
              <StyledStat>
                <Img src="/lego/part.svg" alt="logo" />
                <p>x{data.minifig.num_parts}</p>
              </StyledStat>
            </Flex>
          </StyledFigure>
        );
      })}
    </Grid>
  );
};

export default FiguresList;
