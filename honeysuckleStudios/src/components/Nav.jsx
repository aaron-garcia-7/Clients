import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Branch1 from './svg/Branch1';
import Honeysuckle from './svg/Honeysuckle';

const Nav = () => {
  const { navOpen } = useSelector((store) => store.nav);

  const displayStyle = {
    opacity: 1,
    pointerEvents: 'all',
  }

  return (
    <ScNav style={navOpen ? displayStyle : null}>
        <h3 className='navTitle'>Options</h3>
        <a href="mailto:honeysucklestudiosbg@gmail.com" className='emailLink'>honeysucklestudiosbg@gmail.com</a>
        <ul className="mainLinks">
            <li><a href="https://honeysucklestudios.square.site/" target="_blank" rel='noreferrer'>booking</a></li>
            <li><a href="https://www.instagram.com/honeysuckle_studios/" target="_blank" rel='noreferrer'>gallery</a></li>
            <li><a href="" target="_blank" rel='noreferrer'>pricing</a></li>
            <li><a href="" target="_blank" rel='noreferrer'>aftercare</a></li>
            <li><a href="mailto:honeysucklestudiosbg@gmail.com">contact</a></li>
            <li><a href="" target="_blank" rel='noreferrer'>policies</a></li>
        </ul>
        {navOpen && <div className="divider" />}
        {navOpen && <Honeysuckle giveId={true} inNav={true}/>}
        {navOpen && <Branch1 giveId={true}/>}
        <h2 className='subtleText'>eyelash extensions by bailey garcia</h2>
        <div className="altLinks">
            <h4 className='altLinksTitle'>stay in touch</h4>
            <div className="socialMedia">
                <a href="">in</a>
                <p>|</p>
                <a href="">fb</a>
                <p>|</p>
                <a href="">yt</a>
            </div>
        </div>
    </ScNav>
  )
}

