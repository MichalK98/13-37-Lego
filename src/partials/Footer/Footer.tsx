import styled from 'styled-components';
import * as theme from '@Components/theme';
import { Container } from '@Components/elements';

const StyledFooter = styled.footer`
  background-color: ${theme.colors.grey};
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>Footer</Container>
    </StyledFooter>
  );
};

export default Footer;
