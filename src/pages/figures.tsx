import type { NextPage, GetStaticProps } from 'next';
import { Container } from '@Components/elements';
import { getAllParts, getProfile } from './api/parts';

import PartsListContainer from 'src/containers/PartsListContainer';
import { AllParts, Profile } from '@Interfaces';
import styled from 'styled-components';
import TopBar from '@Components/TopBar';

interface HomeProps {
  allParts: AllParts;
  profile: Profile;
}

const StyledOverlay = styled.div`
  background: #002b55f0;
`;

const Home: NextPage<HomeProps> = ({ allParts, profile }) => {
  return (
    <StyledOverlay>
      <Container>
        <TopBar profile={profile} />
        {/* <PartsListContainer initialData={allParts} /> */}
      </Container>
    </StyledOverlay>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allParts = await getAllParts()
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });

  const profile = await getProfile()
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });

  return {
    props: {
      allParts,
      profile
    }
  };
};
