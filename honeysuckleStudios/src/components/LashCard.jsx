import React from 'react'
import { motion } from 'framer-motion'
import { springCards, springCardsMobile } from '../anim/animations'
import styled from 'styled-components'
import { center } from '../GlobalStyles'

const LashCard = ({id, type, img, full, fill, width, inView}) => {
  return (
    <ScLashCard key={id} variants={width > 768 ? springCards : springCardsMobile}>
        <figure>
            <img src={img} alt={`${type} lash graphic`} />
        </figure>
        <div className="priceDetails">
            {inView && <h5 className="lashType">{type}</h5>}
            {inView && <p className='lashPrice'>full set . . . {`$${full}`}</p>}
            {inView && <p className='lashPrice'>fill . . . . . . . .{id === 3 ? " " : ""}{`$${fill}`}</p>}
        </div>
    </ScLashCard>
  )
}

const ScLashCard = styled(motion.div)`
    ${center};
    flex-direction: column;
    figure {
        border: 4px solid var(--hero);
        border-radius: 50%;
        ${center};
        width: 12rem;
        height: 12rem;
        margin: 0 0 2rem 0;
        img {
            width: 40%;
            transform: translate(0, 25%);
        }
    }
    .priceDetails {
        ${center};
        flex-direction: column;
        > *::selection {
            background: var(--hero);
            color: var(--light);
        }
        .lashType {
            font-size: calc(1.2rem + 0.4vw);
            letter-spacing: 0.1rem;
            margin-bottom: 1rem;
            opacity: 0;
            animation: fadeIn 1.4s ease 1.4s forwards;
        }
        .lashPrice {
            font-size: calc(0.8rem + 0.4vw);
            opacity: 0;
            animation: fadeIn 1.4s ease 1.8s forwards;
        }
    }

    @media (max-width: 1440px) {
        figure {
            width: 10rem;
            height: 10rem;
        }
    }

    @media (max-width: 1220px) {
        figure {
            border: 3px solid var(--hero);
            width: 8.6rem;
            height: 8.6rem;
            margin: 0 0 1rem 0;
        }
    }

    @media (max-width: 768px) {
        flex-direction: row;
        figure {
            border: 2px solid var(--hero);
            width: 7.2rem;
            height: 7.2rem;
            margin: 0.4rem 4rem 0.4rem 0;
        }
        .priceDetails {
            .lashType {
                align-self: flex-start;
            }
        }
    }

    @media (max-width: 520px) {
        figure {
            width: 6rem;
            height: 6rem;
            margin: 0 2rem 0 0;
        }
    }
`

export default LashCard;