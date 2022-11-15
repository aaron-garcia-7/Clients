import React, { useState, useEffect, useCallback } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import logo from '../images/graphics/logo.svg';

function Nav({ navOpen, setNavOpen, pageWidth }) {
    const [fromTop, setFromTop] = useState(false);
    const [y, setY] = useState(window.scrollY);
    const [scrollDown, setScrollDown] = useState(false);

    const listenFromTop = () => {
        window.scrollY > 800 ? setFromTop(true) : setFromTop(false);
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

      const navStyle = {
        transform: !scrollDown && fromTop ? 'translate(0, 0)' : 'translate(0, -100%)',
        transition: fromTop && scrollDown ? "0.6s ease, width 0s" : '0.4s ease, width 0s',
      }

  return (
    <ScNav style={navStyle}>
        <NavLink to="/" onClick={() => setNavOpen(false)} tabIndex={20}>
            <img src={logo} alt="iconic" className='navLogo'/>
        </NavLink>
        <ul className='navLinks'>
            <li>
                <NavLink end to="/">Home</NavLink>
            </li>
            <li>
                <NavLink end to="/OurWork" tabIndex={21}>Our Work</NavLink>
            </li>
            <li>
                <NavLink end to="/Services" tabIndex={22}>Services</NavLink>
            </li>
            <li>
                <NavLink end to="/About" tabIndex={23}>About</NavLink>
            </li>
            <li>
                <a href="https://calendly.com/iconic-creative" target="_blank" rel="noreferrer" tabIndex={24}>Let's Talk</a>
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
    /* background: var(--offWhite); */
    background: #fafafa99;
    backdrop-filter: blur(4px);
    position: fixed;
    top: 0;
    width: 100vw;
    height: 4.8vw;
    min-height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 6%;
    z-index: 12;
    /* box-shadow: 0px 3px 15px rgba(0,0,0,0.2); */

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
                            transform: translate(-454%, -50%);
                            background: var(--dark);
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
                            transform: translate(-268%, -50%);
                            width: 102%;
                            background: var(--dark);
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
                            transform: translate(-176%, -50%);
                            width: 100%;
                            background: var(--dark);
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
                            transform: translate(-120%, -50%);
                            width: 82%;
                            background: var(--dark);
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
                        width: 104%;
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

    .burger {
        display: none;
    }

    @media (max-width: 1440px){
        /* padding: 0 4%; */
    }

    @media (max-width: 768px){
        .navLinks {
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
        top: 6%;
    }
`

export default Nav