import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navToggle: false,
};

const mobileNavSlice = createSlice({
  name: "mobileNav",
  initialState,
  reducers: {
    toggleNav: (state) => {
      state.navToggle = !state.navToggle;
    },
    closeNav: (state) => {
      state.navToggle = false;
    },
  },
});

export const { toggleNav, closeNav } = mobileNavSlice.actions;

export default mobileNavSlice.reducer;
