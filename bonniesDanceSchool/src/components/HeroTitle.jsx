import React from 'react'
import { motion } from 'framer-motion'
import { titleAnim, letterAnim } from '../animations/intoAnimations';
import styled from 'styled-components'

function HeroTitle() {

  return (
    <ScHeroTitle>
      <h1 className="a11y">Bonnie's Dance School</h1>
      <h3 className='preTitle'>Ballet<span>|</span>Contemporary<span>|</span>Jazz</h3>
      <TitleBlock title={"Bonnie’s"} />
      <TitleBlock title={"Dance"} />
      <TitleBlock title={"School"} />
    </ScHeroTitle>
  )
}

const ScHeroTitle = styled('header')`
   width: 50%;
   height: 40%;
   max-height: 18rem;
   top: 50%;
   left: 14%;
   transform: translate(0, -50%);
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   z-index: 2;
   .title {
       overflow: hidden;
       position: relative;
       display: flex;
       animation: slide 1.2s cubic-bezier(.65,.14,.39,1.06) 1.6s forwards;
       &:nth-of-type(1) {
           transform: translate(14%, 0);
       }
       &:nth-of-type(2) {
           transform: translate(54%, 0);
       }
       &:nth-of-type(3) {
           transform: translate(82%, 0);
       }
       .letter {
           font-size: calc(1rem + 3.6vw);
           font-weight: 100;
           text-transform: uppercase;
           letter-spacing: 0.8rem;
       }
   }
   .preTitle {
       position: absolute;
       top: -8%;
       color: var(--tan);
       font-family: var(--modern);
       font-size: calc(0.6rem + 0.2vw);
       font-weight: 400;
       letter-spacing: 0.1rem;
       text-transform: uppercase;
       opacity: 0;
       animation: fade 2s ease 2.2s forwards;
       span {
        color: var(--tan);
        margin: 0 0.6rem;
       }
   }
   
   @keyframes slide {
    to {
        transform: translate(0, 0);
    }
   }

   @media (max-width: 1440px) {
        .preTitle {
            span {
                margin: 0 0.4rem;
            }
        }
   }

   @media (max-width: 1024px) {
       height: 32%;
   }

   @media (max-width: 768px) {
       left: 18%;
       width: 74%;
       .preTitle {
        top: -12%;
       }
       .title {
       &:nth-of-type(1) {
           transform: translate(14%, 0);
       }
       &:nth-of-type(2) {
           width: 86%;
           transform: translate(28%, 0);
       }
       &:nth-of-type(3) {
           width: 86%;
           transform: translate(42%, 0);
       }
       .letter {
           font-size: calc(1.6rem + 3.6vw);
           letter-spacing: 0.6rem;
       }
     }
   }

   @media (max-width: 520px) {
        height: 28%;
        .preTitle {
            font-size: calc(0.5rem + 0.2vw);
            span {
                margin: 0 0.2rem;
            }
        }
   }
`


const TitleBlock = ({title}) => {
    return  (
        <motion.div variants={titleAnim} initial="initial" animate="animate" className='title'>
            <AnimatedLetters title={title} />
        </motion.div> 
    )
}

const AnimatedLetters = ({title}) => {
    return (
        <>
            {[...title].map((letter, index) => (
                <motion.div key={index} variants={letterAnim} className='letter'>{letter}</motion.div>
            ))}
        </>
    )
}

export default HeroTitle