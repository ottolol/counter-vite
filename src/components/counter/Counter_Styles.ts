import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
`;

const Container = styled.div`
  max-width: 1440px;
`;

const Border = styled.div`
  border: 4px solid ${theme.colors.secondaryBg};
  border-radius: 10px;
  padding: 15px;
`;

const CounterBody = styled.div`
  text-align: center;
  min-width: 250px;
  background-color: ${theme.colors.secondaryBg};
  border: 4px solid ${theme.colors.secondaryBg};
  border-radius: 10px;
  margin: 0 0 15px 0;
  padding: 15px 0;

  span {
    font: bold 58px sans-serif;
  }
`;

const WrapperButtons = styled.div`
  border: 4px solid ${theme.colors.secondaryBg};
  border-radius: 10px;
  padding: 25px 0;
`;

export const S = {
  Wrapper,
  Container,
  Border,
  CounterBody,
  WrapperButtons,
};
