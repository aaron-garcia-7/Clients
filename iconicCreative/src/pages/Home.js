import React from "react";
import styled from "styled-components";
import About from "./sections/About";
import Brands from "./sections/Brands";
import Hero from "./sections/Hero";
import Specialties from "./sections/Specialties";
import Work from "./sections/Work";

function Home({ pageWidth }) {
  return (
    <div>
      <Hero pageWidth={pageWidth} />
      <Specialties pageWidth={pageWidth} />
      <Brands />
      <About />
      <Work pageWidth={pageWidth} />
    </div>
  );
}

export default Home;
