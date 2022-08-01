import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./router/ScrollToTop";
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <ScrollToTop />
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

// reportWebVitals();
