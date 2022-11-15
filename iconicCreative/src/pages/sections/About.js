import React from "react";
import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import aboutBg from "../../images/photos/aboutBg.png";

function About() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <ScAbout ref={ref}>
      <img src={aboutBg} alt="" className="aboutBg" />
      <article className="aboutContent">
        {inView && <h2 className="aboutTitle">| About</h2>}
        {inView && (
          <div className="aboutText">
            <p>Iconic Creative is a branding, web design,</p>
            <p>and social media agency located in Utah.</p>
            <p>We power some of the most aspiring</p>
            <p>and design-forward brands.</p>
          </div>
        )}
      </article>
      <button className="aboutBtn" tabIndex={-1}>
        <NavLink to="/About" tabIndex={7}>
          Meet The Team
        </NavLink>
        <FontAwesomeIcon icon={faChevronRight} className="faIcon" />
      </button>
    </ScAbout>
  );
}

const ScAbout = styled("section")`
  width: 100vw;
  height: 100vh;
  min-height: 36rem;

  > * {
    position: absolute;
  }

  .aboutBg {
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .aboutContent {
    /* border: 1px solid red; */
    top: 46%;
    left: 6%;
    transform: translate(0, -50%);
    width: 80%;
    .aboutTitle {
      font-size: calc(1.2rem + 6vw);
      margin-bottom: 4vw;
      opacity: 0;
      transform: translate(0, 40%);
      animation: fadeUp 0.6s ease 0.2s forwards;
    }
    .aboutText {
      font-size: calc(0.4rem + 3.4vw);
      opacity: 0;
      transform: translate(0, 20%);
      animation: fadeUp 0.8s ease 0.3s forwards;
    }
  }

  .aboutBtn {
    position: relative;
    top: 86%;
    left: 64%;
    transform: scale(1.2);
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
      background: #c3c3c3;
      z-index: -1;
      pointer-events: none;
      transition: width 0.4s cubic-bezier(0.42, -0.49, 0.64, 1.24),
        background 0.4s ease;
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
      }
    }
  }

  @media (max-width: 1440px) {
    .aboutBtn {
      transform: scale(1);
    }
  }

  @media (max-width: 768px) {
    height: 68vh;
    min-height: 32rem;
    .aboutContent {
      width: 88%;
      .aboutText {
        font-size: calc(0.2rem + 3.6vw);
      }
    }
    .aboutBtn {
      left: 64%;
      &::before {
        width: 3.2rem;
        height: 3.2rem;
      }
    }
  }

  @media (max-width: 520px) {
    .aboutBtn {
      &::before {
        width: 2.8rem;
        height: 2.8rem;
      }
    }
  }

  @media (max-width: 480px) {
    height: 54vh;
    min-height: 24rem;
    .aboutBtn {
      top: 84%;
      left: 50%;
    }
  }
`;

export default About;
