import React from "react";
import styled from "styled-components";
import SocialMedia from "../components/SocialMedia";

function Nav({ navOpen, setNavOpen, pageWidth }) {
  return (
    <ScNav>
      {pageWidth > 768 && <SocialMedia />}
      <h4>Logo {pageWidth > 768 && "Here"}</h4>
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

  h4 {
    font-weight: 100;
    text-transform: uppercase;
    transform: translate(-1vw, 0);
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
