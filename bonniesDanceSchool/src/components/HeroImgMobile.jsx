import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import dancer1 from '../images/dancer1.svg';
import roundText from '../images/roundText.svg';

function HeroImgMobile({pageWidth, navOpen}) {
  // Parallax Effect
  const [offset, setOffset] = useState(0);
  const parallaxScroll = () => {
    setOffset(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener('scroll', parallaxScroll);
    return () => window.removeEventListener('scroll', parallaxScroll);
  }, [offset])

  const parallaxStyle = {
    transform: pageWidth > 768 ? `translate(0, ${offset * -0.16}px)` : `translate(0, ${offset * -0.06}px)`,
  }
  // End Parallax Effect

  const menuStyleBubble = {
    transform: "translate(-50%, -10%) scale(1)",
    animation: "bubbleMenuToggle 1s cubic-bezier(.55,.29,.24,1.11) 0s forwards",
  }

  return (
    <ScHeroImgMobile>
        {/* <div className="bubbleHero" style={navOpen ? menuStyleBubble : null} id={loading && pageWidth > 768 ? "loadingAnim" : "menuAnim"}/> */}
        <div className="bubbleHero" style={navOpen ? menuStyleBubble : null}/>
        <img src={dancer1} alt="Line art of a girl dancing" className='dancer1' style={parallaxStyle}/>
        <img src={roundText} alt="Pursuing growth through dance" className='roundText' />
        <h4 className='a11y'>Pursing growth through dance</h4>
    </ScHeroImgMobile>
  )
}

const ScHeroImgMobile = styled('div')`
  @media (max-width: 768px) {
    width: 30%;
    height: 20%;
    top: 60%;
    right: 40%;
    transform: translate(0, -50%);
    > * {
      position: absolute;
      -webkit-user-drag: none;
    }
    .bubbleHero,
    .dancer1,
    .roundText {
      top: -12%;
    }
    .bubbleHero {
      background: var(--taupe);
      left: 50%;
      top: 0;
      transform: translate(-50%, -10%) scale(0.4);
      width: 42vw;
      height: 42vw;
      border-radius: 50%;
      animation: bubbleGrowHeroImg 1.6s cubic-bezier(.56,-0.46,.4,1.42) 0.4s forwards;
    }
    .dancer1 {
      top: 4%;
      right: 0;
      transform: translate(0, -50%);
      width: 34vw;
      opacity: 0;
      animation: fade 2s ease 1.2s forwards;
    }
    .roundText {
      top: 0;
      right: 0;
      transform: translate(46%, 40%);
      width: 26vw;
      opacity: 0;
      animation: fade 2s ease 1.4s forwards;
    }

    @keyframes bubbleGrowHeroImg {
      to {
        transform: translate(-50%, -10%) scale(1);
      }
    }
    @keyframes bubbleMenuToggle {
      to {
        transform: translate(-50%, -10%) scale(0); // Shrink Bubble on MenuToggle
      }
    }
  }

  @media (max-width: 520px) {
    top: 64%;
    right: 36%;
    .dancer1 {
      top: 8%;
    }
  }

  @media (max-width: 480px) {
    top: 65%;
    .bubbleHero {
      left: 60%;
      width: 52vw;
      height: 52vw;
    }
    .dancer1 {
      top: 14%;
      right: -20%;
      width: 38vw;
    }
    .roundText {
      transform: translate(68%, 40%);
      width: 32vw;
    }
  }
`

export default HeroImgMobile