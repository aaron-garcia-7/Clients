import { useState, useEffect, useCallback } from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import tinyPick from '../images/graphics/tinyPick.svg';

const TopNav = () => {
    const [hideNav, setHideNav] = useState(false);
    const [y, setY] = useState(window.scrollY);
  
    const handleNavHide = () => {
      const fromTop = window.scrollY;
      fromTop > 120 ? setHideNav(true) : setHideNav(false);
    }
    
    useEffect(() => {
      setY(window.scrollY);
      window.addEventListener("scroll", handleNavHide);
    
      return () => {
        window.removeEventListener("scroll", handleNavHide);
      };
    }, [handleNavHide]);

    return (
        <StyledTopNav>
            <ul className={hideNav ? "hideNav topList" : "topList"}>
                <li className="topItem">
                    <NavLink to="/" className="topLink">
                        Home
                    </NavLink>
                </li>
                <li className="topItem">
                    <NavLink to="./WhyUs" className="topLink">
                        Why Us?
                    </NavLink>
                    <ul className='subList'>
                        <li className='subItem'>
                            <NavLink to="./WhyUs/NewToGuitar" className="subLink">New to Guitar</NavLink>
                        </li>
                        <li className='subItem'>
                            <NavLink to="./WhyUs/Blog" className="subLink">Blog</NavLink>
                        </li>
                        <li className='subItem'>
                            <NavLink to="./WhyUs/Testimonials" className="subLink">Testimonials</NavLink>
                        </li>
                    </ul>
                </li>
                <li className='topItem'>
                    <NavLink to="./About" className="topLink">
                        About
                    </NavLink>
                    <ul className='subList'>
                        <li className='subItem'>
                            <NavLink to="./About/Mark" className="subLink">Mark</NavLink>
                        </li>
                        <li className='subItem'>
                            <NavLink to="./About/Locations" className="subLink">Locations</NavLink>
                        </li>
                        <li className='subItem'>
                            <NavLink to="./About/Policies" className="subLink">Policies</NavLink>
                        </li>
                    </ul>
                </li>
                <li className="topItem">
                    <NavLink to="./Resources" className="topLink">
                        Resources
                    </NavLink>
                    <ul className='subList'>
                        <li className='subItem'>
                            <NavLink to="./Resources/Calendar" className="subLink">Calendar</NavLink>
                        </li>
                        <li className='subItem'>
                            <NavLink to="./Resources/Materials" className="subLink">Materials</NavLink>
                        </li>
                        <li className='subItem'>
                            <NavLink to="./Resources/Links" className="subLink">Links</NavLink>
                        </li>
                    </ul>
                </li>
                <li className="topItem">
                    <NavLink to="./Contact" className="topLink">
                        Contact
                    </NavLink>
                    <ul className='subList'>
                        <li className='subItem'>
                            <NavLink to="./Contact/FAQ" className="subLink">FAQ</NavLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </StyledTopNav>
    )
}

const StyledTopNav = styled('div')`
    position: fixed;
    top: 2.8rem;
    right: 50%;
    transform: translate(50%, 0);
    width: 100vw;
    height: 8vh;
    min-height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 7;
    .topList {
        display: flex;
        justify-content: space-between;
        width: 42%;
        transition: 0.6s ease;
        transition-delay: 0.4s;
        .topItem {
            position: relative;
            height: 1.4rem;
            .topLink {
                position: relative;
                color: var(--black);
                font-size: calc(0.5rem + 0.5vw);
                font-weight: 500;
                &.active {
                    &:after {
                    content: url(${tinyPick});
                    position: absolute;
                    top: -1rem;
                    left: 50%;
                    transform: translate(-50%, 0);
                    }
                }
            }
            .subList {
                position: absolute;
                opacity: 0;
                pointer-events: none;
                transition: 0.4s ease;
                .subItem{
                    .subLink{
                        color: var(--black);
                        font-size: calc(0.4rem + 0.4vw);
                        font-weight: 500;
                    }
                }
            }
            &:hover {
                .topLink{
                    color: #000;
                    font-weight: 600;
                }
                .subList {
                    opacity: 1;
                    pointer-events: all;
                    font-style: normal;
                    letter-spacing: 0rem;
                    .subItem{
                        .subLink{
                            &:hover {
                                color: #000;
                                font-weight: 600;
                            }
                        }
                    }
                }
            }
            &:nth-child(2),
            &:nth-child(4){
                padding-right: calc(0.9rem + 0.9vw);
                transform: translate(14%, 0);
            }
        }
    }
    .hideNav {
        transform: translate(0, -500%);
        transition-delay: 0s;
    }
`

export default TopNav;