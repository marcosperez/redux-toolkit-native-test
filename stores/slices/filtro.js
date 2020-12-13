import { createSlice } from "@reduxjs/toolkit";
import { Estados } from "../../constants";

const FiltroSlice = createSlice({
  name: "filtroEstados",
  initialState: { filtro: Estados.ALL },
  reducers: {
    setFilter: {
      reducer(state, action) {
        const { filtro } = action.payload;
        return { filtro };
      },
    },
  },
});

export const { setFilter } = FiltroSlice.actions;

export default FiltroSlice.reducer;
