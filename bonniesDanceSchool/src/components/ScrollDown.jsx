import React from 'react'
import styled from 'styled-components'
import arrow from '../images/arrow.svg';
import scrollText from '../images/scrollText.svg';

function ScrollDown() {
  return (
    <ScScrollDown>
        <img src={scrollText} alt="Scroll" className='scrollText'/>
        <div className="arrowDiv">
            <img src={arrow} alt="An arrow pointing down" />
            <img src={arrow} alt="An arrow pointing down" />
        </div>
    </ScScrollDown>
  )
}

const ScScrollDown = styled('div')`
    position: absolute;
    bottom: 2rem;
    left: 2vw;
    opacity: 0;
    animation: fade 2s ease 3.2s forwards;
    .scrollText {
        width: calc(0.6rem + 0.2vw);
    }
    .arrowDiv {
        position: relative;
        height: 4rem;
        overflow: hidden;
        img {
            position: absolute;
            left: 50%;
            transform: translate(-50%, 0);
            animation: arrowGlide 3s ease infinite;
            &:nth-of-type(1){
                top: 10%;
                transform: translate(-50%, 0);
            }
            &:nth-of-type(2){
                top: -100%;
                transform: translate(-50%, 0);
            }
        }
    }

    @keyframes arrowGlide {
        to {
            transform: translate(-50%, 132%);
        }
    }

    @media (max-width: 768px) {
        left: 3.2vw;
    }
`

export default ScrollDown