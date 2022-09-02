import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { containerCards } from "../anim/animations";
import { Element } from "react-scroll";
import styled from "styled-components";

import lashDetails from "../data/lashDetails";
import LashCard from "../components/LashCard";
import Branch1 from "../components/svg/Branch1";
import PageNum from "../components/PageNum";

const Services = ({ width }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const control = useAnimation();

  useEffect(() => {
    inView ? control.start("animate") : control.start("initial");
  }, [control, inView]);

  const lashCards = lashDetails.map((obj) => (
    <LashCard
      id={obj.id}
      type={obj.type}
      img={obj.img}
      full={obj.full}
      fill={obj.fill}
      width={width}
    />
  ));

  return (
    <ScServices ref={ref}>
      <Element name="servicesSection" />
      {inView && (
        <div className="secTitle">
          <Branch1 giveId={true} />
          <h4 className="title">services</h4>
        </div>
      )}
      <motion.div
        className="cardsDiv"
        variants={containerCards}
        initial="initial"
        animate={control}
      >
        {lashCards}
      </motion.div>
      <PageNum number={2} alt={true} />
    </ScServices>
  );
};

const ScServices = styled("section")`
  background: var(--mid);

  .secTitle {
    /* border: 1px solid black; */
    position: absolute;
    top: 3.2rem;
    left: 12%;
    display: flex;
    justify-content: center;
    align-items: center;
    #branch1 {
      svg {
        /* width: 3.2rem; */
        width: calc(2rem + 1vw);
      }
    }
    .title {
      font-family: "Cormorant Garamond", serif;
      font-size: calc(1.2rem + 0.6vw);
      font-style: italic;
      letter-spacing: 0.1rem;
      opacity: 0;
      animation: fadeIn 1.2s ease forwards;
    }
  }

  .cardsDiv {
    /* border: 1px dashed grey; */
    width: 68vw;
    inset: all;
    margin: auto;
    transform: translate(0, 10%);
    display: flex;
    justify-content: space-evenly;
  }

  @media (max-width: 1220px) {
    .secTitle {
      /* top: 4rem; */
      left: 3.2rem;
    }

    .cardsDiv {
      width: 80vw;
    }
  }

  @media (max-width: 768px) {
    .secTitle {
      /* top: 4rem; */
      left: 3.2rem;
      .title {
        letter-spacing: 0.04rem;
      }
    }
    .cardsDiv {
      height: 40vh;
      flex-direction: column;
    }
  }

  @media (max-width: 520px) {
    .cardsDiv {
      height: 58vh;
      transform: translate(-6%, 4%);
    }
  }
  @media (max-width: 480px) {
    .cardsDiv {
      height: 46vh;
      /* transform: translate(-6%, 4%); */
    }
  }
`;

export default Services;
