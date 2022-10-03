import React from "react";
import styled from "styled-components";
import SocialMedia from "../components/SocialMedia";

function Nav({ navOpen, setNavOpen }) {
  return (
    <ScNav>
      <SocialMedia />
      <h4>Logo Here</h4>
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
  z-index: 3;
  animation: menuDrop 1s ease 3.2s forwards;

  h4 {
    font-weight: 100;
    text-transform: uppercase;
  }

  .burger {
    width: 2rem;
    height: 2rem;
    /* border: 2px solid black; */
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
  }

  @keyframes menuDrop {
    to {
      transform: translate(0, 0);
    }
  }
`;

export default Nav;
