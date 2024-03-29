// import { useState } from "react";
import { useDispatch } from "react-redux";
import { openCta } from "../../reducers/ctaReducer";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Link, Element } from "react-scroll";
import { container, fade, rise, arrowRise } from "../../anim/animations";
import styled from "styled-components";

import Logo from "../../components/Logo";

import backgroundImg from "../../images/photos/guitarHero.png";
import arrow from "../../images/graphics/arrow.svg";

const SecHero = () => {
  const dispatch = useDispatch();

  return (
    <StyledHero>
      <Element name="top" />
      <Logo />
      <motion.div
        className="heroText"
        variants={container}
        initial="initial"
        animate="animate"
      >
        <motion.h1 variants={fade}>
          Ready to <span>Learn</span>
          <br /> the <span>Guitar</span>?
        </motion.h1>
        <motion.h3 variants={fade}>
          <span>Free</span> introductory lesson
        </motion.h3>
        <div className="callToActionBtns">
          <motion.button
            className="ctaButtons mainBtn"
            variants={rise}
            onClick={() => dispatch(openCta())}
          >
            Get Started
          </motion.button>
          <motion.div variants={rise} className="navLinkDiv">
            <NavLink to="./WhyUs" className="ctaButtons secondaryBtn">
              Why Us?
            </NavLink>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="scrollDownDiv"
        variants={arrowRise}
        initial="initial"
        animate="animate"
      >
        <Link
          to="subHero"
          smooth={true}
          duration={1400}
          offset={window.innerWidth > 480 ? 0 : 40}
          delay={50}
          className="scrollDown"
        >
          Scroll
          <img src={arrow} alt="" className="arrow arrowFloat" />
        </Link>
      </motion.div>
      <img
        className="backgroundImg"
        src={backgroundImg}
        alt="Accoustic Guitar"
      />
      {/* {cta && <CallToAction setCta={setCta} />} */}
    </StyledHero>
  );
};

const StyledHero = styled("section")`
  background: var(--lightGrey);
  overflow-x: hidden;
  .heroText {
    position: absolute;
    top: 50%;
    left: 16%;
    transform: translate(0%, -50%);
    z-index: 1;
    h1 {
      font-size: calc(1.2rem + 2.8vw);
      font-weight: 300;
      /* margin-bottom: 2rem; */
      margin-bottom: calc(1rem + 1vw);
      z-index: -1;
      span {
        font-weight: 500;
      }
    }
    h3 {
      font-size: calc(0.8rem + 1vw);
      font-weight: 300;
      font-style: italic;
      /* margin-bottom: 2.4rem; */
      margin-bottom: calc(1.6rem + 1vw);
      span {
        text-transform: uppercase;
        font-weight: 600;
      }
    }
    .callToActionBtns {
      display: flex;
      .ctaButtons {
        font-weight: 500;
      }
      .navLinkDiv {
        width: 12rem;
        padding-top: calc(0.2rem + 0.4vw);
        margin-left: calc(0.4rem + 0.4vw);
        .secondaryBtn {
          position: relative;
          background: none;
          border: none;
          color: var(--brown);
          font-size: calc(0.6rem + 0.8vw);
          padding: 0.8rem 0rem;
          margin-left: 6%;
          cursor: pointer;
          &:after {
            content: "";
            position: absolute;
            bottom: 8px;
            right: 0;
            width: 100%;
            height: 2px;
            background: var(--brown);
            transition: 0.4s ease;
          }
          &:hover {
            &:after {
              transform: translate(0, 200%);
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1440px) {
    .heroText {
      h1 {
        /* margin-bottom: 1rem; */
      }
      h3 {
        /* margin-bottom: 1.4rem; */
      }
    }
  }

  @media screen and (max-width: 1048px) {
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
