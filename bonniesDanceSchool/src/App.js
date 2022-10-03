import { useState, useEffect } from "react";
import Nav from "./page/Nav";
import GlobalStyles from "./GlobalStyles";
import Hero from "./page/Hero";
import SubHero from "./page/SubHero";
import About from "./page/About";

function App() {
  const [scrollLock, setScrollLock] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  const checkWidth = () => {
    setPageWidth(window.innerWidth);
  };

  useEffect(() => {
    const loadTime = setTimeout(() => {
      setScrollLock(false);
    }, 3000);

    return () => clearTimeout(loadTime);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, [pageWidth]);

  return (
    <div>
      <GlobalStyles scrollLock={scrollLock} />
      <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
      <Hero pageWidth={pageWidth} />
      <SubHero />
      <About />
    </div>
  );
}

export default App;
