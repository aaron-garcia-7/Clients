import { useSelector, useDispatch } from "react-redux";
import { toggleNav, closeNav } from "../reducers/mobileNavReducer";
import { toggleNotice } from "../reducers/illnessNoticeReducer";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Logo from './Logo';
import SocialMediaLinks from "./SocialMediaLinks";
import AddressLinks from "./AddressLinks";

import tinyPick from '../images/graphics/tinyPick.svg';


const MobileNav = () => {
  const dispatch = useDispatch();
  const { navToggle } = useSelector((store) => store.mobileNav);
  // const { noticeToggle } = useSelector((store) => store.illNote);

  const navHandler = () => {
    return window.innerWidth > 768 ? dispatch(closeNav()) : null;
  }
  useEffect(() => {
    window.addEventListener("resize", navHandler);
    return () => window.removeEventListener("resize", navHandler);
  }, [navHandler])


  return (
    <StyledMobileNav
      style={
        navToggle ? { opacity: 1, zIndex: 30 } : { opacity: 0, zIndex: -1 }
      }
    >
      <div className="mainLinks">
        <Logo inNav={true} />
        <ul className="linkList">
          <li>
            <NavLink to="/" onClick={() => dispatch(toggleNav())}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="./WhyUs" onClick={() => dispatch(toggleNav())}>
              Why Us?
            </NavLink>
          </li>
          <li>
            <NavLink to="./About" onClick={() => dispatch(toggleNav())}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="./Resources" onClick={() => dispatch(toggleNav())}>
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink to="./Contact" onClick={() => dispatch(toggleNav())}>
              Contact
            </NavLink>
          </li>
        </ul>
        <SocialMediaLinks inMobileNav={true}/>
      </div>
      <div className="importantLinkDiv">
        <a className='importantLink' onClick={() => dispatch(toggleNotice())}>
          Important Notice
        </a>        
      </div>
      <div className="subLinksAll">
        <ul className="subLinkList WhyUsLinks">
          <li>
            <NavLink to="/WhyUs/Testimonials" onClick={() => dispatch(toggleNav())}>
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink to="/WhyUs/Blog" onClick={() => dispatch(toggleNav())}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/WhyUs/NewToGuitar" onClick={() => dispatch(toggleNav())}>
              New To Guitar
            </NavLink>
          </li>
        </ul>
        <ul className="subLinkList AboutLinks">
          <li>
            <NavLink to="/About/Locations" onClick={() => dispatch(toggleNav())}>
              Locations
            </NavLink>
          </li>
          <li>
            <NavLink to="/About/Mark" onClick={() => dispatch(toggleNav())}>
             Mark
            </NavLink>
          </li>
          <li>
            <NavLink to="/About/Policies" onClick={() => dispatch(toggleNav())}>
              Policies
            </NavLink>
          </li>
        </ul>
        <ul className="subLinkList ResourcesLinks">
          <li>
            <NavLink to="/Resources/Calendar" onClick={() => dispatch(toggleNav())}>
              Calendar
            </NavLink>
          </li>
          <li>
            <NavLink to="/Resources/Links" onClick={() => dispatch(toggleNav())}>
              Links
            </NavLink>
          </li>
          <li>
            <NavLink to="/Resources/Materials" onClick={() => dispatch(toggleNav())}>
              Materials
            </NavLink>
          </li>
        </ul>
      </div>
      <AddressLinks inMobileNav={true} />
    </StyledMobileNav>
  );
};

