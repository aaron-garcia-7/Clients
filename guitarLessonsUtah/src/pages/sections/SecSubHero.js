import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { container, fade, arrowRise } from "../../anim/animations";

import styled from "styled-components";

import WoodCircle from "../../components/WoodCircle";

import blackPickFill from "../../images/graphics/blackPickFill.svg";
import brownPickLine from "../../images/graphics/brownPickLine.svg";
import tanPickLine from "../../images/graphics/tanPickLine.svg";
import arrow from "../../images/graphics/arrow.svg";

const SecSubHero = () => {
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

  // Scroll Animation for Continue Down
  const control2 = useAnimation();
  const [ref2, inView2] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  useEffect(() => {
    inView2 ? control2.start("animate") : control2.start("initial");
  }, [control2, inView2]);

  return (
    <StyledSubHero id="subHero">
      <motion.div
        className="textArea"
        ref={ref}
        variants={container}
        initial="initial"
        animate={control}
      >
        <motion.h6 className="preHeader" variants={fade}>
          Ask yourself . . .
        </motion.h6>
        <motion.h3 className="secHeader" variants={fade}>
          Are you passionate
          <br /> about the guitar?
        </motion.h3>
        <motion.p className="secBody" variants={fade}>
          Do you have a strong desire to play the guitar like a pro? Are there
          songs or arrangements you’ve heard that give you chills and spark the
          urge to pick up a guitar and learn to play?
        </motion.p>
        <motion.p className="secBody" variants={fade}>
          Along with legitimate filler text, you can also use Lorem Ipsum, which
          is a common way to fill in an area that would usually have some sort
          of text area.
        </motion.p>
        <motion.button className="mainBtn" variants={fade}>
          Learn more
        </motion.button>
      </motion.div>
      <motion.a
        className="continue"
        href="#about"
        variants={arrowRise}
        ref={ref2}
        initial="initial"
        animate={control2}
      >
        Continue
        <img src={arrow} alt="" className="arrow" />
      </motion.a>
      <img
        src={blackPickFill}
        alt=""
        className="blackPickFill pick"
        style={{ transform: `translateY(${offSetY * -0.3}px)` }}
      />
      <img src={brownPickLine} alt="" className="brownPick" />
      <img src={tanPickLine} alt="" className="tanPick" />
      {inView && <WoodCircle />}
    </StyledSubHero>
  );
};

const StyledSubHero = styled("section")`
  .textArea {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    margin-left: 16vw;
    width: 32rem;
    z-index: 2;
    > * {
      margin-bottom: 1rem;
    }
  }
  .blackPickFill {
    width: calc(4rem + 4vw);
    position: absolute;
    top: 6%;
    right: 14%;
    z-index: 3;
    filter: drop-shadow(0px 8px 3px #31313155);
  }
  .brownPick {
    width: calc(5.6rem + 5.6vw);
    position: absolute;
    top: 20%;
    right: 2%;
    opacity: 0.5;
  }
  .tanPick {
    width: calc(2rem + 4vw);
    position: absolute;
    top: 6%;
    left: 60%;
    z-index: 1;
  }
  .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.15;
    width: 40%;
    max-width: 30rem;
  }
  @media screen and (max-width: 786px) {
    .textArea {
      width: 26rem;
      margin-left: 10vw;
    }
  }
  @media screen and (max-width: 480px) {
    .textArea {
      width: 18rem;
    }
    .brownPick {
      width: calc(3.2rem + 3.2vw);
      top: 8%;
      right: 68%;
    }
    .tanPick {
      top: 20%;
      left: 70%;
    }
    .circle {
      width: 12rem;
    }
  }
`;

export default SecSubHero;
