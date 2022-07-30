import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactOpen: false,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    toggleContact: (state) => {
      state.contactOpen = !state.contactOpen;
    },
  },
});

export const { toggleContact } = contactSlice.actions;

export default contactSlice.reducer;
