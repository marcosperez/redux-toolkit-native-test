import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    inscrement(state, action) {
      return state + 1;
    },
    decrement(state, action) {
      return state - 1;
    },
  },
});

export const { inscrement, decrement } = counterSlice.actions;

export default counterSlice.reducer;
