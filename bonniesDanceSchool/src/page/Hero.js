import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import HeroImg from "../components/HeroImg";
import HeroTitle from "../components/HeroTitle";
import ScrollDown from "../components/ScrollDown";
import SocialMedia from "../components/SocialMedia";
import registrationPdf from "../documents/Registration.pdf";

function Hero({ pageWidth, navOpen, setNavOpen, setContact }) {
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
        <a
          href={registrationPdf}
          target="_blank"
          rel="noreferrer"
          className="link"
          tabIndex={1}
        >
          Register
        </a>
        <Link
          href="#footer"
          className="link"
          to="footer"
          smooth={"easeInCubic"}
          duration={800}
          delay={20}
          tabIndex={2}
          onFocus={() => setNavOpen(false)}
          onClick={() => setContact(true)}
        >
          Contact
        </Link>
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
    /* border: 1px dashed grey; */
    bottom: 20%;
    left: 14%;
    transition: transform 0.9s ease 0.6s, opacity 0.9s ease 0.6s;
    .link {
      position: relative;
      opacity: 0;
      pointer-events: none;
      transition: 0.4s ease 0.2s;
      animation: fade 2s ease 2.2s forwards;
      &:nth-of-type(1) {
        position: relative;
        margin-right: 2vw;
        padding: 0.4rem 1.6rem;
        &::before,
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 98%;
          height: 98%;
          border: 2px solid var(--maroon);
          transition: 0.4s cubic-bezier(0.66, -0.62, 0.4, 1.53);
        }
        &::before {
          transform: translate(-52%, -56%);
        }
        &::after {
          transform: translate(-48%, -44%);
        }
        &:hover {
          background: var(--maroon);
          color: #fef2f2;
          &::before,
          &::after {
            transform: translate(-50%, -50%);
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
      left: 18%;
      .link {
        &:nth-of-type(1) {
          margin-right: 6vw;
          padding: 0.4rem 1.2rem;
          &::before,
          &::after {
            border: 1px solid var(--maroon);
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
      bottom: 2rem;
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
