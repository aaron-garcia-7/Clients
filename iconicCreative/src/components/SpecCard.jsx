import React from 'react'
import styled from 'styled-components'
import service1 from '../images/photos/service1.png';
import service2 from '../images/photos/service2.png';
import service3 from '../images/photos/service3.png';

function SpecCard({title, order}) {
    const showTitle = {
        animation: 'fadeUp 1s cubic-bezier(.26,.77,.59,1.18) 0.1s forwards',
    }
    const showFigure = {
        animation: 'fadeUp 1.2s cubic-bezier(.26,.77,.59,1.18) 0.2s forwards',
    }

  return (
    <ScSpecCard id={order === 1 ? "spec1" : order === 2 ? "spec2" : "spec3" }>
        <h4 className='specTitle' style={showTitle}>{title}</h4>
        <figure className='specFigure' style={showFigure}>
            <img src={order === 1 ? service1 : order === 2 ? service2 : service3} alt={title} />
            <figcaption>
                <p>
                {order === 1 ? "Website Design + Dev, App Design + Dev, Navigation Mapping, Page Layout, Functionality Examples" : order === 2 ? "Brand Strategy, Positioning, Messaging, Brand Guildlines, Logo Design, Product Package Design, Voice / Tonality" : "Weekly Social Posts, Ecommerce, Video Thumbnails, Social Stories, Emails Ads"}
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
        transform: translate(0, 4rem);
    }
    .specFigure {
        position: relative;
        height: 90%;
        overflow: hidden;
        opacity: 0;
        transform: translate(0, 16%);
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
            opacity: 0;
            padding-top: 4vw;
            transition: opacity 0.3s ease, padding 0.9s ease;
            p {
                font-size: calc(0.7rem + 1.4vw);
                opacity: 0;
                transition: 0.3s ease 0.2s;
                padding: 2vw 0 0 2vw;
            }
        }

        &:hover {
            img {
                transform: scale(1.04);
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

    @media (max-width: 1224px) {
        width: calc(6rem + 28vw);
        height: calc(22rem + 18vw);
    }

    @media (max-width: 768px) {
        width: 80%;
        height: 24rem;

        .specFigure {
            overflow: visible;
            figcaption {
                top: 100%;
                height: 32%;
                opacity: 1;
                padding-top: 0;
                background: none;
                p {
                    opacity: 1;
                    padding: 0;
                    padding: 2vw 0 0 0;
                }
            }
            &:hover {
                img {
                    transform: scale(1);
                }
            }
        }
    }

    @media (max-width: 520px) {
        height: 22rem;
    }
`

export default SpecCard