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
  animation: outterCircleGrow 2.2s ease forwards;
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fafafa;
    border-radius: 50%;
    animation: innerCircleGrow 1.8s 0.6s ease forwards;
  }

  @keyframes outterCircleGrow {
    0% {
      width: 0vw;
      height: 0vw;
    }
    40% {
      width: calc(16rem + 10vw);
      height: calc(16rem + 10vw);
    }
    100% {
      width: calc(14rem + 10vw);
      height: calc(14rem + 10vw);
    }
  }
  @keyframes innerCircleGrow {
    0% {
      width: 0rem;
      height: 0rem;
    }
    40% {
      width: calc(12rem + 10vw);
      height: calc(12rem + 10vw);
    }
    100% {
      width: calc(10rem + 10vw);
      height: calc(10rem + 10vw);
    }
  }
`;

export default WoodCircle;
