import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "./SocialMedia";
import logoWhite from '../images/logoWhite.svg'

const Footer = () => {
    return (
        <StyledFooter>
            <img src={logoWhite} alt="" />
            <div className="address">
                <a href="https://www.google.com/maps/place/4434+W+8790+S,+West+Jordan,+UT+84088/@40.59194,-111.9968634,19.56z/data=!4m5!3m4!1s0x87528f012b07a06f:0x9d1dcc9fd817f17c!8m2!3d40.5919211!4d-111.996753" target="_blank">4434 W 8790 S, <br /> West Jordan, UT 84088</a>
            </div>
            <SocialMedia unique={true}/>
            <a href="https://garciathe.dev/" target="_blank" className="myLink">made with <FontAwesomeIcon icon={faHeart} className="faIcon"/> by Aaron Garcia</a>
        </StyledFooter>
    )
}

const StyledFooter = styled('footer')` 
    position: relative;
    background: var(--black);
    width: 100vw;
    height: 22vh;
    min-height: 10rem;
    display: flex;
    align-items: center;
    padding: 0rem 4vw;
    z-index: 2;
    img {
        width: calc(10rem + 4vw);
    }
    .address {
        position: absolute;
        left: 32%;
        a {
            text-decoration: none;
            font-size: calc(0.6rem + 0.6vw);
            color: white;
            transition: 0.3s ease;
            &:hover {
                color: var(--colDom);
            }
        }
    }
    #socialMedia {
        position: absolute;
        left: 62%;
    }
    .myLink {
        position: absolute;
        bottom: 8%;
        left: 50%;
        transform: translate(-50%, 0);
        font-size: calc(0.5rem + 0.5vw);
        text-decoration: none;
        color: white;
        transition: 0.3s ease;
        .faIcon {
            font-size: calc(0.4rem + 0.5vw);
            padding: 0 0.1rem;
            transition: 0.3s ease;
        }
        &::before {
            content: "<";
            position: absolute;
            top: 0;
            left: -14%;
            opacity: 0;
            transition: 0.3s ease;
        }
        &::after {
            content: ">";
            position: absolute;
            top: 0;
            right: -14%;
            opacity: 0;
            transition: 0.3s ease;
        }
        &:hover {
            .faIcon {
                color: #ffcccb;
            }
            &::before {
                left: -7%;
                opacity: 1;
            }
            &::after {
                right: -7%;
                opacity: 1;
            }
        }
    }

    @media(max-width: 1080px) {
        .address {
            display: none;
        }
        #socialMedia {
            left: 50%;
        }
    }
    @media(max-width: 768px) {
        height: 18vh;
        min-height: 6rem;
        padding: 0rem 2vw;
        img {
            left: 3%;
            transform: scale(0.84);
        }
    }
    @media(max-width: 480px) {
        height: 28vh;
        flex-direction: column;
        img {
            position: absolute;
            top: 16%;
            left: 4%;
        }
        .address {
            display: block;
            bottom: 32%;
            left: 10%;
            transform: scale(1.1);
            p {
                font-weight: 500;
            }
        }
        #socialMedia {
            top: 6%;
            left: 66%;
            transform: scale(1.1);
        }
        .myLink {
            bottom: 12%;
        }
    }
`

export default Footer;