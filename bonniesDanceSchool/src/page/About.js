import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import portrait from "../images/photos/portrait.png";
import sticker from "../images/graphics/sticker.svg";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <ScAbout ref={ref}>
      {/* {inView && <div className="slider" />} */}
      <div className="bio">
        <h3>Welcome!</h3>
        <p>
          My name is Bonnie. My goal is not only to teach dance, but to also
          inspire my students! I want my dancers to know that they can
          accomplish anything that they put their minds to.
        </p>
      </div>
      <ul>
        <li>20+ years professional dancing</li>
        <li>10+ years of teaching experience</li>
        <li>200+ happy dancers</li>
        <li>Limitless passion for dance!</li>
      </ul>
      <div className="imgDiv">
        <img src={sticker} alt="" className="sticker" />
        <figure>
          <img src={portrait} alt="Bonnie Merrill smiling" />
          <figcaption>Bonnie Merrill | Dance Instructor</figcaption>
        </figure>
      </div>
    </ScAbout>
  );
};

const ScAbout = styled.section`
  > * {
    position: absolute;
  }
  /* .slider {
    left: 0;
    width: 100vw;
    height: 100vh;
    background: var(--pink);
    opacity: 0.7;
    animation: slider 1s ease 0.8s forwards;
  } */
  .bio {
    top: 28%;
    left: 16%;
    display: flex;
    flex-direction: column;
    width: 36rem;
    h3 {
      font-size: calc(1.2rem + 1.2vw);
      letter-spacing: 0.1rem;
      margin-bottom: 1rem;
    }
    p {
      font-size: calc(0.8rem + 0.4vw);
      letter-spacing: 0.03rem;
    }
  }
  ul {
    top: 50%;
    left: 16%;
    li {
      position: relative;
      font-family: "Quicksand", sans-serif;
      font-size: calc(0.8rem + 0.4vw);
      font-weight: 400;
      color: var(--dark);
      margin-bottom: 1.2rem;
      margin-left: 2rem;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-250%, -46%);
        padding: 0.3rem;
        border: 2px solid var(--pink);
        border-radius: 50%;
      }
    }
  }
  .imgDiv {
    top: 50%;
    right: 16%;
    transform: translate(0, -50%);
    .sticker {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(50%, -50%);
      animation: spin 24s linear infinite;
    }
    figure {
      img {
        margin-bottom: 0.6rem;
      }
      figcaption {
        letter-spacing: 0.1rem;
      }
    }
  }

  /* @keyframes slider {
    to {
      width: 10vw;
    }
  } */

  @keyframes spin {
    to {
      transform: translate(50%, -50%) rotate(-360deg);
    }
  }

  @media (max-width: 1440px) {
    .bio {
      top: 24%;
      left: 14%;
      width: 30rem;
    }
    ul {
      top: 54%;
      left: 14%;
      li {
        margin-bottom: 0.8rem;
      }
    }
    .imgDiv {
      right: 14%;
      transform: translate(0, -50%) scale(0.9);
      .sticker {
        transform: translate(50%, -50%) scale(0.9);
      }
    }
    @keyframes spin {
      to {
        transform: translate(50%, -50%) scale(0.9) rotate(-360deg);
      }
    }
  }

  @media (max-width: 1220px) {
    .bio {
      top: 24%;
      left: 12%;
      width: 23rem;
      p {
        font-size: calc(0.7rem + 0.4vw);
        letter-spacing: 0.02rem;
      }
    }
    ul {
      top: 52%;
      left: 12%;
      li {
        margin-bottom: 0.4rem;
      }
    }
    .imgDiv {
      top: 46%;
      right: 12%;
      transform: scale(0.8) translate(0, -50%);
      .sticker {
        transform: translate(50%, -50%) scale(0.8);
      }
    }
    @keyframes spin {
      to {
        transform: translate(50%, -50%) scale(0.8) rotate(-360deg);
      }
    }
  }

  @media (max-width: 980px) {
    .bio {
      top: 16%;
      left: 50%;
      transform: translate(-50%, 0);
      width: 72vw;
    }
    ul {
      width: 20rem;
      top: 46%;
      left: 14%;
      li {
        margin-bottom: 1.4rem;
      }
    }
    .imgDiv {
      top: 50%;
      right: 20%;
      transform: scale(0.6) translate(50%, -50%);
      .sticker {
        top: 45%;
        transform: translate(50%, -50%) scale(1);
      }
    }
    @keyframes spin {
      to {
        transform: translate(50%, -50%) scale(1) rotate(-360deg);
      }
    }
  }

  @media (max-width: 768px) {
    .bio {
      top: 12%;
    }
    ul {
      top: 76%;
      left: 50%;
      transform: translate(-50%, 0) scale(0.8);
      li {
        margin-bottom: 0.6rem;
      }
    }
    .imgDiv {
      top: 54%;
      right: 50%;
      transform: translate(50%, -50%) scale(0.6);
    }
  }
  @media (max-width: 480px) {
    .bio {
      top: 10%;
    }
    ul {
      transform: translate(-40%, 0) scale(0.9);
    }
  }
`;

export default About;
