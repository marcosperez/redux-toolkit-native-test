import { createSlice } from "@reduxjs/toolkit";

const SIGUIENTE_LETRA = {
  A: "T",
  T: "C",
  C: "G",
  G: "A",
};

const ArbolSlice = createSlice({
  name: "arbol",
  initialState: {
    arbol: [
      ["A", "A", "A", "A"],
      ["A", "T", "C", "G"],
      ["A", "T", "C", "G"],
      ["A", "T", "C", "G"],
    ],
  },
  reducers: {
    addN: {
      reducer(state, action) {
        const { arbol } = state;
        const nuevoArbol = arbol.map((fila) => [...fila, "A"]);
        nuevoArbol.push(Array(nuevoArbol[0].length).fill("A"));
        return { arbol: nuevoArbol };
      },
    },
    removeN: {
      reducer(state, action) {
        const { arbol } = state;
        if (arbol.length === 4) return { arbol };
        const nuevoArbol = arbol.map((fila) => fila.slice(0, fila.length - 1));
        return { arbol: nuevoArbol.slice(0, nuevoArbol.length - 1) };
      },
    },
    cambiarLetra: {
      reducer(state, action) {
        const { arbol } = state;
        const { fila, columna } = action.payload;
        const nuevoArbol = arbol.slice();
        nuevoArbol[fila][columna] = SIGUIENTE_LETRA[arbol[fila][columna]];
        state.arbol = nuevoArbol;
      },
    },
  },
});

export const { addN, removeN, cambiarLetra } = ArbolSlice.actions;

export default ArbolSlice.reducer;
