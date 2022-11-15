import React, { useState } from "react";
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

import Nav from "../components/Nav";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";
import WorkModule from "../components/WorkModule";

function OurWork({ pageWidth, navOpen, setNavOpen }) {
  const [moduleOpen, setModuleOpen] = useState(false);
  const [project, setProject] = useState(1);

  const [ref, inView] = useInView({
    threshold:
      pageWidth >= 1440 ? 0.9 : pageWidth < 1440 && pageWidth > 520 ? 1 : 0.9,
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    threshold:
      pageWidth >= 1440 ? 0.9 : pageWidth < 1440 && pageWidth > 520 ? 0.4 : 0.2,
    triggerOnce: true,
  });
  const [ref3, inView3] = useInView({
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
      <Nav navOpen={navOpen} setNavOpen={setNavOpen} pageWidth={pageWidth} />
      <PageBanner
        title={"Our Work"}
        copy={
          "We like to think our results speak for themselves. We take the time to understand who you are and what you need, so we can meet your expectations. Then exceed them."
        }
      />
      <main>
        <div className="workGallery">
          <div className="workRef" ref={ref} />
          <figure className={inView ? "active" : ""}>
            <img
              src={sundek}
              alt="sundek"
              onClick={() => {
                setModuleOpen(true);
                setProject(1);
              }}
            />
            <figcaption>| Sundek</figcaption>
          </figure>
          <figure className={inView ? "active active2" : ""}>
            <img
              src={enzy}
              alt="enzy"
              onClick={() => {
                setModuleOpen(true);
                setProject(2);
              }}
            />
            <figcaption>| Enzy</figcaption>
          </figure>
          <div className="workRef" ref={ref2} />
          <figure className={inView2 ? "active" : ""}>
            <img
              src={bakd}
              alt="bakd"
              onClick={() => {
                setModuleOpen(true);
                setProject(3);
              }}
            />
            <figcaption>| Bak’d</figcaption>
          </figure>
          <figure className={inView2 ? "active active2" : ""}>
            <img
              src={briizy}
              alt="briizy"
              onClick={() => {
                setModuleOpen(true);
                setProject(4);
              }}
            />
            <figcaption>| Briizy</figcaption>
          </figure>
          <div className="workRef" ref={ref3} />
          <figure className={inView3 ? "active" : ""}>
            <img
              src={vitality}
              alt="vitality"
              onClick={() => {
                setModuleOpen(true);
                setProject(5);
              }}
            />
            <figcaption>| Vitality</figcaption>
          </figure>
          <figure className={inView3 ? "active active2" : ""}>
            <img
              src={stamina}
              alt="stamina"
              onClick={() => {
                setModuleOpen(true);
                setProject(6);
              }}
            />
            <figcaption>| Stamina</figcaption>
          </figure>
        </div>
      </main>
      <WorkModule
        moduleOpen={moduleOpen}
        setModuleOpen={setModuleOpen}
        project={project}
        setProject={setProject}
      />
      <Footer />
    </ScOurWork>
  );
}

const ScOurWork = styled(motion.div)`
  main {
    padding: 8vw 6%;
    background: var(--light);
    z-index: 1;
    .workGallery {
      display: grid;
      grid-template: repeat(3, 1fr) / repeat(2, 1fr);
      gap: 4vw;
      figure {
        position: relative;
        width: 100%;
        /* height: 72vh; */
        height: 37vw;
        figcaption {
          position: absolute;
          font-size: calc(1rem + 2vw);
          margin-bottom: 2vw;
          display: inline-block;
          &::before,
          &::after {
            content: "";
            position: absolute;
            top: 0;
            background: var(--light);
            width: 100%;
            height: 108%;
          }
          &::before {
            left: 6%;
            width: 4%;
          }
          &::after {
            right: 0;
          }
        }
        img {
          position: absolute;
          bottom: 0;
          width: 100%;
          pointer-events: none;
          cursor: default;
          transition: 0.4s ease;
          &:hover {
            box-shadow: 0px 2px 8px #31313131;
            transform: scale(1.01);
            & ~ figcaption {
              &::before {
                animation: hoverDash 0.5s ease forwards;
              }
            }
          }
        }
        &::after {
          content: "";
          position: absolute;
          bottom: -2px;
          right: 0;
          background: var(--light);
          width: 100%;
          height: 88%;
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
        img {
          animation: allowPoint 0s linear 1.2s forwards;
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

  @keyframes hoverDash {
    0% {
      left: 0;
      right: auto;
      width: 0%;
    }
    40% {
      left: 0;
      right: auto;
      width: 100%;
    }
    60% {
      left: auto;
      right: 0;
      width: 100%;
    }
    100% {
      left: auto;
      right: 0;
      width: 0%;
    }
  }

  @keyframes allowPoint {
    to {
      pointer-events: all;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    main {
      padding: 16vw 10%;
      .workGallery {
        grid-template: repeat(6, 1fr) / 0;
        gap: 12vw 0;
        figure {
          width: 80vw;
          height: 70vw;
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
