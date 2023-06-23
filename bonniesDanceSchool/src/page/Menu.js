import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import phone from "../images/phone.svg";
import mail from "../images/mail.svg";
import registrationPdf from "../documents/Registration.pdf";
import SocialMedia from "../components/SocialMedia";

function Menu({ navOpen, setNavOpen, pageWidth, setContact }) {
  const menuStyle = {
    opacity: 1,
    pointerEvents: "all",
  };

  const headerStyle = {
    transform: "translateY(0)",
    transition: "1s cubic-bezier(.31,1.1,.73,1.1) 0.4s",
  };

  const linkStyle = {
    transform: "translateY(0)",
    transition: "0.7s cubic-bezier(.31,1.1,.73,1.1) 0.8s",
  };
  const linkStyle2 = {
    transform: "translateY(0)",
    transition: "0.7s cubic-bezier(.31,1.1,.73,1.1) 0.9s",
  };
  const linkStyle3 = {
    transform: "translateY(0)",
    transition: "0.7s cubic-bezier(.31,1.1,.73,1.1) 1s",
  };

  const bubbleStyle1 = {
    transform: "translate(0, -40%) scale(1)",
    transition: "transform 1s cubic-bezier(.31,1.1,.73,1.1) 1s",
  };
  const bubbleStyle2 = {
    transform: "translate(0, -100%) scale(1)",
    transition: "transform 1s cubic-bezier(.31,1.1,.73,1.1) 1.2s",
  };

  const footerStyle = {
    opacity: 1,
    transition: "opacity 2s cubic-bezier(.31,1.1,.73,1.1) 1.4s",
  };

  return (
    <ScMenu style={navOpen ? menuStyle : null}>
      <div className="list">
        <header>
          <div className="headerBlock" style={navOpen ? headerStyle : null}>
            <h5>Menu</h5>
          </div>
        </header>
        <ul>
          <li>
            <div className="linkBlock" style={navOpen ? linkStyle : null}>
              <a
                href={registrationPdf}
                target="_blank"
                rel="noreferrer"
                onFocus={() => setNavOpen(true)}
                tabIndex={3}
              >
                Register
              </a>
            </div>
          </li>
          <li>
            <div className="linkBlock" style={navOpen ? linkStyle2 : null}>
              <Link
                to="footer"
                offset={pageWidth > 1440 ? -240 : pageWidth < 768 ? -60 : -140}
                onClick={() => {
                  setNavOpen(false);
                  setContact(true);
                }}
              >
                Contact
              </Link>
            </div>
          </li>
          <li>
            <div className="linkBlock" style={navOpen ? linkStyle3 : null}>
              <Link
                to="about"
                offset={pageWidth > 1440 ? -240 : pageWidth < 768 ? -60 : -140}
                onClick={() => setNavOpen(false)}
              >
                About
              </Link>
            </div>
          </li>
        </ul>
        {pageWidth <= 768 && <SocialMedia inMenu={true} navOpen={navOpen} />}
      </div>
      <div className="menuBubble1" style={navOpen ? bubbleStyle1 : null} />
      <div className="menuBubble2" style={navOpen ? bubbleStyle2 : null} />
      <footer className="menuFooter" style={navOpen ? footerStyle : null}>
        <div className="left">
          <a href="sms:8015136972">
            <img src={phone} alt="" /> 801-513-6972
          </a>
          <a href="mailto:bonniesdanceschool@gmail.com">
            <img src={mail} alt="" /> bonniesdanceschool@gmail.com
          </a>
        </div>
        <div className="right">
          <a
            href="https://goo.gl/maps/ELECSz7HCWkmLdbM6"
            target="_blank"
            rel="noreferrer"
            onFocus={() => setNavOpen(true)}
          >
            5372 Harvest Mill Dr. <br /> West Jordan, UT 84081
          </a>
        </div>
      </footer>
    </ScMenu>
  );
}

