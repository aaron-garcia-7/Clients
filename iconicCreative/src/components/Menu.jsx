import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function Menu({navOpen, setNavOpen}) {

    const menuStyle = {
        transform: navOpen ? "translate(0, 0)" : 'translate(0, -100%)',
        transition: navOpen ? "transform 0.5s ease" : "transform 0.6s ease 0.74s",
    }
    const menuItem1 = {
        transform: navOpen ? "translate(0, 0)" : "translate(0, 100%)",
        transition: navOpen ? "0.6s ease 0.3s" : "0.6s ease 0s",
    }
    const menuItem2 = {
        transform: navOpen ? "translate(0, 0)" : "translate(0, 100%)",
        transition: navOpen ? "0.6s ease 0.4s" : "0.6s ease 0.1s",
    }
    const menuItem3 = {
        transform: navOpen ? "translate(0, 0)" : "translate(0, 100%)",
        transition: navOpen ? "0.6s ease 0.5s" : "0.6s ease 0.2s",
    }
    const menuItem4 = {
        transform: navOpen ? "translate(0, 0)" : "translate(0, 100%)",
        transition: navOpen ? "0.6s ease 0.6s" : "0.6s ease 0.3s",
    }
    const menuItem5 = {
        transform: navOpen ? "translate(0, 0)" : "translate(0, 100%)",
        transition: navOpen ? "0.6s ease 0.7s" : "0.6s ease 0.4s",
    }
    const email = {
        opacity: navOpen ? 1 : 0,
        transition: navOpen ? "opacity 0.4s ease 0.8s" : "opacity 0.4s ease 0.4s",
    }

  return (
    <ScMenu style={menuStyle}>
        <ul>
            <li>
                <div className='itemBlock' style={menuItem1}>
                    <NavLink to="/" onClick={() => setNavOpen(false)}>Home</NavLink>
                </div>
            </li>
            <li>
                <div className='itemBlock' style={menuItem2}>
                    <NavLink to="/OurWork" onClick={() => setNavOpen(false)}>Our Work</NavLink>
                </div>
            </li>
            <li>
                <div className='itemBlock' style={menuItem3}>
                    <NavLink to="/Services" onClick={() => setNavOpen(false)}>Services</NavLink>
                </div>
            </li>
            <li>
                <div className='itemBlock' style={menuItem4}>
                    <NavLink to="/Team" onClick={() => setNavOpen(false)}>Team</NavLink>
                </div>
            </li>
            <li>
                <div className='itemBlock' style={menuItem5}>
                    <a href="https://calendly.com/iconic-creative" target="_blank" rel="noreferrer" onClick={() => setNavOpen(false)}>Let’s Talk</a>
                </div>
            </li>
        </ul>
        <a href="mailto:hello@iconiccreative.co" className='email' style={email}>hello@iconiccreative.co</a>
    </ScMenu>
  )
}

const ScMenu = styled('div')`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    min-height: 26rem;
    background: var(--offWhite);
    z-index: 4;
    ul {
        position: absolute;
        top: 50%;
        left: 6%;
        transform: translate(0, -50%);
        height: 32vh;
        min-height: 18rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        li {
            width: calc(10rem + 2vw);
            overflow: hidden;
            transition: 0.4s ease;
            .itemBlock {
                a {
                    position: relative;
                    font-size: calc(1.6rem + 1.6vw);
                    color: var(--dark);
                    &.active {
                        /* text-decoration: underline; // Notice there was an issue with the most up-to-date version. Had to revert back to 6.3.0 */
                        &::after {
                            content: "";
                            position: absolute;
                            top: 20%;
                            right: -10%;
                            width: 4vw;
                            height: 4vw;
                            border-radius: 50%;
                            background: #c0c0c088;
                            transform: scale(0);
                            opacity: 0;
                            z-index: -1;
                            animation: bubble 1s ease 0.6s forwards;
                        }
                    }
                }
            }
            &:hover {
                transform: translate(1.2rem, 0);
            }
        }
    }
    .email {
        position: absolute;
        top: 80%;
        left: 6%;
        font-size: calc(1rem + 1vw);
        font-weight: 500;
        color: var(--offDark);
        letter-spacing: 0.06rem;
        &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            transform: translate(0, 2.8rem) rotate(8deg);
            height: 1px;
            opacity: 0;
            background: var(--dark);
            transition: 0.8s ease;
        }
        &:hover {
        &::after {
            transform: translate(0, 0) rotate(0deg);
            opacity: 1;
            }
        }
    }

    @keyframes bubble {
        to {
            opacity: 0.8;
            transform: scale(1);
        }
    }

    @media (max-width: 520px){
        ul {
            height: 28vh;
            min-height: 16rem;  
        }
    }

    // MIN HEIGHT
    @media (max-height: 440px){
        ul {
            height: 28vh;
            min-height: 16rem;  
            transform: translate(-20%, -60%) scale(0.6);
            li {
                &:hover {
                    transform: translate(1rem, 0);
                }
            }
        }
        .email {
            top: 25%;
            left: 40%;
        }
    }
`

export default Menu