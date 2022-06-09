import styled from "styled-components";

import logo from "../images/graphics/guitarLogo.svg";

const Logo = ({ inFooter }) => {
  return (
    <StyledLogo id={inFooter ? "footerLogo" : ""}>
      <img src={logo} alt="" className="guitarSvg" />
      <h2 className="logoText">
        Mark Veldevere
        <br />
        Guitar Studios
      </h2>
    </StyledLogo>
  );
};

const StyledLogo = styled("div")`
  position: relative;
  top: 4px;
  left: -4px;
  width: calc(10rem + 10vw);
  height: 8rem;
  > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .guitarSvg {
    width: calc(4rem + 2vw);
  }
  .logoText {
    font-size: calc(0.8rem + 0.8vw);
    width: 100%;
    text-align: center;
  }
`;

export default Logo;
