import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import LocationImg from "../components/LocationImg";
import Poly from "../components/Poly";

function Location({ pageWidth, navOpen, setNavOpen }) {
  const [ref, inView] = useInView({
    threshold: pageWidth > 768 ? 0.1 : 0.4,
    triggerOnce: true,
  });

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
    transform: `translate(0, ${offset * 0.08}px)`,
  };
  // End Parallax

  const menuStyleHeader = {
    transform: pageWidth > 768 ? "translateY(80%)" : "translateY(40%)",
    opacity: 0,
    transition: "0.8s ease 0.2s",
  };
  const menuStyleParagraph = {
    transform: pageWidth > 768 ? "translateY(80%)" : "translateY(40%)",
    opacity: 0,
    transition: "0.8s ease 0.1s",
  };
  const menuStyleButton = {
    transform: pageWidth > 768 ? "translateY(160%)" : "translateY(120%)",
    opacity: 0,
    transition: "0.8s ease",
  };

  return (
    <ScLocation ref={ref}>
      {inView && <Poly inLocation={true} />}
      <div className="bubbleLocation" style={parallaxStyle} />
      <article>
        <header style={navOpen ? menuStyleHeader : null}>
          {pageWidth > 768 && (
            <h3 className="sectionTitle">Where You Can Find Us</h3>
          )}
          {pageWidth <= 768 && (
            <h3 className="sectionTitle">
              Where To <br /> Find Us!
            </h3>
          )}
        </header>
        <div className="textArea" style={navOpen ? menuStyleParagraph : null}>
          <a
            href="https://goo.gl/maps/ELECSz7HCWkmLdbM6"
            target="_blank"
            rel="noreferrer"
            className="address"
            onFocus={() => setNavOpen(false)}
          >
            5372 Harvestmill Dr. <br /> West Jordan, UT 84081
          </a>
          <p className="instructions">
            Please be mindful not to park <br /> in front of others' driveways
          </p>
        </div>
        <button style={navOpen ? menuStyleButton : null}>
          <a
            href="https://goo.gl/maps/ELECSz7HCWkmLdbM6"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Expand Map
          </a>
        </button>
      </article>
      {inView && <LocationImg navOpen={navOpen} />}
    </ScLocation>
  );
}

const ScLocation = styled("section")`
  min-height: 48rem;
  article {
    position: absolute;
    top: 50%;
    left: 14%;
    transform: translate(0, -50%);
    header {
      width: 80%;
      margin-bottom: 3.6rem;
      transition: transform 1.4s ease 0.3s, opacity 1.4s ease 0.3s;
      h3 {
        // See Global Styles
        font-size: calc(1rem + 2vw);
      }
    }
    .textArea {
      transition: transform 1.4s ease 0.5s, opacity 1.4s ease 0.5s;
      .address {
        font-size: calc(0.6rem + 0.6vw);
      }
      .instructions {
        margin: 1rem 0 3.6rem 0;
        font-family: var(--modern);
        font-size: calc(0.5rem + 0.4vw);
        letter-spacing: 0.06rem;
      }
    }
    button {
      border: none;
      background: none;
      transition: transform 1.4s ease 0.7s, opacity 1.4s ease 0.7s;
      .link {
        position: relative;
        width: 4rem;
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

  .bubbleLocation {
    position: absolute;
    top: 10%;
    left: 52%;
    width: 12vw;
    height: 12vw;
    border-radius: 50%;
    background: var(--maroon);
    opacity: 0.4;
  }

  @media (max-width: 1440px) {
    article {
      header {
        margin-bottom: 2.4rem;
      }
      .instructions {
        margin: 1rem 0 2.4rem 0;
      }
    }
  }

  @media (max-width: 1224px) {
    height: 60vh;
    min-height: 32rem;
    article {
      header {
        margin-bottom: 1.6rem;
        h3 {
          font-size: calc(1rem + 1.4vw);
        }
      }
      .instructions {
        margin: 1rem 0 1.6rem 0;
      }
    }
    #polyLocation {
      transform: translate(-50%, -32%) scale(1);
    }
    .bubbleLocation {
      top: 0;
    }
  }

  @media (max-width: 768px) {
    height: 140vh;
    min-height: 56rem;
    article {
      top: 34%;
      left: 18%;
      header {
        h3 {
          width: 46vw;
        }
      }
      .instructions {
        margin: 1.4rem 0 2.6rem 0;
        font-size: calc(0.5rem + 0.4vw);
      }
      button {
        .link {
          &::before,
          &::after {
            height: 1px;
          }
        }
      }
    }

    .bubbleLocation {
      top: -4%;
      left: 64%;
      width: 32vw;
      height: 32vw;
    }
  }

  @media (max-width: 480px) {
    height: 112vh;
    min-height: 36rem;
  }
`;

export default Location;
