import React, { useState, useEffect } from 'react'
import { Link as scrollLink } from 'react-scroll';
import styled from 'styled-components'
import chevron from '../images/chevron.svg';

function ToTop() {
    const [fromTop, setFromTop] = useState(false);

    const checkDistance = () => {
        window.scrollY > 400 ? setFromTop(true) : setFromTop(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', checkDistance);

        return () => window.removeEventListener('scroll', checkDistance);
    }, [fromTop])

    let btnStyle = {
        opacity: fromTop ? 1 : 0,
        transform: fromTop ? 'translateY(0)' : "translateY(100%)",
        pointerEvents: fromTop ? 'all' : 'none',
    }
  return (
    <ScToTop 
      to="top"
      smooth={"easeInOutQuart"}
      duration={800}
      delay={40}
      style={btnStyle}
    >
        <img src={chevron} alt="" />
    </ScToTop>
  )
}

const ScToTop = styled(scrollLink)`
    position: fixed;
    bottom: 2rem;
    right: 2vw;
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.2rem;
    cursor: pointer;
    z-index: 5;
    transition: 0.6s ease;
    img {
        width: calc(0.8rem + 0.8vw);
        transition: 0.6s ease;
    }
    &:hover {
        img {
            transform: scale(1.2);
        }
    }
`

export default ToTop