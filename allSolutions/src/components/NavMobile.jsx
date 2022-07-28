import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { closeNav } from "../reducers/navReducer";
import SocialMedia from "./SocialMedia";

const NavMobile = () => {
    const dispatch = useDispatch();
    const { language } = useSelector((store) => store.lang);
    const { navOpen } = useSelector((store) => store.nav);

    const active = {
        transform: "translateX(100%)",
    }

    return (
        <StyledNavMobile style={!navOpen ? active : null}>
            <SocialMedia />
            <ul className="menu">
                <li><NavLink to="/" onClick={() => dispatch(closeNav())}>{language == "English" ? "home" : "casa"}</NavLink></li>
                <li><NavLink to="/About" onClick={() => dispatch(closeNav())}>{language == "English" ? "about" : "objetivo"}</NavLink></li>
                <li><a href="">{language == "English" ? "contact" : "contactenos"}</a></li>
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
        z-index: 2;
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
                cursor: pointer;
                a {
                    font-size: calc(0.8rem + 0.8vw);
                    color: var(--black);
                    font-weight: 300;
                    text-decoration: none;
                    transition: 0.3s ease;
                    &:nth-of-type(1),
                    &:nth-of-type(2) {
                        position: relative;
                        &::after {
                            content: "";
                            position: absolute;
                            bottom: 0;
                            left: 50%;
                            width: 0%;
                            transform: translate(-50%, 0);
                            height: 2px;
                            background: var(--colDom);
                            transition: 0.3s ease;
                        }
                        &:hover {
                            color: var(--colDom);
                            &::after {
                                width: 100%;
                            }
                        }
                    }
                    &.active {
                        &::before {
                            content: "";
                            position: absolute;
                            /* top: -20%; */
                            /* left: 50%; */
                            top: 42%;
                            left: -26%;
                            transform: translate(-50%, 0) scale(0.2);
                            padding: 0.2rem;
                            border-radius: 50%;
                            background: var(--colDom);
                            opacity: 0;
                            animation: bubble 0.8s 0.2s ease forwards;
                        }
                    }
                }
                &:nth-of-type(3){
                    border: 1px solid var(--black);
                    border-radius: 2rem;
                    transition: 0.3s ease;
                    &:hover {
                        border: 1px solid transparent;
                        background: var(--colDom);
                        a {
                            transition: 0.2s ease;
                            color: white;
                            &::after {
                                display: none;
                            }
                        }
                    }
                }
            }
        }
    }

    @keyframes bubble {
        to {
            opacity: 0.8;
            transform: translate(-50%, 0) scale(1);
        }
    }

    @media(max-width:480px) {
        .menu {
            bottom: 45%;
        }
    }
`

export default NavMobile;