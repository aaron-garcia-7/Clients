import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeEnglish, changeSpanish } from "../reducers/langReducer";
import { toggleNav, closeNav } from "../reducers/navReducer";
import { toggleContact } from "../reducers/contactReducer";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import logoBlue from '../images/logoBlue.svg'

const Nav = () => {
    const [fromTop, setFromTop] = useState(false);
    const [scrollDown, setScrollDown] = useState(false);
    const [y, setY] = useState(window.scrollY);

    const listenFromTop = () => {
        window.scrollY > 100 ? setFromTop(true) : setFromTop(false);
      }

    const handleNavHide = useCallback(
        e => {
          const window = e.currentTarget;
          if (y > window.scrollY) {
            setScrollDown(false);
          } else if (y < window.scrollY) {
            setScrollDown(true);
          }
          setY(window.scrollY);
        }, [y]
      );

      useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavHide);
        window.addEventListener("scroll", listenFromTop);
      
        return () => {
          window.removeEventListener("scroll", handleNavHide);
          window.removeEventListener("scroll", listenFromTop);
        };
      }, [handleNavHide]);


    //Redux
    const dispatch = useDispatch();
    const { language } = useSelector((store) => store.lang);
    const { navOpen } = useSelector((store) => store.nav);
    // const { contactOpen } = useSelector((store) => store.contact);
    
    return (
        <StyledNav style={window.innerWidth > 768 && fromTop && scrollDown ? {transform: "translate(0%, -100%)", transition: '0.6s ease, width 0s'} : {transition: '0.4s ease, width 0s'}}>
            <NavLink to="/" onClick={() => dispatch(closeNav())}>
                <img src={logoBlue}/>
            </NavLink>
            <div className="lang">
                <p className={language == "English" ? "bold" : ""} onClick={() => dispatch(changeEnglish())}>En</p>
                <p>&nbsp;|&nbsp;</p>
                <p className={language == "Spanish" ? "bold" : ""} onClick={() => dispatch(changeSpanish())}>Es</p>
            </div>
            <ul className="menu">
                <li><NavLink to="/">{language == "English" ? "home" : "casa"}</NavLink></li>
                <li><NavLink to="/About">{language == "English" ? "about" : "objetivo"}</NavLink></li>
                <li><p className="contactLink" onClick={() => dispatch(toggleContact())}>{language == "English" ? "contact" : "contactenos"}</p></li>
            </ul>
            <div className={navOpen ? "burger burgerActive" : "burger"} onClick={() => dispatch(toggleNav())}>
                <div />
                <div />
                <div />
            </div>
        </StyledNav>
    )
}

const StyledNav = styled('nav')`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 8vh;
    min-height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fafafadd;
    backdrop-filter: blur(4px);
    z-index: 2;
    > * {
        margin: 0 4%;
    }
    img {
        width: calc(10rem + 4vw);
    }
    .lang {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0;
        display: flex;
        p {
            font-size: calc(0.8rem + 0.4vw);
            cursor: default;
        }
        p:nth-of-type(1),
        p:nth-of-type(3){
            cursor: pointer;
            &:hover {
                font-weight: 500;
            }
        }
    }
    .bold {
        color: var(--colDom);
        font-weight: 500;
    }
    .menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 20vw;
        min-width: 20rem;
        li {
            padding: 0.2rem 1rem;
            a,
            .contactLink {
                position: relative;
                font-size: calc(0.8rem + 0.4vw);
                color: var(--black);
                font-weight: 300;
                text-decoration: none;
                transition: 0.3s ease;
                cursor: pointer;
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
                        top: 40%;
                        left: -28%;
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
                .contactLink {
                    border: 1px solid var(--black);
                    border-radius: 2rem;
                    transition: 0.3s ease;
                    padding: 0.2rem 1rem;
                    &:hover {
                        border: 1px solid transparent;
                        background: var(--colDom);
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
    .burger {
        display: none;
    }

    @keyframes bubble {
        to {
            opacity: 0.8;
            transform: translate(-50%, 0) scale(1);
        }
    }

    @media (max-width: 1080px) {
        .menu {
            width: 17.2vw;
            min-width: 17.2rem;
        }
    }

    @media (max-width: 768px) {
        .lang {
            /* display: none; */
            left: auto;
            right: calc(4rem + 2%);
            transform: translate(0%, -50%);
        }
        .menu {
            display: none;
        }
        .burger {
            display: block;
            width: 2rem;
            height: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            cursor: pointer;
            div {
                width: 100%;
                height: 2px;
                background: var(--black);
                transition: 0.4s ease;
                &:nth-of-type(1) {
                    width: 60%;
                }
                &:nth-of-type(2) {
                    /* width: 72%; */
                }
                &:nth-of-type(3) {
                    width: 60%;
                    align-self: flex-end;
                }
            }
            &:hover {
                div {
                    &:nth-of-type(1),
                    &:nth-of-type(3){
                        width: 100%;
                    }
                }
            }
        }
        .burgerActive {
            div {
                &:nth-of-type(1) {
                    width: 50%;
                    transform: rotate(45deg) translate(3px,0.4px);
                }
                &:nth-of-type(2) {
                    transform: rotate(-45deg);
                }
                &:nth-of-type(3) {
                    width: 50%;
                    transform: rotate(45deg) translate(-3px, -0.4px);
                    align-self: flex-end;
                }
            }
            &:hover {
                div {
                    &:nth-of-type(1),
                    &:nth-of-type(3){
                        width: 50%;
                    }
                }
            }
        }
    }

    @media (max-width: 480px) {
        .burger {
            &:hover {
                div {
                    &:nth-of-type(1),
                    &:nth-of-type(3){
                        width: 60%;
                    }
                }
            }
        }
        .burgerActive {
            div {
                &:nth-of-type(1) {
                    width: 50%;
                    transform: rotate(45deg) translate(3px,0.4px);
                }
                &:nth-of-type(2) {
                    transform: rotate(-45deg);
                }
                &:nth-of-type(3) {
                    width: 50%;
                    transform: rotate(45deg) translate(-3px, -0.4px);
                    align-self: flex-end;
                }
            }
            &:hover {
                div {
                    &:nth-of-type(1),
                    &:nth-of-type(3){
                        width: 50%;
                    }
                }
            }
        }
    }
`

export default Nav;