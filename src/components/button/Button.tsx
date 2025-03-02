import { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

type ButtonPropsType = {
  children: ReactNode;
  onClick: () => void;
  isDisabled?: boolean;
};

export const Button = ({ children, onClick, isDisabled }: ButtonPropsType) => {
  return (
    <ButtonStyled disabled={isDisabled} onClick={() => onClick()}>
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  font: bold 48px sans-serif;
  color: #2a2b37;
  background-color: ${theme.colors.secondaryBg};
  border-radius: 10px;
  padding: 0 15px;
  margin: 0 15px;

  &:disabled {
    background-color: #407284;
  }
  &:hover {
    cursor: pointer;
  }
`;
