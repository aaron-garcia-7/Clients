import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import AboutImg from "../components/AboutImg";

function About({ pageWidth, navOpen }) {
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
    transform: `translate(0, ${offset * 0.1}px)`,
  };
  // End Parallax

  const menuStyleHeader = {
    transform: pageWidth > 768 ? "translateY(120%)" : "translateY(80%)",
    opacity: 0,
    transition: "0.8s ease 0.2s",
  };
  const menuStyleParagraph = {
    transform: pageWidth > 768 ? "translateY(80%)" : "translateY(40%)",
    opacity: 0,
    transition: "0.8s ease 0.1s",
  };
  const menuStyleList = {
    transform: pageWidth > 768 ? "translateY(80%)" : "translateY(40%)",
    opacity: 0,
    transition: "0.8s ease",
  };

  return (
    <ScAbout ref={ref} id="about">
      {inView && <AboutImg pageWidth={pageWidth} navOpen={navOpen} />}
      <article className="aboutTextArea">
        <header style={navOpen ? menuStyleHeader : null}>
          <h3 className="sectionTitle">About Me</h3>
        </header>
        <p style={navOpen ? menuStyleParagraph : null}>
          <strong>Hi! My name is Bonnie.</strong> I’m a dance enthusiast seeking
          to help my dancers experience physical, intellectual, and emotional
          growth through the power of dance.
        </p>
        <ul style={navOpen ? menuStyleList : null}>
          <li>30+ years of dancing experience</li>
          <li>14+ years of teaching experience</li>
          <li>1,000+ happy dancers</li>
          <li>Limitless passion for dance!</li>
        </ul>
      </article>
      {pageWidth <= 768 && (
        <div className="bubbleAboutMobile" style={parallaxStyle} />
      )}
    </ScAbout>
  );
}

const ScAbout = styled("section")`
  /* border: 2px solid blue; */
  height: 60vh;
  min-height: 30rem;
  > * {
    position: absolute;
  }
  .aboutTextArea {
    right: 14%;
    width: 33%;
    height: 46%;
    min-height: 24rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    header {
      transition: 1.4s ease 0.5s;
      h3 {
        // See Global Styles
        font-size: calc(1rem + 2vw);
      }
    }
    p {
      font-size: calc(0.6rem + 0.8vw);
      letter-spacing: 0.08rem;
      transition: transform 1.4s ease 0.6s, opacity 1s ease 0.6s;
      strong {
        font-size: calc(0.8rem + 1.2vw);
        font-weight: 100;
      }
    }
    ul {
      margin-left: 1.6rem;
      transition: 1.4s ease 0.7s;
      li {
        position: relative;
        font-family: var(--modern);
        font-size: calc(0.7rem + 0.2vw);
        letter-spacing: 0.06rem;
        margin-top: 0.8rem;
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          transform: translate(-200%, -50%);
          width: 0.5rem;
          height: 0.5rem;
          border: 2px solid var(--tan);
          border-radius: 50%;
        }
      }
    }
  }

  @media (max-width: 1224px) {
    .aboutTextArea {
      right: 12%;
      width: 38%;
      height: 40%;
      min-height: 22rem;
    }
  }

  @media (max-width: 1024px) {
    .aboutTextArea {
      width: 38%;
      min-height: 20rem;
    }
  }

  @media (max-width: 768px) {
    height: 140vh;
    min-height: 52rem;
    .aboutTextArea {
      right: 22%;
      width: 60%;
      min-height: 20rem;
    }

    .bubbleAboutMobile {
      top: -34%;
      right: 0;
      width: 28vw;
      height: 28vw;
      background: var(--taupe);
      opacity: 0.4;
      border-radius: 50%;
    }
  }

  @media (max-width: 520px) {
    height: 100vh;
    min-height: 44rem;
    .aboutTextArea {
      width: 64%;
      right: 20%;
    }
    .bubbleAboutMobile {
      top: -28%;
    }
  }
`;

export default About;
