import { useState, useEffect, useCallback } from 'react';
import { NavLink } from "react-router-dom"; //NavLink offers styled active nav with class ".active"

import styled from "styled-components";

import tinyPick from '../images/graphics/tinyPick.svg';
import Logo from './Logo';

const Nav = () => {
  const [hideNav, setHideNav] = useState(false);
  const [navBackground, setNavBackground] = useState(false);
  const [y, setY] = useState(window.scrollY);

  const addNavBackground = () => {
    const fromTop = window.scrollY;
    fromTop > 120 ? setNavBackground(true) : setNavBackground(false);
  }

  // Hide nav on scroll down, show nav on scroll up
  const handleNavHide = useCallback(
    e => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setHideNav(false);
      } else if (y < window.scrollY) {
        setHideNav(true);
      }
      setY(window.scrollY);
    }, [y]
  );
  
  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavHide);
    window.addEventListener("scroll", addNavBackground);
  
    return () => {
      window.removeEventListener("scroll", handleNavHide);
      window.removeEventListener("scroll", addNavBackground);
    };
  }, [handleNavHide]);
  

  return (
    <StyledNav>
      <div className={hideNav && navBackground ? "mainLinks hideNav navBackground" : navBackground ? "mainLinks navBackground" : "mainLinks"}>
        <Logo inNav={true}/>
        <ul className="topList">
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
                        <NavLink to="./Resources/LessonMaterials" className="subLink">Lesson Materials</NavLink>
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
            </li>
        </ul>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled("nav")`
  .mainLinks {
    position: fixed;
    top: 2.8rem;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 58vw;
    height: 8vh;
    min-height: 4rem;
    z-index: 10;
    transition: all 0.6s ease;
    #navLogo {
      display: none;
    }
    .topList {
      padding: 1rem;
      list-style: none;
      display: flex;
      justify-content: space-between;
      width: 76%;
      &:hover {
        .topItem {
            opacity: 0.5;
        }
      }

      .topItem {
        position: relative;
        transition: 0.4s ease;

        .topLink {
          position: relative;
          color: var(--black);
          font-size: calc(0.5rem + 0.5vw);
          font-weight: 500;
          &.active {
            /* text-decoration: underline; */
            &:after {
              content: url(${tinyPick});
              position: absolute;
              top: -1rem;
              left: 50%;
              transform: translate(-50%, 0);
            }
          }
        }

        /* &:hover,
        &:focus,
        &:focus-within { */
        &:hover {
            opacity: 1;
            .subList {
                opacity: 1;
                z-index: 1;
                pointer-events: all;
                .subItem {
                  transition: 0.4s ease;
                  opacity: 0.5;
                  &:focus-within {
                    opacity: 1;
                  }
                }
            }
        }

        .subList {
            opacity: 0;
            pointer-events: none;
            z-index: -1;
            position: absolute;
            list-style: none;
            font-size: 0.7rem;
            transition: 0.4s ease;
            .subItem {
                margin: 0.4rem 0;
                transition: 0.4s ease;
                &:hover {
                  opacity: 1;
                }
                .subLink {
                    color: var(--black);
                    font-size: calc(0.4rem + 0.4vw);
                    font-weight: 500;
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
  }


  .hideNav {
    transform: translate(-50%, -200%);
  }
  .navBackground {
    background: #ECECEC;
    top: 0;
    height: 6vh;
    min-height: 4rem;
    width: 100vw;
    padding: 0.4rem 20.8% 0 20.8%;
    box-shadow: 0 3px 4px #c0c0c077;
    #navLogo {
        display: block;
        opacity: 0;
        position: absolute;
        width: 20%;
        top: 24%;
        left: 6%;
        transition: 0.4s ease;
        img {
          width: calc(6rem + 8vw);
        }
      }
    &:hover {
      padding-bottom: 4rem;
      height: 20vh;
      #navLogo {
        opacity: 1;
        transition-delay: 0.4s;
      }
      .topList {
        .topItem {
          .subList{
            opacity: 0.9;
            z-index: 1;
            pointer-events: all;
            transition-delay: 0.4s;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1440px) {
    .navBackground {
      top: 0;
      height: 6vh;
      min-height: 3.2rem;    
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default Nav;
