import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    menuOpen: false,
  },
  reducers: {
    menuToggle(state) {
      state.menuOpen = !state.menuOpen;
    },
    menuClose(state) {
      state.menuClose = false;
    },
  },
});

export const { menuToggle, menuClose } = uiSlice.actions;
export default uiSlice.reducer;
