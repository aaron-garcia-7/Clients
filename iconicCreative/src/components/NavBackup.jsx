// 10/10 Swapping the emphasized link to match the call to action. 

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import logo from '../images/graphics/logo.svg';

function Nav({ navOpen, setNavOpen }) {
    const [fromTop, setFromTop] = useState(false);
    const [y, setY] = useState(window.scrollY);
    // const [scrollDown, setScrollDown] = useState(false);

    const listenFromTop = () => {
        window.scrollY > 100 ? setFromTop(true) : setFromTop(false);
      }

    // const handleNavHide = useCallback(
    //     e => {
    //       const window = e.currentTarget;
    //       if (y > window.scrollY) {
    //         setScrollDown(false);
    //       } else if (y < window.scrollY) {
    //         setScrollDown(true);
    //       }
    //       setY(window.scrollY);
    //     }, [y]
    //   );

      useEffect(() => {
        setY(window.scrollY);
        // window.addEventListener("scroll", handleNavHide);
        window.addEventListener("scroll", listenFromTop);
      
        return () => {
        //   window.removeEventListener("scroll", handleNavHide);
          window.removeEventListener("scroll", listenFromTop);
        };
      }, [fromTop]);

      const hideStyle = {
        opacity: 0,
        pointerEvents: 'none',
        transition: 'opacity 0.6s ease',
      }

      const showStyle = {
        opacity: 1,
        pointerEvents: 'all',
        transition: 'opacity 0.6s ease',
      }

  return (
    <ScNav>
        <img src={logo} alt="iconic" className='navLogo' style={fromTop ? hideStyle : showStyle}/>
        <ul className='navLinks' style={fromTop ? hideStyle : showStyle}>
            <li className='item1'>
                <a href="">Our Work</a>
            </li>
            <li className='item2'>
                <a href="">Services</a>
            </li>
            <li className='item3'>
                <a href="">Team</a>
            </li>
            <li className='item4'>
                <a href="">Let's Talk</a>
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
    top: 2%;
    width: 100vw;
    /* height: 4rem; */
    height: 5vw;
    min-height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 0 6% 0 6%; */
    padding: 0 6%;
    /* background: linear-gradient(180deg, #ECECECbb, #ECECEC77);
    backdrop-filter: blur(4px); */
    z-index: 5; // May need to change
    .navLogo {
        width: calc(4rem + 4vw);
        transition: opacity 0.6s ease;
    }

    .navLinks {
        /* border: 1px dashed grey; */
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* width: 40%; */
        /* width: 24rem; */
        width: calc(12rem + 12vw); // Check on large screen
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
                            /* transition: 0.4s cubic-bezier(0.42, -0.49, 0.64, 1.24); */
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
                            /* transition: 0.4s cubic-bezier(0.42, -0.49, 0.64, 1.24); */
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
                            transform: translate(-108%, -50%);
                            width: 124%;
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
                    width: 148%;
                    height: calc(2rem + 1vw);
                    border-radius: 4rem;
                    background: var(--dark);
                    z-index: -1; 
                    pointer-events: none;
                    /* transition: 0.3s cubic-bezier(0.42, -0.49, 0.64, 1.24); */
                    transition: 0.4s ease;
                }
                a {
                    color: var(--light);
                }
                &:hover {
                    &::after {
                        width: calc(2rem + 1vw);
                        background: #d5d5d5;
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