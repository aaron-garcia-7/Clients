import React from 'react'
import { motion } from 'framer-motion'
import { springCards, springCardsMobile } from '../anim/animations'
import styled from 'styled-components'
import { center } from '../GlobalStyles'

const LashCard = ({id, type, img, full, fill, width}) => {
  return (
    <ScLashCard key={id} variants={width > 768 ? springCards : springCardsMobile}>
        <figure>
            <img src={img} alt={`${type} lash graphic`} />
        </figure>
        <div className="priceDetails">
            <h5 className="lashType">{type}</h5>
            <p className='lashPrice'>full set . . . {`$${full}`}</p>
            <p className='lashPrice'>fill . . . . . . . .{id === 3 ? " " : ""}{`$${fill}`}</p>
        </div>
    </ScLashCard>
  )
}

const ScLashCard = styled(motion.div)`
    ${center};
    flex-direction: column;
    figure {
        border: 3px solid var(--hero);
        border-radius: 50%;
        ${center};
        width: 16rem;
        height: 16rem;
        margin: 0 0 2rem 0;
        img {
            width: 40%;
        }
    }
    .priceDetails {
        ${center};
        flex-direction: column;
        .lashType {
            font-size: calc(1.2rem + 0.4vw);
            letter-spacing: 0.1rem;
            margin-bottom: 1rem;
        }
        .lashPrice {
            font-size: calc(0.8rem + 0.4vw);
        }
    }

    @media (max-width: 1440px) {
        figure {
            width: 12.8rem;
            height: 12.8rem;
        }
    }

    @media (max-width: 1220px) {
        figure {
            width: 12rem;
            height: 12rem;
            margin: 0 0 1rem 0;
        }
    }

    @media (max-width: 768px) {
        flex-direction: row;
        figure {
            width: 8rem;
            height: 8rem;
            margin: 0.4rem 4rem 0.4rem 0;
        }
        .priceDetails {
            .lashType {
                align-self: flex-start;
            }
            .lashPrice {
                /* font-weight: 300; */
            }
        }
    }

    @media (max-width: 520px) {
        figure {
            width: 6.4rem;
            height: 6.4rem;
            margin: 0 2rem 0 0;
        }
    }
`

export default LashCard;