import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import heroBg from "../../images/graphics/heroBg.svg";
import heroImg from "../../images/photos/heroImg.png";

function Hero() {
  // Parallax Effect
  const [offset, setOffset] = useState(0);
  const parallaxScroll = () => {
    setOffset(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", parallaxScroll);
    return () => window.removeEventListener("scroll", parallaxScroll);
  }, [offset]);
  const parallaxStyle = {
    transform: `translate(0, ${offset * 0.04}px)`,
    // transform: `translate(0, ${offset * -0.12}px)`,
  };
  // End Parallax
  return (
    <ScHero>
      <h2 className="heroText">
        Innovative Branding <br /> + Web Design
      </h2>
      <button className="cta">
        <a href="">Boom Your Brand</a>
        <FontAwesomeIcon icon={faChevronRight} className="faIcon" />
      </button>
      <img src={heroImg} alt="" className="heroImg" style={parallaxStyle} />
      <img src={heroBg} alt="" className="heroBg" />
    </ScHero>
  );
}

const ScHero = styled("section")`
  height: 100vh;
  min-height: 32rem;
  background: var(--offWhite);

  > * {
    position: absolute;
  }
  .heroText {
    color: var(--dark);
    top: 50%;
    left: 6%;
    transform: translate(0, -80%);
    font-size: calc(1.6rem + 3.6vw);
    font-weight: 400;
    z-index: 3;
  }

  .cta {
    position: relative;
    top: 50%;
    left: 8%;
    transform: translate(0, 600%);
    z-index: 2;
    a {
      color: var(--dark);
      font-size: calc(0.8rem + 0.8vw);
      font-weight: 400;
      transition: color 0.4s ease 0.2s;
    }
    .faIcon {
      position: absolute;
      top: 50%;
      right: -6%;
      transform: translate(100%, -50%);
      font-size: calc(0.6rem + 0.6vw);
      transition: transform 0.4s cubic-bezier(0.54, -0.85, 0.45, 1.67);
    }
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: -12%;
      transform: translate(0%, -50%);
      width: 4rem;
      height: 4rem;
      border-radius: 12rem;
      background: var(--grey);
      z-index: -1;
      pointer-events: none;
      transition: 0.4s cubic-bezier(0.42, -0.49, 0.64, 1.24);
      /* transition: width 0.4s cubic-bezier(0.42, -0.49, 0.64, 1.24),
        background 0.4s ease; */
    }
    &:hover {
      a {
        color: var(--light);
      }
      .faIcon {
        /* font-size: calc(0rem + 0vw); */
        transform: translate(250%, -50%);
        transition-delay: 0.16s;
      }
      &::before {
        width: 124%;
        background: var(--offDark);
        /* pointer-events: all; */
      }
    }
  }

  .heroImg {
    top: 10%;
    right: 0;
    transform: translate(0, 0);
    /* width: calc(2rem + 48vw); */
    width: 54vw;
    z-index: 2;
  }

  .heroBg {
    /* border: 2px solid red; */
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    /* width: 60%; */
    width: calc(24rem + 36vw);
    /* z-index: -1; */
    z-index: 1;
  }

  @media (max-width: 1224px) {
    .heroImg {
      top: 20%;
    }
  }

  @media (max-width: 1024px) {
    .heroImg {
      top: 32%;
    }
  }

  @media (max-width: 768px) {
    .heroText {
      top: 46%;
      left: 10%;
      /* transform: translate(0, -80%); */
      /* font-size: calc(1.6rem + 3.6vw); */
      /* font-weight: 400; */
    }

    .cta {
      left: 12%;
      /* transform: translate(0, 600%); */
    }

    .heroImg {
      top: 46%;
      /* display: none; */
    }
    .heroBg {
      /* border: 1px solid black; */
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
      /* width: 60%; */
      width: calc(20rem + 32vw);
      z-index: -1;
    }
  }

  // MAX HEIGHT
  @media (max-height: 624px) {
    .heroText {
      top: 58%;
    }
    .heroImg {
      top: 32%;
      width: 36vw;
    }
  }
`;

export default Hero;
