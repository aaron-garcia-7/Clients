import { useState, useEffect } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const MobileNav = ({ menuToggle, setMenuToggle }) => {

  const closeNav = () => {
    return window.innerWidth > 768 ? setMenuToggle(false) : null
  }
  useEffect(() => {
    window.addEventListener("resize", closeNav);
    return () => window.removeEventListener("resize", closeNav);
  }, [])

  return (
    <StyledMobileNav
      style={
        menuToggle ? { opacity: 1, zIndex: 5 } : { opacity: 0, zIndex: -1 }
      }
    >
      <div className="mainLinks">
      <ul className="linkList">
        <li>
          <Link to="/" onClick={() => setMenuToggle(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="./WhyUs" onClick={() => setMenuToggle(false)}>
            Why Us?
          </Link>
        </li>
        <li>
          <Link to="./About" onClick={() => setMenuToggle(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="./Resources" onClick={() => setMenuToggle(false)}>
            Resources
          </Link>
        </li>
        <li>
          <Link to="./Contact" onClick={() => setMenuToggle(false)}>
            Contact
          </Link>
        </li>
      </ul>
      </div>

    </StyledMobileNav>
  );
};

const StyledMobileNav = styled("nav")`
display: none;
transition: opacity 0.4s ease;
/* transition: all 0.4s ease; */
  @media screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    min-height: 36rem;
    display: flex;
    background: #e5d6ccef;
    backdrop-filter: blur(3px);
    pointer-events: all;
    z-index: -1;
  .mainLinks {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fafafa77;
    .linkList {
      list-style: none;
      padding: 1rem;
      line-height: 2.8rem;
      flex-direction: column;
      width: auto;
      &:hover {
      li {
        a {
          opacity: 0.3;
        }
      }
    }
      li {
        margin: 0.4rem 0;
        a {
          color: #313131;
          font-size: calc(0.8rem + 0.8vw);
          text-decoration: none;
          transition: 0.4s ease;
          &:hover {
            opacity: 1;
            color: #000;
          }
        }
      }
    }
  }
  .subLinks {
    width: 50%;
  }
  }
  @media screen and (max-width: 480px) {
    .mainLinks {
      width: 100%;
      .linkList {
        transform: translate(0, -10%);
      }
    }
    .subLinks {
    width: 0%;
  }
  }
`;
export default MobileNav;
