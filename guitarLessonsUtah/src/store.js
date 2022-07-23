import { configureStore } from "@reduxjs/toolkit";

import ctaReducer from "./reducers/ctaReducer";
import illnessNoticeReducer from "./reducers/illnessNoticeReducer";
import mobileNavReducer from "./reducers/mobileNavReducer";

const store = configureStore({
  reducer: {
    cta: ctaReducer,
    illNote: illnessNoticeReducer,
    mobileNav: mobileNavReducer,
  },
});

export default store;
