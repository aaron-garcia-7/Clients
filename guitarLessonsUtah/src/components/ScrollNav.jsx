import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from "react-redux";
import { openCta } from '../reducers/ctaReducer';
import { toggleNotice } from '../reducers/illnessNoticeReducer';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import tinyPick from '../images/graphics/tinyPick.svg';
import Logo from './Logo';
import SocialMediaLinks from './SocialMediaLinks';

const ScrollNav = () => {
  const dispatch = useDispatch();
  
  const [fromTop, setFromTop] = useState(false);
  const [scrollDown, setScrollDown] = useState(false);
  const [y, setY] = useState(window.scrollY);

  const listenFromTop = () => {
    window.scrollY > 120 ? setFromTop(true) : setFromTop(false);
  }

  // Hide nav on scroll down, show nav on scroll up
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

    return (
        <StyledScrollNav style={fromTop && !scrollDown ? {transform: "translate(50%, 0%"} : !fromTop ? {opacity: 0} : null}>
            <Logo inNav={true}/>
            <SocialMediaLinks inNav={true} />
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
            <button className="mainBtn navCtaBtn" onClick={() => dispatch(openCta())}>Get Started</button>
            <div className="importantLinkDiv">
                {/* <NavLink to="./About/Policies" className="importantLink"> */}
                <a className='importantLink' onClick={() => dispatch(toggleNotice())}>
                    Important Notice
                </a>
                {/* </NavLink> */}
            </div>
        </StyledScrollNav>
    )
}

const StyledScrollNav = styled('div')`
    opacity: 1;
    position: fixed;
    top: 0rem;
    right: 50%;
    transform: translate(50%, -120%);
    background: var(--white);
    width: 100vw;
    height: 8vh;
    min-height: 4rem;
    display: flex;
    justify-content: center;
    padding-top: 2rem;
    z-index: 10;
    box-shadow: 0px 4px 8px #31313122;
    transition: 0.6s ease, width 0s;
    .topList {
        display: flex;
        justify-content: space-between;
        width: 42%;
        transition: 0.6s ease;
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
                .topLink {
                    color: #000;
                    font-weight: 600;
                }
                .subList {
                    opacity: 1;
                    pointer-events: all;
                    .subItem{
                        &:hover {
                            .subLink {
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

    #navLogo {
        position: absolute;
        top: 0.6rem;
        left: 6%;
        transform: scale(0.8);
    }
    .navCtaBtn {
        position: absolute;
        top: 1.2rem;
        right: 10%;
        transform: scale(0.7);
    }
    #navSocialIcons {
        opacity: 0;
        pointer-events: none;
        top: 4.2rem;
        left: 5%;
        transform: scale(0.5);
        transition: 0.4s ease;
    }
    .importantLinkDiv {
      position: absolute;
      top: 5rem;
      right: 9%;
      transform: scale(0.7);
      opacity: 0;
      pointer-events: none;
      transition: 0.4s ease;
      cursor: pointer;
      .importantLink {
        padding: 1rem 0;
        color: var(--black);
        position: relative;
        font-size: calc(0.4rem + 0.5vw);
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        &::after {
          content: "";
          position: absolute;
          top: 80%;
          left: 0;
          width: 100%;
          height: 1px;
          background: var(--black);
          transition: 0.4s ease;
        }
        &:hover{
          &::after {
            top: 90%;
          }
        }
      }
    }

    &:hover {
        height: 8.6rem;
        .topList{
            .topItem{
                .subList{
                    opacity: 1;
                    pointer-events: all;
                    transition-delay: 0.4s;
                }
            }
        }
        #navSocialIcons {
            opacity: 1;
            pointer-events: all;
            transition-delay: 0.4s;
        }
        .importantLinkDiv {
            opacity: 1;
            pointer-events: all;
            transition-delay: 0.4s;
        }
    }

@media screen and (max-width: 1440px){
    padding-top: 1.4rem;
    #navLogo {
        top: 0.6rem;
        left: 4%;
    }
    .navCtaBtn {
        top: 0.8rem;
        right: 6%;
    }
    #navSocialIcons {
        top: 3.6rem;
        left: 3%;
    }
    .importantLinkDiv {
      top: 4.4rem;
      right: 5%;
    }
    &:hover {
        height: 7.2rem;
    }
}
`

export default ScrollNav;