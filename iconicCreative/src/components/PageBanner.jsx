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
  const parallaxStyle = {
    transform: `translate(0%, ${offset * -0.1}px)`,
  };
  // End Parallax
  const titleStyle = {
    transform: longTitle && pageWidth <= 480 ? "translate(0, -80%)" : null,
  }

  const textStyle = {
    transform: longTitle && pageWidth <= 480 ? "translate(1%, 4.8rem)" : null,
  }

  return (
    <ScPageBanner style={parallaxStyle}>
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
    min-height: 32rem;
    z-index: -1;
    transition: transform 0.6s cubic-bezier(0.23, 0.79, 0.68, 0.96);
    > * {
      position: absolute;
      top: 50%;
      left: 6vw;
      color: var(--offWhite);
    }
    h2 {
        transform: translate(0, -80%);
        font-size: calc(4rem + 4vw);
    }
    p {
      /* border: 2px dashed white; */
      /* width: 46%; */
      width: calc(24rem + 28vw);
      transform: translate(1%, 5.2rem);
        font-size: calc(1rem + 1vw);
    }

    @media (max-width: 768px) {
      h2 {
        font-size: calc(3.2rem + 3.2vw);
      }
      p {
        width: 74%;
        /* width: calc(14rem + 14vw); */
      }
    }

    @media (max-width: 520px) {
      max-height: 46rem;

      p {
        width: 60%;
      }
    }

    @media (max-width: 480px) {
      transition: 0s;
      h2 {
        transform: translate(0, -120%);
      }
      p {
        width: 76%;
        transform: translate(1%, 1.4rem);
        font-size: calc(1rem + 1vw);
      }
    }
`

export default PageBanner