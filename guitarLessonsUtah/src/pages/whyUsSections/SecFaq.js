import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { Link, Element } from "react-scroll";
import { containerQuick, fade, arrowRise } from "../../anim/animations";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

import { faqCardData } from "../../data/faqData";

import woodBg2 from "../../images/photos/woodBg2.png";
import arrow from "../../images/graphics/arrow.svg";
import FaqCard from "../../components/FaqCards";

const SecFaq = () => {
  // Scroll Animations
  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  useEffect(() => {
    inView ? control.start("animate") : control.start("initial");
  }, [control, inView]);

  const faqCards = faqCardData.map((obj) => (
    <FaqCard title={obj.title} img={obj.img} smallImg={obj.smallImg} />
  ));

  return (
    <StyledSecFaq ref={ref}>
      <Element name="faq" />
      <motion.div
        className="header"
        variants={containerQuick}
        initial="initial"
        animate={control}
      >
        <motion.h6 className="preHeader" variants={fade}>
          Common Questions
        </motion.h6>
        <motion.h3 className="secHeader" variants={fade}>
          Frequently Asked Questions (FAQ)
        </motion.h3>
      </motion.div>
      {inView && <div className="faqCards">{faqCards}</div>}
      {inView && (
        <motion.div className="viewAllAnim">
          <NavLink
            to="./WhyUs/Testimonials"
            className="mainNavLink centeredBtn"
          >
            View all
          </NavLink>
        </motion.div>
      )}
      <motion.div
        className="continueDownDiv"
        variants={arrowRise}
        initial="initial"
        animate={control}
      >
        <Link
          to="testimonials"
          smooth={true}
          duration={1400}
          delay={50}
          className="continue"
        >
          Continue
          <img src={arrow} alt="" className="arrow" />
        </Link>
      </motion.div>
      {inView && <img src={woodBg2} alt="" className="background" />}
    </StyledSecFaq>
  );
};

const StyledSecFaq = styled("section")`
  overflow: hidden;
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
    animation: backgroundExpand 1.6s 0.2s ease forwards;
    z-index: -1;
  }
  .faqCards {
    /* border: 1px solid black; */
    position: absolute;
    top: 46%;
    right: 50%;
    transform: translate(50%, -50%);
    width: 80vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .viewAllAnim {
    position: absolute;
    bottom: 20%;
    right: 50%;
    transform: translate(54%, 0);
    width: 100%;
    opacity: 0;
    animation: show 1.2s 2.2s ease forwards;
  }

  @keyframes backgroundExpand {
    to {
      opacity: 1;
      width: 120vw;
      height: 120vw;
    }
  }
  @keyframes show {
    to {
      opacity: 1;
      transform: translate(50%, 0);
    }
  }

  @media screen and (max-width: 1440px) {
    .faqCards {
      width: 85vw;
    }
    .viewAllAnim {
      bottom: 18%;
    }
  }
  @media screen and (max-width: 1060px) {
    /* .faqCards {
      background: blue;
    } */
    @keyframes backgroundExpand {
      to {
        opacity: 1;
        width: 140vw;
        height: 140vw;
      }
    }
  }
  @media screen and (max-width: 768px) {
    @keyframes backgroundExpand {
      to {
        opacity: 1;
        width: 180vw;
        height: 180vw;
      }
    }
  }
  @media screen and (max-width: 480px) {
    .header {
      top: 8%;
      width: 64vw;
    }
    .viewAllAnim {
      bottom: 24%;
      transform: translate(64%, 0);
    }
    @keyframes backgroundExpand {
      to {
        opacity: 1;
        width: 240vw;
        height: 240vw;
      }
    }
  }
`;

export default SecFaq;
