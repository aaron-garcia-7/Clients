import React from 'react'
import styled from 'styled-components'

function PageBanner({title}) {
  return (
    <ScPageBanner>
        <h2>{title}</h2>
    </ScPageBanner>
  )
}

const ScPageBanner = styled('header')`
    background: var(--offWhite);
    width: 100vw;
    height: 80vh;
    min-height: 32rem;
    position: relative;
    h2 {
        position: absolute;
        top: 50%;
        left: 6vw;
        transform: translate(0, -50%);
        font-size: calc(4rem + 4vw);
        color: var(--dark);
    }

    @media (max-width: 1024px) {
      height: 68vh;
      min-height: 28rem;
    }

    @media (max-width: 768px) {
      height: 60vh;
      min-height: 24rem;
    }
`

export default PageBanner