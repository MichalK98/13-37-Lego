import styled from 'styled-components';
import * as theme from '@Components/theme';

import { Figure } from '@Interfaces';
import Img from '@Components/Img';
import { Flex, StyledStat } from '@Components/elements';

const StyledList = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  @media (max-width: ${theme.media.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.media.mobile}) {
    grid-template-columns: 1fr;
  }
`;

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
    <StyledList>
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
    </StyledList>
  );
};

export default FiguresList;
