import styled from 'styled-components';
import * as theme from '@Components/theme';

interface TopBarProps {
  count: number | null;
}

const StyledTopBar = styled.div`
  background-color: ${theme.colors.white};
  color: ${theme.colors.blue};
  padding: 12px 26px;
`;

const TopBar: React.FC<TopBarProps> = ({ count }) => {
  return (
    <StyledTopBar>
      <p>Blocks: {count}</p>
    </StyledTopBar>
  );
};

export default TopBar;
