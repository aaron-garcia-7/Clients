import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navOpen: false,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    toggleNav: (state) => {
      state.navOpen = !state.navOpen;
    },
    closeNav: (state) => {
      state.navOpen = false;
      console.log("this should closeNav");
    },
  },
});

export const { toggleNav, closeNav } = navSlice.actions;

export default navSlice.reducer;
