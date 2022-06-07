import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { container, fade } from "../anim/animations";

import styled from "styled-components";

import blackPickLine from "../images/graphics/blackPickLine.svg";
import WoodCircle from "./WoodCircle";

const Contact = ({ arrow }) => {
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
    <StyledContact id="contact">
      <img
        src={blackPickLine}
        className="blackPickLine pick"
        style={{ transform: `translateY(${offSetY * -0.3}px)` }}
      />
      <motion.div
        className="textAreaContact"
        ref={ref}
        variants={container}
        initial="initial"
        animate={control}
      >
        <motion.h6 className="preHeader" variants={fade}>
          Contact
        </motion.h6>
        <motion.h3 className="secHeader" variants={fade}>
          Have any questions?
          <br className="textBreak" /> Feel free to
          <br className="textBreak" /> contact me.
        </motion.h3>
        <motion.p className="secBody secBodyContact" variants={fade}>
          Use the link for all contact details. Looking forward to hearing from
          you.
        </motion.p>
        <div className="spacer" />
      </motion.div>
      {inView && <button className="mainBtn contactBtn">Contact Us</button>}
      <a href="#top" className="toTop">
        Return to top <img src={arrow} alt="" className="toTopArrow" />
      </a>
      <div className="halfShade" />
      {inView && <WoodCircle />}
    </StyledContact>
  );
};

const StyledContact = styled("section")`
  .textAreaContact {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    margin-left: 16vw;
    width: 16rem;
    z-index: 2;
    > * {
      margin-bottom: 1rem;
    }
    .spacer {
      height: 5.2rem;
    }
  }
  .contactBtn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    opacity: 0;
    animation: contactBtnAppear 0.4s 2s ease forwards;
    &::after {
      content: "";
      position: absolute;
      bottom: -8%;
      right: -2%;
      width: 104%;
      height: 124%;
      background: #fafafa;
      animation: contactBtnReveal 1s 2.4s ease forwards;
    }
    @keyframes contactBtnReveal {
      to {
        height: 0%;
      }
    }
  }
  @keyframes contactBtnAppear {
    to {
      opacity: 1;
    }
  }
  .toTop {
    position: absolute;
    top: 68%;
    right: 8%;
    transform: rotate(-90deg);
    width: calc(6rem + 7vw);
    display: flex;
    align-items: center;
    color: #313131;
    font-size: calc(0.6rem + 0.8vw);
    text-decoration: none;
    z-index: 3;
    transition: 0.4s 0.1s ease;
    .toTopArrow {
      transform: translate(300%, 0) rotate(-90deg);
      transition: 0.4s ease;
    }
    &:hover {
      transform: translate(0, -40%) rotate(-90deg);

      .toTopArrow {
        transform: translate(400%, 0) rotate(-90deg);
      }
    }
  }
  .blackPickLine {
    width: calc(3.8rem + 3.8vw);
    position: absolute;
    top: 186%;
    right: 20%;
    z-index: 3;
    filter: drop-shadow(0px 8px 3px #31313155);
  }
  .halfShade {
    position: absolute;
    bottom: 0;
    left: 0;
    background: #ececec;
    width: 100%;
    height: 50%;
  }
  @media screen and (max-width: 1440px) {
    .textAreaContact {
      margin-left: 10vw;
      .spacer {
        height: 4.2rem;
      }
    }
  }
  @media screen and (max-width: 1248px) {
    .textAreaContact {
      margin-left: 8vw;
    }
    .blackPickLine {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    height: 86vh;
    .textAreaContact {
      height: 52vh;
      min-height: 18rem;
      width: 56%;
      .textBreak:nth-child(2) {
        display: none;
      }
      .secBodyContact {
        position: absolute;
        bottom: 2rem;
        width: 70%;
      }
    }
    .toTop {
      right: 2%;
    }
  }
  @media screen and (max-width: 480px) {
    .textAreaContact {
      width: 48%;
      margin-left: 11vw;
    }
  }
`;

export default Contact;