const StyledMobileNav = styled("nav")`
display: none;
// Very nice css trick
transition: all 0.4s ease, width 0s;
  @media screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    min-height: 36rem;
    display: flex;
    background: #e5d6ccef;
    backdrop-filter: blur(3px);
    pointer-events: all;
    z-index: -1;
    #navLogo {
      position: absolute;
      top: 18%;
      left: 25%;
      transform: translate(-50%, 0);
    }
    .mainLinks {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fafafa77;
      .linkList {
        list-style: none;
        padding: 1rem;
        line-height: 2.2rem;
        flex-direction: column;
        width: auto;
        &:hover {
        li {
          a {
            opacity: 0.3;
          }
        }
      }
        li {
          margin: 0.4rem 0;
          a {
            position: relative;
            color: #313131;
            font-size: calc(0.7rem + 0.8vw);
            transition: 0.4s ease;
            &:hover {
              opacity: 1;
              color: #000;
            }
            &.active {
              &:before {
                content: url(${tinyPick});
                position: absolute;
                top: -32%;
                left: -28%;
                transform: translate(-50%, 0);
              }
            }
          }
        }
      }
        #mobileNavSocialIcons {
        bottom: 18%;
        left: 25%;
        transform: translate(-50%, 0);
      }
    }
    .importantLinkDiv {
      position: absolute;
      top: 20%;
      right: 0;
      width: 50vw;
      height: 2rem;
      padding-left: 3%;
      cursor: pointer;
      .importantLink {
        padding: 1rem 0;
        color: var(--black);
        position: relative;
        font-size: calc(0.6rem + 0.6vw);
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
    .subLinksAll{
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(0, -50%);
      width: 50vw;
      height: 22vh;
      min-height: 8rem;
      &:hover {
        .subLinkList{
          li {
            a{
              opacity: 0.5;
            }
          }
        }
      }
      .subLinkList{
        width: 50vw;
        position: absolute;
        list-style: none;
        display: flex;
        li {
          position: absolute;
          font-size: calc(0.5rem + 0.6vw);
          &:nth-child(1){
            left: 6%;
          }
          &:nth-child(2){
            left: 36%;
          }
          &:nth-child(3){
            left: 56%;
          }
          a {
            color: var(--black);
            transition: opacity 0.4s ease;
            &:hover{
              opacity: 1;
              color: #000;
            }
            /* &.active {
              &:after {
                content: url(${tinyPick});
                position: absolute;
                top: -0.8rem;
                left: 50%;
                transform: translate(-50%, 0);
              }
            } */
          }
        }
      }
      .WhyUsLinks {
        top: 16%;
      }
      .AboutLinks {
        top: 46%;
      }
      .ResourcesLinks {
        top: 76%;
      }
    }
    #mobileNavAddressLinks {
      bottom: 16%;
      right: 25%;
      transform: translate(50%, 0);
      width: 50vw;
      min-width: 14.8rem;
      padding: 0.8rem;
      padding-left: calc(0.8rem + 1vw);
      flex-direction: row;
      justify-content: flex-start;
      .address {
        font-size: calc(0.5rem + 0.4vw);
        font-weight: 400;
        &:nth-child(1) {
          margin-right: 2rem;
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    #navLogo {
      top: 18%;
    }
    .mainLinks {
      width: 50%;
      .linkList {
        line-height: 2.4rem;
        transform: translate(0, -10%);
        /* li {
          a {
            &.active{
              &:before{
                top: -32%;
              }
            }
          }
        } */
      }
        #mobileNavSocialIcons {
        bottom: 24%;
      }
    }
    .importantLinkDiv {
      top: 19%;
      .importantLink {
        letter-spacing: 0.1rem;
        &::after {
          top: 72%;
        }
        &:hover{
          &::after {
            top: 72%;
          }
        }
      }
    }
    .subLinksAll{
      transform: translate(0, -94%);
      height: 20vh;
      .subLinkList{
        li {
          font-size: calc(0.5rem + 0.6vw);
          &:nth-child(2){
            left: 40%;
          }
          &:nth-child(3){
            left: 58%;
          }
        }
      }
    }
    #mobileNavAddressLinks {
      bottom: 24%;
      width: 50vw;
      min-width: auto;
      padding: 0rem;
      padding-left: calc(0.6rem + 1vw);
      flex-direction: column;
      .address {
        font-size: calc(0.6rem + 0.4vw);
        font-weight: 300;
        &:nth-child(1) {
          margin-right: 0rem;
          margin-bottom: 1rem;
        }
      }
    }
  }
`;
export default MobileNav;
