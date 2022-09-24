import React from 'react'
import styled from 'styled-components';
import { center } from '../GlobalStyles';

const Cards = ({title, img}) => {
  return (
    <ScCard>
        <figure>
            <img src={img} alt={title} />
        </figure>
        <figcaption>{title}</figcaption>
    </ScCard>
  )
}

const ScCard = styled.div`
    width: 8rem;
    height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    figure {
      border: var(--border);
      background: var(--light);
      width: 7.6rem;
      height: 8rem;
      ${center}
      border-radius: 50%;
      margin-bottom: 1rem;
      img {
        width: 60%;
      }
    }
    figcaption {
      font-family: 'Quicksand', sans-serif;
      font-size: calc(0.6rem + 0.6vw);
      letter-spacing: 0.1rem;
    }

    @media (max-width: 768px){
      transform: scale(0.9);
      figure {
        width: 6.4rem;
        height: 6.4rem;
      }
    }

    @media (max-width: 580px){
      &:nth-child(2){
        order: 2;
        transform: scale(0.9);
      }
      &:nth-child(3){
        order: 1;
        transform: scale(0.9) translate(0, 9.2rem);
      }
      figure {
        width: 4.8rem;
        height: 4.8rem;
      }
    }
`

export default Cards;