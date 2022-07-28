import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { fade } from "../../anim/animations";
import styled from "styled-components";

// import background from "../images/photos/heroBg.jpeg";
import heroBg from "../../images/photos/heroBg.jpeg";

const Hero = () => {
  const { language } = useSelector((store) => store.lang);

  return (
    <StyledHero>
      <div className="mainText">
        <motion.h1 variants={fade} initial="initial" animate="animate">
          {language == "English" ? "Keeping your home" : "Manteniendo su casa"}
          <br />
          {language == "English" ? "feeling" : "al punto"}{" "}
          <span>{language == "English" ? "just right" : "perfecto"}</span>
        </motion.h1>
      </div>
    </StyledHero>
  );
};

const StyledHero = styled("section")`
  position: relative;
  background-image: url(${heroBg});
  background-size: cover;
  background-position: 100% 72%;
  overflow-x: hidden;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #ffffff00;
  }
  .mainText {
    position: absolute;
    top: 26%;
    left: 10%;
    z-index: 1;
    h1 {
      font-size: calc(2rem + 2vw);
      span {
        font-weight: 500;
        font-style: italic;
      }
    }
  }

  @media (max-width: 1440px) {
    .mainText {
      top: 24%;
    }
  }

  @media (max-width: 1200px) {
    &::after {
      background: #ffffff50;
    }
  }

  @media (max-width: 768px) {
    background-position: 50% 100%;
    .mainText {
      top: 28%;
      h1 {
        font-size: calc(1.6rem + 2vw);
      }
    }
  }

  @media (max-width: 480px) {
    height: 86vh;
    background-size: 260%;
    background-position: 44% 100%;
    .mainText {
      top: 32%;
      left: 6%;
      h1 {
        font-size: calc(1.6rem + 2vw);
      }
    }
  }
`;

export default Hero;
