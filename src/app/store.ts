// store.ts
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../model/counter-reducer";

// Функция для загрузки состояния из localStorage
const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined; // Если данных нет, возвращаем undefined
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Ошибка загрузки состояния из localStorage:", err);
    return undefined;
  }
};

// Инициализация состояния из localStorage
const preloadedState = loadStateFromLocalStorage();

// объединение reducer'ов с помощью combineReducers
const rootReducer = combineReducers({
  counter: counterReducer,
});

// создание store
export const store = configureStore({
  reducer: rootReducer,
  preloadedState, // Передаем предзагруженное состояние
});

// автоматическое определение типа всего объекта состояния
export type RootState = ReturnType<typeof store.getState>;

// автоматическое определение типа метода dispatch
export type AppDispatch = typeof store.dispatch;


// Сохранение состояния в localStorage при изменении
store.subscribe(() => {
  try {
    const state = store.getState();
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.error("Ошибка сохранения состояния в localStorage:", err);
  }
});

// для возможности обращения к store в консоли браузера
// @ts-ignore
window.store = store;