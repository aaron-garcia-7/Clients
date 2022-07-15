import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { arrowRise } from "../../anim/animations";
import styled from "styled-components";

import subBanner1 from "../../images/photos/subBanner1.png";
import woodBg from "../../images/photos/woodBg.png";
import woodBg2 from "../../images/photos/woodBg2.png";
import blackPickFill from "../../images/graphics/blackPickFill.svg";
import brownPickFill from "../../images/graphics/brownPickFill.svg";
import tanPickFill from "../../images/graphics/tanPickFill.svg";
import blackPickLine from "../../images/graphics/blackPickLine.svg";
import brownPickLine from "../../images/graphics/brownPickLine.svg";
import tanPickLine from "../../images/graphics/tanPickLine.svg";

import arrow from "../../images/graphics/arrow.svg";

const SecSubBanner = ({ aboutMark, aboutLocations, aboutPolicies }) => {
  return (
    <StyledSecSubBanner>
      <img
        src={
          aboutMark
            ? brownPickFill
            : aboutLocations
            ? blackPickLine
            : aboutPolicies
            ? blackPickFill
            : null
        }
        className={
          aboutMark
            ? "brownPickFill"
            : aboutLocations
            ? "blackPickLine"
            : aboutPolicies
            ? "blackPickFill"
            : ""
        }
      />
      <img
        src={
          aboutMark
            ? blackPickLine
            : aboutLocations
            ? blackPickLine
            : aboutPolicies
            ? blackPickFill
            : null
        }
        className={
          aboutMark
            ? "blackPickLine"
            : aboutLocations
            ? "blackPickLine"
            : aboutPolicies
            ? "blackPickFill"
            : ""
        }
      />
      <div className="whiteCircle">
        <h2 className="subSectionTitle">
          {aboutMark
            ? "About Mark"
            : aboutLocations
            ? "Locations"
            : aboutPolicies
            ? "Policies"
            : "Section Header"}
        </h2>
      </div>
      <motion.div
        className="scrollDownDiv"
        variants={arrowRise}
        initial="initial"
        animate="animate"
      >
        <Link
          to="subContent"
          smooth={true}
          duration={1400}
          offset={window.innerWidth > 480 ? 0 : 20}
          delay={50}
          className="scrollDown"
        >
          Scroll
          <img src={arrow} alt="" className="arrow arrowFloat" />
        </Link>
      </motion.div>
      <img
        className="backgroundImg"
        src={
          aboutMark
            ? woodBg2
            : aboutLocations
            ? woodBg
            : aboutPolicies
            ? subBanner1
            : null
        }
        alt=""
      />
    </StyledSecSubBanner>
  );
};

const StyledSecSubBanner = styled("section")`
  display: flex;
  justify-content: center;
  align-items: center;
  .backgroundImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: right;
    opacity: 1;
    z-index: -1;
  }
  .brownPickFill {
    position: absolute;
    top: 28%;
    right: 30%;
    width: calc(4rem + 4vw);
    opacity: 0;
    transform: translate(0, 100%) scale(0.4);
    animation: pickAppearFill 3.2s 0.4s ease forwards;
    z-index: 2;
  }
  .blackPickLine {
    position: absolute;
    top: 44%;
    right: 24%;
    width: calc(2rem + 4vw);
    opacity: 0;
    transform: translate(0, 100%) scale(0.4);
    animation: pickAppearFill 3.4s 0.6s ease forwards;
    z-index: 2;
  }
  .whiteCircle {
    background: var(--white);
    width: calc(12rem + 12vw);
    height: calc(12rem + 12vw);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(0, 50%);
    animation: circleRise 2.2s ease forwards;
    .subSectionTitle {
      width: 50vw;
      text-align: center;
      color: var(--black);
      font-size: calc(1rem + 1vw);
      transform: scale(0.4);
      opacity: 0;
      animation: headerAppear 2s 0.9s ease forwards;
    }
  }
  @keyframes circleRise {
    50% {
      transform: translate(0, -4%);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  @keyframes headerAppear {
    50% {
      opacity: 1;
      transform: scale(1.2);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media screen and (max-width: 1440px) {
    .brownPickFill {
      top: 26%;
      right: 28%;
      width: calc(3.2rem + 4vw);
    }
  }

  @media screen and (max-width: 768px) {
    .brownPickFill {
      top: 24%;
      right: 22%;
      width: calc(3.2rem + 4vw);
    }
    .blackPickLine {
      top: 38%;
      right: 16%;
      width: calc(1rem + 4vw);
    }
  }
  @media screen and (max-width: 480px) {
    height: 86vh;
    .brownPickFill {
      top: 24%;
      right: 22%;
      width: calc(3.2rem + 4vw);
    }
    .blackPickLine {
      top: 38%;
      right: 16%;
      width: calc(1rem + 4vw);
    }
  }
`;

export default SecSubBanner;
