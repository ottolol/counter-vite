import styled from "styled-components";
import { theme } from "../styles/Theme";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  background-color: ${theme.colors.primayBg};
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
  background-color: ${theme.colors.primayBg};
  border: 4px solid ${theme.colors.secondaryBg};
  border-radius: 10px;
  margin: 0 0 15px 0;
  padding: 15px 0;
`;

const CounterBodyText = styled.span`
  color: ${theme.colors.secondaryBg};
  font: bold 58px sans-serif;
`;

const WrapperButtons = styled.div`
  border: 4px solid ${theme.colors.secondaryBg};
  border-radius: 10px;
  padding: 25px 0;
  text-align: center;
`;

// Settings component
const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  text-align: left;
`;

const SettingsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;

  span {
    font: bold 29px sans-serif;
    color: ${theme.colors.secondaryBg};
    padding-right: 20px;
  }

  input {
    text-align: center;
  }
`;

export const S = {
  Wrapper,
  Container,
  Border,
  CounterBody,
  CounterBodyText,
  WrapperButtons,
  SettingsWrapper,
  SettingsContainer,
};
