import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import dancer2 from '../images/dancer2.svg';
import roundText2 from '../images/roundText2.svg';

function AboutImg({pageWidth, navOpen}) {
  const [offset, setOffset] = useState(0);
  
  const parallaxScroll = () => {
    setOffset(window.scrollY);
  }
  
  useEffect(() => {
    window.addEventListener('scroll', parallaxScroll);

    return () => window.removeEventListener('scroll', parallaxScroll);
  }, [offset])
  
  const parallaxStyle = {
    transform: pageWidth > 768 ? `translate(0, ${offset * -0.1}px)` : `translate(0, ${offset * -0.08}px)`,
  }

  const menuStyleBubble = {
    transform: "translate(-50%, -36%) scale(1)",
    animation: "bubbleToggleAbout 1s cubic-bezier(.55,.29,.24,1.11) 0s forwards",
  }

  const roundText = {
    opacity: 1,
    animation: "fadeBack 0.2s cubic-bezier(.55,.29,.24,1.11) 0s forwards",
  }

  return (
    <ScAboutImg>
        <div className="bubbleAbout" style={navOpen ? menuStyleBubble : null} />
        <img src={dancer2} alt="Line art of a girl in a difficult dance pose." className='dancer2' style={parallaxStyle}/>
        <img src={roundText2} alt="Wholesome investment" className='roundText2' style={navOpen ? roundText : null}/>
        <h4 className='a11y'>Wholesome investment</h4>
    </ScAboutImg>
  )
}

const ScAboutImg = styled('div')`
    top: 6%;
    left: 12%;
    width: 30%;
    height: 50%;
    > * {
      position: absolute;
      -webkit-user-drag: none;
    }
    .bubbleAbout {
      top: 40%; // To match RoundText
      left: 44%;
      transform: translate(-50%, -36%) scale(0.4);
      width: 24vw;
      height: 24vw;
      background: var(--tan);
      opacity: 0.4;
      border-radius: 50%;
      animation: bubbleGrow 1.4s cubic-bezier(.56,-0.46,.4,1.42) 0.2s forwards;
    }
    .roundText2 {
      top: 40%; // To match Bubble
      left: 0;
      transform: translate(-20%, -80%);
      width: 12vw;
      opacity: 0;
      animation: fade 2s ease 1.4s forwards;
    }
    .dancer2 {
      /* top: 36%; */
      top: 20%;
      left: 20%;
      width: 16vw;
      opacity: 0;
      animation: fade 2s ease 1.2s forwards;
    }


    @keyframes bubbleGrow {
      to {
        transform: translate(-50%, -36%) scale(1);
      }
    }
    @keyframes bubbleToggleAbout {
      to {
        transform: translate(-50%, -36%) scale(0); // Shrink Bubble
      }
    }

  @media (max-width: 1440px) {
    top: 12%;
      .dancer2 {
        top: 32%;
      }
    }

  @media (max-width: 1224px) {
    .dancer2 {
      top: 42%;
    }
  }

  @media (max-width: 768px) {
    top: auto;
    bottom: 12%;
    left: 20%;
    width: 40%;
    height: 40%;
    .bubbleAbout {
      width: 42vw;
      height: 42vw;
    }
    .roundText2 {
      width: 20vw;
      transform: translate(-40%, -80%);
    }
    .dancer2 {
      top: 66%;
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
      top: 72%;
    }
  }

  @media (max-width: 480px) {
    bottom: 10%;
    .bubbleAbout {
      width: 52vw;
      height: 52vw;
    }
    .roundText2 {
      width: 28vw;
      transform: translate(-60%, -80%);
    }
    .dancer2 {
      top: 60%;
      left: 12%;
      width: 38vw;
    }  }
`

export default AboutImg