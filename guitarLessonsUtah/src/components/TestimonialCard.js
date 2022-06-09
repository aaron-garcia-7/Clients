import styled from "styled-components";

const TestimonialCard = ({ quote, name, title, img, dark }) => {
  return (
    <StyledTestimonialCard
      style={dark ? { background: "#987554" } : { background: "#e5d6cc" }}
    >
      <blockquote className={!dark ? "" : "darkQuote"}>{quote}</blockquote>
      <h4 className={!dark ? "cardName" : "darkName"}>- {name}</h4>
      <p className={!dark ? "cardTitle" : "darkTitle"}>{title}</p>
      <a href="" className={!dark ? "cardLink" : "darkLink"}>
        Find out more
      </a>
      <img src={img} alt="" className="cardImg" />
      <div
        className="stripe"
        style={dark ? { background: "#e5d6cc" } : { background: "#987554" }}
      ></div>
      <h3 className="cardTextLeft">Review</h3>
      <h3 className="cardTextRight">Review</h3>
    </StyledTestimonialCard>
  );
};

const StyledTestimonialCard = styled("div")`
  width: 100%;
  min-width: 16rem;
  height: 100%;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  animation: shadowReveal 1s 3s ease forwards;
  blockquote,
  .darkQuote {
    position: absolute;
    top: 4%;
    left: 4%;
    width: 94%;
    font-size: calc(1em + 0.4vw);
    font-weight: 400;
  }
  .cardName,
  .darkName {
    position: absolute;
    top: 29%;
    left: 6%;
    font-size: calc(0.8rem + 0.6vw);
    font-weight: 300;
  }
  .cardTitle,
  .darkTitle {
    position: absolute;
    top: 36%;
    left: 9%;
    font-size: 0.7rem;
    font-weight: 300;
    font-style: italic;
  }
  .cardLink,
  .darkLink {
    position: absolute;
    top: 42%;
    left: 9%;
    font-size: calc(0.5rem + 0.5vw);
    font-weight: 500;
    color: #987554;
  }
  .cardImg {
    position: absolute;
    bottom: 2%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 36%;
    border-radius: 1rem;
    z-index: 1;
    transition: 0.4s ease;
  }
  .stripe {
    position: absolute;
    bottom: 16%;
    width: 100%;
    height: 14%;
    z-index: 0;
    transition: 0.4s ease;
  }
  .cardTextLeft,
  .cardTextRight {
    position: absolute;
    bottom: 22%;
    color: #fafafa;
    font-size: 2.4rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
  }
  .cardTextLeft {
    left: -8%;
    transform: rotate(-90deg);
  }
  .cardTextRight {
    right: -8%;
    transform: rotate(90deg);
  }
  .darkQuote,
  .darkName,
  .darkTitle,
  .darkLink {
    color: #fafafa;
  }
  &:hover {
    opacity: 0.9;
    .cardImg {
      transform: translate(-50%, 0) scale(1.08);
    }
    .stripe {
      transform: scale(1.2);
    }
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #fafafa;
    z-index: 2;
    animation: slideReveal 1s 2.4s ease forwards;
  }

  @keyframes slideReveal {
    to {
      width: 0%;
    }
  }
  @keyframes shadowReveal {
    to {
      box-shadow: 0 3px 4px #c0c0c0;
    }
  }

  @media screen and (max-width: 1440px) {
    .cardImg {
      width: 32%;
      bottom: 6%;
    }
    .stripe {
      bottom: 18%;
    }
    .cardTextLeft,
    .cardTextRight {
      font-size: 2rem;
    }
    .cardTextLeft {
      left: -12%;
    }
    .cardTextRight {
      right: -12%;
    }
  }

  @media screen and (max-width: 484px) {
    blockquote,
    .darkQuote {
      top: 6%;
      left: 9%;
      width: 90%;
    }
    .cardName,
    .darkName {
      top: 33%;
    }
    .cardTitle,
    .darkTitle {
      top: 38%;
    }
    .cardLink,
    .darkLink {
      top: 44%;
    }
    .cardImg {
      width: 40%;
      bottom: 8%;
    }
    .stripe {
      bottom: 20%;
    }
    .cardTextLeft,
    .cardTextRight {
      font-size: 1.6rem;
    }
    .cardTextLeft {
      left: -14%;
    }
    .cardTextRight {
      right: -14%;
    }
  }
`;

export default TestimonialCard;
