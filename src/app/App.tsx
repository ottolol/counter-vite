import "./App.css";
import { useEffect, useState } from "react";
import { Button } from "../components/button/Button";
import { S } from "./App_Styles";
import { useAppDispatch } from "../common/hooks/useAppDispatch";
import { useAppSelector } from "../common/hooks/useAppSelector";
import { selectCounter, selectMaxCount } from "../model/counter-selectors";
import { incrementAC, resetAC, setCounterAC, setMaxCountAC } from "../model/counter-reducer";

export type CounterState = {
  counter: number
};

function App() {
    // const [counter, setCounter] = useState<number>(() => {
  //     return Number(localStorage.getItem("counterValue")) || 0;
  // });

  


  const dispatch = useAppDispatch();
  const counter = useAppSelector(selectCounter);
  const maxCount = useAppSelector(selectMaxCount);

  const [settings, setSettings] = useState(false);

  const IncHandlerClick = () => {
    dispatch(incrementAC(0));
  };

  const ResetHandlerClick = () => {
    dispatch(resetAC(0));
  };

  const maxCountRes = counter === maxCount;

  const SetHandlerClick = () => {
    setSettings(!settings);
  };

  // Загрузка значений из localStorage при первой отрисовке компонента
  useEffect(() => {
    const savedCounter = localStorage.getItem("counterValue");
    const savedMaxCount = localStorage.getItem("maxCountValue");

    if (savedCounter !== null) {
      dispatch(setCounterAC(Number(savedCounter)));
    }
    if (savedMaxCount !== null) {
      dispatch(setMaxCountAC(Number(savedMaxCount)));
    }
  }, [dispatch]);

  // Сохранение значений в localStorage при изменении counter или maxCount
  useEffect(() => {
    localStorage.setItem("counterValue", JSON.stringify(counter));
  }, [counter]);

  useEffect(() => {
    localStorage.setItem("maxCountValue", JSON.stringify(maxCount));
  }, [maxCount]);

  // set items to localStorage
  // useEffect(() => {
  //   localStorage.setItem("counterValue", JSON.stringify(counter));
  // }, [counter]);
    
  return (
    <div className="App">
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
                          onChange={(e) => dispatch(setMaxCountAC(Number(e.currentTarget.value)))}
                        />
                      </S.SettingsContainer>
                      <S.SettingsContainer>
                        <span>Start Value:</span>
                        <input
                          min={0}
                          type="number"
                          value={counter}
                          onChange={(e) => dispatch(setCounterAC(Number(e.currentTarget.value)))}
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
    </div>
  );
}

export default App;
