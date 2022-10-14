import React from "react";
import ScrollToTop from "../router/ScrollToTop";
import { motion } from "framer-motion";
import { pageAnim } from "../animations/pageAnim";
import styled from "styled-components";
import sundek from "../images/photos/sundek.png";
import enzy from "../images/photos/enzy.png";
import bakd from "../images/photos/bakd.png";
import briizy from "../images/photos/briizy.png";
import vitality from "../images/photos/vitality.png";
import stamina from "../images/photos/stamina.png";

import PageBanner from "../components/PageBanner";

function OurWork() {
  return (
    <ScOurWork
      variants={pageAnim}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ScrollToTop />
      <PageBanner title={"Our Work"} />
      <main>
        <div className="workGallery">
          <figure>
            <figcaption>| Sundek</figcaption>
            <img src={sundek} alt="sundek" />
          </figure>
          <figure>
            <figcaption>| Enzy</figcaption>
            <img src={enzy} alt="enzy" />
          </figure>
          <figure>
            <figcaption>| Bak’d</figcaption>
            <img src={bakd} alt="bakd" />
          </figure>
          <figure>
            <figcaption>| Briizy</figcaption>
            <img src={briizy} alt="briizy" />
          </figure>
          <figure>
            <figcaption>| Vitality</figcaption>
            <img src={vitality} alt="vitality" />
          </figure>
          <figure>
            <figcaption>| Stamina</figcaption>
            <img src={stamina} alt="stamina" />
          </figure>
        </div>
      </main>
    </ScOurWork>
  );
}

const ScOurWork = styled(motion.div)`
  background: var(--light);
  main {
    padding: 8vw 6%;
    .workGallery {
      display: grid;
      grid-template: repeat(3, 1fr) / repeat(2, 1fr);
      gap: 4vw;
      figure {
        width: 100%;
        figcaption {
          font-size: calc(1rem + 2vw);
          margin-bottom: 2vw;
        }
        img {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 768px) {
    main {
      padding: 16vw 10%;
      .workGallery {
        grid-template: repeat(6, 1fr) / 0;
        gap: 16vw 0;
        figure {
          width: 80vw;
        }
      }
    }
  }
`;

export default OurWork;
