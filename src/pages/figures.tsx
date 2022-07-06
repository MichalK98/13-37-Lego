import type { NextPage, GetStaticProps } from 'next';
import { Container } from '@Components/elements';
import { getAllFigures, getProfile } from './api/parts';

import FiguresListContainer from 'src/containers/FiguresListContainer';
import { AllFigures, Profile } from '@Interfaces';
import styled from 'styled-components';
import TopBar from '@Components/TopBar';

interface HomeProps {
  allFigures: AllFigures;
  profile: Profile;
}

const StyledOverlay = styled.div`
  background: #002b55f0;
`;

const Figures: NextPage<HomeProps> = ({ allFigures, profile }) => {
  return (
    <StyledOverlay>
      <Container>
        <TopBar profile={profile} />
        <FiguresListContainer initialData={allFigures} />
      </Container>
    </StyledOverlay>
  );
};

export default Figures;

export const getStaticProps: GetStaticProps = async () => {
  const allFigures = await getAllFigures()
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
      allFigures,
      profile
    }
  };
};
