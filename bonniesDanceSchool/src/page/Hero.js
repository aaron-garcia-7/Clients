import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeroImg from "../components/HeroImg";
import HeroTitle from "../components/HeroTitle";
import ScrollDown from "../components/ScrollDown";
import SocialMedia from "../components/SocialMedia";
import registrationPdf from "../documents/Registration.pdf";

function Hero({ pageWidth, navOpen, setNavOpen }) {
  const menuStyle = {
    transform: "translateY(120%)",
    opacity: 0,
    transition: "0.4s ease",
  };

  // Allow for different animation durations/delays once loading animation is done.
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadTime = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(loadTime);
  }, []);
  // End Loading Calc

  const menuStyleBubbleMobile = {
    transform: "translate(-50%, 0) scale(1)",
    animation:
      "bubbleMenuToggleMobile 1s cubic-bezier(.55,.29,.24,1.11) 0s forwards",
  };

  return (
    <ScHero>
      <HeroTitle navOpen={navOpen} />
      {pageWidth > 768 && <HeroImg navOpen={navOpen} />}
      {pageWidth <= 768 && (
        <div
          className="heroBubbleMobile"
          style={navOpen ? menuStyleBubbleMobile : null}
          id={loading ? "loadingAnim" : "menuAnim"}
        />
      )}
      <div className="ctaDiv" style={navOpen ? menuStyle : null}>
        <a href={registrationPdf} target="_blank" className="link" tabIndex={1}>
          Register
        </a>
        <a
          href="sms:8015136972"
          className="link"
          tabIndex={2}
          onFocus={() => setNavOpen(false)}
        >
          Contact
        </a>
      </div>
      <ScrollDown />
      {pageWidth <= 768 && <SocialMedia inHero={true} />}
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
    transition: transform 0.9s ease 0.6s, opacity 0.9s ease 0.6s;
    .link {
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
          transition: 0.6s cubic-bezier(0.74, -0.7, 0.46, 1.36);
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
          transition-delay: 0.1s;
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
          transition: 0.7s cubic-bezier(0.66, -0.62, 0.4, 1.53);
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
      right: -20%;
      transform: translate(-50%, 0) scale(20);
      width: 24vw;
      height: 24vw;
      background: var(--taupe);
      border-radius: 50%;
      animation: heroBubbleMobileShrink 2s cubic-bezier(0.55, 0.29, 0.24, 1.11)
        1s forwards;
    }
    #loadingAnim {
      transform: translate(-50%, 0) scale(20); // Grow Bubble
      animation-duration: 2s;
      animation-delay: 1s;
    }
    #menuAnim {
      transform: translate(-50%, 0) scale(0); // Shrink Bubble
      animation-duration: 1.6s;
      animation-delay: 0s;
    }

    .ctaDiv {
      bottom: 26%;
      left: 20%;
      .link {
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

    #socialMediaHero {
      position: absolute;
      bottom: 5rem;
      right: 2vw;
      flex-direction: column;
      width: 1.8rem;
      height: 4rem;
      display: flex;
      justify-content: space-between;
      opacity: 0;
      animation: fade 2s ease 2.2s forwards;
    }

    @keyframes heroBubbleMobileShrink {
      to {
        transform: translate(-50%, 0) scale(1);
      }
    }

    @keyframes bubbleMenuToggleMobile {
      to {
        transform: translate(-50%, -10%) scale(0); // Shrink Bubble
      }
    }
  }
`;

export default Hero;
