import React from "react";
import ScrollToTop from "../router/ScrollToTop";
import { motion } from "framer-motion";
import { pageAnim } from "../animations/pageAnim";
import styled from "styled-components";
import PageBanner from "../components/PageBanner";
import { NavLink } from "react-router-dom";
import Nav from "../components/Nav";

function Blog({ navOpen, setNavOpen }) {
  return (
    <ScBlog variants={pageAnim} initial="initial" animate="animate" exit="exit">
      <ScrollToTop />
      <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
      <PageBanner title={"Blog"} />
      <main>
        <h2>Coming Soon</h2>
        <NavLink to="/">Return Home</NavLink>
      </main>
    </ScBlog>
  );
}

const ScBlog = styled(motion.div)`
  main {
    height: 100vh;
    min-height: 38rem;
    background: var(--light);
    padding: 4vw 6%;
    h2 {
      font-size: calc(1.2rem + 1.2vw);
      margin-bottom: 2rem;
    }
    a {
      font-size: calc(0.6rem + 0.6vw);
      text-decoration: underline;
    }
  }
`;

export default Blog;
