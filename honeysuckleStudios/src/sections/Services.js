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
import MotionText from "../components/MotionText";

const Services = ({ width }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const control = useAnimation();

  useEffect(() => {
    inView ? control.start("animate") : control.start("initial");
  }, [control, inView]);

  const lashCards = lashDetails.map((obj, index) => (
    <LashCard
      key={index}
      id={obj.id}
      type={obj.type}
      img={obj.img}
      full={obj.full}
      fill={obj.fill}
      width={width}
      inView={inView}
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
      <MotionText width={width} third={true}>
        confident &amp; beautiful
      </MotionText>
      <MotionText width={width} fourth={true}>
        radiant &amp; elegant
      </MotionText>
      <PageNum number={2} alt={true} />
    </ScServices>
  );
};

const ScServices = styled("section")`
  background: var(--mid);
  .secTitle {
    // See Global Styles
  }
  .cardsDiv {
    width: 68vw;
    inset: all;
    margin: auto;
    transform: translate(0, 10%);
    display: flex;
    justify-content: space-evenly;
  }

  #motionText3,
  #motionText4 {
    width: 100vw;
    height: 10rem;
    left: 50%;
    transform: translate(-50%, 0);
    .scrollText {
      font-size: calc(2.8rem + 2.8vw);
      letter-spacing: 3.2rem;
      transform: translate(0, 5rem);
    }
  }
  #motionText3 {
    top: 16%;
  }
  #motionText4 {
    top: auto;
    bottom: 8%;
  }

  @media (max-width: 1440px) {
    #motionText3,
    #motionText4 {
      height: 4rem;
      .scrollText {
        font-size: calc(1.6rem + 1.6vw);
        letter-spacing: 3.2rem;
        transform: translate(0, 2rem);
      }
    }

    #motionText3 {
      top: 22%;
    }
    #motionText4 {
      bottom: 14%;
    }
  }

  @media (max-width: 1220px) {
    .cardsDiv {
      width: 80vw;
    }
  }

  @media (max-width: 768px) {
    .cardsDiv {
      height: 40vh;
      flex-direction: column;
    }

    #motionText3,
    #motionText4 {
      .scroller {
        .scrollText {
          font-size: calc(1rem + 1vw);
          letter-spacing: 1rem;
          opacity: 1;
        }
      }
    }
    #motionText3 {
      top: 18%;
    }
    #motionText4 {
      bottom: 10%;
    }
  }

  @media (max-width: 520px) {
    .cardsDiv {
      height: 58vh;
      transform: translate(-6%, 4%);
    }
    #motionText4 {
      bottom: 14%;
    }
  }

  @media (max-width: 480px) {
    .cardsDiv {
      height: 46vh;
    }
    #motionText3 {
      top: 20%;
    }
    #motionText4 {
      bottom: 14%;
    }
  }
`;

export default Services;
