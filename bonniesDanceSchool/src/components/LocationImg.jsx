import React from 'react'
import styled from 'styled-components'
import map from "../images/map.png";
import pin from "../images/pin.svg";
import roundText3 from "../images/roundText3.svg";

function LocationImg() {
  return (
    <ScLocationImg>      
        <figure>
            <a
            href="https://goo.gl/maps/ELECSz7HCWkmLdbM6"
            target="_blank"
            rel="noreferrer"
            >
            <img src={map} alt="Map to Bonnie's Dance School" />
            <img src={pin} alt="" />
            </a>
        </figure>
        <img src={roundText3} alt="Tap to expand the map" className='roundText3'/>
    </ScLocationImg>
  )
}

const ScLocationImg = styled('div')`
    position: absolute;
    top: 50%;
    right: 12%;
    transform: translate(0, -50%);
    width: 24vw;
    height: 32vw;
    figure {
        position: absolute;
        top: 50%;
        right: 14%;
        transform: translate(0, -50%) scale(0.6);
        width: 28vw;
        height: 28vw;
        border-radius: 50%;
        overflow: hidden;
        opacity: 0;
        animation: fadeGrow 1.8s cubic-bezier(.56,-0.46,.4,1.42) 1.2s forwards;
        img {
            &:nth-of-type(1) {
                position: absolute;
                top: -1%;
                right: -15%;
                width: 130%;
            }
            &:nth-of-type(2) {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -112%);
                transition: 0.4s ease;
            }
        }
        &:hover {
            img {
                &:nth-of-type(2) {
                    top: 46%;
                }
            }
        }
    }
    .roundText3 {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 11vw;
        z-index: -1;
        opacity: 0;
        animation: fade 2s ease 2.4s forwards;
    }

    @keyframes fadeGrow {
        to {
            opacity: 1;
            transform: translate(0, -50%) scale(1);
        }
    }

    @media (max-width: 768px) {
        top: 74%;
        right: 18%;
        width: 24vw;
        height: 32vw;
        figure {
            width: 56vw;
            height: 56vw;
        }
        .roundText3 {
            transform: translate(20%, 50%);
            width: 24vw;
        }
    }

    @media (max-width: 480px) {
        top: 78%;
        right: 13%;
        figure {
            width: 68vw;
            height: 68vw;
        }
        .roundText3 {
            transform: translate(18%, 60%);
            width: 28vw;
        }
    }
`

export default LocationImg