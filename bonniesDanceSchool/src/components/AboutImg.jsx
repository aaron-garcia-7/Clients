import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import dancer2 from '../images/dancer2.svg';

function AboutImg() {
  const [offset, setOffset] = useState(0);
  
  const parallaxScroll = () => {
    setOffset(window.scrollY);
  }
  
  useEffect(() => {
    window.addEventListener('scroll', parallaxScroll);

    return () => window.removeEventListener('scroll', parallaxScroll);
  }, [offset])
  
  const parallaxStyle = {
    transform: `translate(0, ${offset * -0.12}px)`,
  }

  return (
    <ScAboutImg>
        <div className="bubbleAbout" />
        <img src={dancer2} alt="Line art of a girl in a difficult dance pose." className='dancer2' style={parallaxStyle}/>
    </ScAboutImg>
  )
}

const ScAboutImg = styled('div')`
    /* border: 1px dashed grey; */
    left: 12%;
    width: 30%;
    height: 50%;
    > * {
      position: absolute;
      -webkit-user-drag: none;
    }
    /* .bubbleAbout,
    .dancer2 {
      top: 40%;
    } */
    .bubbleAbout {
      top: 40%;
      left: 44%;
      transform: translate(-50%, -36%) scale(0.4);
      width: 24vw;
      height: 24vw;
      background: var(--tan);
      opacity: 0.4;
      border-radius: 50%;
      animation: bubbleGrow 1.4s cubic-bezier(.56,-0.46,.4,1.42) 0.8s forwards;
    }
    .dancer2 {
      top: 36%;
      left: 20%;
      width: 16vw;
      opacity: 0;
      animation: fade 2s ease 1.6s forwards;
    }

    @keyframes bubbleGrow {
      to {
      transform: translate(-50%, -36%) scale(1);
      }
    }

  @media (max-width: 1440px) {
      .dancer2 {
        top: 42%;
      }
    }
`

export default AboutImg