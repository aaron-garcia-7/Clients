import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import {
  vanFade,
  vanFadeAlt,
  container,
  containerDelay,
  fadeGroup,
} from "../../anim/animations";
import styled from "styled-components";

import vanImg from "../../images/photos/van.png";
import googleReview from "../../images/photos/googleReview.png";

const SubSection = () => {
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
    <StyledSubSection ref={ref}>
      <motion.div
        className="textBlock"
        variants={win > 480 ? container : containerDelay}
        initial="initial"
        animate={control}
      >
        <motion.p className="quote" variants={fadeGroup}>
          {language === "English"
            ? "All Solutions was prepared and ready"
            : "All Solutions estaba preparado y listo"}
          <br />{" "}
          {language === "English"
            ? "to help me with my urgent"
            : "para ayudarme con el cuidado urgente"}
          <br />
          {language === "English"
            ? "HVAC needs when I needed"
            : "de mi HVAC cuando mas lo"}{" "}
          <br /> {language === "English" ? "them most!" : "necesitaba!"}
        </motion.p>
        <motion.img
          src={googleReview}
          alt=""
          className="googleReview"
          variants={fadeGroup}
        />
      </motion.div>
      <motion.img
        src={vanImg}
        alt="Van with the All Solutions Logo"
        className="vanImg main"
        variants={vanFade}
        initial="initial"
        animate={control}
      />
      {inView && win <= 480 && (
        <motion.img
          src={vanImg}
          alt="Van with the All Solutions Logo"
          className="vanImg mobile"
          variants={win > 1440 || win <= 480 ? vanFade : vanFadeAlt}
          initial="initial"
          animate={control}
        />
      )}
    </StyledSubSection>
  );
};

const StyledSubSection = styled("section")`
  position: relative;
  height: 64vh;
  min-height: 38rem;
  overflow: hidden;
  .textBlock {
    position: absolute;
    top: 16%;
    left: 10%;
    .quote {
      position: relative;
      font-size: calc(0.8rem + 1.8vw);
      font-style: italic;
      line-height: 3.6vw;
      margin-bottom: 2rem;
      &::before {
        content: "“";
        position: absolute;
        left: -8%;
        top: 4%;
        color: var(--colDom);
        font-size: calc(1rem + 6vw);
      }
      &::after {
        content: "”";
        position: absolute;
        left: 32%;
        bottom: -6%;
        color: var(--colDom);
        font-size: calc(1rem + 6vw);
      }
    }
    .googleReview {
      width: 20vw;
      user-select: none;
      pointer-events: none;
    }
  }
  .vanImg {
    position: absolute;
    top: 10%;
    right: 0%;
    width: 50%;
  }

  @media (max-width: 1440px) {
    height: calc(6rem + 32vw);
    min-height: 12rem;
    .textBlock {
      .quote {
        line-height: 3rem;
      }
    }
    .vanImg {
      top: 20%;
      /* width: 50%; */
    }
  }

  @media (max-width: 768px) {
    height: 52vh;
    min-height: 20rem;
    .textBlock {
      top: 18%;
      left: 8%;
      .quote {
        font-size: calc(0.8rem + 1.2vw);
        line-height: 2rem;
      }
      .googleReview {
        width: 32vw;
        transform: translate(-50%, 0);
      }
    }
    .vanImg {
      top: 30%;
      /* width: 50%; */
    }
  }

  @media (max-width: 480px) {
    /* border: 1px solid black; */
    height: 44vh;
    min-height: 18rem;
    .textBlock {
      top: 12%;
      left: 16%;
      .quote {
        font-size: calc(0.8rem + 1.2vw);
        line-height: 2rem;
      }
      .googleReview {
        position: absolute;
        bottom: -56%;
        left: -4%;
        /* border: 1px solid black; */
        width: 50vw;
      }
    }
    .vanImg {
      top: 4%;
      width: 86%;
      animation: fadeOut 1s 1.6s ease forwards;
    }
    .main {
      display: none;
    }
  }

  @keyframes fadeOut {
    to {
      opacity: 0.1;
    }
  }
`;

export default SubSection;
