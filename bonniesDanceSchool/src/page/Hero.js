import React from "react";
import styled from "styled-components";
import HeroImg from "../components/HeroImg";
import HeroTitle from "../components/HeroTitle";
import ScrollDown from "../components/ScrollDown";

function Hero({ pageWidth }) {
  return (
    <ScHero>
      <HeroTitle />
      {pageWidth > 768 && <HeroImg />}
      {pageWidth <= 768 && <div className="heroBubbleMobile" />}
      <div className="ctaDiv">
        <a href="#" className="link">
          Register
        </a>
        <a href="#" className="link">
          Contact
        </a>
      </div>
      <ScrollDown />
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
          height: 2px;
          transition: 0.3s ease;
          pointer-events: none;
        }
        &::before {
          transform: translate(0%, 2px) scale(1);
          width: 100%;
        }
        &::after {
          transform: translate(0%, 6px) scale(1);
          width: 68%;
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

  @media (max-width: 768px) {
    overflow-x: hidden;
    .heroBubbleMobile {
      top: 16%;
      right: 0;
      transform: translate(20%, 0) scale(20);
      width: 24vw;
      height: 24vw;
      background: var(--taupe);
      border-radius: 50%;
      animation: heroBubbleMobileShrink 2s cubic-bezier(0.55, 0.29, 0.24, 1.11)
        1s forwards;
    }

    .ctaDiv {
      bottom: 26%;
      left: 20%;
      a {
        &:nth-of-type(1) {
          margin-right: 6vw;
          &::before {
            transform: translate(-100%, 100%) scale(1);
            width: 1.6rem;
            height: 1.6rem;
          }
          &::after {
            transform: translate(20%, 320%) scale(1);
            width: 0.6rem;
            height: 0.6rem;
          }
        }
        &:nth-of-type(2) {
          &::before,
          &::after {
            height: 1px;
          }
        }
      }
    }

    @keyframes heroBubbleMobileShrink {
      to {
        transform: translate(20%, 0) scale(1);
      }
    }
  }
`;

export default Hero;
