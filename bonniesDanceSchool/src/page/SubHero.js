import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import Poly from "../components/Poly";
import HeroImg from "../components/HeroImg"; // Moved to SubHero when in mobile view

function SubHero({ pageWidth }) {
  const [ref, inView] = useInView({
    // threshold: 0.4,
    threshold: pageWidth <= 1224 ? 0.1 : 0.4,
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.1,
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

  return (
    <ScSubHero ref={ref} id="subHero">
      {inView && <Poly />}
      <header className="subHeroTitle">
        <h3 className="sectionTitle">
          Our Vision, {pageWidth > 1224 && <br />} Goals, &amp;{" "}
          {pageWidth > 1224 && <br />} Commitment
        </h3>
      </header>
      <article ref={ref2}>
        <p>
          Bonnie's Dance School is commited to providing dancers and their
          families a positive environment where dancers will receive a
          comprehensive dance education to <span>inspire excellence</span>.
        </p>
        <p>
          We have a strong desire to instill a passion and an enthusiasm in our
          dancers to help them excel and be a positive influence in the world
          around them.
        </p>
      </article>
      <article>
        <p>
          Our goal, as teachers, is to not only teach dance, but to also inspire
          our students. We love to tell our dancers that we can do hard things,
          to not only improve their dance technique, but to also develop
          personal dedication that spills over into all aspects of their lives.
          We want our dancers to learn they can <span>accomplish anything</span>{" "}
          they put their minds to.
        </p>
      </article>
      <div className="bubbleSubHero" style={parallaxStyle} />
      {pageWidth <= 768 && inView2 && <HeroImg pageWidth={pageWidth} />}
    </ScSubHero>
  );
}

const ScSubHero = styled("section")`
  height: 60vh;
  min-height: 40rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12vw;
  > * {
    width: 24%;
  }
  .subHeroTitle {
    height: 36%;
    h3 {
      // See Global Styles
      font-size: calc(0.8rem + 1.8vw);
    }
  }
  article {
    padding-top: 1rem;
    height: 36%;
    p {
      font-family: var(--modern);
      font-size: calc(0.7rem + 0.2vw);
      letter-spacing: 0.06rem;
      span {
        font-weight: 700;
      }
    }
    &:nth-of-type(1) {
      p {
        &:nth-of-type(1) {
          margin-bottom: 1rem;
        }
      }
    }
  }
  .bubbleSubHero {
    position: absolute;
    top: 26%;
    right: 26%;
    width: 8vw;
    height: 8vw;
    border-radius: 50%;
    background: var(--taupe);
    opacity: 0.3;
    z-index: -1;
  }

  @media (max-width: 1440px) {
    > * {
      width: 26%;
    }
    .subHeroTitle {
      transform: translate(0, -10%);
      h3 {
        line-height: 180%;
      }
    }
    article {
      padding-top: 0;
    }
    .bubbleSubHero {
      top: 28%;
      right: 30%;
    }
  }

  @media (max-width: 1224px) {
    height: 80vh;
    min-height: 36rem;
    padding: 8rem 12vw 0 12vw;
    justify-content: flex-start;

    > * {
      width: 40%;
    }

    #polySubHero {
      transform: translate(-50%, -32%) scale(1);
    }

    .subHeroTitle {
      position: absolute;
      top: 28%;
      width: 80%;
      height: 10%;
      h3 {
        // See Global Styles
        font-size: calc(0.8rem + 1.8vw);
      }
    }

    article {
      &:nth-of-type(1) {
        margin-right: 8vw;
      }
    }

    .bubbleSubHero {
      top: 24%;
      right: 10%;
      width: 24vw;
      height: 24vw;
    }
  }

  @media (max-width: 768px) {
    height: 180vh;
    min-height: 80rem;
    flex-direction: column;
    justify-content: space-between;
    overflow-x: hidden;
    > * {
      position: absolute;
    }
    .subHeroTitle {
      top: 16%;
      left: 18%;
      width: 14rem;
      height: 20%;
    }
    article {
      width: 50%;
      height: 20%;
      left: 18%;
      &:nth-of-type(1) {
        top: 30%;
        margin-right: 0;
      }
      &:nth-of-type(2) {
        top: 78%;
        margin-right: 0;
      }
    }

    .bubbleSubHero {
      top: 2%;
      right: -10%;
      width: 48vw;
      height: 48vw;
    }
  }

  @media (max-width: 520px) {
    height: 160vh;
    min-height: 68rem;
    article {
      width: 58%;
    }
    .bubbleSubHero {
      width: 42vw;
      height: 42vw;
    }
  }

  @media (max-width: 480px) {
    height: 140vh;
    article {
      width: 68%;
    }
  }
`;

export default SubHero;
