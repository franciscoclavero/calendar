import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'hours',
  initialState: {
    dayWeek: '',
    hour: ''
  },
  reducers: {
    setDayWeek: (state, action) => {
      state.dayWeek = action.payload;
    },
    setHour: (state, action) => {
      state.hour = action.payload;
    }
  }
});

export const { setDayWeek, setHour } = slice.actions;
export default slice.reducer;