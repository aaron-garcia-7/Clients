import { configureStore } from "@reduxjs/toolkit";

import navReducer from "./reducers/navReducer";

const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});

export default store;
