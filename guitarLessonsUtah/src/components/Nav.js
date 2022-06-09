import styled from "styled-components";

import { Link } from "react-router-dom";

const Nav = ({ menuToggle, setMenuToggle }) => {
  return (
    <StyledNav
      style={
        menuToggle ? { opacity: 1, zIndex: 5 } : { opacity: 0, zIndex: -1 }
      }
    >
      <ul>
        <li>
          <Link to="/" onClick={() => setMenuToggle(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="./AboutPage" onClick={() => setMenuToggle(false)}>
            About Mark
          </Link>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">Student Resources</a>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled("nav")`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  min-height: 36rem;
  background: #e5d6ccef;
  backdrop-filter: blur(3px);
  pointer-events: all;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    list-style: none;
    li {
      margin: 0.4rem 0;
      a {
        color: #313131;
        font-size: calc(1.6rem + 1.6vw);
        text-decoration: none;
      }
    }
  }
  @media screen and (max-width: 480px) {
    ul {
      transform: translate(0, -20%);
    }
  }
`;
export default Nav;
