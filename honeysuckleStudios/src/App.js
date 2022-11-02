import { useState, useEffect } from "react";
import Burger from "./components/Burger";
import Nav from "./components/Nav";
import GlobalStyles from "./GlobalStyles";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Location from "./sections/Location";
import Footer from "./sections/Footer";

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const checkWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkWidth);

    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, [width]);

  return (
    <div>
      <GlobalStyles />
      <Burger />
      <Nav />
      <Hero width={width} />
      <Services width={width} />
      <Location />
      <Footer />
    </div>
  );
};

export default App;
