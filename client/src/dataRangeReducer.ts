import { createAction, createReducer } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";
interface CounterState {
  value: any;
}
const initialState = {
  value: localStorage.getItem("data-range")!,
} as CounterState;

const dataRangeSlice = createSlice({
  name: "dataRange",
  initialState,
  reducers: {
    setRange(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setRange } = dataRangeSlice.actions;
export default dataRangeSlice.reducer;
