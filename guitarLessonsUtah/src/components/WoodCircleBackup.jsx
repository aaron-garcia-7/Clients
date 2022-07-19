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
  animation: outterCircleGrow 2s ease forwards;
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fafafa;
    border-radius: 50%;
    animation: innerCircleGrow 1.6s 0.6s ease forwards;
  }

  @keyframes outterCircleGrow {
    0% {
      width: 0rem;
      height: 0rem;
    }
    60% {
      width: 36rem;
      height: 36rem;
    }
    100% {
      width: 34rem;
      height: 34rem;
    }
  }
  @keyframes innerCircleGrow {
    0% {
      width: 0rem;
      height: 0rem;
    }
    60% {
      width: 30rem;
      height: 30rem;
    }
    100% {
      width: 28rem;
      height: 28rem;
    }
  }
  @media screen and (max-width: 1440px) {
    @keyframes outterCircleGrow {
      0% {
        width: 0rem;
        height: 0rem;
      }
      60% {
        width: 30rem;
        height: 30rem;
      }
      100% {
        width: 28rem;
        height: 28rem;
      }
    }
    @keyframes innerCircleGrow {
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
