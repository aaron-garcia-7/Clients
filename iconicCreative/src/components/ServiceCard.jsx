import React from 'react'
import styled from 'styled-components'

function ServiceCard({id, title, img, price, text1, text2, text3, text4, text5, text6, before, after, inView, inView2, inView3}) {

    const cardStyle = {
        opacity: inView ? 1 : !inView ? 0 : inView2 ? 1 : !inView2 ? 0 : inView3 ? 1 : !inView3 ? 0 : null,
        transform: inView ? 'skew(0deg)' : 'skew(-8deg)',
        transition: id === 1 ? 'opacity 0.6s ease, transform 0.6s ease' : 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
    }

  return (
    <ScServiceCard style={cardStyle}>
        <figure>
            <img src={img} alt={title} />
        </figure>
        <h4 className='cardTitle'>| {title}</h4>
        <div className="textDiv">
            <div className="topArea">
                <div className="left">
                    <p>{text1}</p>
                    <p>{text2}</p>
                    <p>{text3}</p>
                </div>
                <div className="right">
                    <p>{text4}</p>
                    <p>{text5}</p>
                    <p>{text6}</p>
                </div>
            </div>
            <div className="divider" />
            <div className="bottomArea">
                <p className="before">{before}</p>
                <p className="price">${price}</p>
                <p className="after">{after}</p>
                <button>
                    <a href="#">Select Plan</a>
                </button>
            </div>
        </div>
    </ScServiceCard>
  )
}

const ScServiceCard = styled('div')`
    position: relative;
    width: 48%;
    height: calc(14rem + 8vw);
    > * {
        position: absolute;
    }
    figure {
        top: 0;
        left: 0;
        width: 32%;
        height: calc(12rem + 8vw);
        z-index: 1;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .cardTitle {
        top: 5%;
        right: 0;
        width: 64%;
        font-size: calc(0.4rem + 1.2vw);
        font-weight: 400;
    }
    .textDiv {
        background: #D6D7D9;
        bottom: 0;
        right: 0;
        width: 96%;
        height: 80%;
        padding-left: 16vw;
        .topArea {
            height: 56%;
            display: flex;
            justify-content: center;
            align-items: center;
            div {
                width: 50%;
                height: 60%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                p {
                    font-size: calc(0.4rem + 0.7vw);
                }
            }
        }
        .divider {
            width: 100%;
            height: 1px;
            background: black;
            transform: translate(-6%, 0);
        }
        .bottomArea {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            height: 50%;
            width: 92%;
            padding-bottom: 2.4vw;
            .price {
                font-size: calc(0.8rem + 2.2vw);
                font-weight: 400;
            }
            .before,
            .after {
                position: absolute;
                font-size: calc(0.5rem + 0.5vw);
                font-style: italic;
            }
            .before {
                bottom: 30%;
            }
            .after {
                /* bottom: 4%; */
                bottom: 0.6vw;
                right: 32%;
            }
            button {
                padding: 0.8rem 1.4vw;
                background: var(--light);
                border-radius: 4rem;
                cursor: pointer;
                transition: background 0.3s ease;
                a {
                    font-size: calc(0.6rem + 0.6vw);
                    color: var(--offDark);
                    transition: color 0.3s ease;
                }
                &:hover {
                    background: var(--offDark);
                    a {
                        color: var(--offWhite);
                    }
                }
            }
        }
    }

    @media (max-width: 1440px) {
        height: calc(12rem + 8vw);

        figure {
            height: calc(10rem + 8vw);
        }

        .textDiv {
            .topArea {
                height: 50%;
                div {
                    p {
                        font-size: calc(0.4rem + 0.6vw);
                    }
                }
            }
            .bottomArea {
                .before {
                    bottom: 34%;
                }
                .after {
                    /* bottom: 8%; */
                    right: 36%;
                }
                button {
                    /* padding: 0.8rem 1.6vw; */
                }
            }
        }
    } 

    @media (max-width: 1024px) {
        width: 100%;
        height: calc(16rem + 8vw);
        margin-bottom: 10vw;
        figure {
            height: calc(14rem + 8vw);
        }
        .cardTitle {
            top: 4%;
            font-size: calc(0.4rem + 2.4vw);
        }
        .textDiv {
            padding-left: 34vw;
            .topArea {
                div {
                    p {
                        font-size: calc(0.6rem + 0.6vw);
                    }
                }
            }
            .bottomArea {
                width: 80%;
                padding-bottom: 4.4vw;
                .price {
                    /* font-size: calc(0.8rem + 2.2vw); */
                }
                .before,
                .after {
                    position: absolute;
                    font-size: calc(0.5rem + 0.5vw);
                    font-style: italic;
                }
                .before {
                    bottom: 30%;
                }
                .after {
                    /* bottom: 4%; */
                    bottom: 3.2vw;
                    /* right: 40%; */
                    left: 40vw;
                }
                button {
                    padding: 0.8rem 2.4vw;
                    /* background: var(--light); */
                    /* border-radius: 4rem; */
                    a {
                        /* font-size: calc(0.6rem + 0.6vw); */
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        height: calc(12rem + 8vw);
        figure {
            height: calc(10rem + 8vw);
        }
        .textDiv {
            .bottomArea {
                padding-bottom: 5.2vw;
                .before {
                    /* bottom: 32%; */
                    bottom: 10vw;
                }
                button {
                    padding: 0.6rem 2.4vw;
                }
            }
        }
    }

    @media (max-width: 520px) {
        height: 64vh;
        height: calc(24rem + 8vw);
        margin-bottom: 8rem;
        figure {
            width: 100%;
            height: 60%;
        }
        .cardTitle {
            top: -10%;
            left: 0;
            width: 100%;
            font-weight: 100;
            font-size: calc(0.4rem + 3.6vw);
        }
        .textDiv {
            width: 100%;
            height: 40%;
            padding: 0 4vw;
            
            .divider {
                transform: translate(0%, 0);
            }
            .bottomArea {
                padding-bottom: 6vw;
                .price {
                    font-size: calc(1.2rem + 2.2vw);
                }
                .before,
                .after {
                    bottom: 7vw;
                    left: 27%;
                }
                button {
                    padding: 0.6rem 2.4vw;
                }
            }
        }
    }

    @media (max-width: 480px) {
        .textDiv {
            width: 100%;
            height: 40%;
            padding: 0 4vw;
            .bottomArea {
                padding-bottom: 8vw;
                .before,
                .after {
                    bottom: 9vw;
                    left: 31%;
                }
            }
        }
    }

`

export default ServiceCard