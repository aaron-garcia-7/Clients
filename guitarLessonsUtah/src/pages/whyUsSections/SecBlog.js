import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { Link, Element } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { container, fade, semiFade, arrowRise } from "../../anim/animations";
import styled from "styled-components";

import ampLine from "../../images/graphics/ampLine.svg";
import blackPickFill from "../../images/graphics/blackPickFill.svg";
import arrow from "../../images/graphics/arrow.svg";

// Carousel Feature using Swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import blogData from "../../data/blogData";
import BlogCard from "../../components/BlogCard";

const SecBlog = () => {
  // Parallax Effect
  const [offSetY, setOffSetY] = useState(0);
  const handleScroll = () => {
    setOffSetY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll Animations
  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  useEffect(() => {
    inView ? control.start("animate") : control.start("initial");
  }, [control, inView]);

  // Creating each blog journal card for the carousel
  const blogCards = blogData.map((obj) => (
    <SwiperSlide key={obj.id}>
      <BlogCard
        subTitle={obj.subTitle}
        title={obj.title}
        text1={obj.text1}
        text2={obj.text2}
      />
    </SwiperSlide>
  ));

  return (
    <StyledSecBlog ref={ref}>
      <Element name="blog" className="scrollElement" />
      {inView && <img src={ampLine} alt="" className="ampLineSvg" />}
      {inView && <div className="halfShade" />}
      {inView && (
        <Swiper
          className="swiperTool"
          modules={[A11y, Autoplay, Navigation]}
          navigation={true}
          spaceBetween={window.innerWidth > 1440 ? 50 : 24}
          slidesPerView={1}
          initialSlide={4}
          loop={true}
          centeredSlides={true}
          autoplay={{ delay: 12000, disableOnInteraction: false }}
          speed={800}
          loading="lazy"
        >
          {blogCards}
        </Swiper>
      )}
      <motion.div
        className="textArea"
        variants={container}
        initial="initial"
        animate={control}
      >
        <motion.h6 className="preHeader" variants={semiFade}>
          Blog
        </motion.h6>
        <motion.h3 className="secHeader" variants={fade}>
          Guitar tips and
          <br /> event details
        </motion.h3>
        <motion.p className="secBody" variants={fade}>
          If you're looking to further your knowledge base on all things guitar,
          review the blog material. Here, you can stay up to date on best
          practices and events that you can attend.
        </motion.p>
        <motion.p className="secBody hide" variants={fade}>
          Review the journal entries and event posting for more info.
        </motion.p>
        <motion.div variants={fade} className="navLinkBtn">
          <NavLink to="/WhyUs/Blog" className="mainNavLink">
            View all
          </NavLink>
        </motion.div>
      </motion.div>
      <motion.div
        className="continueDownDiv continueDownDiv2"
        variants={arrowRise}
        initial="initial"
        animate={control}
      >
        <Link
          to="faq"
          smooth={true}
          duration={1400}
          //   offset={window.innerWidth > 480 ? 0 : 40} may need this
          delay={50}
          className="continue"
        >
          Continue
          <img src={arrow} alt="" className="arrow" />
        </Link>
      </motion.div>
      <img
        src={blackPickFill}
        alt=""
        className="blackPickFill pick"
        style={{ transform: `translateY(${offSetY * -0.3}px)` }}
      />
    </StyledSecBlog>
  );
};

const StyledSecBlog = styled("section")`
  min-height: 40rem;
  .textArea {
    position: absolute;
    top: 50%;
    right: 16%;
    transform: translate(0, -50%);
    width: 24vw;
    z-index: 2;
    > * {
      margin-bottom: 1rem;
    }
  }
  .swiperTool {
    position: absolute;
    top: 14%;
    left: 8%;
    width: 32vw;
    height: 68vh;
    min-height: 34rem;
    .swiper-button-prev,
    .swiper-button-next {
      position: absolute;
      top: 96%;
      width: 2.6vw;
      height: 2.6vw;
      opacity: 0;
      transform: scale(0.7);
      transition: 0.4s ease;
      animation: swiperGrow 1s 3s ease forwards;
      &::after {
        color: var(--brown);
      }
      &:hover {
        transform: scale(0.9);
      }
    }
    .swiper-button-prev {
      left: 30%;
    }
    .swiper-button-next {
      right: 30%;
    }
  }
  .continueDownDiv2 {
    @media screen and (max-width: 480px) {
      bottom: 8%;
    }
  }

  .ampLineSvg {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%) scale(0.7);
    width: 0vw;
    opacity: 0.5;
    animation: svgGrow 2.4s 0.2s ease forwards;
  }
  .halfShade {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50vw;
    height: 0vh;
    background: #efe8e3;
    z-index: -1;
    animation: halfShadeGrow 1.2s 0.8s ease forwards;
  }
  .blackPickFill {
    position: absolute;
    top: 32%;
    right: 6%;
    width: calc(2rem + 5vw);
    z-index: 3;
    filter: drop-shadow(0px 8px 3px #31313155);
  }

  @keyframes svgGrow {
    40% {
      width: calc(9rem + 4vw);
    }
    100% {
      width: calc(8rem + 4vw);
    }
  }
  @keyframes halfShadeGrow {
    to {
      height: 100%;
    }
  }
  @keyframes pickGrow {
    to {
      width: calc(1.2rem + 4vw);
    }
  }
  @keyframes swiperGrow {
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1440px) {
    .textArea {
      right: 6%;
      width: 34vw;
    }
    .swiperTool {
      /* border: 1px solid black; */
      top: 16%;
      left: 7%;
      width: 34vw;
      height: 68vh;
      min-height: 28rem;
    }
  }

  @media screen and (max-width: 768px) {
    .textArea {
      top: 16%;
      left: 12%;
      transform: translate(0, 0%);
      width: 65vw;
      > * {
        margin-bottom: 0.5rem;
      }
      .secHeader {
        br {
          display: none;
        }
      }
      .hide {
        display: none;
      }
    }
    .swiperTool {
      top: 68%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 96vw;
      min-width: 24rem;
      height: 36vh;
      min-height: 14rem;
      padding-left: 11%;
      .swiper-button-prev,
      .swiper-button-next {
        z-index: 2;
        top: 56%;
        transform: scale(0.6);
        &:hover {
          transform: scale(0.7);
        }
      }
      .swiper-button-prev {
        left: 4%;
      }
      .swiper-button-next {
        right: 4%;
      }
    }
    .ampLineSvg {
      top: 26%;
      opacity: 0.3;
    }
    .halfShade {
      bottom: 0;
      right: 0;
      width: 0vw;
      height: 54vh;
      min-height: 20rem;
    }
    @keyframes halfShadeGrow {
      to {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 480px) {
    .textArea {
      top: 12%;
      left: 12%;
      width: 70vw;
      > * {
        margin-bottom: 0.4rem;
      }
    }
    .swiperTool {
      top: 63%;
      height: 38vh;
      min-height: 14rem;
      padding-left: 11%;
      å .swiper-button-prev,
      .swiper-button-next {
        top: 56%;
        transform: scale(0.6);
        &:hover {
          transform: scale(0.7);
        }
      }
      .swiper-button-prev {
        left: 4%;
      }
      .swiper-button-next {
        right: 4%;
      }
    }
    .halfShade {
      height: 58vh;
      animation: halfShadeGrow 1.2s 1.4s ease forwards;
    }
  }
`;

export default SecBlog;
