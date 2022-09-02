import React from 'react'
import styled from 'styled-components'

function GridArea() {
  return (
    <ScGridArea>
        <div className="layer1">
            <div className="layer2">
                <div className="layer3" />
            </div>
        </div>
    </ScGridArea>
  )
}

const ScGridArea = styled('div')`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 96vw;
    height: 96vh;
    border: 2px dashed red;
    z-index: 50;
    pointer-events: none;

    .layer2 {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 86vw;
        height: 86vh;
        border: 2px dashed coral;

        .layer3 {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 74vw;
            height: 74vh;
            border: 2px dashed black;
        }
    }
`

export default GridArea