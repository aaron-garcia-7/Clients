import React, { useState, useEffect } from 'react'
import styled from 'styled-components'


function PageBanner({title, longTitle, copy, altCopy, pageWidth}) {
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
    transform: longTitle && pageWidth <= 480 ? "translate(0, -100%)" : null,
  }

  const textStyle = {
    transform: longTitle && pageWidth <= 480 ? "translate(1%, 40%)" : null,
  }

  return (
    <ScPageBanner style={parallaxStyle}>
        <h2 style={titleStyle}>{title}</h2>
        <p className={altCopy ? 'altCopy' : ''} style={textStyle}>{copy}</p>
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
        transform: translate(0, -100%);
        font-size: calc(4rem + 4vw);
    }
    p {
      width: calc(20rem + 42vw);
      transform: translate(1%, 2rem);
      font-size: calc(0.9rem + 0.9vw);
    }
    .altCopy {
      transform: translate(0, 2rem);
    }

    @media (max-width: 768px) {
      h2 {
        font-size: calc(3.2rem + 3.2vw);
      }
      p {
        width: 74%;
      }
    }

    @media (max-width: 520px) {
      max-height: 56rem;
    }

    @media (max-width: 480px) {
      transition: 0s;
      p {
        width: calc(10rem + 42vw);
      }
    }
`

export default PageBanner