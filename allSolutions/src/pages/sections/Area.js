import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation } from "framer-motion";
import {
  container,
  containerDelay,
  fadeGroup,
  fadeLocation,
} from "../../anim/animations";
import styled from "styled-components";

import slcMap from "../../images/photos/slcMap.png";

const Area = () => {
  const control = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    inView ? control.start("animate") : control.start("initial");
  }, [control, inView]);

  const win = window.innerWidth;

  const { language } = useSelector((store) => store.lang);

  return (
    <StyledArea ref={ref}>
      <motion.div
        className="textDiv"
        variants={win > 480 ? container : containerDelay}
        initial="initial"
        animate={control}
      >
        <motion.h2 variants={fadeGroup}>
          {language == "English" ? "Areas we operate" : "Change me, por favor"}
        </motion.h2>
        {inView && <div className="dash" />}
        <motion.h5 variants={fadeGroup}>
          {language == "English" ? "Salt Lake Valley" : "Salt Lake Valley"}
        </motion.h5>
        <motion.div
          className="citiesDiv"
          variants={containerDelay}
          initial="initial"
          animate={control}
        >
          <motion.ul variants={fadeLocation}>
            <li>Bluffdale</li>
            <li>Cottonwood</li>
            <li>Draper</li>
            <li>Kerns</li>
          </motion.ul>
          <motion.ul variants={fadeLocation}>
            <li>Riverton</li>
            <li>Salt Lake City</li>
            <li>West Jordan</li>
            <li>West Valley</li>
          </motion.ul>
        </motion.div>
        <motion.p variants={fadeGroup}>and many others...</motion.p>
      </motion.div>
      {inView && (
        <figure>
          <img src={slcMap} alt="Map of the Salt Lake Valley" loading="lazy" />
          <FontAwesomeIcon icon={faLocationDot} className="faIcon" />
          <FontAwesomeIcon icon={faLocationDot} className="faIcon" />
          <FontAwesomeIcon icon={faLocationDot} className="faIcon" />
          <FontAwesomeIcon icon={faLocationDot} className="faIcon" />
          <FontAwesomeIcon icon={faLocationDot} className="faIcon" />
        </figure>
      )}
    </StyledArea>
  );
};

const StyledArea = styled("section")`
  position: relative;
  height: 90vh;
  min-height: 38rem;
  overflow: hidden;
  .textDiv {
    position: absolute;
    top: 6%;
    left: 10%;
    h2 {
      font-size: calc(1.4rem + 2.4vw);
      margin-bottom: 0.2rem;
    }
    .dash {
      position: absolute;
      top: 18%;
      left: 20%;
      width: 0%;
      height: 8%;
      background: var(--col1);
      opacity: 0.4;
      z-index: -1;
      animation: showDash3 1s 1.6s ease forwards;
    }
    h5 {
      font-size: calc(0.8rem + 1vw);
      font-style: italic;
      line-height: 3.6vw;
      margin-bottom: 4rem;
    }
    .citiesDiv {
      display: flex;
      justify-content: space-between;
      width: 60%;
      transform: translate(12%, 0);
      ul {
        li {
          position: relative;
          font-size: calc(0.6rem + 0.6vw);
          &::before {
            content: "";
            position: absolute;
            top: 36%;
            left: -20%;
            padding: 2px;
            border: 2px solid var(--colDom);
            border-radius: 50%;
          }
        }
      }
    }
    p {
      font-size: calc(0.6rem + 0.6vw);
      font-style: italic;
      color: var(--colDom);
      margin: 1.6rem 0 0 1rem;
    }
  }
  figure {
    position: absolute;
    top: 34%;
    right: 26%;
    transform: translate(50%, -50%);
    border: 2px solid var(--colDom);
    width: 0vw;
    height: 0vw;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: circleGrow 2.2s 1s ease forwards;
    img {
      width: 100%;
      height: 100%;
      opacity: 0;
      animation: showMap 1.2s 2.2s ease forwards;
    }
    .faIcon {
      position: absolute;
      font-size: calc(1rem + 2vw);
      color: var(--colDom);
      transform: translate(0%, -100%);
      opacity: 0;
      animation: pinDrop 1s ease forwards;
      &:nth-of-type(1) {
        top: 16%;
        left: 58%;
        animation-delay: 3.2s;
      }
      &:nth-of-type(2) {
        top: 28%;
        left: 20%;
        animation-delay: 3.4s;
      }
      &:nth-of-type(3) {
        top: 50%;
        left: 44%;
        animation-delay: 3.6s;
      }
      &:nth-of-type(4) {
        top: 68%;
        left: 60%;
        animation-delay: 3.3s;
      }
      &:nth-of-type(5) {
        top: 80%;
        left: 28%;
        animation-delay: 3.5s;
      }
    }
  }

  @keyframes showDash3 {
    to {
      width: 32rem;
    }
  }
  @keyframes circleGrow {
    60% {
      width: 30vw;
      height: 30vw;
    }
    100% {
      width: 28vw;
      height: 28vw;
    }
  }
  @keyframes showMap {
    to {
      opacity: 1;
    }
  }
  @keyframes pinDrop {
    to {
      transform: translate(0%, 0%);
      opacity: 1;
    }
  }

  @media (max-width: 1440px) {
    height: 68vh;
    min-height: 30rem;
    .textDiv {
      .dash {
        top: 16%;
      }
    }
    figure {
      top: 44%;
    }
    @keyframes showDash3 {
      to {
        width: 28rem;
      }
    }
  }

  @media (max-width: 1080px) {
    .textDiv {
      .dash {
        left: 12%;
      }
    }
    @keyframes showDash3 {
      to {
        width: 22rem;
      }
    }
  }

  @media (max-width: 768px) {
    height: 86vh;
    min-height: 32rem;
    .textDiv {
      top: 0%;
      left: 6%;
      h2 {
        margin-bottom: 0rem;
      }
      h5 {
        margin-bottom: 2rem;
      }
      .citiesDiv {
        width: 74%;
      }
      p {
        margin: 0.6rem 0 0 1rem;
      }
    }
    figure {
      top: 62%;
      right: 50%;
    }
    @keyframes circleGrow {
      60% {
        width: 44vw;
        height: 44vw;
      }
      100% {
        width: 42vw;
        height: 42vw;
      }
    }
  }

  @media (max-width: 480px) {
    height: 64vh;
    min-height: 24rem;
    .textDiv {
      h2 {
        margin-bottom: 0.4rem;
      }
      .dash {
        height: 10%;
        top: 11%;
        left: 12%;
      }
      h5 {
        margin-bottom: 1.6rem;
      }
      .citiesDiv {
        transform: translate(6%, 0);
      }
      p {
        margin: 0.8rem 0 0 0;
      }
    }
    @keyframes showDash3 {
      to {
        width: 17rem;
      }
    }
    @keyframes circleGrow {
      60% {
        width: 62vw;
        height: 62vw;
      }
      100% {
        width: 60vw;
        height: 60vw;
      }
    }
  }
`;

export default Area;
