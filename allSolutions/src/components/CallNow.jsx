import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const CallNow = ({uniqueId}) => {

    return (
        <StyledCallNow id={uniqueId ? "callNow" : ""}>
            <p>Call Now</p>
            <FontAwesomeIcon icon={faPhone} className="faIcon"/>
        </StyledCallNow>
    )
}

const StyledCallNow = styled('div')`
    position: fixed;
    bottom: 8%;
    right: 8%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: var(--colDom);
    opacity: 0.96;
    border: none;
    border-radius: 2rem;
    width: 3.6rem;
    height: 3.6rem;
    transform: translate(400%, 0%) scale(0.4);
    z-index: 5;
    cursor: pointer;
    transition: 0.4s ease;
    animation: ctaBtn 2.4s 1s ease-in-out forwards;
    &:hover {
        margin-bottom: 0.4rem;
    }
    p,
    .faIcon{
        font-size: calc(1.2rem + 0.4vw);
        opacity: 0;
        color: white;
        animation: appear 1s 3.2s ease forwards;
    }

    @keyframes ctaBtn {
        0% {
            transform: translate(400%, 0%) scale(0.4);
        }
        40% {
            transform: translate(0%, 0%) scale(0.4);
        }
        75% {
            transform: translate(0%, 0%) scale(1);
            width: 3.6rem;
        }
        95%{
            width: calc(8rem + 4vw);
            transform: translate(0%, 0%) scale(1);
        }
        100%{
            width: calc(8rem + 4vw);
            transform: translate(0%, 0%) scale(1);
            box-shadow: 4px 6px 4px #00000055;
        }
    }
    @keyframes appear {
        to{
            opacity: 1;
        }
    }

    @media(max-width: 768px) {
        bottom: 6%;
        right: 6%;
        width: 2.8rem;
        height: 2.8rem;
        transform: translate(400%, 0%) scale(0.4);
        z-index: 5;
        animation: ctaBtn 2.4s 1s ease-in-out forwards;
        p,
        .faIcon{
            font-size: calc(1rem + 0.4vw);
            opacity: 0;
            color: white;
            animation: appear 1s 3.2s ease forwards;
        }

        @keyframes ctaBtn {
            0% {
                transform: translate(400%, 0%) scale(0.4);
            }
            40% {
                transform: translate(0%, 0%) scale(0.4);
            }
            75% {
                transform: translate(0%, 0%) scale(1);
                width: 2.8rem;
            }
            95%{
                width: calc(6.4rem + 4vw);
                transform: translate(0%, 0%) scale(1);
            }
            100%{
                width: calc(6.4rem + 4vw);
                transform: translate(0%, 0%) scale(1);
                box-shadow: 4px 6px 4px #00000055;
            }
        }
    }
`

export default CallNow;