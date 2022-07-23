import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";
import {
  container,
  containerLinksArticle,
  fade,
  linksFade,
  fadeUp,
  linksFadeUp,
} from "../../anim/animations";

import SecContact from "../sections/SecContact";
import SecResourcesSubHero from "../sections/SecResourcesSubHero";

import Logo from "../../components/Logo";
import SocialMediaLinks from "../../components/SocialMediaLinks";

import linksData from "../../data/linksData";

const LinksPage = () => {
  // Scroll Animations
  const control = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    inView ? control.start("animate") : control.start("initial");
  }, [control, inView]);

  const allLinks = linksData.map((obj) => {
    return (
      <motion.li
        key={obj.id}
        variants={window.innerWidth > 480 ? linksFade : linksFadeUp}
      >
        <a href={obj.url} target="_blank">
          {obj.site}
        </a>
        <br
          style={
            window.innerWidth > 480
              ? { display: "none" }
              : { display: "inline-block" }
          }
        />{" "}
        {obj.info}
      </motion.li>
    );
  });

  return (
    <StyledLinksPage>
      <Element name="top" />
      <Logo />
      <SecResourcesSubHero links={true} />
      <Element name="subContent" />
      <article className="linksContent" ref={ref}>
        <motion.div
          className="articleHeader"
          variants={container}
          initial="initial"
          animate={control}
        >
          <motion.h2 variants={fade}>Other helpful websites</motion.h2>
          <motion.div variants={fade}>
            <SocialMediaLinks />
          </motion.div>
        </motion.div>
        <motion.ul
          className="articleContent"
          variants={containerLinksArticle}
          initial="initial"
          animate={control}
        >
          {allLinks}
        </motion.ul>
        {inView && <div className="stripe" />}
      </article>
      <SecContact shortPage={true} />
    </StyledLinksPage>
  );
};

const StyledLinksPage = styled("div")`
  .linksContent {
    /* border: 1px dashed grey; */
    position: relative;
    width: 72vw;
    margin: 0 auto;
    padding-top: 12vh;
    .articleHeader {
      margin-bottom: 8vh;
      h2 {
        font-size: calc(1.4rem + 1.2vw);
        font-weight: 300;
        margin-bottom: 2rem;
        padding-right: 1rem;
      }
      div {
        height: 8vh;
      }
    }
    .articleContent {
      list-style-position: inside;
      list-style-type: circle;
      margin-bottom: 12vh;
      li {
        margin-bottom: 4vh;
        font-size: calc(0.6rem + 0.6vw);
        font-weight: 300;
        a {
          position: relative;
          font-size: calc(0.8rem + 0.6vw);
          color: var(--brown);
          font-weight: 600;
          &::after {
            content: "";
            position: absolute;
            bottom: -20%;
            left: 0;
            width: 0%;
            height: 2px;
            background: var(--brown);
            transition: 0.4s ease;
          }
          &:hover {
            &::after {
              width: 100%;
            }
          }
        }
      }
    }
    .stripe {
      position: absolute;
      top: 0;
      right: 20%;
      width: 5%;
      min-width: 2rem;
      height: 0%;
      background: var(--tan);
      opacity: 0.4;
      z-index: -1;
      animation: lineGrow 3.2s 0.2s ease forwards;
    }
  }

  @keyframes lineGrow {
    to {
      height: 102%;
    }
  }

  @media screen and (max-width: 768px) {
    overflow-x: hidden;
    .linksContent {
      width: 84vw;
      .articleContent {
        li {
          line-height: 1.6rem;
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    .linksContent {
      .articleHeader {
        margin-bottom: 3.2vh;
      }
      .articleContent {
        padding-left: 2%;
        li {
          font-weight: 400;
          margin-bottom: 2.8vh;
        }
      }
    }
  }
`;

export default LinksPage;
