import { useState } from "react";
import { theme } from "../../styles/Theme";
import { Button } from "../button/Button";
import { S } from "./Counter_Styles";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const IncHandlerClick = () => {
    setCounter(counter + 1);
  };

  const ResetHandlerClick = () => {
    setCounter(0);
  };

  const maxCount = 5;
  const maxCountRes = counter === maxCount;

  return (
    <S.Wrapper>
      <S.Container>
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
          </S.WrapperButtons>
        </S.Border>
      </S.Container>
    </S.Wrapper>
  );
};
