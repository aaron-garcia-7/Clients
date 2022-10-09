import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import GlobalStyle from "./GlobalStyles";
import Home from "./pages/Home";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  const checkWidth = () => {
    setPageWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkWidth);

    return () => window.removeEventListener("scroll", checkWidth);
  }, [pageWidth]);

  return (
    <div>
      <GlobalStyle />
      <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
      <Home pageWidth={pageWidth} />
      <Footer />
    </div>
  );
}

export default App;
