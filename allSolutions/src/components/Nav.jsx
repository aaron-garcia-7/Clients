import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

import Logo from "./Logo";

const Nav = ({navToggle, setNavToggle}) => {
    const [fromTop, setFromTop] = useState(false);
    const [scrollDown, setScrollDown] = useState(false);
    const [y, setY] = useState(window.scrollY);

    const listenFromTop = () => {
        window.scrollY > 60 ? setFromTop(true) : setFromTop(false);
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

    
    const toggleMenu = () => {
        setNavToggle(prev => !prev);
    }
    
    return (
        <StyledNav style={window.innerWidth > 768 && fromTop && scrollDown ? {transform: "translate(0%, -100%)", transition: '0.6s ease, width 0s'} : {transition: '0.4s ease, width 0s'}}>
            <Logo inHeader={true}/>
            <ul className="menu">
                <li><a href="#services" onClick={toggleMenu}>Services</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Login</a></li>
            </ul>
            <div className={navToggle ? "burger burgerActive" : "burger"} onClick={toggleMenu}>
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
    .menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 20vw;
        min-width: 20rem;
        li {
            padding: 0.2rem 1rem;
            cursor: pointer;
            a {
                font-size: calc(0.8rem + 0.4vw);
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
            }
            &:nth-of-type(3){
                border: 1px solid var(--black);
                border-radius: 2rem;
                transition: 0.3s ease;
                &:hover {
                    border: 1px solid transparent;
                    background: var(--colDom);
                }
                a {
                    transition: 0.3s ease;
                    &::after {
                        display: none;
                    }
                    &:hover {
                        color: white;
                    }
                }
            }
        }
    }
    .burger {
        display: none;
    }

    @media (max-width: 768px) {
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