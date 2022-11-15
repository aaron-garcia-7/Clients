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
    },
    removeLight: (state) => {
      state.light = false;
    },
  },
});

export const { addLight, removeLight } = navSlice.actions;

export default navSlice.reducer;
