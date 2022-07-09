import styled from "styled-components";

const TestimonialCard = ({ quote, name, title, dark }) => {
  return (
    <StyledTestimonialCard
      style={dark ? { background: "var(--brown)" } : { background: "var(--tan)" }}
    >
      <blockquote className={!dark ? "" : "darkQuote"}>{quote}</blockquote>
      <h4 className={!dark ? "cardName" : "darkName"}>- {name}</h4>
      <p className={!dark ? "cardTitle" : "darkTitle"}>{title}</p>
      <p className={!dark ? "cardLink" : "darkLink"}>
        Read full review
      </p>
      <div
        className="stripe"
        style={dark ? { background: "#E5D6CC44" } : { background: "#A27C6744" }}
      ></div>
      <h3 className="cardTextReview" style={dark ? {color: "var(--white)"} : {color: "var(--black)"}}>Review</h3>
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
  animation: shadowReveal 1s 2s ease forwards;
  blockquote,
  .darkQuote {
    position: absolute;
    top: 8%;
    left: 4%;
    width: 94%;
    font-size: calc(1em + 0.4vw);
    font-weight: 400;
    z-index: 2;
  }
  .cardName,
  .darkName {
    position: absolute;
    top: 44%;
    left: 6%;
    font-size: calc(0.8rem + 0.6vw);
    font-weight: 300;
  }
  .cardTitle,
  .darkTitle {
    position: absolute;
    top: 54%;
    left: 10%;
    font-size: 0.7rem;
    font-weight: 300;
    font-style: italic;
  }
  .cardLink,
  .darkLink {
    position: absolute;
    top: 70%;
    left: 9%;
    font-size: calc(0.5rem + 0.5vw);
    font-weight: 500;
    color: var(--brown);
    border-bottom: 1px solid;
    transition: 0.4s ease;
  }
  .stripe {
    position: absolute;
    right: 16%;
    bottom: 0;
    width: 10%;
    height: 100%;
    transition: 0.4s ease;
  }
  .cardTextReview {
    position: absolute;
    bottom: 0;
    right: 28%;
    font-size: 2.4rem;
    font-weight: 700;
    text-transform: uppercase;
    opacity: 0.1;
    letter-spacing: 0.2rem;
    transition: 0.4s ease;
  }
  .darkQuote,
  .darkName,
  .darkTitle,
  .darkLink {
    color: var(--white);
  }
  &:hover {
    opacity: 0.9;
    .cardLink,
    .darkLink {
      padding-bottom: 0.2rem;
    }
    .cardTextReview {
      opacity: 1;
      font-weight: 100;
    }
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: var(--white);
    z-index: 2;
    animation: slideReveal 1s 1.4s ease forwards;
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
    .cardTextReview {
      font-size: 2rem;
    }
  }
`;

export default TestimonialCard;