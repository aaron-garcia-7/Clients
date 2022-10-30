import React, { useState, useEffect, useCallback } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import logoAlt from '../images/graphics/logoAlt.svg';

function Nav({ navOpen, setNavOpen }) {
    const [fromTop, setFromTop] = useState(false);
    const [y, setY] = useState(window.scrollY);
    const [scrollDown, setScrollDown] = useState(false);

    const listenFromTop = () => {
        window.scrollY > 280 ? setFromTop(true) : setFromTop(false);
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
      }, [fromTop, handleNavHide]);

    const logoStyle = {
        opacity: fromTop && scrollDown && !navOpen ? 0 : 1,
        pointerEvents: fromTop && scrollDown && !navOpen ? "none" : "all",
        transition: !navOpen ? '0.6s ease, left 0s' : '0.6s ease 0.4s, left 0s',
    }

    const linkStyle = {
        opacity: fromTop && scrollDown ? 0 : 1,
        pointerEvents: fromTop && scrollDown ? 'none' : 'all',
        transition: fromTop && scrollDown ? "0.6s ease, left 0s, width 0s" : '0.4s ease, left 0s, width 0s',
    }

  return (
    <ScNav>
        <NavLink to="/" style={logoStyle} onClick={() => setNavOpen(false)} tabIndex={1}>
            <img src={logoAlt} alt="iconic" className='navLogo'/>
        </NavLink>
        <ul className='navLinks' style={linkStyle}>
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
        </ul>
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
    top: 1.2rem;
    width: 87vw;
    height: 4vw;
    min-height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 5;
    background: transparent;
    mix-blend-mode: exclusion;
    left: 50%;
    transform: translate(-50%, 0);
    opacity: 0;
    animation: fade 1.2s ease 0.2s forwards;
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
                    /* background: #d5d5d5; */
                    background: #1f1f1f;
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

    @media (max-width: 768px){
        width: 86vw;
        .navLinks {
            display: none;
        }

        .burger {
            display: block;
            transition: all 0.56s, right 0s;
            position: relative;
            width: 43px;
            height: 43px;
            border-radius: 100%;
            cursor: pointer;
                .line { 
                /* background: var(--offDark); */
                background: var(--light); 
                mix-blend-mode: exclusion;
                width: 23px; 
                height: 2px; 
                position: absolute;
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

                .line {
                    background: var(--light); 
                    mix-blend-mode: normal;
                }
                
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

export default Nav;