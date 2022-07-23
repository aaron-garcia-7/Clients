import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ctaToggle: false,
};

const ctaSlice = createSlice({
  name: "cta",
  initialState,
  reducers: {
    openCta: (state) => {
      state.ctaToggle = true;
    },
    closeCta: (state) => {
      state.ctaToggle = false;
    },
  },
});

export const { openCta, closeCta } = ctaSlice.actions;

export default ctaSlice.reducer;
