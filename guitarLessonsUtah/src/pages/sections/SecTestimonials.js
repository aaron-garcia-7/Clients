import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { Link, Element } from "react-scroll";
import {
  containerQuick,
  fade,
  arrowRise,
  semiFade,
} from "../../anim/animations";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

// Carousel Feature using Swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

import TestimonialCard from "../../components/TestimonialCard";

import testimonialsData from "../../data/testimonialsData";

import arrow from "../../images/graphics/arrow.svg";
import tanPickLine from "../../images/graphics/tanPickLine.svg";

const SecTestimonials = () => {
  // Scroll Animations
  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  useEffect(() => {
    inView ? control.start("animate") : control.start("initial");
  }, [control, inView]);

  // Creating each card for the carousel
  const testimonialCards = testimonialsData.map((obj) => (
    <SwiperSlide key={obj.id}>
      <TestimonialCard
        quote={obj.quote}
        name={obj.name}
        title={obj.title}
        img={obj.img}
        dark={obj.dark}
      />
    </SwiperSlide>
  ));

  return (
    <StyledTestimonials id="testimonials" ref={ref}>
      <Element name="testimonials" />
      {inView && <img src={tanPickLine} alt="" className="tanPickLine" />}
      <motion.div
        className="header"
        variants={containerQuick}
        initial="initial"
        animate={control}
      >
        <motion.h6 className="preHeader" variants={semiFade}>
          Testimonials
        </motion.h6>
        <motion.h3 className="secHeader" variants={fade}>
          Hear what others <br className="headerBreak" />
          have to say!
        </motion.h3>
      </motion.div>
      <Swiper
        className="swiperTool"
        modules={[A11y, Autoplay]}
        spaceBetween={window.innerWidth > 1440 ? 50 : 26}
        slidesPerView={3}
        initialSlide={1}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        speed={2000}
        loading="lazy"
      >
        {inView && testimonialCards}
      </Swiper>
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
          to="contact"
          smooth={true}
          duration={1400}
          delay={50}
          className="continue"
        >
          Continue
          <img src={arrow} alt="" className="arrow" />
        </Link>
      </motion.div>
    </StyledTestimonials>
  );
};

const StyledTestimonials = styled("section")`
  min-height: 42rem;
  .swiperTool {
    position: absolute;
    top: 44%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    min-width: 74rem;
    height: 40vh;
    min-height: 16rem;
    padding: 6px 0;
  }
  .viewAllAnim {
    position: absolute;
    bottom: 26%;
    right: 50%;
    transform: translate(54%, 0);
    width: 100%;
    opacity: 0;
    animation: show 1.2s 2.2s ease forwards;
  }
  .tanPickLine {
    position: absolute;
    bottom: 12%;
    left: 2%;
    width: calc(2rem + 3.2vw);
    opacity: 0;
    transform: translate(0, 100%) scale(0.4);
    animation: pickAppear 3.2s 3.2s ease forwards;
  }

  @keyframes show {
    to {
      opacity: 1;
      transform: translate(50%, 0);
    }
  }

  @media screen and (max-width: 1248px) {
    overflow-x: hidden;
  }
  @media screen and (max-width: 480px) {
    .swiperTool {
      min-width: 56rem;
    }
    .viewAllAnim {
      bottom: 28%;
      transform: translate(64%, 0);
    }
    .tanPickLine {
      top: 15%;
      left: 54%;
    }
  }
`;

export default SecTestimonials;