const ScMenu = styled("aside")`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  min-height: 24rem;
  background: var(--taupe);
  z-index: 4;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.6s cubic-bezier(0.21, 0.81, 0.55, 1.02) 0.4s;
  > * {
    position: absolute;
  }

  .list {
    top: 50%;
    left: 25%;
    transform: translate(0, -50%);
    header {
      overflow: hidden;
      height: calc(4rem + 2vw);
      .headerBlock {
        transform: translateY(100%);
        transition: 0.6s ease 0.04s;
        h5 {
          font-size: calc(2rem + 2vw);
          font-weight: 100;
          letter-spacing: 0.4rem;
          margin-bottom: calc(2rem + 2vw);
        }
      }
    }
    ul {
      height: calc(6rem + 6vw);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 2.8rem 0 3.6rem 0;
      li {
        overflow: hidden;
        .linkBlock {
          transform: translateY(100%);
          transition: 0.8s ease;
          a {
            font-size: calc(1rem + 1vw);
            transition: 0.3s ease, font-size 0s;
            cursor: pointer;
            &:hover {
              color: var(--plum);
              padding-left: 0.8rem;
            }
          }
        }
        &:nth-of-type(1) {
          .linkBlock {
            transition-delay: 0.1s;
          }
        }
        &:nth-of-type(2) {
          .linkBlock {
            transition-delay: 0.16s;
          }
        }
        &:nth-of-type(3) {
          .linkBlock {
            transition-delay: 0.22s;
          }
        }
      }
    }
  }

  .menuBubble1 {
    top: 50%;
    right: 16%;
    transform: translate(0, -40%) scale(0);
    width: 20vw;
    height: 20vw;
    border-radius: 50%;
    background: var(--plum);
    transition: transform 0.8s ease;
  }
  .menuBubble2 {
    top: 50%;
    right: 28%;
    transform: translate(0, -100%) scale(0);
    width: 12vw;
    height: 12vw;
    border-radius: 50%;
    background: var(--light);
    z-index: -1;
    transition: 0.8s ease;
  }

  .menuFooter {
    bottom: 1.2rem;
    opacity: 0;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    height: 4rem;
    padding: 0 2vw;
    transition: opacity 0.3s ease 0s;
    div {
      a {
        font-size: calc(0.6rem + 0.4vw);
        line-height: 1.6rem;
        transition: color 0.4s ease;
        &:hover {
          color: var(--plum);
        }
        img {
          padding: 0 0.1rem;
          transform: scale(1);
          transition: 0.6s cubic-bezier(0.66, -0.72, 0.31, 1.49);
        }
      }
    }
    .left {
      display: flex;
      flex-direction: column;
      a {
        &:hover {
          img {
            padding-right: 0.6rem;
            transform: scale(1.3);
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    #socialMediaMenu {
      opacity: 0;
      transform: translate(-1vw, 0);
    }

    .menuFooter {
      .right {
        a {
          line-height: 0.6rem;
        }
      }
    }

    .menuBubble1 {
      top: 24%;
      width: 16vw;
      height: 16vw;
    }
    .menuBubble2 {
      top: 62%;
      right: -16%;
      width: 46vw;
      height: 46vw;
    }
  }

  @media (max-width: 520px) {
    .menuFooter {
      .right {
        transform: translate(0, -0.2rem);
      }
    }
  }

  @media (max-height: 480px) {
    .list {
      header {
        height: calc(2.4rem + 2vw);
        .headerBlock {
          h5 {
            font-size: calc(1.6rem + 1.6vw);
          }
        }
      }
      ul {
        height: calc(4.4rem + 4.4vw);
        margin: 1.2rem 0 2rem 0;
        li {
          .linkBlock {
            a {
              font-size: calc(0.8rem + 0.8vw);
            }
          }
        }
      }
    }
  }

  .menuFooter {
    bottom: 0.6rem;
  }
`;

export default Menu;
