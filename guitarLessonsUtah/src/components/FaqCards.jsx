import styled from 'styled-components';

const FaqCard = ({title, img, smallImg}) => {
    return (
        <StyledFaqCard>
            <div className="stripe1 stripes" />
            <div className="stripe2 stripes" />
            <div className="circle" />
            <img src={img} alt="" style={smallImg ? {width: "calc(1.2rem + 1.2vw)"} : null} />
            <div className="cardText">{title}</div>
        </StyledFaqCard>
    )
}

const StyledFaqCard = styled('div')`
    position: relative;
    width: 44%;
    height: 22vh;
    min-height: 9.6rem;
    margin: 0.8rem;
    background: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 8px #31313122;
    opacity: 0;
    transform: scale(0.7);
    animation: faqCardFade 1s 1.6s ease forwards;
    overflow: hidden;
    > * {
        transition: 0.4s ease;
    }
    .stripes {
        position: absolute;
        background: #A27C6744;
        width: 6%;
    }
    .stripe1 {
        top: 0;
        right: 10%;
        height: 100%;
        transition-delay: 0.2s;
    }
    .stripe2 {
        bottom: 0;
        left: 10%;
        height: 0%;
    }
    .circle {
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
        width: 10vw;
        height: 10vw;
        border: 1.2rem solid #31313111;
        border-radius: 50%;
    }
    img {
        width: calc(2rem + 2vw);
        margin-bottom: 0.4rem;
    }
    .cardText {
        font-size: calc(0.8rem + 0.8vw);
        font-weight: 200;
        letter-spacing: 0.1rem;
    }

    &:hover {
        .cardText {
            font-weight: 400;
            transform: translate(0, -90%) scale(1.4);
        }
        img {
            opacity: 0.2;
            transform: translate(0, 40%);
        }
        .circle {
            transform: translate(50%, -50%) scale(0.9);
        }
        .stripe1 {
            height: 0%;
            transition-delay: 0s;
        }
        .stripe2 {
            height: 100%;
            transition-delay: 0.2s;
        }
    }

    @keyframes faqCardFade{
        to {
            opacity: 1;
            transform: scale(1);
            cursor: pointer;
        }
    }

    @media screen and (max-width: 1440px){
        margin: 1rem;
        width: 46%;
        .circle {
            border: 0.8rem solid #31313111;
        }
    }
    @media screen and (max-width: 1060px){
        width: 40%;
        margin: 0.6rem;
        .circle {
            width: 14vw;
            height: 14vw;
            border: 0.6rem solid #31313111;
        }
    }
    @media screen and (max-width: 768px){
        margin: 0.4rem;
        .circle {
            width: 18vw;
            height: 18vw;
        }
        .stripe1 {
            right: 6%;
        }
        .stripe2 {
            left: 6%;
        }
    }
    @media screen and (max-width: 480px){
        margin: 0.4rem;
        width: 46%;
        .circle {
            width: 26vw;
            height: 26vw;
        }
        .stripes {
            display: none;
        }
    }
`

export default FaqCard;