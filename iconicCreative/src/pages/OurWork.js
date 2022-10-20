import React from "react";
import ScrollToTop from "../router/ScrollToTop";
import { useInView } from "react-intersection-observer";
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

function OurWork({ pageWidth }) {
  const [ref, inView] = useInView({
    // threshold: 1,
    threshold:
      pageWidth >= 1440 ? 0.9 : pageWidth < 1440 && pageWidth > 520 ? 1 : 0.9,
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    // threshold: pageWidth > 768 ? 0.5 : 0.2,
    threshold:
      pageWidth >= 1440 ? 0.9 : pageWidth < 1440 && pageWidth > 520 ? 0.4 : 0.2,
    triggerOnce: true,
  });
  const [ref3, inView3] = useInView({
    // threshold: pageWidth > 768 ? 0.5 : 0.1,
    threshold:
      pageWidth >= 1440 ? 0.9 : pageWidth < 1440 && pageWidth > 520 ? 0.2 : 0.2,
    triggerOnce: true,
  });

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
          <div className="workRef" ref={ref} />
          <figure className={inView ? "active" : ""}>
            <figcaption>| Sundek</figcaption>
            <img src={sundek} alt="sundek" />
          </figure>
          <figure className={inView ? "active active2" : ""}>
            <figcaption>| Enzy</figcaption>
            <img src={enzy} alt="enzy" />
          </figure>
          <div className="workRef" ref={ref2} />
          <figure className={inView2 ? "active" : ""}>
            <figcaption>| Bak’d</figcaption>
            <img src={bakd} alt="bakd" />
          </figure>
          <figure className={inView2 ? "active active2" : ""}>
            <figcaption>| Briizy</figcaption>
            <img src={briizy} alt="briizy" />
          </figure>
          <div className="workRef" ref={ref3} />
          <figure className={inView3 ? "active" : ""}>
            <figcaption>| Vitality</figcaption>
            <img src={vitality} alt="vitality" />
          </figure>
          <figure className={inView3 ? "active active2" : ""}>
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
        position: relative;
        width: 100%;
        figcaption {
          position: relative;
          font-size: calc(1rem + 2vw);
          margin-bottom: 2vw;
          display: inline-block;
          &::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            background: var(--light);
            width: 100%;
            height: 108%;
          }
        }
        img {
          width: 100%;
        }
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          right: 0;
          background: var(--light);
          width: 100%;
          height: 86%;
        }
      }
      .active {
        &::after {
          animation: slider 0.6s ease 0.3s forwards;
        }
        figcaption {
          &::after {
            animation: slider 0.4s ease 0.2s forwards;
          }
        }
      }
      .active2 {
        &::after {
          animation-delay: 0.6s;
        }
        figcaption {
          &::after {
            animation-delay: 0.5s;
          }
        }
      }
      .workRef {
        position: absolute;
        left: 0;
        padding: 2rem;
        &:nth-of-type(2) {
          bottom: -86%;
        }
        &:nth-of-type(3) {
          bottom: -169%;
        }
      }
    }
  }

  @keyframes slider {
    to {
      width: 0%;
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
          &::after {
            height: 92%;
          }
        }
        .workRef {
          &:nth-of-type(2) {
            bottom: -120%;
          }
          &:nth-of-type(3) {
            bottom: -260%;
          }
        }
      }
    }
  }
`;

export default OurWork;
