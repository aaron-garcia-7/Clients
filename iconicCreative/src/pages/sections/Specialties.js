import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import SpecCard from "../../components/SpecCard";
import glyph from "../../images/graphics/glyph.svg";

function Specialties({ pageWidth }) {
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
    // transform: `translate(-50%, ${offset * 0.4}px)`,
    transform:
      pageWidth > 768
        ? `translate(-50%, ${offset * 0.4}px)`
        : `translate(-50%, ${offset * 0.5}px)`,
  };
  // End Parallax

  return (
    <ScSpecialties>
      <img src={glyph} alt="" className="glyph" style={parallaxStyle} />
      <header className="specialtiesHeader">
        <h2>| Specialties</h2>
        <p>
          We elevate brands to new heights <br /> and create jaw dropping
          websites.{" "}
        </p>
      </header>
      <SpecCard title={"UI / UX"} order={1} />
      <SpecCard title={"Branding"} order={2} />
      <SpecCard title={"Social Media"} order={3} />
      <button className="servicesBtn">
        <a href="">View All Services</a>
        <FontAwesomeIcon icon={faChevronRight} className="faIcon" />
      </button>
    </ScSpecialties>
  );
}

const ScSpecialties = styled("section")`
  height: 260vh;
  min-height: 164rem;
  background: var(--dark);
  > * {
    position: absolute;
  }

  .glyph {
    top: 8%;
    left: 50%;
    transform: translate(-50%, 0);
    opacity: 0.04;
    width: 24vw;
  }
  .specialtiesHeader {
    top: 10%;
    left: 6%;
    > * {
      color: var(--light);
    }
    h2 {
      font-size: calc(1.2rem + 6vw);
      margin-bottom: 4vw;
    }
    p {
      font-size: calc(1rem + 1.2vw);
      margin-left: 4vw;
    }
  }

  #spec1 {
    right: 8%;
    transform: translate(0, -90%);
  }
  #spec2 {
    left: 8%;
    transform: translate(0, -32%);
  }
  #spec3 {
    right: 8%;
    transform: translate(0, 40%);
  }

  .servicesBtn {
    position: relative;
    top: 84%;
    left: 10%;
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
    min-height: 140rem;

    .servicesBtn {
      top: 82%;
    }
  }

  @media (max-width: 1224px) {
    min-height: 128rem;

    .specialtiesHeader {
      top: 8%;
    }
  }

  @media (max-width: 768px) {
    /* border: 2px dashed red; */
    /* min-height: 128rem; */

    .specialtiesHeader {
      /* top: 8%; */
    }

    #spec1 {
      transform: translate(0, -150%);
    }
    #spec2 {
      transform: translate(0, -25%);
    }
    #spec3 {
      transform: translate(0, 100%);
    }

    .servicesBtn {
      top: 94%;
    }
  }
`;

export default Specialties;
