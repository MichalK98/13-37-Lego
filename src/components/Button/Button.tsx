import styled from 'styled-components';
import * as theme from '@Components/theme';

interface ButtonProps {
  children: string;
  onClick: () => void;
}

const StyledButton = styled.button`
  position: relative;
  background-color: ${theme.colors.green};
  color: ${theme.colors.white};
  border: none;
  outline: none;
  padding: 12px 26px;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.white};
    color: ${theme.colors.green};
  }
`;

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
