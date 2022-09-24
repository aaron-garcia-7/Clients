import React, { useState, useEffect } from 'react'
import { Link as scrollLink } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const ToTop = () => {
    const [fromTop, setFromTop] = useState(false);

    const checkDistance = () => {
        scrollY > 400 ? setFromTop(true) : setFromTop(false);
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
    <ScToTop to="top" 
    smooth={"easeInOutQuart"}
    duration={800} 
    delay={40}
    style={btnStyle}
    >
        <FontAwesomeIcon icon={faChevronUp} className="faIcon"/>
    </ScToTop>
  )
}

let ScToTop = styled(scrollLink)`
    position: fixed;
    bottom: 1.6rem;
    right: 1.6rem;
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.6s ease;
    .faIcon {
        font-size: 1.6rem;
        color: var(--pink);
        transition: 0.3s ease;
    }
    &:hover {
        .faIcon {
            opacity: 0.6;
        }
    }

    @media (max-width: 768px){
        right: 0.8rem;
    }
`

export default ToTop;