import styled from "styled-components";

import Logo from "./Logo";
import SocialMedia from "./SocialMedia";

const Footer = () => {
    return (
        <StyledFooter>
            <Logo unique={true}/>
            <div className="address">
                <p>4434 W 8790 S, <br /> West Jordan, UT 84088</p>
            </div>
            <SocialMedia unique={true}/>
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
    #logo {
        transform: scale(0.8);
    }
    .address {
        position: absolute;
        left: 32%;
        p {
            font-size: calc(0.6rem + 0.6vw);
            color: white;
        }
    }
    #socialMedia {
        position: absolute;
        left: 62%;
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
        #logo {
            position: absolute;
            top: 21%;
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