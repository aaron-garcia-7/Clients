import styled from "styled-components";

const LocationCard = ({ imgSrc, title }) => {
  return (
    <StyledLocationCard>
      <a href="#">
        <img src={imgSrc} alt="" className="locationImg" />
      </a>
      <h4 className="locationTitle">{title}</h4>
    </StyledLocationCard>
  );
};

const StyledLocationCard = styled("div")`
  width: 20%;
  margin: 0 4rem;
  height: 24rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.4s ease;
  &:hover {
    transform: scale(1.1);
  }
  .locationImg {
    opacity: 0;
    width: 0rem;
    height: 0rem;
    margin-bottom: 1.6rem;
    animation: imgGrow 0.8s 2s ease forwards;
  }
  .locationTitle {
    opacity: 0;
    transform: translate(50%, 0%);
    font-size: calc(0.8rem + 0.8vw);
    font-weight: 500;
    text-align: center;
    animation: textSlide 1s 2.6s ease forwards;
  }
  @keyframes imgGrow {
    to {
      opacity: 1;
      width: 20rem;
      height: 20rem;
    }
  }
  @keyframes textSlide {
    to {
      opacity: 1;
      transform: translate(0%, 0%);
    }
  }

  @media screen and (max-width: 1440px) {
    width: 28%;
    height: 18rem;
    @keyframes imgGrow {
      to {
        opacity: 1;
        width: 16rem;
        height: 16rem;
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: 40%;
    height: 14rem;
    margin: 0 1.2rem;
    @keyframes imgGrow {
      to {
        opacity: 1;
        width: 12rem;
        height: 12rem;
      }
    }
  }
  @media screen and (max-width: 480px) {
    width: 50%;
    margin-bottom: 0.6rem;
    .locationImg {
      margin-bottom: 0.4rem;
    }
    @keyframes imgGrow {
      to {
        opacity: 1;
        width: 10rem;
        height: 10rem;
      }
    }
  }
`;

export default LocationCard;
