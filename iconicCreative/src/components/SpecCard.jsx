import React from 'react'
import styled from 'styled-components'
import service1 from '../images/photos/service1.png';
import service2 from '../images/photos/service2.png';
import service3 from '../images/photos/service3.png';

function SpecCard({title, order}) {
    const showTitle = {
        // animation: 'skewIn 0.6s ease 0.2s forwards',
        animation: 'fadeUp 1s cubic-bezier(.26,.77,.59,1.18) 0.1s forwards',
    }
    const showFigure = {
        // animation: 'skewIn 0.5s ease 0.3s forwards',
        animation: 'fadeUp 1.2s cubic-bezier(.26,.77,.59,1.18) 0.2s forwards',
    }

  return (
    <ScSpecCard id={order === 1 ? "spec1" : order === 2 ? "spec2" : "spec3" }>
        <h4 className='specTitle' style={showTitle}>{title}</h4>
        <figure className='specFigure' style={showFigure}>
            <img src={order === 1 ? service1 : order === 2 ? service2 : service3} alt={title} />
            <figcaption>
                <p>
                {order === 1 ? "Website Design + Dev," : order === 2 ? "Brand Strategy, Positioning, Messaging, Brand Guildlines, Logo Design, Product Package Design, Voice / Tonality" : "Weekly Social Posts, Ecommerce, Video Thumbnails, Social Stories, Emails Ads"}
                </p>
                <p>
                {order === 1 ? "App Design + Dev" : ""}
                </p>
            </figcaption>
        </figure>
    </ScSpecCard>
  )
}

const ScSpecCard = styled('div')`
    position: absolute;
    top: 50%;
    width: calc(6rem + 28vw);
    height: calc(28rem + 18vw);
    h4 {
        height: 10%;
        color: var(--light);
        font-size: calc(1rem + 2vw);
        opacity: 0;
        /* transform: skew(-8deg, 1.2deg); */
        transform: translate(0, 4rem);
    }
    .specFigure {
        /* border: 2px solid green; */
        position: relative;
        height: 90%;
        overflow: hidden;
        opacity: 0;
        /* transform: skew(-8deg, 1.2deg); */
        transform: translate(0, 16%);
        /* animation: skewIn 0.6s ease 0.2s forwards; */
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: 0.6s ease;
        }
        figcaption {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            background: #33333399;
            color: var(--light);
            cursor: pointer;
            opacity: 0;
            padding-top: 4vw;
            transition: opacity 0.3s ease, padding 0.9s ease;
            p {
                font-size: calc(0.7rem + 1.4vw);
                opacity: 0;
                transition: 0.3s ease 0.2s;
                &:nth-of-type(1){
                    padding: 2vw 0 0 2vw;
                }
                &:nth-of-type(2){
                    padding: 0 0 0 2vw;
                }
            }
        }

        &:hover {
            img {
                transform: scale(1.1) rotate(-1deg);
            }
            figcaption {
                opacity: 1;
                padding-top: 0;
                p {
                    opacity: 1;
                }
            }
        }
    }

    @media (max-width: 768px) {
        width: calc(16rem + 28vw);
        height: calc(16rem + 18vw);
    }
`

export default SpecCard