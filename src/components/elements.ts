import styled from 'styled-components';

type FlexProps = {
  justify?: string;
  align?: string;
};

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 20px 15px;
`;

export const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${({ justify }) => (justify ? `${justify}` : 'flex-start')};
  align-items: ${({ align }) => (align ? `${align}` : 'normal')};
`;
