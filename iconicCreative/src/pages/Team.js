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

function Team({ navOpen, setNavOpen, pageWidth }) {
  const [ref, inView] = useInView({
    threshold: pageWidth <= 768 ? 0.2 : 0.5,
    triggerOnce: true,
  });
  return (
    <ScTeam variants={pageAnim} initial="initial" animate="animate" exit="exit">
      <ScrollToTop />
      <Nav navOpen={navOpen} setNavOpen={setNavOpen} pageWidth={pageWidth} />
      <PageBanner title={"Team"} />
      <main>
        <div className="teamRef" ref={ref} />
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
    </ScTeam>
  );
}

const ScTeam = styled(motion.div)`
  main {
    position: relative;
    background: var(--light);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8vw 0;
    z-index: 1;
    .teamRef {
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

export default Team;
