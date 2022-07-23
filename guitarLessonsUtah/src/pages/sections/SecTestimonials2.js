import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link, Element } from "react-scroll";
import { containerQuick, fade, arrowRise } from "../../anim/animations";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

// Carousel Feature using Swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

import TestimonialCard2 from "../../components/TestimonialCard2";

import testimonialsData from "../../data/testimonialsData";

import arrow from "../../images/graphics/arrow.svg";

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
      <TestimonialCard2
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
      <motion.div
        className="header"
        variants={containerQuick}
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
        initialSlide={1}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        speed={2000}
        loading="lazy"
      >
        {inView && testimonialCards}
      </Swiper>
      {/* {inView && <ViewMore />} */}
      <motion.div
        className="continueDownDiv"
        variants={arrowRise}
        ref={ref}
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
