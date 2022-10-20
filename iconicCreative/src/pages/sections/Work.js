import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
    // transform: `translate(0, ${offset * -0.1}px)`,
    transform:
      pageWidth >= 480
        ? `translate(0, ${offset * -0.1}px)`
        : `translate(0, ${offset * -0.07}px)`,
  };
  // End Parallax
  return (
    <ScWork>
      <img src={workBg} alt="" className="workBg" />
      <p className="workText" style={parallaxStyle}>
        We take digital experiences to the next level
      </p>
      <button className="workBtn" style={parallaxStyle} tabIndex={-1}>
        <NavLink to="/OurWork" tabIndex={8}>
          See Our Work
        </NavLink>
        <FontAwesomeIcon icon={faChevronRight} className="faIcon" />
      </button>
    </ScWork>
  );
}

const ScWork = styled("section")`
  width: 100vw;
  height: 68vw;
  overflow: hidden;

  > * {
    position: absolute;
  }

  .workBg {
    top: 0;
    width: 100%;
    object-fit: cover;
    user-select: none;
    -webkit-user-drag: none;
  }

  .workText {
    width: 54%;
    top: calc(24rem + 24vw);
    left: 6%;
    color: var(--light);
    font-size: calc(0.4rem + 6.4vw);
    /* transition: transform 1.6s cubic-bezier(0.21, 0.89, 0.61, 1.14); */
    transition: transform 0.7s cubic-bezier(0.23, 0.79, 0.68, 0.96);
  }

  .workBtn {
    position: relative;
    top: calc(28rem + 48vw);
    left: 8%;
    transform: translate(0, 0);
    z-index: 2;
    /* transition: transform 0.8s cubic-bezier(0.21, 0.89, 0.61, 1.14); */
    transition: transform 0.8s cubic-bezier(0.23, 0.79, 0.68, 0.96);
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
    .workText {
      top: calc(20rem + 24vw);
    }
    .workBtn {
      top: calc(26rem + 48vw);
    }
  }

  @media (max-width: 1224px) {
    .workText {
      width: 56%;
    }
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    .workBtn {
      &::before {
        width: 3.2rem;
        height: 3.2rem;
      }
    }
  }

  @media (max-width: 520px) {
    height: 60vh;
    .workBg {
      width: 120%;
      height: 120%;
      object-fit: cover;
      object-position: 60% 50%;
    }
    .workText {
      top: calc(18rem + 24vw);
    }
    .workBtn {
      top: calc(23rem + 48vw);
      &::before {
        width: 2.8rem;
        height: 2.8rem;
      }
    }
  }

  @media (max-width: 480px) {
    height: 64vh;
    .workBg {
      width: 112%;
      height: 100%;
      object-position: 54% 50%;
    }
    .workText {
      top: calc(18rem + 24vw);
      transition: 0s;
    }
    .workBtn {
      top: calc(23rem + 48vw);
      transition: 0s;
    }
  }
`;

export default Work;
