import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import Burger from "./components/Burger";
import GridArea from "./components/GridArea";
import Nav from "./components/Nav";
import GlobalStyles from "./GlobalStyles";
import Hero from "./sections/Hero";
import Services from "./sections/Services";

const App = () => {
  // const { navOpen } = useSelector((store) => store.nav);
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
      {/* <GridArea /> */}
      <Burger />
      {/* {navOpen && <Nav />} */}
      <Nav />
      <Hero width={width} />
      <Services width={width} />
    </div>
  );
};

export default App;
