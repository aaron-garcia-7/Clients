import React from "react";
import { motion } from "framer-motion";
import { swiper, dancer } from "../animations/introAnimations";
import { Link } from "react-scroll";
import styled from "styled-components";
import heroImg from "../images/photos/heroImg.png";
import arrow from "../images/graphics/arrow.svg";
import SocialMedia from "../components/SocialMedia";
import registrationPdf from "../documents/Registration.pdf";

const Hero = ({ width }) => {
  return (
    <ScHero>
      <motion.div
        variants={swiper}
        inital="initial"
        animate="animate"
        className="animSlider"
      />
      <div className="partial" />
      <div className="heroContent">
        <h6>
          <span className="fineText">Physical</span>
          <span className="spacer">|</span>
          <span className="fineText">Intellectual</span>
          <span className="spacer">|</span>
          <span className="fineText">Emotional</span>
        </h6>
        <h2>
          <span className="heroText">Pursue</span>{" "}
          <span className="heroText">growth</span> <br />{" "}
          <span className="heroText">through</span>{" "}
          <span className="heroText">dance</span>
        </h2>
        <div className="ctaBtns">
          <a href={registrationPdf} target="_blank" className="cta1">
            register
          </a>
          <a href="" className="cta2">
            contact
          </a>
        </div>
      </div>
      <motion.img
        src={heroImg}
        alt="A young woman holding a dance pose"
        className="heroImg"
        variants={dancer}
        initial="initial"
        animate="animate"
      />
      <Link
        to="subHero"
        smooth={"easeOutQuart"}
        offset={width > 1440 ? -180 : width <= 1440 && width > 768 ? -80 : -28}
        duration={800}
        delay={50}
        className="scrollDiv"
      >
        <img src={arrow} alt="" />
        <p>Scroll</p>
      </Link>
      {width <= 580 && <SocialMedia inHero={true} />}
    </ScHero>
  );
};

const ScHero = styled.section`
  .animSlider {
    position: absolute;
    right: 0;
    width: 100vw;
    height: 100vh;
    background: var(--pink);
    opacity: 0.8;
  }

  .partial {
    border: 2px solid #e46f9f00;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    background: var(--tan);
    width: 80vw;
    height: 80vh;
    min-height: 28rem;
    border: 2px solid #e46f9f40;
    opacity: 0;
    animation: partialReveal 0.8s ease 0.2s forwards;
  }

  .heroContent {
    position: absolute;
    top: 50%;
    left: 16%;
    transform: translate(0, -50%);
    h6 {
      .fineText {
        font-family: "Quicksand", sans-serif;
        font-size: calc(0.4rem + 0.2vw);
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        opacity: 0;
        animation: fade 1.6s ease forwards;
        &:nth-child(1) {
          animation-delay: 1.6s;
        }
        &:nth-child(3) {
          animation-delay: 1.8s;
        }
        &:nth-child(5) {
          animation-delay: 2s;
        }
      }
    }
    .spacer {
      padding: 0 1rem;
      opacity: 0;
      animation: fade 2s ease 2.2s forwards;
    }
    h2 {
      font-size: calc(1.2rem + 2.4vw);
      font-weight: 100;
      letter-spacing: 0.4rem;
      margin: 1rem 0 3.2rem 0;
      .heroText {
        position: relative;
        opacity: 0;
        animation: fade 1.2s ease forwards;
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--tan);
          animation: textReveal 1s ease forwards;
        }
        &:nth-child(1) {
          animation-delay: 0.6s;
          &::after {
            animation-delay: 0.6s;
          }
        }
        &:nth-child(2) {
          animation-delay: 0.8s;
          &::after {
            animation-delay: 0.8s;
          }
        }
        &:nth-child(4) {
          animation-delay: 1.2s;
          &::after {
            animation-delay: 1.2s;
          }
        }
        &:nth-child(5) {
          animation-delay: 1.4s;
          &::after {
            animation-delay: 1.4s;
          }
        }
      }
    }
  }

  .ctaBtns {
    a {
      font-size: calc(0.8rem + 0.2vw);
      padding: 0.6rem 1.4rem;
      letter-spacing: 0.08rem;
      font-weight: 400;
      opacity: 0;
      animation: fade 2.6s ease 2s forwards;
    }
    .cta1 {
      background: var(--pink);
      color: var(--light);
      margin-right: 2rem;
      transition: 0.3s ease;
      &:hover {
        background: var(--pink2);
      }
    }

    .cta2 {
      position: relative;
      color: var(--dark);
      font-weight: 500;
      animation-delay: 2.6s;
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        width: 0.4rem;
        height: 0.4rem;
        border-bottom: 2px solid var(--pink);
        border-right: 2px solid var(--pink);
        transform: translate(0, -40%);
        rotate: -45deg;
        transition: 0.3s ease;
      }
      &:hover {
        &::after {
          transform: translate(60%, 20%);
        }
      }
    }
  }

  .heroImg {
    position: absolute;
    width: 20rem;
    top: 8%;
    right: 18%;
  }

  .scrollDiv {
    position: absolute;
    bottom: 15%;
    left: 0;
    width: 8rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transform: rotate(-90deg);
    img {
      padding: 0 1rem;
      transform: scale(1.2);
    }
    p {
      font-family: "Quicksand", sans-serif;
      font-size: calc(0.6rem + 0.2vw);
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
    }
  }

  @keyframes textReveal {
    to {
      height: 0%;
    }
  }

  @keyframes partialReveal {
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  @media (max-width: 1440px) {
    .partial {
      height: 72vh;
    }
    .heroImg {
      width: 14rem;
      top: 10%;
    }
    .scrollDiv {
      bottom: 18%;
    }
  }

  @media (max-width: 1220px) {
    .heroContent {
      left: 14%;
      .ctaBtns {
        .cta1 {
          margin-right: 1rem;
        }
      }
    }
    .heroImg {
      right: 12%;
    }
  }

  @media (max-width: 768px) {
    .heroContent {
      h2 {
        letter-spacing: 0.3rem;
      }
      .spacer {
        padding: 0 0.4rem;
      }
    }
    .heroImg {
      width: 12rem;
      top: 16%;
      right: 8%;
    }
    .cta1 {
      margin-right: 1.6rem;
      padding: 0.4rem 1.2rem;
      transition: 0.3s ease;
    }
    .scrollDiv {
      bottom: 14%;
      left: -1.6rem;
    }
  }

  @media (max-width: 580px) {
    .partial {
      width: 92vw;
      height: 58vh;
      min-height: 20rem;
    }
    .heroContent {
      left: 8%;
      h2 {
        letter-spacing: 0.2rem;
        margin: 1rem 0 2rem 0;
      }
      .ctaBtns {
        .cta1 {
          padding: 0.4rem 1rem;
          margin-right: 0;
        }
      }
    }
    .heroImg {
      width: 10rem;
      top: 20%;
      right: 2%;
    }
    .scrollDiv {
      bottom: 10%;
      left: -2rem;
      transform: rotate(-90deg) scale(0.7);
    }
    #socialMediaHero {
      position: absolute;
      bottom: 12%;
      right: 1rem;
      flex-direction: column;
      li {
        &:nth-child(2) {
          transform: translate(0, 1rem);
        }
        .faIcon {
          font-size: calc(0.8rem + 0.8vw);
        }
      }
    }
  }

  @media (max-width: 480px) {
    .partial {
      height: 46vh;
      min-height: 16rem;
    }
    .heroContent {
      h2 {
        letter-spacing: 0.1rem;
      }
    }
    .heroImg {
      width: 8rem;
      top: 30%;
    }
  }
`;

export default Hero;
