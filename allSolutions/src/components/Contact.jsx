import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleContact } from "../reducers/contactReducer";
import { openCard } from "../reducers/cardReducer";
import { motion } from "framer-motion";
import { containerForm, fadeGroupForm, fadeLateForm } from "../anim/animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Contact = () => {
    const [isRequired, setIsRequired] = useState(false);
    const dispatch = useDispatch();
    const { language } = useSelector((store) => store.lang);

    const closeContactHandler = (e) => e.target.classList.contains("backScreen") ? dispatch(toggleContact()) : null;

    const formHandler = (e) => {
        e.preventDefault();
        dispatch(openCard());
        dispatch(toggleContact());
        setTimeout(() => {
            window.location.reload();
        }, (language === "English" ? 6000 : 8000));
    }

    return (
        <StyledContact className="backScreen" onClick={closeContactHandler}>
            <div className="formBody">
                <FontAwesomeIcon onClick={(e) => dispatch(toggleContact())} icon={faClose} className="faIcon" />
                <motion.ul className="altContact" variants={fadeLateForm} initial="initial" animate="animate">
                    <li>
                        <a href="mailto:ashaacutah@gmail.com"><span>email:</span> ashaacutah@gmail.com</a>
                    </li>
                    <li>
                        <a href="tel:8017553040"><span>{language === "English" ? "phone" : "teléfono"}:</span> 801-755-3040</a>
                    </li>
                </motion.ul>
                <motion.form action="" onSubmit={formHandler} variants={containerForm} initial="initial" animate="animate">
                    <motion.div className="formBlock" variants={fadeGroupForm}>
                        <input className="input" type="text" name="name" placeholder=" " required/>
                        <label className="blockLabel" htmlFor="name">{language === "English" ? "name" : "nombre"}</label>
                    </motion.div>
                    <motion.div className="formBlock" variants={fadeGroupForm}>
                        <input className="input" type="phone" name="phone" placeholder=" " required/>
                        <label className="blockLabel" htmlFor="phone">{language === "English" ? "phone" : "teléfono"}</label>
                    </motion.div>
                    <motion.fieldset name="services" className="formBlock" variants={fadeGroupForm}>
                        <legend>{language === "English" ? "services" : "servicios"}</legend>
                        <div className="radios">
                            <label htmlFor="">{language === "English" ? "Replacement" : "Reemplazo"}
                                <input type="radio" name="services" onClick={() => setIsRequired(false)}/>
                            </label>
                            <label htmlFor="">{language === "English" ? "Repair" : "Reparar"}
                                <input type="radio" name="services" onClick={() => setIsRequired(false)}/>
                            </label>
                            <label htmlFor="">{language === "English" ? "Other" : "Otro"}
                                <input type="radio" name="services" onClick={() => setIsRequired(true)} />
                            </label>
                        </div>
                    </motion.fieldset>
                    <motion.fieldset name="urgency" className="formBlock" variants={fadeGroupForm}>
                        <legend>urgency</legend>                  
                        <div className="radios">
                            <label htmlFor="">{language === "English" ? "Non-urgent" : "No urgente"}
                                <input type="radio" name="urgency" />
                            </label>
                            <label htmlFor="">{language === "English" ? "Urgent" : "Urgente"}
                                <input type="radio" name="urgency" />
                            </label>
                            <label htmlFor="">ASAP
                                <input type="radio" name="urgency" />
                            </label>
                        </div>
                    </motion.fieldset>
                    <motion.div className="formBlock" variants={fadeGroupForm}>
                        <textarea name="message" id="" className="textArea" cols="30" rows="4" placeholder=" "></textarea>
                        <label className="blockLabel" htmlFor="message">{language === "English" ? "message" : "mensaje"} <span className={isRequired ? "jump" : ""}>{isRequired && language === "English" ? "explain service" : !isRequired && language === "English" ? "optional" : isRequired && language === "Spanish" ? "explicar el servicio" : "opcional"}</span></label>
                    </motion.div>
                    <motion.button variants={fadeGroupForm} className="formBtn">{language === "English" ? "submit" : "enviar"}</motion.button>
                </motion.form>
                <div className="divider" />
                <header>
                    <h2>{language === "English" ? "Let’s get " : "Empecemos"}<br className="hideBr"/> {language === "English" ? "started" : ""}</h2>
                    <motion.p variants={fadeLateForm} initial="initial" animate="animate">{language === "English" ? "We look forward to working with you and restoring comfort to your home." : "Esperamos trabajar con usted y restaurar la comodidad en su hogar."}</motion.p>
                </header>
            </div>
        </StyledContact>
    )
}

