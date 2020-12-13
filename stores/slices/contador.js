import { createSlice } from "@reduxjs/toolkit";
import { TODOS_EXAMPLES } from "../../constants";

const counterSlice = createSlice({
  name: "counter",
  initialState: TODOS_EXAMPLES.length,
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
