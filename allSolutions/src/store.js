import { configureStore } from "@reduxjs/toolkit";

import langReducer from "./reducers/langReducer";
import navReducer from "./reducers/navReducer";
import contactReducer from "./reducers/contactReducer";
import cardReducer from "./reducers/cardReducer";

const store = configureStore({
  reducer: {
    lang: langReducer,
    nav: navReducer,
    contact: contactReducer,
    card: cardReducer,
  },
});

export default store;
