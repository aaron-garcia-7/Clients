import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { Link, Element } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { container, fade, semiFade, arrowRise } from "../../anim/animations";
import styled from "styled-components";

import portrait from "../../images/photos/portrait.png";
import arrow from "../../images/graphics/arrow.svg";

const SecMark = ({ inHome }) => {
  // Scroll Animations
  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  useEffect(() => {
    inView ? control.start("animate") : control.start("initial");
  }, [control, inView]);

  return (
    <StyledSecMark ref={ref}>
      <Element name="aboutMark" />
      {inView && (
        <img
          src={portrait}
          alt="Mark Veldevere holding a guitar"
          className="portrait"
        />
      )}
      {inView && <div className="imgReveal" />}
      <motion.div
        className="textAreaRight"
        ref={ref}
        variants={container}
        initial="initial"
        animate={control}
      >
        <motion.h6 className="preHeader" variants={semiFade}>
          Meet your instructor
        </motion.h6>
        <motion.h3 className="secHeader" variants={fade}>
          Get to know
          <br /> Mark Veldevere
        </motion.h3>
        <motion.p className="secBody" variants={fade}>
          Mark is an expert guitarist with over thirty years of experience. The
          rest of this text is simply filler text to demonstrate how the page
          might look once it’s reached its final stage.
        </motion.p>
        <motion.p className="secBody" variants={fade}>
          Along with legitimate filler text, you can also use Lorem Ipsum, which
          is a common way to fill in an area that would usually have some sort
          of text area.
        </motion.p>
        <motion.div variants={fade} className="navLinkBtn">
          <NavLink
            to={inHome ? "./About/Mark" : "./Mark"}
            className="mainNavLink"
          >
            Learn more
          </NavLink>
        </motion.div>
      </motion.div>
      <motion.div
        className="continueDownDiv"
        variants={arrowRise}
        ref={ref}
        initial="initial"
        animate={control}
      >
        <Link
          to={inHome ? "guitarStyles" : "policies"}
          smooth={true}
          duration={1400}
          delay={50}
          className="continue"
        >
          Continue
          <img src={arrow} alt="" className="arrow" />
        </Link>
      </motion.div>
    </StyledSecMark>
  );
};

const StyledSecMark = styled("section")`
  overflow-x: hidden;
  .portrait,
  .imgReveal {
    position: relative;
    top: 10%;
    height: 72vh;
    min-height: 26rem;
    width: 50%;
    object-fit: cover;
    object-position: 50% 20%;
  }
  .imgReveal {
    position: absolute;
    padding: 0.2rem 0 0.2rem 0;
    background: var(--white);
    z-index: 2;
    animation: imgReveal 1s 0.4s ease forwards;
  }
  .portrait {
    animation: abstractReveal 1s 2s ease forwards;
  }
  .textAreaRight {
    position: absolute;
    top: 50%;
    right: 8%;
    transform: translate(0, -50%);
    padding-left: 2vw;
    width: 36%;
    z-index: 2;
    > * {
      margin-bottom: 1rem;
    }
  }
  @keyframes imgReveal {
    to {
      width: 0%;
    }
  }
  @keyframes abstractReveal {
    to {
      box-shadow: 0.8rem 0.8rem 0 var(--tan);
    }
  }
  @media screen and (max-width: 786px) {
    .portrait,
    .imgReveal {
      top: 0;
      height: 42vh;
      min-height: 14rem;
      width: 74%;
    }
    .textAreaRight {
      width: 80%;
      top: 66%;
      right: 12%;
      margin: auto;
      > * {
        margin-bottom: 0.6rem;
      }
    }
  }
  @media screen and (max-width: 480px) {
    .portrait {
      height: 36vh;
    }
    .textAreaRight {
      top: 58%;
    }
  }
`;

export default SecMark;
