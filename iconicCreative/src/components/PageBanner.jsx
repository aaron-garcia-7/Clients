import React from 'react'
import styled from 'styled-components'


function PageBanner({title, longTitle, pageWidth}) {
  const titleStyle = {
    transform: longTitle && pageWidth <= 480 ? "translate(0, -80%)" : null,
  }

  const textStyle = {
    transform: longTitle && pageWidth <= 480 ? "translate(1%, 4.8rem)" : null,
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
    /* height: 80vh; */
    height: 100vh;
    min-height: 32rem;
    z-index: -1;
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
      p {
        width: 60%;
      }
    }

    @media (max-width: 480px) {
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