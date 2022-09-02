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
            href="https://honeysucklestudios.square.site/"
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
      <MotionText width={width} second={false}>
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
    bottom: 12%;
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
    /* border: 1px dashed white; */
    position: absolute;
    bottom: 24%;
    right: 1rem;
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

  #leftText {
    top: 40%;
    left: 0;
    height: 20%;
    transform: rotate(-90deg);
  }
  #rightText {
    top: 40%;
    right: 0;
    height: 20%;
    transform: rotate(90deg);
  }

  @media (max-width: 1440px) {
    #honeysuckle {
      transform: translate(-50%, -20%) scale(0.4);
    }

    .scrollDownDiv {
      .scrollDown {
        font-size: 1.2rem;
      }
    }

    #leftText {
      left: -5%;
    }
    #rightText {
      right: -5%;
    }
  }

  @media (max-width: 1220px) {
    .scrollDownDiv {
      transform: rotate(90deg) translate(1rem, -4rem);
      .scrollDown {
        font-size: 0.8rem;
      }
    }

    #leftText {
      left: -12%;
    }
    #rightText {
      right: -12%;
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

    #leftText {
      top: 22%;
      left: 0;
      transform: rotate(0deg);
      height: 2rem;
      width: 100vw;
      .scrollText {
        transform: translate(12rem, 1rem);
      }
    }
    #rightText {
      top: 26%;
      right: 0;
      transform: rotate(0deg);
      height: 2rem;
      width: 100vw;
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

    #leftText {
      .scrollText {
        transform: translate(0rem, 1rem);
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
      bottom: 4%;
      /* bottom: 0%; */ //check bailey's laptop
    }
  }
`;

export default Hero;
