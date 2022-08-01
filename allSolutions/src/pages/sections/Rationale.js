import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { fade, fadeRationale, containerRationale } from "../../anim/animations";
import styled from "styled-components";
import rationaleData from "../../data/rationaleData";

const Rationale = () => {
  const control = useAnimation();

  const [ref, inView] = useInView({
    threshold: window.innerWidth > 768 ? 0.6 : 0.4,
    triggerOnce: true,
  });

  useEffect(() => {
    inView ? control.start("animate") : control.start("initial");
  }, [control, inView]);

  const { language } = useSelector((store) => store.lang);

  const rationaleItems = rationaleData.map((obj, index) => (
    <motion.div key={index} className="rationaleItems" variants={fadeRationale}>
      <img src={obj.img} alt="" />
      <h3>{language === "English" ? obj.header : obj.headerSp}</h3>
      <p>{language === "English" ? obj.content : obj.contentSp}</p>
    </motion.div>
  ));

  return (
    <StyledRationale ref={ref}>
      <motion.h2 variants={fade} initial="initial" animate={control}>
        {language === "English"
          ? "What makes us unique?"
          : "¿Qué nos hace únicos?"}
      </motion.h2>
      {inView && <div className="dash" />}
      <motion.div
        className="rationale"
        variants={containerRationale}
        initial="initial"
        animate={control}
      >
        {rationaleItems}
        {inView && <div className="column left" />}
        {inView && <div className="column right" />}
      </motion.div>
    </StyledRationale>
  );
};

const StyledRationale = styled("section")`
  position: relative;
  height: auto;
  margin: 6rem 0;
  h2 {
    width: 80%;
    font-size: calc(1.4rem + 2.4vw);
    font-weight: 200;
    margin: 4rem 0 0 5%;
  }
  .dash {
    position: absolute;
    top: 8%;
    left: 16%;
    width: 0%;
    height: 4%;
    background: var(--col1);
    opacity: 0.3;
    z-index: -1;
    animation: showDash2 1s 1s ease forwards;
  }
  .rationale {
    width: 92%;
    margin: auto;
    height: calc(12rem + 24vw);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .rationaleItems {
      position: relative;
      width: 30%;
      min-height: 18rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        position: absolute;
        top: 4%;
        width: calc(3.2rem + 2vw);
      }
      h3 {
        position: absolute;
        top: 44%;
        font-size: calc(0.6rem + 1.4vw);
        text-align: center;
      }
      p {
        position: absolute;
        top: 68%;
        font-size: calc(0.8rem + 0.4vw);
        width: 73%;
      }
      &:nth-of-type(2) {
        img {
          top: 3%;
          width: calc(2.6rem + 2vw);
        }
      }
    }
    .column {
      position: absolute;
      width: 1px;
      height: 46%;
      max-height: 6rem;
      background: var(--col3);
      opacity: 0;
      animation: showLine 1s 2s ease forwards;
    }
    .left {
      left: 34%;
    }
    .right {
      right: 34%;
    }
  }

  @keyframes showDash2 {
    to {
      width: 36rem;
    }
  }

  @keyframes showLine {
    to {
      opacity: 1;
    }
  }

  @media (max-width: 1440px) {
    .rationale {
      .rationaleItems {
        min-height: 16rem;
        img {
          top: 4%;
        }
        h3 {
          top: 40%;
        }
        p {
          top: 64%;
          width: 72%;
        }
      }
    }
    @keyframes showDash2 {
      to {
        width: 28rem;
      }
    }
  }

  @media (max-width: 1200px) {
    .dash {
      top: 7%;
      left: 12%;
    }
    .rationale {
      .rationaleItems {
        img {
          top: 4%;
        }
        h3 {
          top: 40%;
        }
        p {
          bottom: 4%;
          width: 72%;
        }
      }
    }
  }

  @media (max-width: 768px) {
    h2 {
      margin: 0 0 4rem 4%;
    }
    .dash {
      top: 3%;
      height: 3%;
    }
    @keyframes showDash2 {
      to {
        width: 24rem;
      }
    }

    .rationale {
      height: auto;
      display: flex;
      flex-direction: column;
      .rationaleItems {
        width: 80%;
        min-height: 14rem;
        margin-bottom: 4rem;
        img {
          width: calc(4rem + 2vw);
        }
        h3 {
          font-size: calc(1.2rem + 1vw);
        }
        p {
          font-size: calc(0.8rem + 0.5vw);
          width: 86%;
        }
        &:nth-of-type(2) {
          img {
            width: calc(3.2rem + 2vw);
          }
        }
      }
      .column {
        height: 1px;
        width: 26%;
        max-width: 22rem;
      }
      .left {
        top: 37%;
        left: 50%;
        transform: translate(-50%, 0);
      }
      .right {
        bottom: 33%;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }
  }

  @media (max-width: 480px) {
    h2 {
      width: 82%;
      font-size: calc(1.2rem + 2.4vw);
      margin: 4rem 0 4rem 5%;
    }
    .dash {
      top: 2%;
      left: 20%;
      height: 2%;
      opacity: 0.3;
    }
    .rationale {
      .rationaleItems {
        p {
          width: 92%;
        }
      }
      @keyframes showDash2 {
        to {
          width: 17rem;
        }
      }
      @keyframes showLine {
        to {
          opacity: 0.4;
        }
      }
    }
  }
`;

export default Rationale;
