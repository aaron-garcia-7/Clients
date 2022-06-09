import { useState } from "react";
import styled from "styled-components";

import Logo from "../../components/Logo";
import CallToAction from "../../components/CallToAction";

import { motion } from "framer-motion";
import { container, fade, rise, arrowRise } from "../../anim/animations";
import backgroundImg from "../../images/photos/guitarHero.png";
import arrow from "../../images/graphics/arrow.svg";

const SecHero = () => {
  const [cta, setCta] = useState(false);

  return (
    <StyledHero id="top">
      <Logo />
      <motion.div
        className="heroText"
        variants={container}
        initial="initial"
        animate="animate"
      >
        <motion.h1 variants={fade}>
          Ready to <span>Master</span>
          {/* Ready to <span>Learn</span> */}
          <br /> the <span>Guitar</span>?
        </motion.h1>
        <motion.h3 variants={fade}>
          <span>Free</span> introductory lesson
        </motion.h3>
        <div className="callToActionBtns">
          <motion.button
            className="mainBtn"
            variants={rise}
            onClick={() => setCta(true)}
          >
            Get Started
          </motion.button>
          <motion.button variants={rise}>Learn More</motion.button>
        </div>
      </motion.div>
      <motion.a
        className="scrollDown"
        href="#subHero"
        variants={arrowRise}
        initial="initial"
        animate="animate"
      >
        Scroll
        <img src={arrow} alt="" className="arrow arrowFloat" />
      </motion.a>
      <img
        className="backgroundImg"
        src={backgroundImg}
        alt="Accoustic Guitar"
      />
      {cta && <CallToAction setCta={setCta} />}
    </StyledHero>
  );
};

const StyledHero = styled("section")`
  background: #ececec;
  overflow-x: hidden;
  .heroText {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(0%, -50%);
    margin-left: 16vw;
    z-index: 1;
    h1 {
      font-size: calc(1.6rem + 2.8vw);
      margin-bottom: 1rem;
      z-index: -1;
      span {
        font-weight: 600;
      }
    }
    h3 {
      font-size: calc(1rem + 1vw);
      font-style: italic;
      margin-bottom: 1.4rem;
      span {
        text-transform: uppercase;
        font-weight: 600;
      }
    }
    .callToActionBtns {
      button {
        font-weight: 600;
        &:nth-child(2) {
          position: relative;
          background: none;
          border: none;
          color: #a27c67;
          font-size: calc(0.6rem + 0.8vw);
          padding: 0.8rem 0rem;
          margin-left: 6%;
          &:after {
            content: "";
            position: absolute;
            bottom: 8px;
            right: 0;
            width: calc(3.8rem + 4.2vw);
            height: 2px;
            background: #a27c67;
          }
        }
      }
    }
  }
  .backgroundImg {
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    min-height: 36rem;
  }

  @media screen and (max-width: 924px) {
    .backgroundImg {
      opacity: 0.7;
    }
  }
  @media screen and (max-width: 768px) {
    .dimEffect {
      .ctaForm {
        width: 80vw;
        height: 76vh;
        .ctaCloseBtn {
          /* top: 2rem; */
          right: 2.8rem;
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    height: 86vh;
    .heroText {
      transform: translate(-10%, -50%);
    }
    .backgroundImg {
      height: 86vh;
      right: -6rem;
      opacity: 0.5;
    }
  }
`;

export default SecHero;
