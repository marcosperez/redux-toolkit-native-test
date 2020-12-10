import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { Decrement, Increment } from "./actions";

export const counter = createReducer(0, {
  [Increment.type]: (state) => {
    return state + 1;
  },
  [Decrement.type]: (state) => state - 1,
});

export default combineReducers({
  counter,
});
