import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

// Components
import DiscountBanner from "./components/DiscountBanner";
import Burger from "./components/Burger";
import Nav from "./components/Nav";

// Styles
import GlobalStyle from "./GlobalStyle";

function App() {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div>
      <GlobalStyle />
      {/* <DiscountBanner /> */}
      <Burger menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
      <Nav menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
