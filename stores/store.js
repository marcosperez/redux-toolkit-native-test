import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import reducers from "./reducers";
import contador from "./slices/contador";
import todoss from "./slices/todoss";

const reducers = combineReducers({
  contador,
  todoss,
});

const AppStore = configureStore({
  reducer: reducers,
});

export default AppStore;
