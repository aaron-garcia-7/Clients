import { NavLink } from "react-router-dom";
import styled from "styled-components";

import logo from "../images/logoImg.svg";

const Logo = ({ inFooter, inNav, hideLogo, inHome }) => {
  return (
    <StyledLogo id={inFooter ? "footerLogo" : inNav ? "navLogo" : hideLogo ? "hide" : ""}>
      <NavLink to="/" className="logoLink">
        <img src={logo} alt="Mark Veldevere Guitar Studios" className="guitarSvg" />
      </NavLink>
    </StyledLogo>
  );
};

const StyledLogo = styled("div")`
  position: relative;
  top: 3rem;
  left: 2rem;
  opacity: 0.9;
  width: 14%;
  min-width: 10rem;
  z-index: 8;
  .logoLink{
    position: absolute;
    img {
      width: calc(8rem + 8vw);
    }
  }
`;

export default Logo;
