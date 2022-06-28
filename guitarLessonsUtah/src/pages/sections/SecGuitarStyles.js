import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { Link, Element } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { container, fade, arrowRise } from "../../anim/animations";
import styled from "styled-components";

import guitarStrings from "../../images/photos/guitarStrings.png";
import tanPickFill from "../../images/graphics/tanPickFill.svg";
import arrow from "../../images/graphics/arrow.svg";

const SecGuitarStyles = () => {
  // Parallax Effect
  const [offSetY, setOffSetY] = useState(0);
  const handleScroll = () => {
    setOffSetY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <StyledGuitarStyles ref={ref} id="guitarStyles">
      <Element name="guitarStyles" />
      <img
        src={tanPickFill}
        alt=""
        className="tanPickFill pick"
        style={{ transform: `translateY(${offSetY * -0.3}px)` }}
      />
      {inView && (
        <img src={guitarStrings} alt="Guitar strings" className="portrait2" />
      )}
      {inView && <motion.div className="imgReveal2" />}
      <motion.div
        className="textAreaLeft"
        ref={ref}
        variants={container}
        initial="initial"
        animate={control}
      >
        <motion.h6 className="preHeader" variants={fade}>
          Expertise . . .
        </motion.h6>
        <motion.h3 className="secHeader" variants={fade}>
          Pick from a wide
          <br /> range of guitar styles
        </motion.h3>
        <motion.p className="secBody" variants={fade}>
          Mark teaches many different guitar styles such as: Rock, Metal, Blues,
          Classical, Bluegrass, Folk, Fingerstyle, Celtic, Punk, and many more.
        </motion.p>
        <motion.p className="secBody" variants={fade}>
          Along with legitimate filler text, you can also use Lorem Ipsum, which
          is a common way to fill in an area that would usually have some sort
          of text area.
        </motion.p>
        <motion.div variants={fade} className="navLinkBtn">
          <NavLink to="./Resources/LessonMaterials" className="mainNavLink">
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
          to="locations"
          smooth={true}
          duration={1400}
          delay={50}
          offset={window.innerWidth > 480 ? 0 : 40}
          className="continue"
        >
          Continue
          <img src={arrow} alt="" className="arrow" />
        </Link>
      </motion.div>
    </StyledGuitarStyles>
  );
};

const StyledGuitarStyles = styled("section")`
  .tanPickFill {
    position: absolute;
    bottom: 12%;
    left: 4%;
    width: calc(4rem + 4vw);
    z-index: 3;
  }
  .portrait2,
  .imgReveal2 {
    position: absolute;
    top: 10%;
    right: 0;
    height: 72vh;
    width: 50%;
    object-fit: cover;
    object-position: 50% 20%;
  }
  .imgReveal2 {
    position: absolute;
    padding: 0.2rem 0 0.2rem 0;
    background: var(--white);
    z-index: 2;
    animation: imgReveal 1s 0.4s ease forwards;
  }
  .portrait2 {
    animation: abstractReveal2 1s 2s ease forwards;
  }
  .textAreaLeft {
    position: absolute;
    top: 50%;
    left: 8%;
    transform: translate(0, -50%);
    padding-left: 2vw;
    width: 36%;
    z-index: 2;
    > * {
      margin-bottom: 1rem;
    }
  }
  @keyframes abstractReveal2 {
    to {
      box-shadow: -0.8rem 0.8rem 0 var(--tan);
    }
  }
  @media screen and (max-width: 786px) {
    .portrait2,
    .imgReveal2 {
      height: 42vh;
      min-height: 14rem;
      width: 74%;
      top: 0;
    }
    .textAreaLeft {
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
    .tanPickFill {
      bottom: 26%;
    }
    .portrait2 {
      height: 36vh;
    }
    .textAreaLeft {
      top: 58%;
    }
  }
`;

export default SecGuitarStyles;
