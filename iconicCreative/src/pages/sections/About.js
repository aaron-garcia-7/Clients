import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import aboutBg from "../../images/photos/aboutBg.png";

function About() {
  return (
    <ScAbout>
      <img src={aboutBg} alt="" className="aboutBg" />
      <article className="aboutContent">
        <h2 className="aboutTitle">| About</h2>
        <p className="aboutText">
          Iconic Creative is a branding, web design, and social media agency
          located in Utah. We power some of the most aspiring and design-forward
          brands.
        </p>
      </article>
      <button className="aboutBtn">
        <a href="">Meet The Team</a>
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
    top: 50%;
    left: 6%;
    transform: translate(0, -50%);
    width: 80%;
    .aboutTitle {
      font-size: calc(1.2rem + 6vw);
      margin-bottom: 4vw;
    }
    .aboutText {
      font-size: calc(0.6rem + 3.2vw);
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
      background: var(--grey);
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
    .aboutBtn {
      left: 64%;
      &::before {
        width: 3.2rem;
        height: 3.2rem;
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
