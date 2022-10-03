import React from "react";
import styled from "styled-components";
import HeroImg from "../components/HeroImg";
import HeroImgBackup from "../components/HeroImgBackup"; // No Parallax Effect
import HeroTitle from "../components/HeroTitle";
import scrollDown from "../images/scroll.svg";

function Hero({ pageWidth }) {
  return (
    <ScHero>
      <HeroTitle />
      {pageWidth > 768 && <HeroImg />}
      {/* {pageWidth > 768 && <HeroImgBackup />} */}
      <div className="ctaDiv">
        <a href="#" className="link">
          Register
        </a>
        <a href="#" className="link">
          Contact
        </a>
      </div>
      <a href="#" className="scrollDown">
        <img src={scrollDown} alt="" />
      </a>
    </ScHero>
  );
}

const ScHero = styled("section")`
  position: relative;
  > * {
    position: absolute;
  }
  .ctaDiv {
    bottom: 20%;
    left: 14%;
    a {
      position: relative;
      opacity: 0;
      animation: fade 2s ease 2.2s forwards;
      &:nth-of-type(1) {
        margin-right: 2vw;
        &::before,
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          border-radius: 50%;
          background: var(--maroon);
          transition: 0.3s ease;
          pointer-events: none;
        }
        &::before {
          transform: translate(-100%, 100%) scale(1);
          width: 2rem;
          height: 2rem;
        }
        &::after {
          transform: translate(20%, 320%) scale(1);
          width: 0.8rem;
          height: 0.8rem;
          /* transition-delay: 0.1s; */
        }
        &:hover {
          &::before {
            transform: translate(-100%, 100%) scale(0.4);
          }
          &::after {
            transform: translate(20%, 320%) scale(1.8);
          }
        }
      }
      &:nth-of-type(2) {
        &::before,
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          right: 0;
          background: var(--maroon);
          transition: 0.3s ease;
          pointer-events: none;
        }
        &::before {
          transform: translate(0%, 2px) scale(1);
          width: 100%;
          height: 2px;
        }
        &::after {
          transform: translate(0%, 6px) scale(1);
          width: 68%;
          height: 2px;
        }
        &:hover {
          &::before {
            width: 48%;
          }
          &::after {
            width: 100%;
          }
        }
      }
    }
  }

  .scrollDown {
    position: absolute;
    bottom: 2rem;
    left: 2vw;
    opacity: 0;
    animation: fade 2s ease 3.2s forwards;
    img {
      width: calc(1rem + 0.8vw);
    }
  }
`;

export default Hero;
