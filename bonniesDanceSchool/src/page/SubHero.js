import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

import cardData from "../data/cardData";
import Cards from "../components/Cards";
import Poly from "../components/Poly";

const SubHero = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const cards = cardData.map((obj, index) => (
    <Cards key={index} title={obj.title} img={obj.img} />
  ));

  return (
    <ScSubHero ref={ref} name="subHero">
      {inView && <Poly />}
      <h3 className="title">
        A timeless art to strengthen your <br /> body, mind, and spirit
      </h3>
      <div className="cards">{cards}</div>
    </ScSubHero>
  );
};

const ScSubHero = styled.section`
  border-top: var(--border);
  border-bottom: var(--border);
  background: var(--tan);
  height: 36rem;
  min-height: 36rem;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 10rem;
  .title {
    font-size: calc(0.8rem + 0.6vw);
    font-weight: 400;
    letter-spacing: 0.1rem;
    text-align: center;
    margin-bottom: 4rem;
  }

  .cards {
    /* border: 2px solid green; */
    width: 60%;
    display: flex;
    justify-content: space-evenly;
  }

  @media (max-width: 1220px) {
    .cards {
      width: 80%;
    }
  }

  @media (max-width: 768px) {
    .cards {
      width: 86%;
    }
  }

  @media (max-width: 580px) {
    .title {
      margin-bottom: 2rem;
    }
    .cards {
      width: 60%;
    }
  }
`;

export default SubHero;
