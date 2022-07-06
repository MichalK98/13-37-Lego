import styled from 'styled-components';
import * as theme from '@Components/theme';

import { Set } from '@Interfaces';
import Img from '@Components/Img';
import { Flex, Grid, StyledStat } from '@Components/elements';

const StyledSet = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 15px;
  background: ${theme.colors.white};
  color: ${theme.colors.blue};
  text-decoration: none;

  h3,
  p {
    margin: 0;
  }
`;

interface SetsListProps {
  sets: Set[];
}

const SetsList: React.FC<SetsListProps> = ({ sets }) => {
  return (
    <Grid grid={{ desktop: 3, tablet: 2, mobile: 1 }}>
      {sets.map((data: any, index) => {
        return (
          <StyledSet key={index} href={data.set.set_url}>
            <Img src={data.set.set_img_url} alt={data.set.name} />
            <Flex justify="space-between" align="center">
              <h3>{data.set.name}</h3>
              <StyledStat>
                <Img src="/lego/part.svg" alt="logo" />
                <p>x{data.set.num_parts}</p>
              </StyledStat>
            </Flex>
          </StyledSet>
        );
      })}
    </Grid>
  );
};

export default SetsList;
