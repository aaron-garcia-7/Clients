import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { arrowRise } from "../../anim/animations";
import styled from "styled-components";

import woodBg2 from "../../images/photos/woodBg2.png";
import woodBg3 from "../../images/photos/woodBg3.png";
import woodBg4 from "../../images/photos/woodBg4.png";
import woodBg5 from "../../images/photos/woodBg5.png";
import blackPickFill from "../../images/graphics/blackPickFill.svg";
import brownPickFill from "../../images/graphics/brownPickFill.svg";
import tanPickFill from "../../images/graphics/tanPickFill.svg";
import blackPickLine from "../../images/graphics/blackPickLine.svg";
import brownPickLine from "../../images/graphics/brownPickLine.svg";
import tanPickLine from "../../images/graphics/tanPickLine.svg";

import arrow from "../../images/graphics/arrow.svg";

const SecAboutSubHero = ({ aboutMark, aboutLocations, aboutPolicies }) => {
  return (
    <StyledSecAboutSubHero>
      <img
        src={
          aboutMark
            ? brownPickFill
            : aboutLocations
            ? tanPickFill
            : aboutPolicies
            ? blackPickFill
            : null
        }
        className={
          aboutMark
            ? "pick brownPickFill"
            : aboutLocations
            ? "pick tanPickFill"
            : aboutPolicies
            ? "pick blackPickFill"
            : ""
        }
      />
      <img
        src={
          aboutMark
            ? blackPickLine
            : aboutLocations
            ? tanPickLine
            : aboutPolicies
            ? brownPickLine
            : null
        }
        className={
          aboutMark
            ? "pick blackPickLine"
            : aboutLocations
            ? "pick tanPickLine"
            : aboutPolicies
            ? "pick brownPickLine"
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
        className={aboutLocations ? "backgroundImg" : "backgroundImg"}
        src={
          aboutMark
            ? woodBg2
            : aboutLocations
            ? woodBg3
            : aboutPolicies
            ? woodBg4
            : null
        }
        alt=""
      />
      <h2 className="shadowText">
        {aboutMark
          ? "about mark"
          : aboutLocations
          ? "locations"
          : aboutPolicies
          ? "policies"
          : ""}
      </h2>
    </StyledSecAboutSubHero>
  );
};

const StyledSecAboutSubHero = styled("section")`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  .backgroundImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: right;
    opacity: 1;
    z-index: -1;
  }
  .pick {
    position: absolute;
    opacity: 0;
    transform: translate(0, 100%) scale(0.4);
    z-index: 2;
  }
  // About Mark Picks
  .brownPickFill {
    top: 28%;
    right: 30%;
    width: calc(4rem + 4vw);
    animation: pickAppearFill 3.2s 0.4s ease forwards;
  }
  .blackPickLine {
    top: 44%;
    right: 24%;
    width: calc(2rem + 4vw);
    animation: pickAppearFill 3.4s 0.6s ease forwards;
  }
  // Locations Picks
  .tanPickFill {
    top: 22%;
    left: 30%;
    width: calc(2rem + 4vw);
    animation: pickAppearFill 3.2s 0.8s ease forwards;
  }
  .tanPickLine {
    top: 64%;
    right: 28%;
    width: calc(2rem + 4vw);
    animation: pickAppearFill 3.6s 1.6s ease forwards;
  }
  // Policies Picks
  .blackPickFill {
    top: 68%;
    left: 30%;
    width: calc(2rem + 4vw);
    animation: pickAppearFill 3.2s 0.4s ease forwards;
  }
  .brownPickLine {
    top: 54%;
    left: 22%;
    width: calc(2rem + 4vw);
    animation: pickAppearFill 3.4s 0.6s ease forwards;
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

  .shadowText {
    position: absolute;
    bottom: 10%;
    left: 0%;
    font-size: calc(2rem + 12vw);
    color: #31313110;
    z-index: -1;
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
    // Policies Picks
    .blackPickFill {
      top: 72%;
      left: 24%;
    }
    .brownPickLine {
      top: 60%;
      left: 16%;
    }
    .shadowText {
      bottom: 16%;
      font-size: calc(1rem + 12vw);
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
    .brownPickLine {
      left: 10%;
    }
  }
`;

export default SecAboutSubHero;
