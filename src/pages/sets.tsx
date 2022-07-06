import type { NextPage, GetStaticProps } from 'next';
import { Container } from '@Components/elements';
import { getAllSets, getProfile } from './api/parts';

import SetsListContainer from 'src/containers/SetsListContainer';
import { AllSets, Profile } from '@Interfaces';
import styled from 'styled-components';
import TopBar from '@Components/TopBar';

interface HomeProps {
  allSets: AllSets;
  profile: Profile;
}

const StyledOverlay = styled.div`
  background: #002b55f0;
`;

const Sets: NextPage<HomeProps> = ({ allSets, profile }) => {
  return (
    <StyledOverlay>
      <Container>
        <TopBar profile={profile} />
        <SetsListContainer initialData={allSets} />
      </Container>
    </StyledOverlay>
  );
};

export default Sets;

export const getStaticProps: GetStaticProps = async () => {
  const allSets = await getAllSets()
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
      allSets,
      profile
    }
  };
};
