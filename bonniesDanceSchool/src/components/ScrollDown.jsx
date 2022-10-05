import React from 'react'
import { Link } from 'react-scroll';
import styled from 'styled-components'
import arrow from '../images/arrow.svg';
import scrollText from '../images/scrollText.svg';

function ScrollDown({pageWidth}) {
  return (
    <ScScrollDown>
        <Link to="subHero"     
          smooth={"easeInOutQuart"}
          duration={800}
          delay={40}
          offset={pageWidth > 768 ? -140 : 0}
        >
            <img src={scrollText} alt="Scroll" className='scrollText'/>
            <div className="arrowDiv">
                <img src={arrow} alt="An arrow pointing down" />
                <img src={arrow} alt="An arrow pointing down" />
            </div>
        </Link>
    </ScScrollDown>
  )
}

const ScScrollDown = styled('div')`
    position: absolute;
    bottom: 2rem;
    left: 2vw;
    cursor: pointer;
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