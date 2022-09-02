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
      console.log("toggled the nav");
    },
    openNav: (state) => {
      state.navOpen = true;
      console.log("opened the nav");
    },
    closeNav: (state) => {
      state.navOpen = false;
      console.log("closed the nav");
    },
  },
});

export const { toggleNav, openNav, closeNav } = navSlice.actions;

export default navSlice.reducer;
