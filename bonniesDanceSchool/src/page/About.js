import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import AboutImg from "../components/AboutImg";

function About() {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <ScAbout ref={ref}>
      {inView && <AboutImg />}
      <article className="aboutTextArea">
        <header>
          <h3 className="sectionTitle">About Me</h3>
        </header>
        <p>
          <strong>Hi! My name is Bonnie.</strong> I’m a dance enthusiast seeking
          to help my dancers experience physical, intellectual, and emotional
          growth through the power of dance.
        </p>
        <ul>
          <li>30+ years of dancing experience</li>
          <li>14+ years of teaching experience</li>
          <li>1,000+ happy dancers</li>
          <li>Limitless passion for dance!</li>
        </ul>
      </article>
    </ScAbout>
  );
}

const ScAbout = styled("section")`
  > * {
    position: absolute;
  }
  .aboutTextArea {
    /* border: 1px dashed grey; */
    right: 14%;
    width: 33%;
    height: 45%;
    min-height: 22rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3 {
      // See Global Styles
    }
    p {
      font-size: calc(0.6rem + 0.8vw);
      letter-spacing: 0.08rem;
      strong {
        font-size: calc(0.8rem + 1.2vw);
        font-weight: 100;
      }
    }
    ul {
      list-style: none;
      margin-left: 1.6rem;
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
`;

export default About;
