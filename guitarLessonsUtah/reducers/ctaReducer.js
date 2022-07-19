import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const ctaSlice = createSlice({
  name: "cta",
  initialState,
  reducers: {
    openCta: (state) => {
      state.isOpen = true;
    },
    closeCta: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openCta, closeCta } = ctaSlice.actions;

export default ctaSlice.reducer;
