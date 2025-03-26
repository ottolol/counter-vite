import { createAction, createReducer } from "@reduxjs/toolkit";

type CounterState = {
  counter: number;
  maxCount: number;
};

const initialState: CounterState = {
  counter: 0,
  maxCount: 5,
};
 
export const incrementAC = createAction<number>("counter/increment");
export const resetAC = createAction<number>("counter/reset");
export const setCounterAC = createAction<number>("counter/setCounter");
export const setMaxCountAC = createAction<number>("counter/setMaxCount");

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(incrementAC, (state, action) => {
      state.counter++
    })
    .addCase(resetAC, (state, action) => {
      state.counter = 0
    })
    .addCase(setCounterAC, (state, action) => {
      state.counter = action.payload
    })
    .addCase(setMaxCountAC, (state, action) => {
      state.maxCount = action.payload
    })
})

