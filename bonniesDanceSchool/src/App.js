import { useState, useEffect } from "react";
import Nav from "./page/Nav";
import GlobalStyles from "./GlobalStyles";
import Hero from "./page/Hero";
import SubHero from "./page/SubHero";
import About from "./page/About";
import Location from "./page/Location";
import ToTop from "./components/ToTop";
import Footer from "./page/Footer";
import Menu from "./page/Menu";

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

  // Scroll To Top on Page Refresh
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div id="top">
      <GlobalStyles scrollLock={scrollLock} />
      <ToTop />
      <Menu navOpen={navOpen} setNavOpen={setNavOpen} pageWidth={pageWidth} />
      <Nav navOpen={navOpen} setNavOpen={setNavOpen} pageWidth={pageWidth} />
      <Hero pageWidth={pageWidth} navOpen={navOpen} />
      <SubHero pageWidth={pageWidth} navOpen={navOpen} />
      <About pageWidth={pageWidth} />
      <Location pageWidth={pageWidth} />
      <Footer pageWidth={pageWidth} />
    </div>
  );
}

export default App;
