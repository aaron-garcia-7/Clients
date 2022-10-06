import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import dancer1 from '../images/dancer1.svg';
import roundText from '../images/roundText.svg';

function HeroImg({pageWidth, navOpen}) {
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

  // Allow for different animation durations/delays once loading animation is done.
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadTime = setTimeout(() => {
      setLoading(false);
    }, 3000)
    return () => clearTimeout(loadTime);
  }, [])
  // End Loading Calc

  const menuStyleBubble = {
    transform: "translate(-50%, 10%) scale(1)",
    animation: "bubbleMenuToggle 1s cubic-bezier(.55,.29,.24,1.11) 0s forwards",
  }

  return (
    <ScHeroImg>
        <div className="bubbleHero" style={navOpen ? menuStyleBubble : null} id={loading ? "loadingAnim" : "menuAnim"}/>
        <img src={dancer1} alt="Line art of a girl dancing" className='dancer1' style={parallaxStyle}/>
        <img src={roundText} alt="Pursuing growth through dance" className='roundText' />
        <h4 className='a11y'>Pursing growth through dance</h4>
    </ScHeroImg>
  )
}

const ScHeroImg = styled('div')`
  width: 30%;
  height: 40%;
  top: 50%;
  right: 14%;
  transform: translate(0, -50%);
  > * {
    position: absolute;
    -webkit-user-drag: none;
  }
  .bubbleHero,
  .dancer1,
  .roundText {
    top: -40%;
  }
  .bubbleHero {
    background: var(--taupe);
    left: 50%;
    width: 32vw;
    height: 32vw;
    border-radius: 50%;
    /* transform: translate(-50%, 10%) scale(12); // Grow Bubble Traditional Opening */
    /* transform: translate(-50%, 10%) scale(0); // Shrink Bubble With Opening */
    animation: bubbleShrink cubic-bezier(.55,.29,.24,1.11) forwards;
  }
  #loadingAnim {
    transform: translate(-50%, 10%) scale(12); // Grow Bubble
    animation-duration: 2s;
    animation-delay: 1s;
  }
  #menuAnim {
    transform: translate(-50%, 10%) scale(0); // Shrink Bubble
    animation-duration: 1.6s;
    animation-delay: 0s;
  }

  .dancer1 {
    right: 0;
    transform: translate(0, -50%);
    width: 26vw;
    opacity: 0;
    animation: fade 2s ease 2s forwards;
  }
  .roundText {
    right: -28%;
    transform: translate(0, 64%);
    width: 20vw;
    opacity: 0;
    animation: fade 2s ease 2.2s forwards;
  }

  @keyframes bubbleShrink {
    to {
      transform: translate(-50%, 10%) scale(1);
    }
  }
  @keyframes bubbleMenuToggle {
      to {
        /* transform: translate(-50%, -10%) scale(12); // Grow Bubble */
        transform: translate(-50%, -10%) scale(0); // Shrink Bubble
      }
    }

  @media (max-width: 1224px) {
    .bubbleHero,
    .dancer1,
    .roundText {
      top: -24%;
    }
  }

  @media (max-width: 1024px) {
    .bubbleHero,
    .dancer1,
    .roundText {
      top: -12%;
    }
  }

  @media (max-width: 768px) {
    // See HeroImgMobile Component
  }
`

export default HeroImg