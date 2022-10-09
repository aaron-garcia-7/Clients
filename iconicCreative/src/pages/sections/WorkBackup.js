import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import workBg from "../../images/photos/workBg.png";

function Work({ pageWidth }) {
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
    transform: `translate(0, ${offset * -0.08}px)`,
    // transform:
    //   pageWidth > 1224
    //     ? `translate(0, ${offset * -0.1}px)`
    //     : `translate(0, ${offset * -0.08}px)`,
  };
  // End Parallax
  return (
    <ScWork>
      <img src={workBg} alt="" className="workBg" style={parallaxStyle} />
      <p className="workText">We take digital experiences to the next level</p>
      <button className="workBtn">
        <a href="">See Our Work</a>
        <FontAwesomeIcon icon={faChevronRight} className="faIcon" />
      </button>
    </ScWork>
  );
}

const ScWork = styled("section")`
  /* border: 4px dashed red; */
  /* background: #0c0c0c; */
  background: yellow;
  width: 100vw;
  height: 100vh;
  min-height: 36rem;
  overflow-y: hidden;

  > * {
    position: absolute;
  }

  .workBg {
    top: 32%;
    width: 100%;
    /* width: 86rem; */
    object-fit: cover;
  }

  .workText {
    width: 46%;
    top: 50%;
    left: 6%;
    transform: translate(0, -64%);
    color: var(--light);
    font-size: calc(1.2rem + 5.4vw);
  }

  .workBtn {
    position: relative;
    top: 80%;
    left: 8%;
    transform: translate(0, 0);
    z-index: 2;
    a {
      color: var(--light);
      font-size: calc(0.8rem + 0.8vw);
      font-weight: 400;
      transition: color 0.4s ease 0.2s;
    }
    .faIcon {
      position: absolute;
      top: 50%;
      right: -6%;
      transform: translate(100%, -40%);
      color: var(--light);
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
      background: #3a3a3a;
      z-index: -1;
      pointer-events: none;
      transition: 0.4s cubic-bezier(0.42, -0.49, 0.64, 1.24);
    }
    &:hover {
      .faIcon {
        transform: translate(250%, -40%);
        transition-delay: 0.16s;
      }
      &::before {
        width: 124%;
        background: var(--offDark);
      }
    }
  }

  @media (max-width: 1440px) {
    .workBg {
      top: 40%;
    }
  }

  @media (max-width: 1224px) {
    .workBg {
      top: 42%;
    }
    .workText {
      width: 56%;
    }
  }

  @media (max-width: 1024px) {
    height: 80vh;
    min-height: 32rem;
    .workBg {
      top: 50%;
    }
  }

  @media (max-width: 860px) {
    .workBg {
      top: 56%;
    }
  }

  @media (max-width: 768px) {
    height: 60vh;
    min-height: 24rem;
    .workBg {
      top: 80%;
    }
    .workText {
      width: 60%;
    }
  }
`;

export default Work;
