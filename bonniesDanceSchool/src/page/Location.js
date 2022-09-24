import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import Poly from "../components/Poly";
import map from "../images/photos/map.png";
import pin from "../images/graphics/pin.svg";

const Location = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const mapsUrl = "https://goo.gl/maps/ELECSz7HCWkmLdbM6";

  return (
    <ScLocation ref={ref}>
      {inView && <Poly inLocation={true} />}
      <div className="partial">
        <a href={mapsUrl} target="_blank" rel="noreferrer" className="mapLink">
          <img src={pin} alt="" className="pin" />
          <img src={map} alt="" className="mapImg" />
        </a>
        <div className="actionDiv">
          <h3>Home Studio</h3>
          <a href={mapsUrl} target="_blank" rel="noreferrer">
            5372 Harvestmill Dr. <br /> West Jordan, UT 84081
          </a>
          <a href={mapsUrl} target="_blank" rel="noreferrer">
            Expand Map
          </a>
        </div>
      </div>
    </ScLocation>
  );
};

const ScLocation = styled.section`
  #polyLocation {
    /* border: 2px solid blue; */
    z-index: 2;
    transform: translate(-50%, 40%);
  }
  .partial {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--tan);
    width: 80vw;
    height: 80vh;
    min-height: 28rem;
    border: 2px solid #e46f9f40;
    .mapLink {
      border: var(--border);
      position: absolute;
      top: 50%;
      left: 10%;
      transform: translate(0, -50%);
      width: 32%;
      .pin {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -106%);
        width: 10%;
        transition: 0.4s ease;
      }
      .mapImg {
        width: 100%;
      }
      &::before {
        content: "TAP TO EXPAND";
        position: absolute;
        top: -1.6rem;
        font-size: 0.8rem;
      }
      &:hover {
        .pin {
          transform: translate(-50%, -126%);
        }
      }
    }
    .actionDiv {
      /* border: 1px dashed grey; */
      position: absolute;
      top: 50%;
      right: 4%;
      transform: translate(0, -50%);
      width: 32%;
      height: 40%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h3 {
        font-size: calc(1.2rem + 1.2vw);
        letter-spacing: 0.1rem;
      }
      a {
        &:nth-of-type(1) {
          font-size: calc(0.6rem + 0.6vw);
          font-weight: 400;
        }
        &:nth-of-type(2) {
          background: var(--pink);
          color: var(--light);
          display: flex;
          justify-content: center;
          align-items: center;
          width: 8.8rem;
          height: 3rem;
          font-size: calc(0.4rem + 0.4vw);
          letter-spacing: 0.1rem;
          text-transform: uppercase;
          font-weight: 400;
          transition: 0.3s ease;
          &:hover {
            background: var(--pink2);
          }
        }
      }
    }
  }

  @media (max-width: 1440px) {
    #polyLocation {
      transform: translate(-50%, 28%);
    }
  }

  @media (max-width: 1220px) {
    #polyLocation {
      transform: translate(-50%, 40%);
    }
    .partial {
      height: 72vh;
      min-height: 24rem;
      .mapLink {
        left: 8%;
        width: 36%;
        transform: translate(0, -42%);
      }
      .actionDiv {
        right: 4%;
        transform: translate(0, -50%);
        /* width: 32%; */
        height: 22vw;
        a {
          &:nth-of-type(2) {
            width: 8rem;
            height: 2.4rem;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    #polyLocation {
      transform: translate(-50%, 0) scale(0.9);
    }
    .partial {
      width: 72vw;
      height: 86vh;
      .mapLink {
        left: 50%;
        width: 14rem;
        transform: translate(-50%, 32%);
        &::before {
          top: -1.2rem;
          font-size: 0.6rem;
        }
      }
      .actionDiv {
        right: 50%;
        transform: translate(50%, -112%);
        width: 50%;
        height: 10rem;
        a {
          &:nth-of-type(2) {
            width: 8rem;
            height: 2.4rem;
          }
        }
      }
    }
  }
  @media (max-width: 480px) {
    #polyLocation {
      transform: translate(-50%, 0) scale(0.9);
    }
    .partial {
      width: 86vw;
      height: 80vh;
      /* min-height: 24rem; */
      .mapLink {
        left: 50%;
        width: 14rem;
        transform: translate(-50%, 32%);
        &::before {
          top: -1.2rem;
          font-size: 0.6rem;
        }
      }
      .actionDiv {
        right: 50%;
        transform: translate(50%, -112%);
        width: 50%;
        height: 10rem;
        a {
          &:nth-of-type(2) {
            width: 8rem;
            height: 2.4rem;
          }
        }
      }
    }
  }
`;

export default Location;
