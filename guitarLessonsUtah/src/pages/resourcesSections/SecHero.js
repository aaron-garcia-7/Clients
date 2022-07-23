import { NavLink } from "react-router-dom";
import { Link, Element } from "react-scroll";
import { motion } from "framer-motion";
import { container, fade, semiFade, arrowRise } from "../../anim/animations";

import styled from "styled-components";

import guitar3 from "../../images/photos/guitar3.png";
import arrow from "../../images/graphics/arrow.svg";
import Logo from "../../components/Logo";

const SecHero = () => {
  return (
    <StyledSecHero>
      <Element name="top" />
      <Logo />
      <motion.div
        className="textArea"
        variants={container}
        initial="initial"
        animate="animate"
      >
        <motion.h6 className="preHeader" variants={semiFade}>
          Resources
        </motion.h6>
        <motion.h3 className="secHeader" variants={fade}>
          Resources to help
          <br /> you learn
        </motion.h3>
        <motion.p className="secBody" variants={fade}>
          A common question people face is whether to go with individual
          mentoring or joining group sessions.
        </motion.p>
        <motion.p className="secBody" variants={fade}>
          In most cases, in-person mentoring is the best way to advance your
          skills as a guitarist since you’ll receive 1-on-1 instruction.
          Receiving advice based on your unique circumstance and skill level.
        </motion.p>
        <motion.div variants={fade} className="navLinkBtn">
          <NavLink to="/WhyUs/NewToGuitar" className="mainNavLink">
            Learn more
          </NavLink>
        </motion.div>
      </motion.div>
      <motion.div
        className="scrollDownDiv"
        variants={arrowRise}
        initial="initial"
        animate="animate"
      >
        <Link
          to="whyUs"
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
      <img src={guitar3} alt="close up of a guitar" className="backgroundImg" />
      <div className="heroStripe"></div>
    </StyledSecHero>
  );
};

const StyledSecHero = styled("section")`
  background: var(--lightGrey);
  overflow-x: hidden;
  #hide {
    display: none;
  }
  .textArea {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(10%, -50%) scale(0.9);
    width: 32vw;
    z-index: 2;
    > * {
      margin-bottom: 1rem;
    }
  }
  .backgroundImg {
    right: 0;
    opacity: 0.8;
  }
  .heroStripe {
    position: absolute;
    left: 10%;
    width: 4vw;
    min-width: 3.2rem;
    height: 0%;
    background: var(--tan);
    opacity: 0.6;
    animation: stripeGrow 0.8s 0.2s ease forwards;
  }

  @keyframes stripeGrow {
    to {
      height: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    #hide {
      display: block;
    }
    .textArea {
      transform: translate(26%, -50%);
      width: 50vw;
    }
    .backgroundImg {
      right: -11rem;
      opacity: 0.5;
    }
    .heroStripe {
      left: 24%;
      opacity: 0.2;
    }
  }
  @media screen and (max-width: 480px) {
    height: 86vh;
    .textArea {
      width: 56vw;
      transform: translate(36%, -46%) scale(1.1);
    }
    .backgroundImg {
      right: -16rem;
      opacity: 0.3;
      height: 86vh;
    }
    .heroStripe {
      width: 2vw;
      min-width: 2rem;
      left: 20%;
    }
  }
`;

export default SecHero;
