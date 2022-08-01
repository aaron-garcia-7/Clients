import { useDispatch, useSelector } from "react-redux";
import { closeCard } from "../reducers/cardReducer";
import { motion } from "framer-motion";
import { containerCard, fadeGroupCard } from "../anim/animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const RequestSent = () => {
    const dispatch = useDispatch();

    const closeCardHandler = (e) => e.target.classList.contains("backScreen") ? dispatch(closeCard()) : null;

    const {language} = useSelector(store => store.lang);

    return (
        <StyledRequestSent className="backScreen" onClick={closeCardHandler}>
            <div className="card">
                <FontAwesomeIcon onClick={() => dispatch(closeCard())} icon={faClose} className="faIcon" />
                <motion.header variants={containerCard} initial="initial" animate="animate">
                    <motion.h2 variants={fadeGroupCard}>{language === "English" ? "Request Sent!" : "Solicitud Enviada!"}</motion.h2>
                    <motion.p variants={fadeGroupCard}>{language === "English" ? `We'll get back to you shortly.` : "Nos pondremos en contacto con usted en breve"}</motion.p>
                </motion.header>
                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                    <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
            </div>
        </StyledRequestSent>
    )
}

const StyledRequestSent = styled('div')`
    position: fixed;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    background: #c0c0c0cc;
    backdrop-filter: blur(0px);
    animation: loadModal 0.3s 0s ease forwards;
    .card {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.9);
        width: 32vw;
        min-width: 28rem;
        height: 32vh;
        min-height: 22rem;
        border-radius: 0.6rem;
        background: white;
        opacity: 0;
        animation: cardAppear 0.6s 0.5s ease forwards;
        .faIcon {
            position: absolute;
            top: 8%;
            right: 8%;
            font-size: calc(1rem + 0.8vw);
            cursor: pointer;
            transition: 0.3s ease;
            &:hover {
                transform: scale(1.2);
            }
        }
        header {
            position: absolute;
            top: 24%;
            left: 50%;
            transform: translate(-50%, 0);
            width: 86%;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            h2 {
                font-size: calc(1.6rem + 1.2vw);
                margin-bottom: 1rem;
            }
            p {
                font-size: calc(0.8rem + 0.4vw);
                font-style: italic;
            }
        }
        // Check Mark Code
        .checkmark {
            position: absolute;
            top: 64%;
            left: 45%;
            transform: translate(-50%, 0);
            width: 56px;
            height: 56px;
            border-radius: 50%;
            display: block;
            stroke-width: 2;
            stroke: #fff;
            stroke-miterlimit: 10;
            box-shadow: inset 0px 0px 0px #7ac142;
            animation: fill .4s ease-in-out 1.6s forwards, scale .3s ease-in-out 2s both;
        }
        .checkmark__circle {
            stroke-dasharray: 166;
            stroke-dashoffset: 166;
            stroke-width: 2;
            stroke-miterlimit: 10;
            stroke: #7ac142;
            fill: none;
            animation: stroke .6s cubic-bezier(0.650, 0.000, 0.450, 1.000) 1s forwards;
        }
        .checkmark__check {
            transform-origin: 50% 50%;
            stroke-dasharray: 48;
            stroke-dashoffset: 48;
            animation: stroke .3s cubic-bezier(0.650, 0.000, 0.450, 1.000) 2.6s forwards;
        }
    }

    @keyframes loadModal {
        to {
            backdrop-filter: blur(0px);
        }
    }
    @keyframes cardAppear {
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
            box-shadow: 0px 2px 12px #31313126;
        }
    }
    @keyframes stroke {
        100% {
            stroke-dashoffset: 0;
        }
    }
    @keyframes scale {
        0%, 
        100% {
            transform: none;
        }
        50% {
            transform: scale3d(1.1, 1.1, 1);
        }
    }
    @keyframes fill {
        100% {
            box-shadow: inset 0px 0px 0px 30px #7ac142;
        }
    }

    @media (max-width: 1440px) {
        .card {
            min-height: 18rem;
            header {
                top: 22%;
            }
            .checkmark {
                top: 66%;
            }
        }
    }

    @media (max-width: 768px) {
        .card {
            min-width: 24rem;
            min-height: 14rem;
            .faIcon {
                font-size: calc(1.2rem + 1vw);
            }
            header {
                h2 {
                    margin-bottom: 0.4rem;
                }
            }
            .checkmark {
                width: 42px;
                height: 42px;
            }
        }
    }

    @media (max-width: 480px) {
        .card {
            min-width: 20rem;
            min-height: 16rem;
            .faIcon {
                font-size: calc(1.2rem + 1vw);
            }
            header {
                top: 26%;
                h2 {
                    margin-bottom: 0.8rem;
                }
                p {
                    width: 80%;
                }
            }
        }
    }
`

export default RequestSent;