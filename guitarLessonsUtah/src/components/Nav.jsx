import TopNav from './TopNav'
import ScrollNav from './ScrollNav'

import styled from "styled-components";

const Nav = () => {
  
  return (
    <StyledNav>
      <TopNav />
      <ScrollNav />
    </StyledNav>
  );
};

const StyledNav = styled("nav")`
  @media screen and (max-width: 768px){
    display: none;
  }
`

export default Nav;
