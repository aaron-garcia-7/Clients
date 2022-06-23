import styled from "styled-components";

import logo from "../images/logoImg.svg";

const Logo = ({ inFooter }) => {
  return (
    <StyledLogo id={inFooter ? "footerLogo" : ""}>
      <img src={logo} alt="" className="guitarSvg" />
    </StyledLogo>
  );
};

const StyledLogo = styled("div")`
  position: relative;
  top: 3rem;
  left: 2rem;
  opacity: 0.9;
  img {
    width: calc(8rem + 8vw);
  }
`;

export default Logo;
