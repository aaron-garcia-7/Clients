import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SocialMedia from "../components/SocialMedia";
import logo from "../images/logo.svg";
import logoAlt from "../images/logoAlt.svg";

function Nav({ navOpen, setNavOpen, pageWidth }) {
  const [fromTop, setFromTop] = useState(false);

  const checkDistance = () => {
    window.scrollY > 60 ? setFromTop(true) : setFromTop(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkDistance);

    return () => window.removeEventListener("scroll", checkDistance);
  }, [fromTop]);

  const logoStyle = {
    transform:
      fromTop && !navOpen ? "translate(-1vw, -400%)" : "translate(-1vw, 10%)",
    transition: navOpen ? "transform 1.2s ease" : "transform 0.6s ease",
  };

  return (
    <ScNav>
      {pageWidth > 768 && <SocialMedia />}
      {/* <h4 style={logoStyle}>Bonnie’s Dance School</h4> */}
      {!navOpen && (
        <img className="logo" src={logo} alt="logo" style={logoStyle} />
      )}
      {navOpen && (
        <img className="logo" src={logoAlt} alt="logo" style={logoStyle} />
      )}
      <div
        className={navOpen ? "burger active" : "burger"}
        onClick={() => setNavOpen((prev) => !prev)}
      >
        <div className={navOpen ? "line active" : "line"} />
        <div className={navOpen ? "line active" : "line"} />
      </div>
    </ScNav>
  );
}

const ScNav = styled("nav")`
  position: fixed;
  top: 0;
  transform: translate(0, -100%);
  width: 100vw;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2vw;
  z-index: 5;
  animation: menuDrop 1s ease 3.2s forwards;

  /* h4 {
    font-weight: 100;
    text-transform: uppercase;
    transform: translate(-1vw, 0);
  } */

  .logo {
    /* width: 4rem; */
    width: calc(2rem + 2vw);
    opacity: 0;
    animation: fade 0.8s ease 0.6s forwards;
  }

  .burger {
    width: 2rem;
    height: 2rem;
    transition: all 0.6s;
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    cursor: pointer;
    .line {
      width: 20px;
      height: 2px;
      position: absolute;
      background: #313d44;
      right: 0;
      margin: auto;
      left: 0;
      border-radius: 2px;
      transition: all 0.6s cubic-bezier(0.6, 0.1, 0.4, 1.3);

      width: 20;
      top: calc(50% - ((3.5px)) + -1px);
      &:nth-of-type(1) {
        top: calc(50% - ((3.5px)) + -2px);
        width: 20px;
      }
      &:nth-of-type(2) {
        top: calc(50% - ((3.5px)) + 4px);
        width: 20px;
      }
    }
    &.active {
      transform: scale(1.03) rotate(180deg);
      &:hover {
        transform: scale(1.3) rotate(180deg);
      }
    }
    .line {
      &.active:nth-of-type(1) {
        transform: rotate(225deg);
        top: calc(50% - (1.5px)) !important;
        width: 20px !important;
      }
      &.active:nth-of-type(2) {
        transform: rotate(-225deg);
        top: calc(50% - (1.5px)) !important;
        width: 20px !important;
      }
    }
    &:hover {
      transform: scale(1.3);
    }
  }

  @keyframes menuDrop {
    to {
      transform: translate(0, 0);
    }
  }

  @media (max-width: 768px) {
    padding: 0 2vw 0 3.2vw;
  }
`;

export default Nav;
