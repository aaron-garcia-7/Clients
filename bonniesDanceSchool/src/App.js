import { useState, useEffect } from "react";
import About from "./page/About";
import Hero from "./page/Hero";
import Location from "./page/Location";
import Menu from "./page/Menu";
import Nav from "./page/Nav";
import SubHero from "./page/SubHero";
import GlobalStyles from "./GlobalStyles";
import ToTop from "./components/ToTop";
import Footer from "./page/Footer";

const App = () => {
  // Check page width
  const [width, setWidth] = useState(window.innerWidth);
  const checkWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, [width]);

  // Check navigation menu state
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div id="top">
      <GlobalStyles />
      <Menu menuOpen={menuOpen} width={width} />
      <Nav menuOpen={menuOpen} toggleMenu={toggleMenu} width={width} />
      <Hero width={width} />
      <SubHero />
      <About />
      <Location />
      <Footer width={width} />
      <ToTop />
    </div>
  );
};

export default App;
