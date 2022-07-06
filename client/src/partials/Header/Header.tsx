import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import * as theme from '@Components/theme';
import { Container } from '@Components/elements';

const StyledHeader = styled.header`
  background-color: ${theme.colors.blue};
  color: ${theme.colors.white};
  border-bottom: 6px solid ${theme.colors.green};

  h1 {
    color: ${theme.colors.green};
  }
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 350px;
  text-align: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;

  ul {
    display: flex;
    padding: 0;
    list-style: none;

    li {
      padding: 0 5px;
      margin: 0 15px;

      a {
        position: relative;
        color: ${theme.colors.white};
        text-decoration: none;
        padding: 10px;

        &:hover {
          color: ${theme.colors.green};
        }
      }

      &.active {
        a::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: ${theme.colors.green};
        }
      }
    }
  }
`;

const Logo = styled.img`
  cursor: pointer;
  max-width: 100px;
`;

const HamburgerMenu = styled.div``;

const Line = styled.div`
  padding: 0;
  background: ${theme.colors.white};
  border: none;
  outline: none;
  width: 100%;
  height: 2px;
`;

const Header: React.FC = () => {
  const router = useRouter();
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Link href="/">
            <Logo src="logo.svg" alt="logo" />
          </Link>
          <ul>
            <li className={router.pathname == '/' ? 'active' : ''}>
              <Link href="/">All Parts</Link>
            </li>
            <li className={router.pathname == '/sets' ? 'active' : ''}>
              <a href="/sets">Sets</a>
            </li>
            <li className={router.pathname == '/figures' ? 'active' : ''}>
              <a href="/figures">Figures</a>
            </li>
            <li>
              <a href="https://tretton37.com/contact">Contact</a>
            </li>
          </ul>
          <HamburgerMenu>
            <Line />
          </HamburgerMenu>
        </Nav>
        <Hero>
          <h1>We create well-crafted lego software</h1>
          <p>
            meticulously and always with Integrity, Quality and Pride, since
            2010
          </p>
        </Hero>
      </Container>
    </StyledHeader>
  );
};

export default Header;
