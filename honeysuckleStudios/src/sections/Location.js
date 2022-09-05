import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

import Branch1 from "../components/svg/Branch1";
import PageNum from "../components/PageNum";
import map from "../images/map.png";
import pin from "../images/pin.svg";

const Location = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <ScLocation ref={ref}>
      {inView && (
        <div className="secTitle">
          <Branch1 giveId={true} />
          <h4 className="title">location</h4>
        </div>
      )}
      {inView && (
        <>
          <a
            href="https://www.google.com/maps/place/Honeysuckle+Studios/@40.5981341,-112.0262221,14.84z/data=!4m5!3m4!1s0x87528fa0280a65e7:0x93d0df96cd8aa481!8m2!3d40.5985702!4d-112.0200876"
            target="_blank"
            rel="noreferrer"
            className="mapLink"
          >
            <img src={pin} alt="" className="pin" />
            <img src={map} alt="map to honeysuckle studios" className="map" />
          </a>
          <p className="tapMap">tap to expand</p>
        </>
      )}
      <div className="addressDiv">
        <a
          href="https://www.google.com/maps/place/Honeysuckle+Studios/@40.5981341,-112.0262221,14.84z/data=!4m5!3m4!1s0x87528fa0280a65e7:0x93d0df96cd8aa481!8m2!3d40.5985702!4d-112.0200876"
          className="addressLink"
        >
          <span className="numbers">5423</span> windmill dr <br /> west jordan,
          ut <span className="numbers">84081</span>
        </a>
        <div className="divider" />
        <a
          href="https://www.google.com/maps/place/Honeysuckle+Studios/@40.5981341,-112.0262221,14.84z/data=!4m5!3m4!1s0x87528fa0280a65e7:0x93d0df96cd8aa481!8m2!3d40.5985702!4d-112.0200876"
          className="addressLink"
        >
          basement suite along <br /> the west side of the house
        </a>
      </div>
      <PageNum number={3} alt={true} />
    </ScLocation>
  );
};

const ScLocation = styled("section")`
  background: var(--mid);
  .secTitle {
    // See Global Styles
  }
  .mapLink {
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(0, -50%);
    width: 24vw;
    border: 3px solid var(--hero);
    border-radius: 50%;
    opacity: 0;
    animation: mapReveal 1.2s ease forwards;
    overflow: hidden;
    .map {
      width: 100%;
    }
    .pin {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -300%);
      width: calc(1rem + 10%);
      z-index: 1;
      opacity: 0;
      animation: pinDrop 1s ease 0.6s forwards;
    }
  }
  .tapMap {
    display: none;
  }

  .addressDiv {
    position: absolute;
    top: 50%;
    right: 20%;
    transform: translate(0, -50%);
    .addressLink {
      color: black;
      font-size: calc(0.6rem + 0.6vw);
      letter-spacing: 0.1rem;
      span {
        font-size: calc(0.5rem + 0.5vw);
        font-weight: 300;
      }
      &:hover {
        color: var(--dark);
      }
    }
    .divider {
      width: 100%;
      height: 3px;
      background: var(--hero);
      margin: 2rem 0;
    }
  }

  @keyframes mapReveal {
    to {
      opacity: 1;
    }
  }

  @keyframes pinDrop {
    to {
      transform: translate(-50%, -100%);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    .mapLink {
      top: auto;
      bottom: 20%;
      left: 50%;
      transform: translate(-50%, 0%);
      border-radius: 0;
      border-width: 2px;
      width: 60vw;
      max-height: 32vh;
      min-height: 12rem;
      .map {
        transform: translate(0, -4rem);
      }
      .pin {
        top: calc(-23% + 28vw);
      }
    }
    .tapMap {
      position: absolute;
      top: 81%;
      left: 20%;
      display: block;
      color: var(--dark);
      font-size: calc(0.6rem + 0.2vw);
      font-style: italic;
    }

    .addressDiv {
      top: 25%;
      left: 50%;
      transform: translate(-50%, 0%);
      width: 60vw;
      .divider {
        width: 40%;
        height: 2px;
        margin: 1rem 0;
      }
    }
  }

  @media (max-width: 520px) {
    .mapLink {
      .map {
        transform: translate(0, -3rem);
      }
      .pin {
        top: calc(-16% + 28vw);
      }
    }
  }

  @media (max-width: 480px) {
    .mapLink {
      .map {
        transform: translate(0, 0rem);
      }
      .pin {
        top: 50%;
      }
    }

    .addressDiv {
      transform: translate(-50%, -20%);
      .divider {
        width: 64%;
        height: 2px;
        margin: 1rem 0;
      }
    }
  }
`;

export default Location;
