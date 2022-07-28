import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const SocialMedia = (unique) => {
    return (
        <StyledSocialMedia id={unique ? "socialMedia" : ""}>
            <li>
                <a href="https://www.facebook.com/All-Solutions-Heating-and-Air-Conditioning-107852441983136/" target="_blank">
                    <FontAwesomeIcon icon={faFacebookF} className="faIcon" />
                </a>
            </li>
            <li>
                <a href="">
                    <FontAwesomeIcon icon={faInstagram} className="faIcon" />
                </a>
            </li>
            <li>
                <a href="">
                    <FontAwesomeIcon icon={faYoutube} className="faIcon" />
                </a>
            </li>
        </StyledSocialMedia>
    )
}

const StyledSocialMedia = styled('ul')`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 12%;
    min-width: 10rem;
    height: 40%;
    li {
        a {
            .faIcon {
                font-size: calc(1rem + 1vw);
                color: white;
                transition: 0.4s ease;
                &:hover {
                    color: var(--colDom);
                }
            }
        }
    }

    @media(max-width: 768px) {
        width: 16%;
        min-width: 6rem;
    }
`

export default SocialMedia;