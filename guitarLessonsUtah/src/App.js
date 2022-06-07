import { useState } from "react";

import About from "./components/About";
import DiscountBanner from "./components/DiscountBanner";
import Burger from "./components/Burger";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GuitarStyles from "./components/GuitarStyles";
import Hero from "./components/Hero";
import Locations from "./components/Locations";
import Nav from "./components/Nav";
import SubHero from "./components/SubHero";
import Testimonials from "./components/Testimonials";
import GlobalStyle from "./GlobalStyle";
// Global SVGs
import arrow from "./images/graphics/arrow.svg";

function App() {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div>
      <GlobalStyle />
      <DiscountBanner />
      <Burger menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
      <Nav menuToggle={menuToggle} />
      <Hero arrow={arrow} />
      <SubHero arrow={arrow} />
      <About arrow={arrow} />
      <GuitarStyles arrow={arrow} />
      <Locations arrow={arrow} />
      <Testimonials arrow={arrow} />
      <Contact arrow={arrow} />
      <Footer />
    </div>
  );
}

export default App;
