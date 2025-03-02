import { useState } from "react";
import { theme } from "../../styles/Theme";
import { Button } from "../button/Button";
import { S } from "./Counter_Styles";

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

  return (
    <S.Wrapper>
      <S.Container>
        {!settings ? (
          <S.Border>
            <S.CounterBody>
              <span
                style={{
                  color: maxCountRes ? "red" : `${theme.colors.primayBg}`,
                }}
              >
                {counter}
              </span>
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
              <div>Max Value:</div>
              <div>Start Value:</div>
              <span>123</span>
            </S.CounterBody>
            <S.WrapperButtons style={{ textAlign: "center" }}>
              <Button onClick={SetHandlerClick}>set</Button>
            </S.WrapperButtons>
          </S.Border>
        )}
      </S.Container>
    </S.Wrapper>
  );
};
