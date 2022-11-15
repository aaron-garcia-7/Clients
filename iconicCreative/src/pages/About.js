import React from "react";
import { useInView } from "react-intersection-observer";
import ScrollToTop from "../router/ScrollToTop";
import { motion } from "framer-motion";
import { pageAnim } from "../animations/pageAnim";
import styled from "styled-components";
import Nav from "../components/Nav";
import TeamMember from "../components/TeamMember";
import teamData from "../data/teamData";

import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";

function About({ navOpen, setNavOpen, pageWidth }) {
  const [ref, inView] = useInView({
    threshold: pageWidth <= 768 ? 0.2 : 0.5,
    triggerOnce: true,
  });
  return (
    <ScAbout
      variants={pageAnim}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ScrollToTop />
      <Nav navOpen={navOpen} setNavOpen={setNavOpen} pageWidth={pageWidth} />
      <PageBanner
        title={"About"}
        copy={
          "We build iconic brands and grow them. Period. We don’t do anything else."
        }
        altCopy={true}
      />
      <main>
        <div className="aboutRef" ref={ref} />
        <div className="gallery">
          {teamData.map((obj) => (
            <TeamMember
              key={obj.id}
              id={obj.id}
              name={obj.name}
              img={obj.img}
              title={obj.title}
              title2={obj.title2}
              inView={inView}
            />
          ))}
        </div>
      </main>
      <Footer />
    </ScAbout>
  );
}

const ScAbout = styled(motion.div)`
  main {
    position: relative;
    background: var(--light);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8vw 0;
    z-index: 1;
    .aboutRef {
      position: absolute;
      top: 0;
      padding: 1rem;
      /* background: red; */
    }
    .gallery {
      width: 60vw;
      display: grid;
      grid-template: repeat(2, 1fr) / repeat(2, 1fr);
      gap: 2rem 8vw;
    }
  }

  @media (max-width: 520px) {
    main {
      padding: 16vw 0;
      .gallery {
        grid-template: repeat(4, 1fr) / 0;
      }
    }
  }
`;

export default About;
