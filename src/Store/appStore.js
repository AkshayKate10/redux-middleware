import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import logger from "redux-logger";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: true,
});

export { store };
