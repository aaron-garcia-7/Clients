import React from "react";
import ScrollToTop from "../router/ScrollToTop";
import { motion } from "framer-motion";
import { pageAnim } from "../animations/pageAnim";
import About from "./sections/About";
import Brands from "./sections/Brands";
import Hero from "./sections/Hero";
import Specialties from "./sections/Specialties";
import Work from "./sections/Work";
import Nav from "../components/Nav";

function Home({ pageWidth, navOpen, setNavOpen }) {
  return (
    <motion.div
      variants={pageAnim}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ScrollToTop />
      <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
      <Hero pageWidth={pageWidth} />
      <Specialties pageWidth={pageWidth} />
      <Brands />
      <About />
      <Work pageWidth={pageWidth} />
    </motion.div>
  );
}

export default Home;
