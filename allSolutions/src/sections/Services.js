import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { fade, containerCards } from "../anim/animations";
import styled from "styled-components";
import ServiceCard from "../components/ServiceCards";
import servicesData from "../data/servicesData";

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
      content={obj.content}
      id={obj.id}
    />
  ));

  return (
    <StyledServices ref={ref}>
      <motion.h2 variants={fade} initial="initial" animate={control}>
        Services
      </motion.h2>
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
  h2 {
    width: 30%;
    font-size: calc(1.4rem + 2.4vw);
    font-style: italic;
    font-weight: 200;
    margin: 4rem 0 2rem 5%;
  }
  .cards {
    width: 92%;
    margin: auto;
    height: calc(12rem + 24vw);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 768px) {
    h2 {
      margin: 0 0 2rem 4%;
    }
    .cards {
      flex-direction: column;
      width: 84%;
      height: 100%;
    }
  }
`;

export default Services;
