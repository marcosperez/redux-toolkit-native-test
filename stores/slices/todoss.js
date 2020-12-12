import { createSlice } from "@reduxjs/toolkit";
import { Estados } from "../../constants";
let nextTodoId = 6;

const todosSlice = createSlice({
  name: "todoss",
  initialState: [
    { id: 0, text: "sadas", state: "todo" },
    { id: 1, text: "dasdas", state: "doing" },
    { id: 2, text: "adas", state: "todo" },
    { id: 3, text: "sfsdfsd", state: "closed" },
    { id: 4, text: "sdfsdfsd", state: "doing" },
    { id: 5, text: "asdas", state: "todo" },
  ],
  reducers: {
    addTodo: {
      reducer(state, action) {
        const { id, text } = action.payload;
        state.push({ id, text, state: Estados.TODO });
      },
      prepare({ text }) {
        return { payload: { text, id: nextTodoId++ } };
      },
    },
    toggleTodo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.state =
          todo.state == Estados.TODO
            ? Estados.DOING
            : todo.state == Estados.DOING
            ? Estados.CLOSED
            : Estados.TODO;
      }
    },
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
