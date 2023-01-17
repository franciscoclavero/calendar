import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'theme',
  initialState: {
    type: 'dark',
    light: {
      backgroundColor: '#fafafa',
      color: '#302C36'
    },
    dark: {
      backgroundColor: '#56505E',
      color: '#FFFFFF'
    }
  },
  reducers: {
    setThemeType: (state, action) => {
      state.type = action.payload;
    }
  }
});

export const { setThemeType } = slice.actions;
export default slice.reducer;