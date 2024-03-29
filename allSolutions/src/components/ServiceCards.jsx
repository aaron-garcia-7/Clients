import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { fadeCards } from "../anim/animations";
import styled from "styled-components";

const ServiceCard = ({header, headerSp, content, contentSp, id}) => {
  const { language } = useSelector((store) => store.lang);

  return (
    <StyledServiceCard 
      style={id === 1 ? {background: 'var(--col1)'} : id === 2 ? {background: "var(--col2)"} : id === 3 ? {background: "var(--col3)"} : null}
      variants={fadeCards}
    >
      <h3>{language === "English" ? header : headerSp}</h3>
      <p>{language === "English" ? content : contentSp}</p>
    </StyledServiceCard>
  );
};

const StyledServiceCard = styled(motion.div)`
  width: 32%;
  height: 100%;
  border-radius: 2rem 2rem 2rem 0;
  padding: calc(1rem + 1vw);
    h3 {
        color: white;
        font-size: calc(1.4rem + 1.6vw);
        font-weight: 400;
        border-bottom: 2px solid white;
        height: calc(4rem + 6vw);
        margin-bottom: 2rem;
    }
    p {
        color: white;
        font-size: calc(0.4rem + 1.2vw);
        font-weight: 200;
    }
  
  @media(max-width: 1440px) {
    h3 {
      height: calc(4rem + 4vw);
      font-size: calc(1.2rem + 1.4vw);
    }
  }

  @media(max-width: 768px) {
    width: 100%;
    max-width: 32rem;
    margin-bottom: 1.6rem;
    padding-bottom: 4rem;
    h3 {
      font-size: calc(1rem + 1.4vw);
      border-bottom: 1px solid white;
      height: calc(1rem + 4.6vw);
      margin-bottom: 1rem;
    }
    p {
      font-size: calc(0.8rem + 1vw);
    }
  }

  @media(max-width: 480px) {
    padding-bottom: 3.2rem;
  }
`;

export default ServiceCard;
