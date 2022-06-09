import { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import {
  containerDelay,
  fade,
  btnFade,
  arrowRise,
} from "../../anim/animations";
import { useInView } from "react-intersection-observer";

import LocationCard from "../../components/LocationCard";

import locationImg2 from "../../images/photos/locationImg2.png";
import locationImg1 from "../../images/photos/locationImg1.png";
import woodBg from "../../images/photos/woodBg.png";
import arrow from "../../images/graphics/arrow.svg";

const SecLocations = () => {
  // Scroll Animations
  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  useEffect(() => {
    inView ? control.start("animate") : control.start("initial");
  }, [control, inView]);
  // Scroll Animation for Continue Down
  const control2 = useAnimation();
  const [ref2, inView2] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  useEffect(() => {
    inView2 ? control2.start("animate") : control2.start("initial");
  }, [control2, inView2]);
  return (
    <StyledLocations ref={ref} id="locations">
      <motion.div
        className="header"
        variants={containerDelay}
        initial="initial"
        animate={control}
      >
        <motion.h6 className="preHeader" variants={fade}>
          Locations . . .
        </motion.h6>
        <motion.h3 className="secHeader" variants={fade}>
          Two Locations in the <br className="headerBreak" />
          Salt Lake Valley
        </motion.h3>
      </motion.div>
      <div className="locationCards">
        {inView && (
          <LocationCard imgSrc={locationImg1} title={"Cottonwood Heights"} />
        )}
        {inView && <LocationCard imgSrc={locationImg2} title={"West Jordan"} />}
      </div>
      <motion.button
        className="mainBtn centeredBtn"
        variants={btnFade}
        initial="initial"
        animate={control}
      >
        See Details
      </motion.button>
      <motion.a
        className="continue"
        href="#testimonials"
        variants={arrowRise}
        ref={ref2}
        initial="initial"
        animate={control2}
      >
        Continue
        <img src={arrow} alt="" className="arrow" />
      </motion.a>
      {inView && <img src={woodBg} alt="" className="background" />}
    </StyledLocations>
  );
};

const StyledLocations = styled("section")`
  overflow: hidden;
  .locationCards {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 3;
  }
  .background {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    animation: backgroundExpand 1.2s 0.6s ease forwards;
  }
  @keyframes backgroundExpand {
    from {
      width: 0rem;
      height: 0rem;
    }
    to {
      opacity: 1;
      width: 134rem;
      height: 134rem;
    }
  }
  @media screen and (max-width: 1440px) {
    @keyframes backgroundExpand {
      from {
        width: 0rem;
        height: 0rem;
      }
      to {
        opacity: 1;
        width: 108rem;
        height: 108rem;
      }
    }
  }
  @media screen and (max-width: 1060px) {
    @keyframes backgroundExpand {
      from {
        width: 0rem;
        height: 0rem;
      }
      to {
        opacity: 1;
        width: 96rem;
        height: 96rem;
      }
    }
  }
  @media screen and (max-width: 768px) {
    @keyframes backgroundExpand {
      from {
        width: 0rem;
        height: 0rem;
      }
      to {
        opacity: 1;
        width: 84rem;
        height: 84rem;
      }
    }
  }
  @media screen and (max-width: 480px) {
    .header {
      top: 6%;
    }
    .locationCards {
      flex-direction: column;
      align-items: center;
    }
    @keyframes backgroundExpand {
      from {
        width: 0rem;
        height: 0rem;
      }
      to {
        opacity: 1;
        width: 54rem;
        height: 54rem;
      }
    }
  }
`;

export default SecLocations;
