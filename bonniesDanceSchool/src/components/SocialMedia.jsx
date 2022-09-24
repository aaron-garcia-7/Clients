import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const SocialMedia = ({menuOpen, inNav, inHero, inMenu, inFooter}) => {
  const style = {
    color: inNav && menuOpen ? "var(--light)" : "var(--dark)",
  }

  return (
    <ScSocialMedia id={inHero ? "socialMediaHero" : inMenu ? "socialMediaMenu" : inFooter ? "socialMediaFooter" : null}>
    <li>
      <a
        href="https://www.facebook.com/profile.php?id=100057303255853&ref=hl"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faFacebookF} className="faIcon" style={style}/>
      </a>
    </li>
    <li>
      <a 
        href="https://www.instagram.com/bonniesdanceschool/" 
        target="_blank" 
        rel="noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="faIcon" style={style}/>
      </a>
    </li>
  </ScSocialMedia> 
  )
}

const ScSocialMedia = styled.ul`
    display: flex;
     li {
       &:nth-child(2) {
         transform: translate(2rem, 0);
        }
        .faIcon {
          font-size: calc(0.6rem + 0.8vw);
          transition: 0.3s ease;
          &:hover {
            opacity: 0.5;
          }
        }
        &:nth-of-type(1){
          .faIcon {
            font-size: calc(0.5rem + 0.8vw);
          }
        }
    }

@media (max-width: 1440px) {
    li {
        width: 0.8rem;
        &:nth-child(2) {
            width: 1.2rem;
        }
    }
}

@media (max-width: 1220px) {
    li {
        &:nth-child(2) {
          transform: translate(2rem, 0.1rem);
        }
    }
}

@media (max-width: 768px) {
  li {
      &:nth-child(2) {
        transform: translate(1rem, 0.1rem);
      }
    }
}
`

export default SocialMedia;