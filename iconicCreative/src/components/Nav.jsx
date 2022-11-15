import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components'
import logo from '../images/graphics/logo.svg';
import logoAlt from '../images/graphics/logoAlt.svg';

function Nav({ navOpen, setNavOpen, pageWidth }) {
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
        pointerEvents: fromTop && pageWidth > 768 ? "none" : "all",
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
                <NavLink end to="/" >Home</NavLink>
            </li>
            <li>
                <NavLink end to="/OurWork" tabIndex={2}>Our Work</NavLink>
            </li>
            <li>
                <NavLink end to="/Services" tabIndex={3}>Services</NavLink>
            </li>
            <li>
                <NavLink end to="/About" tabIndex={4}>About</NavLink>
            </li>
            <li>
                <a href="https://calendly.com/iconic-creative" target="_blank" rel="noreferrer" tabIndex={5}>Let's Talk</a>
            </li>
        </ul>}
        {location.pathname !== "/" && <ul className='navLinksBanner' style={linkStyle}>
            <li>
                <NavLink end to="/" >Home</NavLink>
            </li>
            <li>
                <NavLink end to="/OurWork" tabIndex={2}>Our Work</NavLink>
            </li>
            <li>
                <NavLink end to="/Services" tabIndex={3}>Services</NavLink>
            </li>
            <li>
                <NavLink end to="/About" tabIndex={4}>About</NavLink>
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
        align-items: center;
        li {
            a {
                color: var(--dark);
                font-size: calc(0.6rem + 0.6vw);
                transition: color 0.4s ease;
                margin-left: 2vw;
            }
            &:nth-of-type(1) {
                &:hover {
                    a {
                        color: var(--light);
                        transition-delay: 0.2s;
                    }
                    & ~ :nth-of-type(5) {
                        a {
                            color: var(--dark);
                        }
                        &::after {
                            background: var(--dark);
                            transform: translate(-454%, -50%);
                            width: 82%;
                            /* transition: 0.6s cubic-bezier(.1,.9,.73,1.12); */
                            transition: 0.4s ease;
                        }
                    }
                }
            }
            &:nth-of-type(2) {
                &:hover {
                    a {
                        color: var(--light);
                        transition-delay: 0.2s;
                    }
                    & ~ :nth-of-type(5) {
                        a {
                            color: var(--dark);
                        }
                        &::after {
                            background: var(--dark);
                            transform: translate(-268%, -50%);
                            width: 102%;
                            /* transition: 0.5s cubic-bezier(.1,.9,.73,1.12); */
                            transition: 0.4s ease;
                        }
                    }
                }
            }
            &:nth-of-type(3) {
                &:hover {
                    a {
                        color: var(--light);
                        transition-delay: 0.2s;
                    }
                    & ~ :nth-of-type(5) {
                        a {
                            color: var(--dark);
                        }
                        &::after {
                            background: var(--dark);
                            transform: translate(-176%, -50%);
                            width: 100%;
                            /* transition: 0.4s cubic-bezier(.1,.9,.73,1.12); */
                            transition: 0.4s ease;
                        }
                    }
                }
            }
            &:nth-of-type(4) {
                &:hover {
                    a {
                        color: var(--light);
                        transition-delay: 0.2s;
                    }
                    & ~ :nth-of-type(5) {
                        a {
                            color: var(--dark);
                        }
                        &::after {
                            background: var(--dark);
                            transform: translate(-120%, -50%);
                            width: 82%;
                            /* transition: 0.4s cubic-bezier(.1,.9,.73,1.12); */
                            transition: 0.4s ease;
                        }
                    }
                }
            }
            &:nth-of-type(5) {
                position: relative;
                &::after {
                    content: "";
                    position: absolute;
                    top: 50%;
                    right: -18%;
                    transform: translate(0, -50%);
                    width: calc(2rem + 1vw);
                    height: calc(2rem + 1vw);
                    border-radius: 4rem;
                    background: #d5d5d5;
                    z-index: -1; 
                    pointer-events: none;
                    transition: 0.6s ease;
                }
                a {
                    color: var(--dark);
                }
                &:hover {
                    &::after {
                        background: var(--dark);
                        width: 104%;
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
        align-items: center;
        li {
            a {
                color: var(--light);
                font-size: calc(0.6rem + 0.6vw);
                transition: color 0.4s ease;
                margin-left: 2vw;
            }
            &:nth-of-type(1) {
                &:hover {
                    a {
                        color: var(--dark);
                        transition-delay: 0.2s;
                    }
                    & ~ :nth-of-type(5) {
                        a {
                            color: var(--light);
                        }
                        &::after {
                            background: var(--light);
                            transform: translate(-454%, -50%);
                            width: 82%;
                            /* transition: 0.6s cubic-bezier(.1,.9,.73,1.12); */
                            transition: 0.4s ease;
                        }
                    }
                }
            }
            &:nth-of-type(2) {
                &:hover {
                    a {
                        color: var(--dark);
                        transition-delay: 0.2s;
                    }
                    & ~ :nth-of-type(5) {
                        a {
                            color: var(--light);
                        }
                        &::after {
                            background: var(--light);
                            transform: translate(-268%, -50%);
                            width: 102%;
                            /* transition: 0.5s cubic-bezier(.1,.9,.73,1.12); */
                            transition: 0.4s ease;
                        }
                    }
                }
            }
            &:nth-of-type(3) {
                &:hover {
                    a {
                        color: var(--dark);
                        transition-delay: 0.2s;
                    }
                    & ~ :nth-of-type(5) {
                        a {
                            color: var(--light);
                        }
                        &::after {
                            background: var(--light);
                            transform: translate(-176%, -50%);
                            width: 100%;
                            /* transition: 0.4s cubic-bezier(.1,.9,.73,1.12); */
                            transition: 0.4s ease;
                        }
                    }
                }
            }
            &:nth-of-type(4) {
                &:hover {
                    a {
                        color: var(--dark);
                        transition-delay: 0.2s;
                    }
                    & ~ :nth-of-type(5) {
                        a {
                            color: var(--light);
                        }
                        &::after {
                            background: var(--light);
                            transform: translate(-120%, -50%);
                            width: 82%;
                            /* transition: 0.4s cubic-bezier(.1,.9,.73,1.12); */
                            transition: 0.4s ease;
                        }
                    }
                }
            }
            &:nth-of-type(5) {
                position: relative;
                &::after {
                    content: "";
                    position: absolute;
                    top: 50%;
                    right: -18%;
                    transform: translate(0, -50%);
                    width: calc(2rem + 1vw);
                    height: calc(2rem + 1vw);
                    border-radius: 4rem;
                    background: var(--offDark);
                    z-index: -1; 
                    pointer-events: none;
                    transition: 0.6s ease;
                }
                a {
                    color: var(--light);
                }
                &:hover {
                    &::after {
                        background: var(--light);
                        width: 104%;
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