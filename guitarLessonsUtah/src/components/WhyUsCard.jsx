import styled from 'styled-components';

const WhyUsCard = ({list}) => {
    return  (
        <StyledWhyUsCard>
            <ul>
                <RationaleBlock list={list}/>
            </ul>
            <div className="stripe" />
            <h6 className="decorText">Why Us</h6>
        </StyledWhyUsCard>
    )
}

const RationaleBlock = ({list}) => {
    const reasons = list.map(obj => (
        <StyledRationaleBlock key={obj.id}>
            <h5><p className='reasonNumber'>{obj.id}.</p>{obj.reason}</h5>
            <p>{obj.explanation}</p>
        </StyledRationaleBlock>
    ))
    return reasons;
}

const StyledWhyUsCard = styled('div')`
    position: absolute;
    top: 14%;
    background: var(--white);
    width: 100%;
    height: 74%;
    min-height: 26rem;
    padding: 1.6rem;
    opacity: 0;
    transform: scale(0.8);
    animation: cardAppear 2s 1.6s ease forwards;
    z-index: 1;
    overflow: hidden;
    .stripe {
        position: absolute;
        top: 1rem;
        right: -3.2rem;
        width: 40%;
        height: 10%;
        transform: rotate(45deg);
        background: #A27C6744;
        z-index: -1;
    }
    .decorText {
        position: absolute;
        right: -3.2rem;
        bottom: 28%;
        transform: rotate(-90deg);
        font-size: calc(3.2rem + 2vw);
        text-transform: uppercase;
        color: #31313109;
        z-index: -1;
        user-select: none;
        pointer-events: none;
    }

    @keyframes cardAppear {
        50% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 1;
            transform: scale(1);
            box-shadow: 0px 4px 8px #31313122;
        }
    }
    @media screen and (max-width: 1440px) {
        padding: 1rem;
        height: 72%;
        min-height: 20rem;
    }
    @media screen and (max-width: 768px) {
        top: 0;
        padding: 2.2rem 0.6rem 0.6rem 2rem;
        width: 86%;
        height: 60%;
        min-height: 16rem;
    }
    // Set aside incase mark wants the small text
    /* @media screen and (max-width: 768px) {
        top: 0;
        padding: 0.6rem;
        width: 86%;
        height: 60%;
        min-height: 16rem;
    } */
    @media screen and (max-width: 480px) {
        padding: 2.6rem 0.6rem 0.6rem 1.4rem;
        width: 86%;
        height: 100%;
        animation: cardAppear 2s 2s ease forwards;
    }
`

const StyledRationaleBlock = styled('li')`
    margin-bottom: 1rem;
    h5 {
        font-size: calc(0.6rem + 0.6vw);
        font-weight: 500;
        .reasonNumber {
            font-size: calc(0.6rem + 0.6vw);
            font-weight: 300;
            font-style: italic;
            display: inline-block;
            padding-right: 0.4rem;
        }
    }
    p {
        font-size: calc(0.4rem + 0.5vw);
        font-weight: 300;
    }

    @media screen and (max-width: 1440px) {
        margin-bottom: 0.6rem;

    }

    @media screen and (max-width: 768px) {
        margin-bottom: 1.6rem;
        h5 {
            font-size: calc(0.8rem + 1vw);
            .reasonNumber {
                font-size: calc(0.8rem + 1vw);
                font-weight: 600;
                padding-right: 0.6rem;
            }
        }
        p {
            display: none;
        }
    }

    // If Mark wants to keep the text on smaller devices!!
    /* @media screen and (max-width: 768px) {
        p {
        font-size: calc(0.5rem + 0.4vw);
        font-weight: 300;
        }
    } */

`

export default WhyUsCard;