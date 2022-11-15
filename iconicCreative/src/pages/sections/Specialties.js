import React from "react";
import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import SpecCard from "../../components/SpecCard";

function Specialties({ pageWidth }) {
  const [ref, inView] = useInView({
    threshold: pageWidth > 520 ? 0.075 : 0,
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });
  const [ref4, inView4] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <ScSpecialties ref={ref}>
      <header className="specialtiesHeader">
        {inView && <h2>| Specialties</h2>}
        {inView && (
          <div>
            <p>We elevate brands to new</p>
            <p>heights, and design and</p>
            <p>develop jaw dropping</p>
            <p>websites.</p>
          </div>
        )}
      </header>

      <div className="ref ref2" ref={ref2} />
      {inView2 && <SpecCard title={"UI / UX"} order={1} />}

      <div className="ref ref3" ref={ref3} />
      {inView3 && <SpecCard title={"Branding"} order={2} />}

      <div className="ref ref4" ref={ref4} />
      {inView4 && <SpecCard title={"Social Media"} order={3} />}

      <button className="servicesBtn" tabIndex={-1}>
        <NavLink to="/Services" tabIndex={6}>
          View All Services
        </NavLink>
        <FontAwesomeIcon icon={faChevronRight} className="faIcon" />
      </button>
    </ScSpecialties>
  );
}

const ScSpecialties = styled("section")`
  height: 260vh;
  min-height: 164rem;
  background: var(--dark);

  > * {
    position: absolute;
  }
  .specialtiesHeader {
    top: 10%;
    left: 6%;
    > * {
      color: var(--light);
      position: relative;
    }
    h2 {
      font-size: calc(1.2rem + 6vw);
      margin-bottom: 4vw;
      opacity: 0;
      animation: fade 0.6s ease 0.2s forwards;
      &::after {
        content: "";
        position: absolute;
        bottom: -6px;
        right: 0;
        background: var(--dark);
        width: 100%;
        height: 100%;
        animation: slider 1.2s ease forwards;
      }
    }
    p {
      position: relative;
      font-size: calc(0.4rem + 2.4vw);
      font-weight: 100;
      margin-left: 4vw;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: var(--dark);
        animation: slider 0.8s ease forwards;
      }
      &:nth-of-type(1) {
        &::after {
          animation-delay: 0.4s;
        }
      }
      &:nth-of-type(2) {
        &::after {
          animation-delay: 0.5s;
        }
      }
      &:nth-of-type(3) {
        &::after {
          animation-delay: 0.6s;
        }
      }
      &:nth-of-type(4) {
        &::after {
          animation-delay: 0.7s;
        }
      }
    }
  }

  .ref {
    padding: 12rem 1rem;
    left: 50%;
    /* background: red; */
  }
  .ref2 {
    top: 26%;
  }
  .ref3 {
    top: 43%;
  }
  .ref4 {
    top: 65%;
  }

  #spec1 {
    right: 8%;
    transform: translate(0, -90%);
  }
  #spec2 {
    left: 8%;
    transform: translate(0, -32%);
  }
  #spec3 {
    right: 8%;
    transform: translate(0, 40%);
  }

  .servicesBtn {
    position: relative;
    top: 84%;
    left: 10%;
    transform: translate(0, 0);
    z-index: 2;
    a {
      color: var(--light);
      font-size: calc(0.8rem + 0.8vw);
      font-weight: 400;
      letter-spacing: 0.04rem;
      transition: color 0.4s ease 0.2s;
    }
    .faIcon {
      position: absolute;
      top: 50%;
      right: -6%;
      transform: translate(100%, -40%);
      color: var(--light);
      font-size: calc(0.6rem + 0.6vw);
      transition: transform 0.4s cubic-bezier(0.54, -0.85, 0.45, 1.67);
    }
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: -12%;
      transform: translate(0%, -50%);
      width: 4rem;
      height: 4rem;
      border-radius: 12rem;
      background: #3a3a3a;
      z-index: -1;
      pointer-events: none;
      transition: 0.4s cubic-bezier(0.42, -0.49, 0.64, 1.24);
    }
    &:hover {
      .faIcon {
        transform: translate(250%, -40%);
        transition-delay: 0.16s;
      }
      &::before {
        width: 124%;
        background: var(--offDark);
      }
    }
  }

  @media (max-width: 1440px) {
    min-height: 140rem;

    .servicesBtn {
      top: 82%;
    }
  }

  @media (max-width: 1224px) {
    height: 220vh;
    min-height: 120rem;

    .specialtiesHeader {
      top: 8%;
      p {
        /* font-size: calc(1.4rem + 1.4vw); */
        /* width: 46%; */
      }
    }
    #spec1 {
      right: 8%;
      transform: translate(0, -92%);
    }
    #spec2 {
      left: 8%;
      transform: translate(0, -32%);
    }
    #spec3 {
      right: 8%;
      transform: translate(0, 32%);
    }
    .servicesBtn {
      top: 82%;
    }
  }

  @media (max-width: 768px) {
    min-height: 132rem;
    .specialtiesHeader {
      top: 5%;
      h2 {
        margin-bottom: 6vw;
      }
      p {
        /* width: 86%; */
      }
    }
    .ref {
      padding: 6rem 1rem;
      left: 50%;
      /* background: red; */
    }
    .ref2 {
      /* top: 26%; */
      top: 16%;
    }
    .ref3 {
      /* top: 43%; */
    }
    .ref4 {
      /* top: 65%; */
      top: 68%;
    }
    #spec1 {
      right: 50%;
      transform: translate(50%, -164%);
    }
    #spec2 {
      left: 50%;
      transform: translate(-50%, -32%);
    }
    #spec3 {
      right: 50%;
      transform: translate(50%, 108%);
    }

    .servicesBtn {
      top: 98%;
      &::before {
        width: 3.2rem;
        height: 3.2rem;
      }
    }
  }

  @media (max-width: 520px) {
    height: 220vh;
    min-height: 124rem;
    .specialtiesHeader {
      p {
        font-size: calc(1rem + 1vw);
      }
    }

    #spec1 {
      transform: translate(50%, -180%);
    }
    #spec2 {
      transform: translate(-50%, -40%);
    }
    #spec3 {
      transform: translate(50%, 102%);
    }

    .servicesBtn {
      top: 94%;
      &::before {
        width: 2.8rem;
        height: 2.8rem;
      }
    }
  }
`;

export default Specialties;
