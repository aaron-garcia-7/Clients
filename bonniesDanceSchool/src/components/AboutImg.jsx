import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import dancer2 from '../images/dancer2.svg';

function AboutImg({pageWidth}) {
  const [offset, setOffset] = useState(0);
  
  const parallaxScroll = () => {
    setOffset(window.scrollY);
  }
  
  useEffect(() => {
    window.addEventListener('scroll', parallaxScroll);

    return () => window.removeEventListener('scroll', parallaxScroll);
  }, [offset])
  
  const parallaxStyle = {
    transform: pageWidth > 768 ? `translate(0, ${offset * -0.12}px)` : `translate(0, ${offset * -0.08}px)`,
  }

  return (
    <ScAboutImg>
        <div className="bubbleAbout" />
        <img src={dancer2} alt="Line art of a girl in a difficult dance pose." className='dancer2' style={parallaxStyle}/>
    </ScAboutImg>
  )
}

const ScAboutImg = styled('div')`
    left: 12%;
    width: 30%;
    height: 50%;
    > * {
      position: absolute;
      -webkit-user-drag: none;
    }
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

  @media (max-width: 1224px) {
    .dancer2 {
      top: 48%;
    }
  }

  @media (max-width: 768px) {
    bottom: 12%;
    left: 20%;
    width: 40%;
    height: 40%;
    .bubbleAbout {
      width: 42vw;
      height: 42vw;
    }
    .dancer2 {
      top: 60%;
      width: 24vw;
    }
  }

  @media (max-width: 520px) {
    bottom: 8%;
    left: 32%;
    .bubbleAbout {
      width: 42vw;
      height: 42vw;
    }
    .dancer2 {
      top: 64%;
      /* width: 24vw; */
    }
  }

  @media (max-width: 480px) {
    bottom: 10%;
    .bubbleAbout {
      width: 52vw;
      height: 52vw;
    }
    .dancer2 {
      top: 60%;
      left: 12%;
      width: 38vw;
    }  }
`

export default AboutImg