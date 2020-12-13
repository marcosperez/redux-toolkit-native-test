import { createSlice } from "@reduxjs/toolkit";
import { Estados, TODOS_EXAMPLES } from "../../constants";
let nextTodoId = TODOS_EXAMPLES.length;

const todosSlice = createSlice({
  name: "todoss",
  initialState: TODOS_EXAMPLES,
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
