// HeroImg without any Parallax Effect!

import React from 'react'
import styled from 'styled-components'
import dancer1 from '../images/dancer1.svg';
import roundText from '../images/roundText.svg';

function HeroImg() {
  return (
    <ScHeroImg>
        <div className="bubbleHero"/>
        <img src={dancer1} alt="Line art of a girl dancing" className='dancer1'/>
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
  .bubbleHero {
    background: var(--taupe);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(8);
    width: 32vw;
    height: 32vw;
    border-radius: 50%;
    animation: bubbleShrink 2s cubic-bezier(.55,.29,.24,1.11) 1s forwards;
  }
  .dancer1 {
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
    width: 26vw;
    opacity: 0;
    animation: fade 2s ease 2s forwards;
  }
  .roundText {
    top: 50%;
    right: -28%;
    transform: translate(0, -10%);
    width: 20vw;
    opacity: 0;
    animation: fade 2s ease 2.2s forwards;
  }

  @keyframes bubbleShrink {
    to {
      transform: translate(-50%, -50%) scale(1);
    }
  }
`

export default HeroImg