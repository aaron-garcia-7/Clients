// import { NavLink } from "react-router-dom";
import { Link, Element } from "react-scroll";
import { motion } from "framer-motion";
import { container, fade, semiFade, arrowRise } from "../../anim/animations";
import styled from "styled-components";

import Logo from "../../components/Logo";
import WoodCircle2 from "../../components/WoodCircle2";

import guitarHead from "../../images/photos/guitarHead.png";
import arrow from "../../images/graphics/arrow.svg";
import blackPickLine from "../../images/graphics/blackPickLine.svg";
import brownPickFill from "../../images/graphics/brownPickFill.svg";

const SecHero = () => {
  return (
    <StyledSecHero>
      <Element name="top" />
      <Logo />
      <WoodCircle2 />
      <img src={guitarHead} alt="guitar head" className="bgImgAbout" />
      <img src={blackPickLine} alt="" className="blackPickLine" />
      <img src={brownPickFill} alt="" className="brownPickFill" />
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
          offset={window.innerWidth > 480 ? 0 : 20}
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
  position: relative;
  .bgImgAbout {
    position: absolute;
    left: 4%;
    bottom: 0;
    width: 24%;
    width: calc(12rem + 12%);
  }
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
    width: calc(3.2rem + 2vw);
    top: 68%;
    left: 36%;
    opacity: 0;
    transform: translate(0, 100%) scale(0.4);
    animation: pickAppear 3.2s 0.4s ease forwards;
  }
  .brownPickFill {
    position: absolute;
    width: calc(2.2rem + 2vw);
    top: 56%;
    left: 33%;
    opacity: 0;
    transform: translate(0, 100%) scale(0.4);
    animation: pickAppear 3.6s 0.8s ease forwards;
  }

  @media screen and (max-width: 1440px) {
    .blackPickLine {
      top: 68%;
      left: 32%;
    }
    .brownPickFill {
      top: 52%;
      left: 30%;
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 4rem;
    .bgImgAbout {
      left: 0%;
      width: calc(8rem + 8%);
      opacity: 0.5;
    }
    .textArea {
      transform: translate(-50%, -50%);
      width: 50vw;
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
    .bgImgAbout {
      width: calc(6rem + 8%);
      opacity: 0.4;
    }
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
