import { configureStore } from "@reduxjs/toolkit";

import hoursReducer from "./reducers/hoursReducer";

export const store = configureStore({
  reducer: {
    week: hoursReducer
  }
});

export type RootState = ReturnType<typeof store.getState>