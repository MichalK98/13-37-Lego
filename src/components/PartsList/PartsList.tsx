import styled from 'styled-components';
import * as theme from '@Components/theme';

import { Part } from '@Interfaces';
import Img from '@Components/Img';

type StyledPartProps = {
  background: string;
};

const StyledList = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;

  @media (max-width: ${theme.media.tablet}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${theme.media.mobile}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledPart = styled.a<StyledPartProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 20px 15px;
  background: ${theme.colors.white};
  border-bottom: 6px solid #${({ background }) => background};
  color: ${theme.colors.blue};

  p {
    position: absolute;
    right: 15px;
    bottom: 0;
  }
`;

interface PartsListProps {
  parts: Part[];
}

const PartsList: React.FC<PartsListProps> = ({ parts }) => {
  return (
    <StyledList>
      {parts.map((data: any, index) => {
        return (
          <StyledPart
            key={index}
            href={data.part.part_url}
            background={data.color.rgb}
          >
            <Img src={data.part.part_img_url} alt={data.part.name} />
            <p>{data.quantity}x</p>
          </StyledPart>
        );
      })}
    </StyledList>
  );
};

export default PartsList;
