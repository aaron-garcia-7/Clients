import { useState, useEffect } from "react";
import styled from "styled-components";
import SocialMedia from "../components/SocialMedia";

const Nav = ({ menuOpen, toggleMenu, width }) => {
  const [fromTop, setFromTop] = useState(false);

  const checkDistance = () => {
    window.scrollY > 60 ? setFromTop(true) : setFromTop(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkDistance);

    return () => window.removeEventListener("scroll", checkDistance);
  }, [fromTop]);

  const logoStyle = {
    color: menuOpen ? "var(--light)" : "var(--dark)",
    transform: fromTop && !menuOpen ? "translateY(-400%)" : null,
    transition: menuOpen ? "1.2s ease" : "0.4s ease",
  };

  return (
    <ScNav>
      {width > 580 && <SocialMedia inNav={true} menuOpen={menuOpen} />}
      <h1 style={logoStyle}>Bonnie's Dance School</h1>
      <div className="burger" onClick={() => toggleMenu()}>
        <div className={menuOpen ? "line1 active1" : "line1"} />
        <div className={menuOpen ? "line2 active2" : "line2"} />
      </div>
    </ScNav>
  );
};

const ScNav = styled.nav`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 5.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  z-index: 5;

  h1 {
    font-size: calc(0.8rem + 0.2vw);
    text-transform: uppercase;
    // See inline JS for more styles
  }

  .mobileIcon {
    display: none;
  }

  .burger {
    transition: all 0.57s;
    position: relative;
    width: 38px;
    height: 38px;
    border-radius: 100%;
    cursor: pointer;
    div {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 1.4rem;
      /* height: 0.16rem; */
      height: 2px;
      background: var(--dark);
      transition: all 0.57s cubic-bezier(0.4, 0, 0.2, 1.1);
      transform-origin: left;
    }
    .line1 {
      transform: translate(-50%, -200%);
    }
    .line2 {
      position: relative;
      transform: translate(-50%, 200%);
    }
    .active1 {
      transform: translate(-50%, 0);
      rotate: 225deg;
      background: var(--light);
    }
    .active2 {
      transform: translate(-50%, 0);
      rotate: -225deg;
      background: var(--light);
    }
  }

  @media (max-width: 1440px) {
    .burger div {
      width: 1.6rem;
      height: 0.16rem;
    }
    .line2::before {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 768px) {
    padding: 0 1.2rem;
  }

  @media (max-width: 580px) {
    .mobileIcon {
      display: block;
      background: var(--pink2);
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .mobileIcon p {
      color: var(--light);
    }

    #socialMedia {
      display: none;
    }

    /* h1 {
      display: none;
    } */
  }
`;

export default Nav;
