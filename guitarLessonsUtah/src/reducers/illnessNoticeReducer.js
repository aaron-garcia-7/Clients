import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noticeToggle: false,
};

const IllnessNoticeSlice = createSlice({
  name: "illnessNotice",
  initialState,
  reducers: {
    toggleNotice: (state) => {
      state.noticeToggle = !state.noticeToggle;
    },
  },
});

export const { toggleNotice } = IllnessNoticeSlice.actions;

export default IllnessNoticeSlice.reducer;
