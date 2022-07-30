import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardOpen: false,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    openCard: (state) => {
      state.cardOpen = true;
    },
    closeCard: (state) => {
      state.cardOpen = false;
    },
  },
});

export const { openCard, closeCard } = cardSlice.actions;

export default cardSlice.reducer;
