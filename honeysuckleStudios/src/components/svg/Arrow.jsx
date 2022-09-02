import React from 'react'
import styled from 'styled-components'

const Arrow = () => {
  return (
    <ScArrow>
      <svg width="97" height="9" viewBox="0 0 97 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 4.5L84 4.5M84 4.5V8L95 4.5L84 1V4.5Z" stroke="#EFF1EE" className="svg-elem-2"></path>
      </svg>
    </ScArrow>
  )
}

const ScArrow = styled('div')`
    /* border: 1px solid grey; */
    transform: translate(0, 0.3rem);
    transition: 0.4s ease;

/***************************************************
 * Generated by SVG Artista on 8/31/2022, 4:50:21 PM
 * Altered by Aaron Garcia (it came with excess/unnecessary code)
 * MIT license (https://opensource.org/licenses/MIT)
 * W. https://svgartista.net
 **************************************************/

@-webkit-keyframes animate-svg-stroke-2 {
  0% {
    stroke-dashoffset: 116.0867919921875px;
    stroke-dasharray: 116.0867919921875px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 116.0867919921875px;
  }
}

@keyframes animate-svg-stroke-2 {
  0% {
    stroke-dashoffset: 116.0867919921875px;
    stroke-dasharray: 116.0867919921875px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 116.0867919921875px;
  }
}

.svg-elem-2 {
  -webkit-animation: animate-svg-stroke-2 2s cubic-bezier(0.47, 0, 0.745, 0.715) 3s both,
                       animate-svg-fill-2 1.4s cubic-bezier(0.47, 0, 0.745, 0.715) 4.4s both;
          animation: animate-svg-stroke-2 2s cubic-bezier(0.47, 0, 0.745, 0.715) 3s both,
               animate-svg-fill-2 1.4s cubic-bezier(0.47, 0, 0.745, 0.715) 4.4s both;
}

@media (max-width: 1220px) {
    svg {
        transform: translate(0, -0.4rem);
        width: 4rem;
    }
}
`

export default Arrow;