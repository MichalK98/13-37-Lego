import styled from 'styled-components';
import * as theme from '@Components/theme';
import { Profile } from '@Interfaces';
import Img from '@Components/Img';

interface TopBarProps {
  profile: Profile;
}

const StyledTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.white};
  color: ${theme.colors.blue};
  padding: 12px 26px;
`;

const StyledStats = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledStat = styled.div`
  display: flex;
  align-items: center;

  img {
    max-width: 25px;
    margin-right: 10px;
  }
`;

const TopBar: React.FC<TopBarProps> = ({ profile }) => {
  return (
    <StyledTopBar>
      <p>{profile.username}</p>
      <StyledStats>
        <StyledStat>
          <Img src="/lego/part.svg" alt="logo" />
          <p>x{profile.lego.all_parts}</p>
        </StyledStat>
        <StyledStat>
          <Img src="/lego/set.svg" alt="logo" />
          <p>x{profile.lego.total_sets}</p>
        </StyledStat>
        <StyledStat>
          <Img src="/lego/fig.svg" alt="logo" />
          <p>x{profile.lego.total_figs}</p>
        </StyledStat>
      </StyledStats>
    </StyledTopBar>
  );
};

export default TopBar;
