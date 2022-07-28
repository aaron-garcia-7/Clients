import styled from "styled-components";

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
            <a href="https://codepen.io/aaronegarcia1/pen/abVOQKL" target="_blank" className="iconic">[ Code by Aaron Garcia ]</a>
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
    .iconic {
        position: absolute;
        bottom: 5%;
        left: 50%;
        transform: translate(-50%, 0);
        font-size: calc(0.6rem + 0.4vw);
        text-decoration: none;
        color: white;
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
    }

    @media(max-width: 480px) {
        height: 28vh;
        flex-direction: column;
        img {
            position: absolute;
            top: 16%;
            left: 4%;
            transform: scale(0.9);
        }
        .address {
            display: block;
            bottom: 24%;
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
    }
`

export default Footer;