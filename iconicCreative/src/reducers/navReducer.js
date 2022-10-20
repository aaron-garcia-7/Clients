import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  light: false,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    addLight: (state) => {
      state.light = true;
      console.log("nav should be white");
    },
    removeLight: (state) => {
      state.light = false;
      console.log("nav should be black");
    },
  },
});

export const { addLight, removeLight } = navSlice.actions;

export default navSlice.reducer;
