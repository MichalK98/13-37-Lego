import styled from 'styled-components';

interface ImgProps {
  src: string;
  alt: string;
}

const StyledImage = styled.img`
  width: 100%;
  user-drag: none;
`;

const Img: React.FC<ImgProps> = ({ src, alt }) => {
  return <StyledImage src={src} alt={alt} />;
};

export default Img;
