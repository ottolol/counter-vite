import { RootState } from "../app/store";

export const selectCounter = (state: RootState) => state.counter.counter;
export const selectMaxCount = (state: RootState) => state.counter.maxCount;