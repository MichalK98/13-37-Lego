import styled from 'styled-components';
import * as theme from '@Components/theme';

interface ButtonProps {
  children: string;
  onClick?: () => void;
  disabled?: boolean;
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

  &:disabled {
    background-color: ${theme.colors.grey};
    color: ${theme.colors.white};

    &:hover {
      cursor: initial;
      background-color: ${theme.colors.grey};
    }
  }
`;

const Button: React.FC<ButtonProps> = ({ disabled, children, onClick }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
