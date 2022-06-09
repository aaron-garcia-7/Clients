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

// Carousel Feature using Swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

import testimonialsData from "../../data/testimonialsData";
import TestimonialCard from "../../components/TestimonialCard";
import arrow from "../../images/graphics/arrow.svg";

const SecTestimonials = () => {
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
    <StyledTestimonials id="testimonials">
      <motion.div
        className="header"
        ref={ref}
        variants={containerDelay}
        initial="initial"
        animate={control}
      >
        <motion.h6 className="preHeader" variants={fade}>
          Testimonials . . .
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
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={2000}
      >
        {inView && testimonialCards}
      </Swiper>
      <motion.button
        className="mainBtn centeredBtn"
        variants={btnFade}
        initial="initial"
        animate={control}
      >
        View All
      </motion.button>
      <motion.a
        className="continue"
        href="#contact"
        variants={arrowRise}
        ref={ref2}
        initial="initial"
        animate={control2}
      >
        Continue
        <img src={arrow} alt="" className="arrow" />
      </motion.a>
    </StyledTestimonials>
  );
};

const StyledTestimonials = styled("section")`
  min-height: 42rem;
  .swiperTool {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    min-width: 74rem;
    height: 50vh;
    min-height: 24rem;
    padding: 6px 0;
  }
  @media screen and (max-width: 1248px) {
    overflow-x: hidden;
  }
  @media screen and (max-width: 480px) {
    .swiperTool {
      min-width: 56rem;
    }
  }
`;

export default SecTestimonials;
