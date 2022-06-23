import styled from 'styled-components';

const ViewMore = () => {
    return (
        <StyledViewMore>
            {/* <p className='plusSign'>+</p> */}
            <p className='noPlus'>View<br/>More</p>
        </StyledViewMore>
    )
}

const StyledViewMore = styled('div')`
    position: absolute;
    top: 50%;
    right: 4.2%;
    transform: scale(0) translate(-50%, -50%);
    width: 6.8rem;
    height: 6.8rem;
    border-radius: 50%;
    background: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 4;
    box-shadow: 0px 4px 8px #31313122;
    cursor: pointer;
    transition: 0.4s ease;
    animation: plusGrow 1s 3s ease forwards;
    .plusSign {
        transform: translate(0, -8%);
        font-size: calc(2rem + 0.2vw);
        font-weight: 700;
        color: var(--brown);
        opacity: 0;
        animation: plusFade 1s 4s ease forwards;
    }
    .noPlus {
        font-size: calc(0.6rem + 0.6vw);
        color: var(--brown);
    }
    &:hover {
        background: var(--lightGrey);
    }
    @keyframes plusGrow {
        to {
            transform: scale(1) translate(-50%, -50%);
        }
    }
    @keyframes plusFade {
        to {
            opacity: 1;
        }
    }
    @media screen and (max-width: 1440px){
        right: 0;
    }
    @media screen and (max-width: 1184px){
        right: -6rem;
        .noPlus{
            transform: translate(-32%, 0) rotate(-90deg);
        }
    }
    @media screen and (max-width: 768px){
        top: 76%;
        right: 50%;
        transform: scale(0) translate(50%, 0);
        width: 4rem;
        height: 4rem;
        .plusSign {
            font-weight: 500;
        }
        .noPlus{
            transform: translate(0, 0) rotate(0deg);
        }
        @keyframes plusGrow {
            to {
                transform: scale(1) translate(50%, 0);
            }
        }
    }
`

export default ViewMore;