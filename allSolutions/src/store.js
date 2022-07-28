import { configureStore } from "@reduxjs/toolkit";

import langReducer from "./reducers/langReducer";
import navReducer from "./reducers/navReducer";

const store = configureStore({
  reducer: {
    lang: langReducer,
    nav: navReducer,
  },
});

export default store;
