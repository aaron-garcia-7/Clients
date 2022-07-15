import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { container, fade, rise, arrowRise } from "../../anim/animations";
import styled from "styled-components";

import subBanner1 from "../../images/photos/subBanner1.png";
import woodBg from "../../images/photos/woodBg.png";
import woodBg2 from "../../images/photos/woodBg2.png";
import blackPickFill from "../../images/graphics/blackPickFill.svg";
import brownPickFill from "../../images/graphics/brownPickFill.svg";
import blackPickLine from "../../images/graphics/blackPickLine.svg";
import arrow from "../../images/graphics/arrow.svg";

const SecSubBanner = ({ aboutMark, aboutLocations, aboutPolicies }) => {
  return (
    <StyledSecSubBanner>
      <img
        src={
          aboutMark
            ? blackPickLine
            : aboutLocations
            ? brownPickFill
            : aboutPolicies
            ? blackPickFill
            : null
        }
        className={
          aboutMark
            ? "blackPickLine"
            : aboutLocations
            ? "brownPickFill"
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
        src={
          aboutMark
            ? subBanner1
            : aboutLocations
            ? woodBg2
            : aboutPolicies
            ? woodBg
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
    z-index: -1;
  }
  .blackPickLine {
    position: absolute;
    top: 28%;
    right: 30%;
    width: calc(2rem + 4vw);
    opacity: 0;
    transform: translate(0, 100%) scale(0.4);
    animation: pickAppearFill 3.2s 0.4s ease forwards;
  }
  .whiteCircle {
    background: var(--white);
    width: calc(12rem + 12vw);
    height: calc(12rem + 12vw);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(6);
    animation: circleShrink 1.2s cubic-bezier(0.23, 0.99, 0.53, 1.1) forwards;
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
  @keyframes circleShrink {
    100% {
      transform: scale(1);
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
`;

export default SecSubBanner;
