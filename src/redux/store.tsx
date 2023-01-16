import { configureStore } from "@reduxjs/toolkit";

import hoursReducer from "./reducers/hoursReducer";
import themeReducer from "./reducers/themeReducer";

export const store = configureStore({
  reducer: {
    week: hoursReducer,
    theme: themeReducer
  }
});

export type RootState = ReturnType<typeof store.getState>