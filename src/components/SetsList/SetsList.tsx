import styled from 'styled-components';
import * as theme from '@Components/theme';

import { Set } from '@Interfaces';
import Img from '@Components/Img';
import { Flex } from '@Components/elements';

const StyledList = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const StyledSet = styled.a`
  padding: 20px 15px;
  background: ${theme.colors.white};
  color: ${theme.colors.blue};
  text-decoration: none;

  img {
    margin-bottom: 15px;
  }

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
    <StyledList>
      {sets.map((data: any, index) => {
        return (
          <StyledSet key={index} href={data.set.set_url}>
            <Img src={data.set.set_img_url} alt={data.set.name} />
            <Flex justify="space-between" align="center">
              <h3>{data.set.name}</h3>
              <p>{data.quantity}x</p>
            </Flex>
          </StyledSet>
        );
      })}
    </StyledList>
  );
};

export default SetsList;
