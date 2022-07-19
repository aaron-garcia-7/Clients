import { configureStore } from "@reduxjs/toolkit";

import ctaReducer from "./reducers/ctaReducer";

const store = configureStore({
  reducer: {
    cta: ctaReducer,
  },
});

export default store;
