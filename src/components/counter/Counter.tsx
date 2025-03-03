import { useState } from "react";
import { theme } from "../../styles/Theme";
import { Button } from "../button/Button";
import { S } from "./Counter_Styles";
import { styled } from "styled-components";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [settings, setSettings] = useState(false);

  const IncHandlerClick = () => {
    setCounter(counter + 1);
  };

  const ResetHandlerClick = () => {
    setCounter(0);
  };

  const maxCount = 5;
  const maxCountRes = counter === maxCount;

  const SetHandlerClick = () => {
    setSettings(!settings);
  };

  const SetSettingsHandlerClick =() => {
    setCounter();
    setSettings(!settings);
  }

  return (
    <S.Wrapper>
      <S.Container>
        {!settings ? (
          <S.Border>
            <S.CounterBody>
              <S.CounterBodyText
                style={{
                  color: maxCountRes ? "red" : "",
                }}
              >
                {counter}
              </S.CounterBodyText>
            </S.CounterBody>
            <S.WrapperButtons>
              <Button
                isDisabled={maxCountRes ? true : false}
                onClick={IncHandlerClick}
              >
                inc
              </Button>
              <Button
                isDisabled={counter > 0 ? false : true}
                onClick={ResetHandlerClick}
              >
                reset
              </Button>
              <Button onClick={SetHandlerClick}>set</Button>
            </S.WrapperButtons>
          </S.Border>
        ) : (
          <S.Border>
            <S.CounterBody>
              <SettingsWrapper>
                <SettingsContainer>
                  <span>Max Value:</span>
                  <input type="number" />
                </SettingsContainer>
                <SettingsContainer>
                  <span>Start Value:</span>
                  <input type="number" value={counter} />
                </SettingsContainer>
              </SettingsWrapper>
            </S.CounterBody>
            <S.WrapperButtons style={{ textAlign: "center" }}>
              <Button onClick={SetSettingsHandlerClick}>set</Button>
            </S.WrapperButtons>
          </S.Border>
        )}
      </S.Container>
    </S.Wrapper>
  );
};

const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  text-align: left;
`

const SettingsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;

  span {
    font: bold 29px sans-serif;
    color: ${theme.colors.secondaryBg};
    padding-right: 20px;
  } 
`