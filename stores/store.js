import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import reducers from "./reducers";
import contador from "./slices/contador";
import todoss from "./slices/todoss";
import arbol from "./slices/arbol";
import filtro from "./slices/filtro";

const reducers = combineReducers({
  contador,
  todoss,
  filtro,
  arbol,
});

const AppStore = configureStore({
  reducer: reducers,
});

export default AppStore;
