import styled from 'styled-components';
import * as theme from '@Components/theme';

import { Part } from '@Interfaces';
import Img from '@Components/Img';
import { Grid } from '@Components/elements';

type StyledPartProps = {
  background: string;
};

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
    <Grid grid={{ desktop: 6, tablet: 4, mobile: 3 }}>
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
    </Grid>
  );
};

export default PartsList;
