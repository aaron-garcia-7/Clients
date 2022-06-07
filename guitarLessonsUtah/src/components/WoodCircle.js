import styled from "styled-components";
import wood from "../images/photos/wood.png";

const WoodCircle = () => {
  return <StyledWoodCircle />;
};

const StyledWoodCircle = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url(${wood});
  background-size: 24rem;
  background-position: center;
  border-radius: 50%;
  animation: outterCircleGrow 2s 1s ease forwards;
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fafafa;
    border-radius: 50%;
    animation: innerCircleGrow 1.6s 1.6s ease forwards;
  }

  @keyframes outterCircleGrow {
    0% {
      width: 0rem;
      height: 0rem;
    }
    60% {
      width: 32rem;
      height: 32rem;
    }
    100% {
      width: 30rem;
      height: 30rem;
    }
  }
  @keyframes innerCircleGrow {
    0% {
      width: 0rem;
      height: 0rem;
    }
    60% {
      width: 26rem;
      height: 26rem;
    }
    100% {
      width: 24rem;
      height: 24rem;
    }
  }
  @media screen and (max-width: 768px) {
    @keyframes outterCircleGrow {
      0% {
        width: 0rem;
        height: 0rem;
      }
      60% {
        width: 24rem;
        height: 24rem;
      }
      100% {
        width: 22rem;
        height: 22rem;
      }
    }
    @keyframes innerCircleGrow {
      0% {
        width: 0rem;
        height: 0rem;
      }
      60% {
        width: 18rem;
        height: 18rem;
      }
      100% {
        width: 17.6rem;
        height: 17.6rem;
      }
    }
  }
`;

export default WoodCircle;
