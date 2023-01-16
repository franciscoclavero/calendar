import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'theme',
  initialState: {
    type: 'light'
  },
  reducers: {
    setThemeStatis: (state, action) => {
      state.type = action.payload;
    }
  }
});

export const { setThemeStatis } = slice.actions;
export default slice.reducer;