const ScNav = styled('nav')`
    position: fixed;
    width: 100vw;
    height: 100vh;
    min-height: 36rem;
    background: var(--light);
    z-index: 3;
    opacity: 0;
    pointer-events: none;
    transition: 0.6s ease, width 0s, height 0s;
    /* animation: fadeIn 0.6s ease forwards; */

    > * {
        position: absolute;
    }

    .emailLink {
        top: 5rem;
        left: 10rem;
        color: var(--dark);
        font-size: calc(0.8rem + 0.2vw);
        text-decoration: none;
        letter-spacing: 0.1rem;
        &::after {
            content:'';
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -4px;
            left: 0;
            background-color: var(--hero);
            transform: scaleX(0);
            transform-origin: bottom right;
            transition: transform 0.4s;
        }
        &:hover {
            &::after {
                transform-origin: bottom left;
                transform: scaleX(1);
            }
        }
    }



    .navTitle {
        top: 4rem;
        left: 50%;
        transform: translate(-50%, 0);
        font-family: "Cormorant Garamond", serif;
        font-size: calc(1.4rem + 1.4vw);
        text-transform: uppercase;
        color: var(--hero);
        letter-spacing: 0.6rem;
    }

    .mainLinks {
        top: 50%;
        left: 14rem;
        transform: translate(0, -50%);
        list-style: none;
        display: grid;
        grid-template: repeat(3, 1fr) / repeat(2, 1fr);
        gap: 3.2rem 6rem;
        &:hover {
            li {
                a {
                    opacity: 0.7;
                    color: var(--lighthero);
                    &:hover {
                        opacity: 1;
                        color: black;
                    }
                }
            }
        }
        li {
            a {
                color: var(--dark);
                text-decoration: none;
                font-size: calc(0.8rem + 0.6vw);
                letter-spacing: 0.12rem;
                transition: 0.3s ease;
            }
            &:nth-of-type(1){
                position: relative;
                &::before {
                    content: "";
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-57%, -52%);
                    width: 121%;
                    height: 200%;
                    border: 2px solid var(--lighthero);
                    pointer-events: none;
                }
                &::after {
                    content: "";
                    position: absolute;
                    bottom: 50%;
                    right: 50%;
                    transform: translate(47%, 58%);
                    width: 120%;
                    height: 200%;
                    border: 2px solid var(--lighthero);
                    pointer-events: none;
                }
            }
        }
    }

    .divider {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 0%;
        width: 2px;
        background: var(--hero);
        transition: 0.8s ease 0.4s;
        animation: lineGrow 0.8s ease 0.6s forwards;
    }

    #honeysuckle {
        top: 50%;
        right: 25%;
        transform: translate(50%, -50%) scale(0.7);
    }

    #branch1 {
        display: none;
    }

    .subtleText {
        bottom: 6rem;
        left: 14rem;
        color: var(--lighthero);
        font-size: calc(0.8rem + 0.2vw);
        letter-spacing: 0.06rem;
    }

    .altLinks {
        bottom: 6rem;
        right: 25%;
        transform: translate(50%, 0);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .altLinksTitle {
            font-family: "Cormorant Garamond", serif;
            letter-spacing: 0.1rem;
            font-size: calc(1.4rem + 0.2vw);
            /* font-size: calc(1.2rem + 0.2vw); */ // Switch with the three lines of code above
            font-style: italic;
            color: var(--hero);
            padding-bottom: 1rem;
        }
        .socialMedia {
            display: flex;
            &:hover {
                a {
                    opacity: 0.9;
                    color: var(--lighthero);
                    &:hover {
                        opacity: 1;
                        color: black;
                    }
                }
            }
            > * {
                margin: 0 0.6rem;
            }
            a {
                color: var(--dark);
                font-size: calc(0.8rem + 0.2vw);
                transition: 0.3s ease;
            }
        }
    }

    @keyframes lineGrow {
        to {
            height: 40%;
        }
    }

    @media (max-width: 1440px) {
        .emailLink {
            left: 8rem;
        }
        .mainLinks {
            left: 8rem;
        }
        .subtleText {
            left: 8rem;
        }
        #honeysuckle {
            transform: translate(50%, -50%) scale(0.6);
        }
    }

    @media (max-width: 1220px) {
        .emailLink {
            left: 2rem;
            letter-spacing: 0rem;
        }

        .mainLinks {
            left: 4rem;
            gap: 2.8rem 3.6rem;
            li {
                &:nth-of-type(1){
                    &::before {
                        width: 120%;
                    }
                    &::after {
                        width: 120%;
                    }
                }
            }
        }

        #honeysuckle {
            transform: translate(50%, -50%) scale(0.5);
        }

        .subtleText {
            left: 2rem;
        }
    }

    @media (max-width: 768px) {
        .emailLink {
            top: auto;
            bottom: 4rem;
            left: 50%;
            transform: translate(-50%, 0);
            font-size: calc(0.6rem + 0.2vw);
            letter-spacing: 0.1rem;
            &::after {
                height: 1px;
            }
        }

        .navTitle {
            top: 4.2rem;
            font-size: calc(1.6rem + 1.6vw);
        }

        .mainLinks {
            left: 50%;
            transform: translate(-50%, -96%);
            gap: 2rem 3.2rem;
            li {
                a {
                    font-size: calc(0.8rem + 0.4vw);
                    letter-spacing: 0.08rem;
                }
                &:nth-of-type(1){
                    position: relative;
                    &::before {
                        transform: translate(-56%, -52%);
                        width: 121%;
                        border: 1px solid var(--hero);
                    }
                    &::after {
                        transform: translate(48%, 58%);
                        width: 121%;
                        border: 1px solid var(--hero);
                    }
                }
            }
        }

        .divider {
            top: 60%;
            height: 2px;
            width: 0;
            animation: lineGrow2 0.8s ease 0.6s forwards;
        }

        #honeysuckle {
            display: none;
        }
        #branch1 {
            display: block;
            position: absolute;
            top: -2.8rem;
            left: 50%;
            transform: translate(-160%, 0) scale(0.3);
        }   

        .subtleText {
            bottom: 8.6rem;
            left: auto;
            right: -5rem;
            transform: rotate(90deg);
            letter-spacing: 0.02rem;
        }

        .altLinks {
            bottom: 20%;
            right: 50%;
            width: 32%;
            min-width: 12rem;
            align-items: flex-start;
            .altLinksTitle {
                padding-bottom: 1rem;
            }
            .socialMedia {
                > * {
                    margin: 0 1rem 0 0;
                }
                a {
                    color: var(--dark);
                    font-size: calc(0.8rem + 0.2vw);
                }
            }
        }

        @keyframes lineGrow2 {
            to {
                width: 14rem;
            }
        }
    }

    @media (max-width: 480px) {
        .emailLink {
            /* top: auto; */
            bottom: 14rem;
            /* left: 50%; */
            transform: translate(-60%, 0);
            font-size: calc(0.6rem + 0.2vw);
            font-weight: 300;
            letter-spacing: 0rem;
        }

        .navTitle {
            /* top: 4.2rem; */
            /* font-size: calc(1.6rem + 1.6vw); */
        }

        .mainLinks {
            transform: translate(-50%, -120%);
            li {
                &:nth-of-type(1){
                    position: relative;
                    &::before {
                        transform: translate(-54%, -52%);
                        width: 140%;
                    }
                    &::after {
                        transform: translate(52%, 60%);
                        width: 140%;
                    }
                }
            }
        }

        .divider {
            top: 50%;
        }

        .subtleText {
            bottom: 14rem;
        }

        .altLinks {
            bottom: 36%;
            .socialMedia {
                > * {
                    margin: 0 0.8rem 0 0;
                }
                a {
                    font-weight: 300;
                }
            }
        }
    }
`

export default Nav;