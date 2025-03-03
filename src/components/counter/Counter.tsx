import { useEffect, useState } from "react";
import { Button } from "../button/Button";
import { S } from "./Counter_Styles";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [settings, setSettings] = useState(false);
  const [maxCount, setMaxCount] = useState(5);

  const IncHandlerClick = () => {
    setCounter(counter + 1);
  };

  const ResetHandlerClick = () => {
    setCounter(0);
  };

  const maxCountRes = counter === maxCount;

  const SetHandlerClick = () => {
    setSettings(!settings);
  };

  // set items to localStorage
  useEffect(() => {
    localStorage.setItem("counterValue", JSON.stringify(counter));
  }, [counter]);

  // get items form localStorage
  useEffect(() => {
    const value = localStorage.getItem("counterValue");
    if (value) {
      const res = JSON.parse(value);
      setCounter(res);
    }
  }, []);

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
              <S.SettingsWrapper>
                <S.SettingsContainer>
                  <span>Max Value:</span>
                  <input
                    min={0}
                    type="number"
                    value={maxCount}
                    onChange={(e) => setMaxCount(Number(e.currentTarget.value))}
                  />
                </S.SettingsContainer>
                <S.SettingsContainer>
                  <span>Start Value:</span>
                  <input
                    min={0}
                    type="number"
                    value={counter}
                    onChange={(e) => setCounter(Number(e.currentTarget.value))}
                  />
                </S.SettingsContainer>
              </S.SettingsWrapper>
            </S.CounterBody>
            <S.WrapperButtons>
              <Button
                onClick={SetHandlerClick}
                isDisabled={counter < maxCount ? false : true}
              >
                set
              </Button>
            </S.WrapperButtons>
          </S.Border>
        )}
      </S.Container>
    </S.Wrapper>
  );
};
