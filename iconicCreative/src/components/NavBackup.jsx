import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components'
import logo from '../images/graphics/logo.svg';
import logoAlt from '../images/graphics/logoAlt.svg';

function Nav({ navOpen, setNavOpen }) {
    const [fromTop, setFromTop] = useState(false);
    const location = useLocation();

    const listenFromTop = () => {
        window.scrollY > 400 ? setFromTop(true) : setFromTop(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", listenFromTop);
    
    return () => {
        window.removeEventListener("scroll", listenFromTop);
    };
    }, [fromTop]);

    const navStyle = {
        pointerEvents: fromTop ? "none" : "all",
    }

    const logoStyle = {
    opacity: fromTop && !navOpen ? 0 : 1,
    pointerEvents: fromTop && !navOpen ? "none" : "all",
    transition: !navOpen ? '0.6s ease' : '0.6s ease 0.4s',
    }

    const linkStyle = {
    opacity: fromTop ? 0 : 1,
    pointerEvents: fromTop ? 'none' : 'all',
    transition: fromTop ? "0.6s ease, width 0s" : '0.4s ease, width 0s',
    }

  return (
    <ScNav style={navStyle}>
        <NavLink to="/" style={logoStyle} onClick={() => setNavOpen(false)} tabIndex={1}>
            <img src={location.pathname === '/' || navOpen ? logo : logoAlt} alt="iconic" className='navLogo'/>
        </NavLink>
        {location.pathname === "/" && <ul className='navLinks' style={linkStyle}>
            <li>
                <NavLink end to="/OurWork" tabIndex={2}>Our Work</NavLink>
            </li>
            <li>
                <NavLink end to="/Services" tabIndex={3}>Services</NavLink>
            </li>
            <li>
                <NavLink end to="/Team" tabIndex={4}>Team</NavLink>
            </li>
            <li>
                <a href="https://calendly.com/iconic-creative" target="_blank" rel="noreferrer" tabIndex={5}>Let's Talk</a>
            </li>
        </ul>}
        {location.pathname !== "/" && <ul className='navLinksBanner' style={linkStyle}>
            <li>
                <NavLink end to="/OurWork" tabIndex={2}>Our Work</NavLink>
            </li>
            <li>
                <NavLink end to="/Services" tabIndex={3}>Services</NavLink>
            </li>
            <li>
                <NavLink end to="/Team" tabIndex={4}>Team</NavLink>
            </li>
            <li>
                <a href="https://calendly.com/iconic-creative" target="_blank" rel="noreferrer" tabIndex={5}>Let's Talk</a>
            </li>
        </ul>}
        <div className={navOpen ? "burger active" : "burger"} onClick={() => setNavOpen(prev => !prev)}>
            <div className="line" />
            <div className="line" />
            <div className="line" />
        </div>
    </ScNav>
  )
}

