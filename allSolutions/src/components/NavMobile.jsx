import styled from "styled-components";
import SocialMedia from "./SocialMedia";

const NavMobile = ({navToggle}) => {

    const active = {
        transform: "translateX(100%)",
    }

    return (
        <StyledNavMobile style={!navToggle ? active : null}>
            <SocialMedia />
            <ul className="menu">
                <li><a href="">Services</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Login</a></li>
            </ul>
        </StyledNavMobile>
    )
}

const StyledNavMobile = styled('nav')`
    display: none;
    @media (max-width: 768px) {
        display: block;
        position: fixed;
        top: 4rem;
        right: 0;
        width: 38vw;
        min-width: 12rem;
        height: 90.6vh;
        min-height: 32rem;
        background: #fafafadd;
        backdrop-filter: blur(4px);
        z-index: 1;
        transition: 0.4s transform ease;
        > * {
            margin: 0 4%;
        }
        #socialMedia {
            position: absolute;
            top: 16%;
            left: 50%;
            transform: translate(-50%, 0);
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 54%;
            min-width: 6.8rem;
            height: auto;
            li {
                a {
                    .faIcon {
                        font-size: calc(1.2rem + 1vw);
                        color: var(--colDom);
                        &:hover {
                            color: var(--colDom);
                        }
                    }
                }
            }
        }
        .menu {
            position: absolute;
            bottom: 35%;
            left: 50%;
            transform: translate(-50%, 0);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            height: 20%;
            min-height: 10rem;
            width: auto;
            min-width: auto;
            li {
                padding: 0.2rem 1rem;
                a {
                    font-size: calc(0.8rem + 0.8vw);
                    color: var(--black);
                    font-weight: 300;
                    text-decoration: none;
                }
                &:nth-of-type(3){
                    border: 1px solid var(--black);
                    border-radius: 2rem;
                }
            }
        }
    }

    @media(max-width:480px) {
        .menu {
            bottom: 45%;
        }
    }
`

export default NavMobile;