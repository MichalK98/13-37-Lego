import type { NextPage, GetStaticProps } from 'next';
import { Container } from '@Components/elements';
import { getAllParts } from './api/parts';

import PartsListContainer from 'src/containers/PartsListContainer';
import { Data } from '@Interfaces';
import styled from 'styled-components';

interface HomeProps {
  data: Data;
}

const StyledOverlay = styled.div`
  background: #002b55f0;
`;

const Home: NextPage<HomeProps> = ({ data }) => {
  return (
    <StyledOverlay>
      <Container>
        <PartsListContainer initialData={data} />
      </Container>
    </StyledOverlay>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAllParts()
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });

  return {
    props: {
      data
    }
  };
};
