import { useState, useEffect } from "react";
import CallNow from "./components/CallNow";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import NavMobile from "./components/NavMobile";
import GlobalStyles from "./GlobalStyles";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import SubSection from "./sections/SubSection";

const App = () => {
  const [navToggle, setNavToggle] = useState(false);

  const closeNavWindow = () => {
    return window.innerWidth > 768 ? setNavToggle(false) : null;
  };

  useEffect(() => {
    window.addEventListener("resize", closeNavWindow);

    return () => window.removeEventListener("resize", closeNavWindow);
  }, []);

  return (
    <>
      <GlobalStyles />
      <Nav navToggle={navToggle} setNavToggle={setNavToggle} />
      <NavMobile navToggle={navToggle} />
      <CallNow />
      <Hero />
      <SubSection />
      <Services />
      <Footer />
    </>
  );
};

export default App;