const StyledContact = styled('div')`
    position: fixed;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    background: #c0c0c000;
    backdrop-filter: blur(0px);
    animation: loadModal 0.4s 0.2s ease forwards;
    overflow-y: scroll;
    .formBody{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.9);
        width: 68vw;
        min-width: 42rem;
        height: 80vh;
        min-height: 36rem;
        border-radius: 1rem;
        background: white;
        opacity: 0;
        animation: formAppear 0.6s 0.2s ease forwards;
        > * {
            position: absolute;
        }
        .faIcon{
            top: 6%;
            right: 6%;
            color: var(--colDom);
            font-size: calc(1.6rem + 1.6vw);
            cursor: pointer;
        }
        .altContact {
            top: 6%;
            left: 6%;
            display: flex;
            li{
                margin-right: 2.6vw;
                a{
                    font-size: calc(0.7rem + 0.4vw);
                    text-decoration: none;
                    color: black;
                    transition: 0.3s ease;
                    span{
                        font-weight: 500;
                    }
                    &:hover {
                        color: var(--colDom);
                    }
                }
            }
        }

        form {
            top: 20%;
            left: 6%;
            width: 36%;
            height: 74%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            .formBlock {
                position: relative;
                height: 2.4rem;
                font-size: calc(0.6rem + 0.8vw);
                margin-bottom: 2.8rem;
                input,
                textarea {
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: transparent;
                    border: none;
                    width: 100%;
                    height: 100%;
                    font-size: calc(0.6rem + 0.8vw);
                    resize: none;
                    &:focus {
                        outline: none;
                    }
                }
                // Message
                &:nth-of-type(3) {
                    height: 8rem;
                    label{
                        width: auto;
                        span {
                            font-size: calc(0.4rem + 0.6vw);
                            font-weight: 500;
                            font-style: italic;
                            color: var(--col3);
                            opacity: 0;
                            margin-bottom: 2rem;
                            animation: blinkStart 0.8s ease forwards;
                        }
                    }
                    .jump {
                        animation: blink 0.8s ease forwards;
                    }
                }
                .blockLabel {
                    position: absolute;
                    top: 0;
                    left: 0;
                    pointer-events: none;
                    transition: 0.3s ease, font-size 0s;
                }

                input:focus ~ .blockLabel {
                    top: -1.8rem;
                    left: -0.6rem;
                    opacity: 0.8;
                    transform: scale(0.7);
                }
                textarea:focus ~ .blockLabel{
                    top: -1.8rem;
                    left: -1.6rem;
                    opacity: 0.8;
                    transform: scale(0.7);
                }
                // Once a class is added, then it has no trouble staying. Likely a specificy manner
                .input:not(:placeholder-shown).input:not(focus) ~ .blockLabel{
                    top: -1.8rem;
                    left: -0.6rem;
                    opacity: 0.5;
                    transform: scale(0.7);
                }
                .textArea:not(:placeholder-shown).textArea:not(focus) ~ .blockLabel {
                    top: -1.8rem;
                    left: -1.6rem;
                    opacity: 0.5;
                    transform: scale(0.7);
                }

                // Styling fields once valid. This can also maintain the label animation on a required field is filled (use pseudo ':valid')
                /* input:valid ~ .blockLabel {
                    top: -1.8rem;
                    left: -0.6rem;
                    opacity: 0.5;
                    color: var(--colDom);
                    transform: scale(0.7);
                } */
            }
            div.formBlock {
                min-height: 2rem;
                border-bottom: 2px solid #D5CCC5;
            }
            fieldset.formBlock {
                position: relative;
                top: 0;
                height: 2rem;
                border: none;
                border-bottom: none;
                outline: none;
                display: flex;
                margin-bottom: 2.2rem;
                legend {
                    font-size: calc(0.6rem + 0.8vw);
                    cursor: default;
                }
                .radios {
                    position: absolute;
                    top: -50%;
                    left: 32%;
                    transform: translate(0, -160%);
                    width: 60%;
                    display: flex;
                    justify-content: space-between;
                    label{
                        position: relative;
                        font-size: calc(0.4rem + 0.4vw);
                        font-weight: 400;
                        border-bottom: none;
                        height: 1.4rem;
                        input {
                            transform: translate(0, 100%);
                            cursor: pointer;
                        }
                    }
                }
            }
            .formBtn {
                width: 10rem;
                height: 2.8rem;
                align-self: center;
                background: var(--colDom);
                border: 2px solid var(--colDom);
                border-radius: 2rem;
                color: white;
                font-size: calc(1rem + 0.2vw);
                font-weight: 400;
                letter-spacing: 0.2rem;
                cursor: pointer;
                transition: 0.2s ease;
                &:hover {
                    background: transparent;
                    color: var(--colDom);
                }
            }
        }

        header {
            top: 25%;
            right: 6%;
            width: 36%;
            height: 60%;
            h2 {
                position: relative;
                font-size: calc(1.2rem + 4vw);
                font-weight: 300;
                margin-bottom: 2rem;
                transform: scale(0.8);
                opacity: 0;
                animation: h1Form 1s 1s ease forwards;
                &::after {
                    content: "";
                    position: absolute;
                    bottom: 6%;
                    left: 25%;
                    transform: translate(0%, 25%);
                    width: 0%;
                    height: 12%;
                    background: var(--colDom);
                    opacity: 0.3;
                    z-index: -1;
                    animation: dashAppearForm 0.6s 1.3s ease forwards;
                }
            }
            p {
                font-size: calc(0.8rem + 0.6vw);
            }
        }
        .divider {
            top: 20%;
            left: 50%;
            transform: translate(-50%, 0);
            width: 2px;
            height: 0%;
            background: var(--colDom);
            opacity: 0.5;
            animation: dividerAppearForm 0.6s 2s ease forwards;
        }
    }

    @keyframes loadModal {
        to {
            background: #c0c0c0cc;
            backdrop-filter: blur(2px);
        }
    }
    @keyframes formAppear {
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
            box-shadow: 0px 2px 12px #31313126;
        }
    }
    @keyframes h1Form {
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    @keyframes dashAppearForm {
        to {
            width: 50%;
        }
    }
    @keyframes dividerAppearForm {
        to {
            height: 68%;
        }
    }
    @keyframes blink {
        100% {
            opacity: 1;
        }
    }
    @keyframes blinkStart {
        100% {
            opacity: 1;
        }
    }

    @media(max-width: 1440px) {
        .formBody{
            width: 74vw;
            min-width: 46rem;
            form {
                .formBlock { 
                    margin-bottom: 1.8rem;
                    input:focus ~ .blockLabel {
                        top: -1.4rem;
                        left: -0.4rem;
                    }
                    textarea:focus ~ .blockLabel{
                        top: -1.5rem;
                        left: -1.3rem;
                    }
                    .input:not(:placeholder-shown).input:not(focus) ~ .blockLabel {
                        top: -1.4rem;
                        left: -0.4rem;
                    }
                    .textArea:not(:placeholder-shown).textArea:not(focus) ~ .blockLabel {
                        top: -1.5rem;
                        left: -1.3rem;
                    }    
                    &:nth-of-type(3) {
                        height: 6rem;
                        margin-bottom: 3.2rem;
                    }
                }
                fieldset.formBlock {
                    margin-bottom: 2.4rem;
                    .radios {
                        transform: translate(0, -120%);
                        width: 64%;
                        label{
                            font-size: calc(0.5rem + 0.4vw);
                            height: 1.2rem;
                        }
                    }
                }
                .formBtn {
                    transform: translate(0, -32%);
                }
            }
        }
    }

    @media(max-width: 768px) {
        .formBody{
            width: 86vw;
            min-width: 28rem;
            height: 84vh;
            .altContact {
                top: 20%;
                left: 50%;
                transform: translate(-50%, 0);
                width: 68%; 
                min-width: 24rem;
                justify-content: space-between;
                li{
                    margin-right: 0;
                }
            }
            form {
                top: 30%;
                left: 50%;
                transform: translate(-50%, 0);
                min-width: 24rem;
                .formBlock { 
                    margin-bottom: 1.2rem;
                    input:focus ~ .blockLabel {
                        top: -1rem;
                    }
                    textarea:focus ~ .blockLabel{
                        top: -1.2rem;
                        left: -0.8rem;
                    }
                    .input:not(:placeholder-shown).input:not(focus) ~ .blockLabel {
                        top: -1rem;
                    }
                    .textArea:not(:placeholder-shown).textArea:not(focus) ~ .blockLabel {
                        top: -1.2rem;
                        left: -0.8rem;
                    }
                    &:nth-of-type(3) {
                        height: 4.4rem;
                        margin-bottom: 2.8rem;
                    }
                }
                fieldset.formBlock {
                    margin-bottom: 1.8rem;
                }
                .formBtn {
                    transform: translate(0, -52%);
                }
            }
            header {
                top: 4%;
                left: 20%;
                width: 64%;
                height: 14%;
                h2 {
                    &::after {
                        bottom: 16%;
                        left: 36%;
                        height: 18%;
                        opacity: 0.3;
                    }
                }
                .hideBr,
                p {
                    display: none;
                }
            }
        }
        @keyframes dividerAppearForm {
            to {
                height: 4%;
            }
        }
    }

    @media(max-width: 480px) {
        .formBody{
            width: 100%;
            height: 100%;
            min-width: 22rem;
            border-radius: 0%;
            .altContact {
                top: 17%;
                left: 50%;
                transform: translate(-50%, 0);
                height: 8%;
                min-width: 18rem;
                flex-direction: column;
                li {
                    a {
                        font-size: calc(0.8rem + 0.6vw);
                    }
                }
            }
            form {
                top: 32%;
                min-width: 18rem;
                .formBlock { 
                    font-size: calc(0.8rem + 0.8vw);
                    margin-bottom: 1.6rem;
                    input,
                    textarea {
                        font-size: calc(0.8rem + 0.8vw);
                        &:focus {
                            outline: none;
                        }
                    }
                    input:focus ~ .blockLabel {
                        top: -0.8rem;
                        left: -0.4rem;
                    }
                    textarea:focus ~ .blockLabel{
                        top: -1.2rem;
                        left: -0.6rem;
                        transform: scale(0.8);
                    }
                    .input:not(:placeholder-shown).input:not(focus) ~ .blockLabel {
                        top: -0.8rem;
                        left: -0.4rem;
                    }
                    .textArea:not(:placeholder-shown).textArea:not(focus) ~ .blockLabel {
                        top: -1.2rem;
                        left: -0.6rem;
                        transform: scale(0.8);
                    }
                    &:nth-of-type(3) {
                        height: 5.2rem;
                        span {
                            font-size: calc(0.6rem + 0.6vw);
                        }
                    }
                }
                fieldset.formBlock {
                    margin-bottom: 1.6rem;
                    legend {
                        font-size: calc(0.8rem + 0.8vw);
                    }
                    .radios {
                        transform: translate(0, -80%);
                    }
                }
                .formBtn {
                    transform: translate(0, -20%);
                    width: 8rem;
                    height: 2.8rem;
                    letter-spacing: 0.1rem;
                }
            }
            header {
                top: 6%;
                left: 10%;
                width: 74%;
                height: 8%;
                h2 {
                    font-size: calc(1.2rem + 2.8vw);
                    &::after {
                        bottom:10%;
                        left: 38%;
                        height: 28%;
                    }
                }
            }
            .divider {
                display: none;
            }
        }
    }
`

export default Contact;