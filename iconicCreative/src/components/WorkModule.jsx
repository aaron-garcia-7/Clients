import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft, faClose } from '@fortawesome/free-solid-svg-icons'

import sundek from "../images/photos/sundek.png";
import enzy from "../images/photos/enzy.png";
import bakd from "../images/photos/bakd.png";
import briizy from "../images/photos/briizy.png";
import vitality from "../images/photos/vitality.png";
import stamina from "../images/photos/stamina.png"; 

function WorkModule({moduleOpen, setModuleOpen, project, setProject}) {

    const nextSlide = () => {
        if (project > 5) {
            setProject(1);
        } else {
            setProject(prev => prev + 1);
        }
    }
    const prevSlide = () => {
        if (project < 2) {
            setProject(6);
        } else {
            setProject(prev => prev - 1);
        }
    }

    const moduleStyles = {
        opacity: moduleOpen ? 1 : 0,
        pointerEvents: moduleOpen ? "all" : "none",
    }
  return (
    <ScWorkModule style={moduleStyles}>
        <div className="background" onClick={() => setModuleOpen(false)}/>
        {/* <h2>Title Goes Here</h2> */}
        <img src={project === 1 ? sundek : project === 2 ? enzy : project === 3 ? bakd : project === 4 ? briizy : project === 5 ? vitality : stamina} alt={project === 1 ? 'sundek' : project === 2 ? 'enzy' : project === 3 ? `bak’d` : project === 4 ? 'briizy' : project === 5 ? 'vitality' : 'stamina'} />
        <button onClick={() => setModuleOpen(false)}><FontAwesomeIcon icon={faClose} className="faIcon"/></button>
        <button onClick={() => prevSlide()}><FontAwesomeIcon icon={faChevronLeft} className="faIcon"/></button>
        <button onClick={() => nextSlide()}><FontAwesomeIcon icon={faChevronRight} className="faIcon"/></button>
    </ScWorkModule>
  )
}

const ScWorkModule = styled('div')`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    min-height: 38rem;
    z-index: 50;
    backdrop-filter: blur(8px);
    transition: opacity 0.4s ease;
    > * {
        position: absolute;
    }
    .background {
        top: 0;
        width: 100%;
        height: 100%;
        background: var(--offDark);
        opacity: 0.9;
        z-index: -1;
    }
    h2 {
        top: 10%;
        left: 50%;
        transform: translate(-50%, 0);
        color: var(--light);
    }
    img {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60vw;
    }
    button {
        top: 50%;
        transform: translate(0, -50%);
        cursor: pointer;
        width: 2rem;
        height: 2rem;
        padding: 2rem;
        border-radius: 50%;
        transition: 0.3s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid transparent;
        .faIcon {
            color: var(--light);
            font-size: calc(1rem + 1vw);
        }
        &:nth-of-type(1) {
            top: 4vw;
            right: 8vw;
            transform: translate(0, 0);
            border: 1px solid var(--light);
            &:hover {
                transform: rotate(90deg);
            }
        }
        &:nth-of-type(2) {
            left: 8vw;
            background: none;
            &:hover {
                transform: translate(0, -50%) scale(1.2);
            }
        }
        &:nth-of-type(3) {
            right: 8vw;
            background: none;
            &:hover {
                transform: translate(0, -50%) scale(1.2);
            }
        }
        &:hover {
            transform: scale(1.1);
            border: 1px solid var(--light);
        }
    }

    @media (max-width: 1224px){
        img {
            width: calc(24rem + 32vw);
        }
        button {
            padding: 2rem;
            &:nth-of-type(1) {
                right: 4vw;
            }
            &:nth-of-type(2) {
                left: 4vw;
            }
            &:nth-of-type(3) {
                right: 4vw;
            }
        }
    }

    @media (max-width: 768px){
        img {
            width: 90vw;
        }
        button {
            padding: 1.4rem;
            &:nth-of-type(1) {
                right: 50%;
                transform: translate(50%, 0);
                &:hover {
                    transform: translate(50%, 0) rotate(90deg);
                }
            }
            &:nth-of-type(2) {
                top: 93%;
                left: 40vw;
            }
            &:nth-of-type(3) {
                top: 93%;
                right: 40vw;
            }
        }
    }

    @media (max-width: 520px){
        button {
            padding: 2rem;
            &:nth-of-type(1) {
                transform: translate(50%, 50%);
                &:hover {
                    transform: translate(50%, 50%) rotate(90deg);
                }
            }
            &:nth-of-type(2) {
                top: 86%;
                left: 32vw;
            }
            &:nth-of-type(3) {
                top: 86%;
                right: 32vw;
            }
        }
    }
    @media (max-width: 480px){
        button {
            &:nth-of-type(1) {
                transform: translate(50%, 120%);
                &:hover {
                    transform: translate(50%, 120%) rotate(90deg);
                }
            }
            &:nth-of-type(2) {
                top: 80%;
                left: 26vw;
            }
            &:nth-of-type(3) {
                top: 80%;
                right: 26vw;
            }
        }
    }
`

export default WorkModule