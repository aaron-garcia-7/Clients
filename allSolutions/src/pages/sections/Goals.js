import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { container, goalsFade } from "../../anim/animations";
import styled from "styled-components";

import goalsBg from "../../images/photos/goalsBg.jpeg";

const Goals = () => {
  const { language } = useSelector((store) => store.lang);

  return (
    <StyledGoals>
      <img src={goalsBg} alt="" className="backgroundImg" />
      <motion.div
        className="mainText"
        variants={container}
        initial="initial"
        animate="animate"
      >
        <motion.h1 variants={goalsFade}>
          {language === "English" ? "A name built on" : "Un nombre hecho de"}
          <br />
          <span>
            {language === "English"
              ? "trust & reliability"
              : "confianza & fiabilidad"}
          </span>
        </motion.h1>
        <motion.p variants={goalsFade}>
          {language === "English"
            ? "Our goals are to ensure your satisfaction through quality, integrity and transparency. "
            : "Nuestros objetivos son garantizar su satisfacción a través de la calidad, la integridad y la transparencia."}
          <br />
          {language === "English"
            ? "Your happiness is our priority. We believe in treating your home with care and respect."
            : "Tu felicidad es nuestra prioridad. Creemos en tratar su hogar con cuidado y respeto."}
          <br />
        </motion.p>
      </motion.div>
    </StyledGoals>
  );
};

const StyledGoals = styled("section")`
  position: relative;
  overflow-x: hidden;
  .mainText {
    position: absolute;
    top: 26%;
    left: 10%;
    h1 {
      font-size: calc(2rem + 2vw);
      margin-bottom: 2.8rem;
      span {
        font-weight: 500;
        font-style: italic;
      }
    }
    p {
      width: 30vw;
      min-width: 24rem;
      font-size: calc(0.8rem + 0.8vw);
    }
  }

  .backgroundImg {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    min-height: 48rem;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 1440px) {
    background-size: cover;
    .mainText {
      top: 24%;
      p {
        min-width: calc(20rem + 10vw);
      }
    }
    .backgroundImg {
      min-height: 40rem;
    }
  }

  @media (max-width: 1200px) {
    .backgroundImg {
      opacity: 0.6;
    }
  }

  @media (max-width: 768px) {
    background-position: 36% 100%;
    .mainText {
      top: 28%;
      left: 8%;
      h1 {
        font-size: calc(1.6rem + 2vw);
        margin-bottom: 2rem;
      }
      p {
        min-width: 16rem;
      }
    }
    .backgroundImg {
      position: absolute;
      top: 0;
      width: 120vw;
      height: 100vh;
      min-height: 36rem;
      object-fit: cover;
      object-position: center;
    }
  }

  @media (max-width: 480px) {
    height: 86vh;
    .mainText {
      top: 32%;
      left: 6%;
      width: 68%;
      h1 {
        font-size: calc(1.6rem + 2vw);
      }
      p {
        font-size: calc(0.9rem + 0.8vw);
        width: 64vw;
        min-width: 12rem;
        line-height: 1.6rem;
      }
    }
    .backgroundImg {
      opacity: 0.2;
      height: 86vh;
      object-fit: cover;
      object-position: 54% 50%;
    }
  }
`;

export default Goals;
