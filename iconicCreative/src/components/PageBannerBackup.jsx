import React, { useState, useEffect } from 'react'
import styled from 'styled-components'


function PageBanner({title, longTitle, pageWidth}) {
    // Parallax Effect
  const [offset, setOffset] = useState(0);
  const parallaxScroll = () => {
    setOffset(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", parallaxScroll);
    return () => window.removeEventListener("scroll", parallaxScroll);
  }, [offset]);
  // End Parallax

  const titleStyle = {
    top: longTitle && pageWidth <= 480 ? `36%` : `36%`,
    transform: `translate(0, ${offset * -0.1}px)`,
  }

  const textStyle = {
    top: longTitle && pageWidth <= 480 ? `62%` : `58%`,
    transform: `translate(1%, ${offset * -0.1}px)`,
  }

  return (
    <ScPageBanner>
        <h2 style={titleStyle}>{title}</h2>
        <p style={textStyle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro laboriosam rerum modi!</p>
    </ScPageBanner>
  )
}

const ScPageBanner = styled('header')`
    position: sticky;
    top: 0;
    background: var(--dark);
    width: 100vw;
    height: 100vh;
    min-height: 36rem;
    z-index: -1;
    > * {
      position: absolute;
      left: 6vw;
      color: var(--offWhite);
    }
    h2 {
      font-size: calc(4rem + 4vw);
      transition: transform 0.6s cubic-bezier(0.23, 0.79, 0.68, 0.96);
    }
    p {
      width: calc(24rem + 28vw);
      font-size: calc(1rem + 1vw);
      transition: transform 0.6s cubic-bezier(0.23, 0.79, 0.68, 0.96);
    }

    @media (max-width: 768px) {
      h2 {
        font-size: calc(3.2rem + 3.2vw);
        top: 42%;
      }
      p {
        width: 74%;
      }
    }

    @media (max-width: 520px) {
      max-height: 46rem;
      p {
        width: 60%;
      }
    }

    @media (max-width: 480px) {
      h2 {
        transition: 0s;
      }
      p {
        width: 76%;
        font-size: calc(1rem + 1vw);
        transition: 0s;
      }
    }
`

export default PageBanner