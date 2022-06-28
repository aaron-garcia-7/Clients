import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link, Element } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { containerQuick, fade, arrowRise } from "../../anim/animations";
import styled from "styled-components";

import Map from "../../components/Map";

import locationsData from "../../data/locationsData";

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

  const locations = locationsData.map((obj) => (
    <Map key={obj.id} url={obj.url} name={obj.name} />
  ));

  return (
    <StyledLocations ref={ref} id="locations">
      <Element name="locations" />
      <motion.div
        className="header"
        variants={containerQuick}
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
      {inView && <div className="locationMaps">{locations}</div>}
      <motion.div
        className="continueDownDiv"
        variants={arrowRise}
        ref={ref}
        initial="initial"
        animate={control}
      >
        <Link
          to="testimonials"
          smooth={true}
          duration={1400}
          delay={50}
          offset={window.innerWidth > 480 ? 0 : 40}
          className="continue"
        >
          Continue
          <img src={arrow} alt="" className="arrow" />
        </Link>
      </motion.div>
      {inView && <img src={woodBg} alt="" className="background" />}
    </StyledLocations>
  );
};

const StyledLocations = styled("section")`
  overflow: hidden;
  .locationMaps {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80vw;
    height: 56%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 3;
  }
  .background {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0rem;
    height: 0rem;
    transform: translate(-50%, -50%);
    opacity: 0;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    animation: backgroundExpand 1.2s 0.6s ease forwards;
  }
  @keyframes backgroundExpand {
    to {
      opacity: 1;
      width: 134rem;
      height: 134rem;
    }
  }
  @media screen and (max-width: 1440px) {
    @keyframes backgroundExpand {
      to {
        opacity: 1;
        width: 108rem;
        height: 108rem;
      }
    }
  }
  @media screen and (max-width: 1060px) {
    @keyframes backgroundExpand {
      to {
        opacity: 1;
        width: 96rem;
        height: 96rem;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .locationMaps {
      flex-direction: column;
      align-items: flex-start;
    }
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
