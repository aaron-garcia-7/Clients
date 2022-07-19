// import { NavLink } from "react-router-dom";
import { Link, Element } from "react-scroll";
import { motion } from "framer-motion";
import { container, fade, semiFade, arrowRise } from "../../anim/animations";
import styled from "styled-components";

import Logo from "../../components/Logo";
import WoodCircle2 from "../../components/WoodCircle2";

import arrow from "../../images/graphics/arrow.svg";
import blackPickLine from "../../images/graphics/blackPickLine.svg";
import brownPickFill from "../../images/graphics/brownPickFill.svg";

const SecHero = () => {
  let stringArr = [];
  for (let i = 0; i < 6; i++) {
    stringArr.push(i);
  }
  const abStrings = stringArr.map((el) => (
    <div key={Math.random()} className="abString" />
  ));
  return (
    <StyledSecHero>
      <Element name="top" />
      <Logo />
      <WoodCircle2 />
      <img src={blackPickLine} alt="" className="blackPickLine" />
      <img src={brownPickFill} alt="" className="brownPickFill" />
      <div className="abStrings">{abStrings}</div>
      <motion.div
        className="textArea"
        variants={container}
        initial="initial"
        animate="animate"
      >
        <motion.h6 className="preHeader" variants={semiFade}>
          About
        </motion.h6>
        <motion.h3 className="secHeader" variants={fade}>
          Mark Veldevere
          <br /> Guitar Studios
        </motion.h3>
        <motion.p className="secBody" variants={fade}>
          Established in (year), we are commited to providing quality guitar
          lessons. This is a good place to share overarching info.
        </motion.p>
        <motion.p className="secBody" variants={fade}>
          Here you can read more about Mark, the studio locations, policies and
          more.
        </motion.p>
      </motion.div>
      <motion.div
        className="scrollDownDiv"
        variants={arrowRise}
        initial="initial"
        animate="animate"
      >
        <Link
          to="aboutMark"
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
    </StyledSecHero>
  );
};

const StyledSecHero = styled("section")`
  background: var(--lightGrey);
  overflow-x: hidden;
  .textArea {
    position: absolute;
    top: 50%;
    right: 6%;
    transform: translate(0, -50%) scale(0.9);
    width: 32vw;
    z-index: 2;
    > * {
      margin-bottom: 1rem;
    }
  }
  .blackPickLine {
    position: absolute;
    width: calc(4rem + 2vw);
    top: 60%;
    left: 32%;
    opacity: 0;
    transform: translate(0, 100%) scale(0.4);
    animation: pickAppear 3.2s 0.4s ease forwards;
  }
  .brownPickFill {
    position: absolute;
    width: calc(2.6rem + 2vw);
    top: 48%;
    left: 28%;
    opacity: 0;
    transform: translate(0, 100%) scale(0.4);
    animation: pickAppear 3.6s 0.8s ease forwards;
  }
  .abStrings {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    width: 24vw;
    height: 24vw;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    /* border: 1px solid black; */
    .abString {
      height: 100%;
      margin-left: calc(0.4rem + 1vw);
      margin-right: calc(0.4rem + 1vw);
      background: var(--tan);
      height: 0%;
      width: 6px;
      animation: abStringGrow 1s 1.6s ease forwards;
      border-radius: 20%;
      &:nth-of-type(2) {
        animation-delay: 1.8s;
      }
      &:nth-of-type(3) {
        animation-delay: 2s;
      }
      &:nth-of-type(4) {
        animation-delay: 2.2s;
      }
      &:nth-of-type(5) {
        animation-delay: 2.4s;
      }
      &:nth-of-type(6) {
        animation-delay: 2.6s;
      }
    }
  }

  @keyframes abStringGrow {
    to {
      height: 100%;
    }
  }

  @media screen and (max-width: 1440px) {
    .abStrings {
      width: 28vw;
      min-width: 20rem;
      height: 28vw;
      min-height: 24rem;
    }
    .blackPickLine {
      top: 64%;
      left: 26%;
    }
    .brownPickFill {
      top: 52%;
      left: 22%;
    }
  }

  @media screen and (max-width: 768px) {
    .textArea {
      transform: translate(-50%, -50%);
      width: 50vw;
    }
    .abStrings {
      display: none;
    }
    .blackPickLine {
      top: 38%;
      left: 76%;
    }
    .brownPickFill {
      top: 24%;
      left: 68%;
    }
  }
  @media screen and (max-width: 480px) {
    height: 86vh;
    .textArea {
      width: 56vw;
      transform: translate(-40%, -50%) scale(1.1);
    }
    .blackPickLine {
      top: 32%;
      left: 81%;
    }
    .brownPickFill {
      top: 22%;
      left: 68%;
    }
  }
`;

export default SecHero;
