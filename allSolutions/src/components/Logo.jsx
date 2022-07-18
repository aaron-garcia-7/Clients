import styled from "styled-components";

import logo from '../images/graphics/logo.svg';
import logoBlue from '../images/graphics/logoBlue.svg';

const Logo = ({inHeader, unique}) => {
    return (
        <StyledLogo href="#" id={unique ? 'logo' : ""}>
            <img src={inHeader ? logoBlue : logo} alt="All Solutions Logo" />
            <h3 style={inHeader ? {color: "var(--colDom)"} : {color: "white"}}>all solutions</h3>
        </StyledLogo>
    )
}

const StyledLogo = styled('a')`
    display: flex;
    align-items: center;
    text-decoration: none;
    img {
        width: calc(2rem + 1vw);
        margin-right: 1rem;
    }
    h3 {
        font-size: calc(1rem + 1vw);
        font-weight: 700;
        letter-spacing: 1px;
    }
`

export default Logo;