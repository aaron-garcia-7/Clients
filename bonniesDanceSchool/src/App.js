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
  const [contact, setContact] = useState(false);

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

  useEffect(() => {
    console.log(contact);
    const contactTimeout = setTimeout(() => {
      setContact(false);
    }, 2400);

    return () => clearTimeout(contactTimeout);
  }, [contact]);

  // Scroll To Top on Page Refresh
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div id="top">
      <GlobalStyles scrollLock={scrollLock} />
      <ToTop />
      <Menu
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        pageWidth={pageWidth}
        setContact={setContact}
      />
      <Nav navOpen={navOpen} setNavOpen={setNavOpen} pageWidth={pageWidth} />
      <Hero
        pageWidth={pageWidth}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        setContact={setContact}
      />
      <SubHero pageWidth={pageWidth} navOpen={navOpen} />
      <About pageWidth={pageWidth} navOpen={navOpen} />
      <Location
        pageWidth={pageWidth}
        navOpen={navOpen}
        setNavOpen={setNavOpen} // Close Nav for a11y tab index
      />
      <Footer pageWidth={pageWidth} contact={contact} />
    </div>
  );
}

export default App;