const ScNav = styled('nav')`
    position: fixed;
    top: 1rem;
    width: 100vw;
    height: 4vw;
    min-height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 6%;
    z-index: 10;
    .navLogo {
        width: calc(4rem + 4vw);
        transition: opacity 0.6s ease;
    }

    .navLinks {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: calc(12rem + 12vw);
        li {
            a {
                color: var(--dark);
                font-size: calc(0.6rem + 0.6vw);
                transition: color 0.4s ease 0.2s;
            }
            &:nth-of-type(1) {
                &:hover {
                    a {
                        color: var(--light);
                    }
                    & ~ :nth-of-type(4) {
                        a {
                            color: var(--dark);
                        }
                        &::after {
                            transform: translate(-260%, -50%);
                            background: var(--dark);
                            width: 148%;
                            /* transition: 0.6s cubic-bezier(0.42, -0.49, 0.64, 1.24); */
                            transition: 0.4s ease;
                        }
                    }
                }
            }
            &:nth-of-type(2) {
                &:hover {
                    a {
                        color: var(--light);
                    }
                    & ~ :nth-of-type(4) {
                        a {
                            color: var(--dark);
                        }
                        &::after {
                            transform: translate(-164%, -50%);
                            width: 148%;
                            background: var(--dark);
                            /* transition: 0.5s cubic-bezier(0.42, -0.49, 0.64, 1.24); */
                            transition: 0.4s ease;
                        }
                    }
                }
            }
            &:nth-of-type(3) {
                &:hover {
                    a {
                        color: var(--light);
                    }
                    & ~ :nth-of-type(4) {
                        a {
                            color: var(--dark);
                        }
                        &::after {
                            transform: translate(-110%, -50%);
                            width: 124%;
                            background: var(--dark);
                            /* transition: 0.4s cubic-bezier(0.42, -0.49, 0.64, 1.24); */
                            transition: 0.4s ease;
                        }
                    }
                }
            }
            &:nth-of-type(4) {
                position: relative;
                &::after {
                    content: "";
                    position: absolute;
                    top: 50%;
                    right: -24%;
                    transform: translate(0, -50%);
                    width: calc(2rem + 1vw);
                    height: calc(2rem + 1vw);
                    border-radius: 4rem;
                    background: #d5d5d5;
                    z-index: -1; 
                    pointer-events: none;
                    /* transition: 0.6s cubic-bezier(0.42, -0.49, 0.64, 1.24); */
                    transition: 0.6s ease;
                }
                a {
                    color: var(--dark);
                }
                &:hover {
                    &::after {
                        width: 148%;
                        background: var(--dark);
                        transition: 0.3s cubic-bezier(0.42, -0.49, 0.64, 1.24);
                    }
                    a {
                        color: var(--light);
                    }
                }
            }
        }
    }

    .navLinksBanner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: calc(12rem + 12vw);
        li {
            a {
                color: var(--light);
                font-size: calc(0.6rem + 0.6vw);
                transition: color 0.4s ease 0.2s;
            }
            &:nth-of-type(1) {
                &:hover {
                    a {
                        color: var(--dark);
                    }
                    & ~ :nth-of-type(4) {
                        a {
                            color: var(--light);
                        }
                        &::after {
                            transform: translate(-260%, -50%);
                            background: var(--light);
                            width: 148%;
                            /* transition: 0.6s cubic-bezier(0.42, -0.49, 0.64, 1.24); */
                            transition: 0.4s ease;
                        }
                    }
                }
            }
            &:nth-of-type(2) {
                &:hover {
                    a {
                        color: var(--dark);
                    }
                    & ~ :nth-of-type(4) {
                        a {
                            color: var(--light);
                        }
                        &::after {
                            transform: translate(-164%, -50%);
                            width: 148%;
                            background: var(--light);
                            /* transition: 0.5s cubic-bezier(0.42, -0.49, 0.64, 1.24); */
                            transition: 0.4s ease;
                        }
                    }
                }
            }
            &:nth-of-type(3) {
                &:hover {
                    a {
                        color: var(--dark);
                    }
                    & ~ :nth-of-type(4) {
                        a {
                            color: var(--light);
                        }
                        &::after {
                            transform: translate(-110%, -50%);
                            width: 124%;
                            background: var(--light);
                            /* transition: 0.4s cubic-bezier(0.42, -0.49, 0.64, 1.24); */
                            transition: 0.4s ease;
                        }
                    }
                }
            }
            &:nth-of-type(4) {
                position: relative;
                &::after {
                    content: "";
                    position: absolute;
                    top: 50%;
                    right: -24%;
                    transform: translate(0, -50%);
                    width: calc(2rem + 1vw);
                    height: calc(2rem + 1vw);
                    border-radius: 4rem;
                    background: var(--offDark);
                    z-index: -1; 
                    pointer-events: none;
                    /* transition: 0.6s cubic-bezier(0.42, -0.49, 0.64, 1.24); */
                    transition: 0.6s ease;
                }
                a {
                    color: var(--light);
                }
                &:hover {
                    &::after {
                        width: 148%;
                        background: var(--light);
                        transition: 0.3s cubic-bezier(0.42, -0.49, 0.64, 1.24);
                    }
                    a {
                        color: var(--dark);
                    }
                }
            }
        }
    }

    .burger {
        display: none;
    }

    @media (max-width: 1440px){
        /* padding: 0 4%; */
    }

    @media (max-width: 768px){
       position: fixed;
       top: 1rem;
        .navLinks {
            display: none;
        }

        .navLinksBanner {
            display: none;
        }

        .burger {
            display: block;
            /* background: var(--offWhite); */
            transition: all 0.56s;
            position: relative;
            width: 43px;
            height: 43px;
            border-radius: 100%;
            cursor: pointer;
                .line { 
                width: 23px; 
                height: 2px; 
                position: absolute;
                background: #313d44; 
                right: 0;
                margin: auto;
                left: 0;
                border-radius: 1px;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 2);
                top: calc(50% - ((5.5px)) + -1px);
                &:nth-of-type(1) {
                    top: calc(50% - ((5.5px)) + -1px);
                    width: 23px;
                }
                &:nth-of-type(2) {
                    top: calc(50% - ((5.5px)) + 3px);
                    width: 23px;
                }
                &:nth-of-type(3) {
                    top: calc(50% - ((5.5px)) + 7px);
                    width: 23px;
                }
            }
            
            &.active {
                transform:scale(1.24) rotate(0deg);
                .line:nth-of-type(1) {
                    transform: rotate(45deg);
                    top: calc(50% - (1.5px))!important;
                }
                .line:nth-of-type(2) {
                    left: -8px !important;
                    opacity: 0;
                }
                .line:nth-of-type(3) {
                    transform: rotate(-45deg);
                    top: calc(50% - (1.5px))!important;
                }
            }
        }
    }

    @media (max-width: 480px) {
        top: 2rem;
    }
`

export default Nav