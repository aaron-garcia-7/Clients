import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import dancer1 from '../images/dancer1.svg';
import roundText from '../images/roundText.svg';

function HeroImg() {
  const [offset, setOffset] = useState(0);

  const parallaxScroll = () => {
    setOffset(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', parallaxScroll);

    return () => window.removeEventListener('scroll', parallaxScroll);
  }, [offset])

  const parallaxStyle = {
    transform: `translate(0, ${offset * -0.16}px)`,
  }


  return (
    <ScHeroImg>
        <div className="bubbleHero"/>
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
    transform: translate(-50%, 10%) scale(8);
    width: 32vw;
    height: 32vw;
    border-radius: 50%;
    animation: bubbleShrink 2s cubic-bezier(.55,.29,.24,1.11) 1s forwards;
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
`

export default HeroImg