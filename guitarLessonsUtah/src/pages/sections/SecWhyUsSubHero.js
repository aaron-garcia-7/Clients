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

const SecWhyUsSubHero = ({ newToGuitar, blog, testimonials }) => {
  return (
    <StyledSecWhyUsSubHero>
      <img
        src={
          newToGuitar
            ? brownPickFill
            : blog
            ? tanPickFill
            : testimonials
            ? blackPickFill
            : null
        }
        className={
          newToGuitar
            ? "pick brownPickFill"
            : blog
            ? "pick tanPickFill"
            : testimonials
            ? "pick blackPickFill"
            : ""
        }
      />
      <img
        src={
          newToGuitar
            ? blackPickLine
            : blog
            ? blackPickLine
            : testimonials
            ? brownPickLine
            : null
        }
        className={
          newToGuitar
            ? "pick blackPickLine"
            : blog
            ? "pick blackPickLine"
            : testimonials
            ? "pick brownPickLine"
            : ""
        }
      />
      <div className="whiteCircle">
        <h2 className="subSectionTitle">
          {newToGuitar
            ? "About Mark"
            : blog
            ? "Locations"
            : testimonials
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
        className={blog ? "backgroundImg lighter" : "backgroundImg"}
        src={
          newToGuitar ? woodBg2 : blog ? woodBg3 : testimonials ? woodBg4 : null
        }
        alt=""
      />
    </StyledSecWhyUsSubHero>
  );
};

const StyledSecWhyUsSubHero = styled("section")`
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
  .lighter {
    opacity: 0.7;
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
  // Policies Picks
  .blackPickFill {
    top: 58%;
    left: 30%;
    width: calc(4rem + 4vw);
    animation: pickAppearFill 3.2s 0.4s ease forwards;
  }
  .brownPickLine {
    top: 40%;
    left: 28%;
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

export default SecWhyUsSubHero;
