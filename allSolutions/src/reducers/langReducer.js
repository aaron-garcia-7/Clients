import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "English",
};

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    changeEnglish: (state) => {
      state.language = "English";
    },
    changeSpanish: (state) => {
      state.language = "Spanish";
    },
  },
});

export const { changeEnglish, changeSpanish } = langSlice.actions;

export default langSlice.reducer;
