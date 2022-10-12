import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import heroBg from "../../images/graphics/heroBg.svg";
import heroImg from "../../images/photos/heroImg.png";

function Hero({ pageWidth }) {
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
    // transform: `translate(0, ${offset * -0.12}px)`,
    transform:
      pageWidth > 480
        ? `translate(0, ${offset * 0.04}px)`
        : `translate(50%, ${offset * 0.08}px)`,
  };
  const parallaxStyleText = {
    // transform: `translate(0, ${offset * -0.1}px)`,
    transform:
      pageWidth >= 480
        ? `translate(0, ${offset * -0.1}px)`
        : `translate(0, ${offset * -0.07}px)`,
  };
  // End Parallax

  const [lookHere, setLookHere] = useState(false);

  const lookStyle = {
    transform: "rotate(1deg) scale(1.02)",
    // transform: "scale(1.05)",
    transition: "0.4s ease 0.4s",
  };

  const noLookStyle = {
    transform: "rotate(0deg) scale(1)",
    // transform: "scale(1)",
    transition: "0.4s ease 0s",
  };

  return (
    <ScHero>
      <h2 className="heroText" style={parallaxStyleText}>
        Innovative Branding <br /> + Web Design
      </h2>
      <button
        className="cta"
        onMouseEnter={() => setLookHere(true)}
        onMouseLeave={() => setLookHere(false)}
        style={parallaxStyleText}
      >
        <NavLink to="/Services">Boom Your Brand</NavLink>
        <FontAwesomeIcon icon={faChevronRight} className="faIcon" />
      </button>
      <figure className="heroImgContainer" style={parallaxStyle}>
        <img
          src={heroImg}
          alt=""
          className="heroImg"
          style={lookHere ? lookStyle : noLookStyle}
        />
      </figure>
      <figure className="bgContainer">
        <img src={heroBg} alt="" className="heroBg" />
      </figure>
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
    top: 36%;
    left: 6%;
    font-size: calc(1.6rem + 3.6vw);
    font-weight: 400;
    z-index: 3;
    transition: transform 1.6s cubic-bezier(0.21, 0.89, 0.61, 1.14);
  }

  .cta {
    position: relative;
    top: 72%;
    left: 8%;
    z-index: 3;
    transition: transform 0.8s cubic-bezier(0.21, 0.89, 0.61, 1.14);
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
        transform: translate(250%, -50%);
        transition-delay: 0.16s;
      }
      &::before {
        width: 124%;
        background: var(--offDark);
      }
    }
  }

  .heroImgContainer {
    top: 10%;
    right: 0;
    transform: translate(0, 0);
    width: 54vw;
    z-index: 2;
    transition: transform 1.6s cubic-bezier(0.21, 0.89, 0.61, 1.14);

    .heroImg {
      width: 100%;
    }
  }

  .bgContainer {
    top: 0;
    width: 100vw;
    height: 100vh;
    min-height: 32rem;
    z-index: 1;
    overflow: hidden;
    .heroBg {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
      width: calc(24rem + 36vw);
    }
  }

  @media (max-width: 1224px) {
    .heroImgContainer {
      top: 20%;
    }
  }

  @media (max-width: 1024px) {
    .cta {
      top: 68%;
    }

    .heroImgContainer {
      top: 32%;
    }
  }

  @media (max-width: 768px) {
    .heroText {
      top: 32%;
      left: 10%;
    }

    .cta {
      top: 66%;
      left: 12%;
      &::before {
        width: 3.2rem;
        height: 3.2rem;
      }
    }

    .heroImgContainer {
      top: 46%;
    }

    .bgContainer {
      .heroBg {
        top: 50%;
        left: 0;
        transform: translate(0, -50%);
        width: calc(20rem + 32vw);
      }
    }
  }

  @media (max-width: 480px) {
    .heroText {
      width: 94%;
      top: 28%;
      left: 4%;
    }

    .cta {
      top: 50%;
      left: 8%;
      transform: translate(0, 100%);
    }

    .heroImgContainer {
      top: 46%;
      right: 50%;
      width: 100%;
    }

    .bgContainer {
      .heroBg {
        top: 50%;
        left: 0;
        transform: translate(0, -50%);
        width: calc(28rem + 36vw);
      }
    }
  }

  // MAX HEIGHT
  @media (max-height: 624px) {
    .heroText {
      top: 28%;
    }
    .heroImgContainer {
      top: 38%;
      width: 36vw;
    }
  }
`;

export default Hero;
