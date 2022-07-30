import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeNav } from "./reducers/navReducer";
import GlobalStyles from "./GlobalStyles";

// Page
import Home from "./pages/Home";
import About from "./pages/About";

// Components
import CallNow from "./components/CallNow";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import NavMobile from "./components/NavMobile";

import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import ThankYou from "./components/ThankYou";

const App = () => {
  const dispatch = useDispatch();
  const { contactOpen } = useSelector((store) => store.contact);
  const { cardOpen } = useSelector((store) => store.card);

  const closeNavWindow = () => {
    return window.innerWidth > 768 ? dispatch(closeNav()) : null;
  };

  useEffect(() => {
    window.addEventListener("resize", closeNavWindow);

    return () => window.removeEventListener("resize", closeNavWindow);
  }, []);

  return (
    <>
      <GlobalStyles />
      <Nav />
      <NavMobile />
      <CallNow />
      {contactOpen && <Contact />}
      {cardOpen && <ThankYou />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
