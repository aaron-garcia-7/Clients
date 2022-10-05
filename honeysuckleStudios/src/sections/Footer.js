import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { center } from "../GlobalStyles";
import policies from "../pdf/policies.pdf";
import aftercare from "../pdf/aftercare.pdf";

const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <ScFooter>
      <div className="altLinks">
        <h4 className="altLinksTitle">stay in touch</h4>
        <div className="socialMedia">
          <a
            href="https://www.instagram.com/honeysuckle_studios/"
            target="_blank"
            rel="noreferrer"
          >
            in
          </a>
          <p>|</p>
          <a
            href="https://www.youtube.com/channel/UCcw-DZTeBJw9oXkl3dpp25g"
            target="_blank"
            rel="noreferrer"
          >
            yt
          </a>
        </div>
      </div>
      <div className="credits">
        <p className="businessCredits">
          © {currentYear} <span>|</span> honeysuckle studios
        </p>
        <a
          href="https://garciathe.dev"
          target="_blank"
          rel="noreferrer"
          className="siteCredits"
        >
          made with <FontAwesomeIcon icon={faHeart} className="faIcon" /> by
          <span> aaron garcia</span>
        </a>
      </div>
      <div className="mainLinks">
        <div className="row1">
          <a
            href="https://honeysucklestudios.glossgenius.com"
            target="_blank"
            rel="noreferrer"
          >
            booking
          </a>
          <a href={policies} target="_blank" rel="noreferrer">
            policies
          </a>
          <a href={aftercare} target="_blank" rel="noreferrer">
            aftercare
          </a>
        </div>
        <a href="sms:1-801-669-2605" className="phoneLink">
          (801) 669-2605
        </a>
      </div>
    </ScFooter>
  );
};

const ScFooter = styled("footer")`
  position: relative;
  background: var(--light);
  width: 100vw;
  height: 20vh;
  min-height: 12rem;
  ${center};
  justify-content: space-between;
  padding: 0 16rem 0 18rem;
  .altLinks {
    // See global styles
  }

  .credits {
    text-align: center;
    translate: 1rem 0;
    .businessCredits {
      width: 32vw;
      font-size: calc(0.8rem + 0.2vw);
      margin-bottom: 0.8rem;
      span {
        margin: 0 0.4rem;
      }
    }
    .siteCredits {
      letter-spacing: 0.08rem;
      font-size: calc(0.6rem + 0.2vw);
      color: black;
      &:hover {
        .faIcon {
          transform: scale(1.2);
          color: var(--herolight);
        }
        span {
          color: var(--hero);
          border-bottom: 1px solid var(--herolight);
        }
      }
      .faIcon {
        color: var(--hero);
        margin: 0 0.4rem 0 0.2rem;
        transition: 0.3s ease;
      }
      span {
        font-weight: 300;
        border-bottom: 1px solid var(--dark);
        transition: 0.3s ease;
      }
    }
  }

  .mainLinks {
    .row1 {
      padding-bottom: 1rem;
    }
    &:hover {
      a {
        opacity: 0.5;
        &:hover {
          opacity: 1;
          color: black;
        }
      }
    }
    a {
      color: var(--dark);
      font-size: calc(0.8rem + 0.1vw);
      font-weight: 300;
      cursor: pointer;
      transition: 0.3s ease;
      margin: 0.2rem;
    }
    .phoneLink {
      letter-spacing: 0.1rem;
    }
  }

  @media (max-width: 1440px) {
    padding: 0 14rem;
  }
  @media (max-width: 1220px) {
    padding: 0 6rem;
  }
  @media (max-width: 768px) {
    padding: 0 4rem;
    height: 36vh;
    min-height: 24rem;
    flex-direction: column;
    justify-content: space-evenly;

    .altLinks {
      order: 1;
    }
    .credits {
      order: 2;
      translate: 0 0;
      .businessCredits {
        width: 100vw;
      }
    }
    .mainLinks {
      order: 0;
      text-align: center;
      a {
        margin: 0.6rem;
      }
    }
  }
`;

export default Footer;
