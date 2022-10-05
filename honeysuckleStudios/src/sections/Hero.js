import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import Arrow from "../components/svg/Arrow";
import Logo from "../components/svg/Logo";
import MotionText from "../components/MotionText";
import Honeysuckle from "../components/svg/Honeysuckle";
import PageNum from "../components/PageNum";

const Hero = ({ width }) => {
  return (
    <ScHero>
      <Honeysuckle giveId={true} />
      <Logo />
      <div className="ctaDiv">
        <button className="cta">
          <a
            href="https://honeysucklestudios.glossgenius.com"
            target="_blank"
            rel="noreferrer"
          >
            book
          </a>
        </button>
        <button className="altCta">
          <a
            href="https://www.instagram.com/honeysuckle_studios/"
            target="_blank"
            rel="noreferrer"
          >
            gallery
          </a>
        </button>
      </div>
      <PageNum number={1} />
      <Link
        to="servicesSection"
        // smooth={true}
        smooth={"easeInOutQuart"}
        duration={800}
        offset={0}
        delay={20}
        className="scrollDownDiv"
      >
        <p className="scrollDown">
          scroll
          <span className="spacer" />
          down
          <span className="spacer" />
        </p>
        <Arrow />
      </Link>
      <MotionText width={width} first={true}>
        honeysuckle studios
      </MotionText>
      <MotionText width={width} second={true}>
        eyelash extensions
      </MotionText>
    </ScHero>
  );
};

const ScHero = styled("section")`
  background-color: var(--hero);
  #honeysuckle {
    top: 0;
    left: 50%;
    transform: translate(-50%, -10%) scale(0.5);
  }
  .ctaDiv {
    position: absolute;
    bottom: 18%;
    left: 50%;
    transform: translate(-50%, -2rem);
    display: flex;
    transition: 0.6s ease;
    .cta {
      background: var(--light);
      border: none;
      border-radius: 0.4rem;
      padding: 0.6rem 2rem;
      font-size: calc(0.8rem + 0.4vw);
      margin-right: 2rem;
      transition: 0.3s ease;
      opacity: 0;
      animation: fadeIn 2s ease 1.2s forwards;
      &:hover {
        transform: scale(1.06);
      }
      a {
        color: var(--hero);
      }
    }
    .altCta {
      background: none;
      border: none;
      font-size: calc(0.8rem + 0.4vw);
      border-bottom: 2px solid var(--light);
      transition: 0.3s ease;
      opacity: 0;
      animation: fadeIn 2s ease 1.6s forwards;
      &:hover {
        transform: scale(1.06);
      }
      a {
        color: var(--light);
      }
    }
  }
  .scrollDownDiv {
    position: absolute;
    bottom: 24%;
    right: 4rem;
    transform: rotate(90deg);
    display: flex;
    cursor: pointer;
    transition: transform 0.3s ease;
    .scrollDown {
      color: var(--light);
      font-size: 1.4rem;
      font-weight: 100;
      letter-spacing: 0.2rem;
      opacity: 0;
      animation: fadeIn 1.2s ease 2.4s forwards;
      transition: 0.8s ease;
      .spacer {
        margin-right: 0.6rem;
      }
      div {
        transition: 0.6s ease;
      }
    }
    &:hover {
      .scrollDown {
        transform: translate(1.4rem, 0);
      }
      div {
        transform: translate(1.4rem, 0.3rem);
      }
    }
  }

  #motionText1,
  #motionText2 {
    width: 100vh;
    top: 42%;
    height: 16%;
    .scrollText {
      transform: translate(0, 4rem);
    }
  }
  #motionText1 {
    left: 0;
    transform: rotate(-90deg);
  }
  #motionText2 {
    right: 0;
    transform: rotate(90deg);
  }

  @media (max-width: 1440px) {
    #honeysuckle {
      transform: translate(-50%, -20%) scale(0.4);
    }

    .scrollDownDiv {
      right: 1rem;
      .scrollDown {
        font-size: 1.2rem;
      }
    }

    #motionText1,
    #motionText2 {
      .scrollText {
        transform: translate(0, 3rem);
      }
    }
    #motionText1 {
      left: -2%;
    }
    #motionText2 {
      right: -2%;
    }
  }

  @media (max-width: 1220px) {
    .scrollDownDiv {
      transform: rotate(90deg) translate(1rem, -4rem);
      .scrollDown {
        font-size: 0.8rem;
      }
    }

    #motionText1,
    #motionText2 {
      .scrollText {
        font-size: calc(2rem + 2vw);
        letter-spacing: 0.4rem;
      }
    }
    #motionText1 {
      left: -8%;
    }
    #motionText2 {
      right: -8%;
    }
  }

  @media (max-width: 960px) {
    #motionText1 {
      left: -18%;
    }
    #motionText2 {
      right: -18%;
    }
  }

  @media (max-width: 768px) {
    #honeysuckle {
      left: 0;
      transform: translate(-24%, -28%) scale(0.2) !important;
      svg {
        path {
          stroke-width: 16;
        }
      }
    }

    #motionText1,
    #motionText2 {
      transform: rotate(0deg);
      height: 2rem;
      width: 100vw;
      .scrollText {
        font-size: calc(1.4rem + 1.4vw);
        font-weight: 500;
        letter-spacing: 1rem;
        transform: translate(0, 1rem);
      }
    }
    #motionText1 {
      top: 22%;
      left: 0;
      .scrollText {
        transform: translate(8rem, 1rem);
      }
    }
    #motionText2 {
      top: 26%;
      right: 0;
    }
  }

  @media (max-width: 520px) {
    .ctaDiv {
      transform: translate(-50%, -4rem);
      .cta,
      .altCta {
        font-weight: 500;
      }
    }

    #motionText1 {
      .scrollText {
        transform: translate(-8rem, 1rem);
      }
    }

    .scrollDownDiv {
      transform: rotate(90deg) translate(0, -4.8rem);
    }
  }

  @media (max-height: 620px) {
    #honeysuckle {
      transform: translate(-50%, -28%) scale(0.3);
      svg {
        path {
          stroke-width: 16 !important;
        }
      }
    }
    .ctaDiv {
      bottom: 8%;
    }
  }
`;

export default Hero;
