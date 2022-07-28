import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { fade, containerCards } from "../../anim/animations";
import styled from "styled-components";
import ServiceCard from "../../components/ServiceCards";
import servicesData from "../../data/servicesData";

const Services = () => {
  const control = useAnimation();

  const [ref, inView] = useInView({
    threshold: window.innerWidth > 768 ? 0.6 : 0.4,
    triggerOnce: true,
  });

  useEffect(() => {
    inView ? control.start("animate") : control.start("initial");
  }, [control, inView]);

  const servicesCards = servicesData.map((obj) => (
    <ServiceCard
      key={obj.id}
      header={obj.header}
      headerSp={obj.headerSp}
      content={obj.content}
      contentSp={obj.contentSp}
      id={obj.id}
    />
  ));

  const { language } = useSelector((store) => store.lang);

  return (
    <StyledServices ref={ref} id="services">
      <motion.h2 variants={fade} initial="initial" animate={control}>
        {language == "English" ? "Services" : "Servicios"}
      </motion.h2>
      {inView && <div className="dash" />}
      <motion.div
        className="cards"
        variants={containerCards}
        initial="initial"
        animate={control}
      >
        {servicesCards}
      </motion.div>
    </StyledServices>
  );
};

const StyledServices = styled("section")`
  height: auto;
  margin: 2rem 0 6rem 0;
  position: relative;
  h2 {
    width: 30%;
    font-size: calc(1.4rem + 2.4vw);
    font-style: italic;
    font-weight: 200;
    margin: 6rem 0 6rem 5%;
  }
  .dash {
    position: absolute;
    top: 8%;
    left: 8%;
    width: 0%;
    height: 4%;
    background: var(--col1);
    opacity: 0.4;
    z-index: -1;
    animation: showDash1 0.8s 1s ease forwards;
  }
  .cards {
    width: 92%;
    margin: auto;
    height: calc(12rem + 24vw);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @keyframes showDash1 {
    to {
      width: 14rem;
    }
  }

  @media (max-width: 1440px) {
    .dash {
      top: 7%;
      left: 9%;
    }
    @keyframes showDash1 {
      to {
        width: 10rem;
      }
    }
  }

  @media (max-width: 768px) {
    h2 {
      margin: 0 0 2rem 4%;
    }
    .dash {
      top: 4%;
      left: 10%;
      height: 2%;
    }
    .cards {
      flex-direction: column;
      width: 84%;
      height: 100%;
    }
    @keyframes showDash1 {
      to {
        width: 7rem;
      }
    }
  }
  @media (max-width: 480px) {
    h2 {
      margin: 0 0 4rem 4%;
    }
    .dash {
      top: 3%;
    }
    @keyframes showDash1 {
      to {
        width: 8rem;
      }
    }
  }
`;

export default Services;
