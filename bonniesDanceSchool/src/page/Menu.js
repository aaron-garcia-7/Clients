import { motion } from "framer-motion";
import { bottomLink } from "../animations/menuAnimations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import SocialMedia from "../components/SocialMedia";
import registrationPdf from "../documents/Registration.pdf";

const Menu = ({ menuOpen, width }) => {
  const openStyle = {
    transform: "translate(0, 0)",
  };

  return (
    <ScMenu style={menuOpen ? openStyle : null}>
      {menuOpen && (
        <div className="menuPartial">
          <h2>Menu</h2>
          <ul>
            <li>
              <a href={registrationPdf} target="_blank" className="menuLink">
                register
              </a>
            </li>
            <li>
              <a href="" className="menuLink">
                contact
              </a>
            </li>
            <li>
              <a href="" className="menuLink">
                about
              </a>
            </li>
          </ul>
          {width <= 580 && <SocialMedia inMenu={true} />}
        </div>
      )}
      <div className="sideText left">
        <p>Contemporary</p>
        <p>Jazz</p>
        <p>Ballet</p>
      </div>
      <div className="sideText right">
        <p>Ballet</p>
        <p>Contemporary</p>
        <p>Jazz</p>
      </div>
      {menuOpen && (
        <div className="bottomLinks">
          <motion.div
            variants={bottomLink}
            initial="initial"
            animate="animate"
            className="left"
          >
            <a href="tel:801-202-9032">
              <FontAwesomeIcon icon={faPhone} className="faIcon" />
              801-513-6972
            </a>
            <a href="mailto:bonnie@bonniesdanceschool.com">
              <FontAwesomeIcon icon={faEnvelope} className="faIcon" />
              bonnie@bonniesdanceschool.com
            </a>
          </motion.div>
          <motion.div
            variants={bottomLink}
            initial="initial"
            animate="animate"
            className="right"
          >
            <a
              href="https://goo.gl/maps/ELECSz7HCWkmLdbM6"
              target="_blank"
              rel="noreferrer"
            >
              5372 Harvestmill Dr. <br /> West Jordan, UT 84081
            </a>
          </motion.div>
        </div>
      )}
    </ScMenu>
  );
};

const ScMenu = styled.aside`
  background: var(--pink);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  min-height: 38rem;
  transform: translate(0, -100%);
  transition: transform 0.5s ease;
  z-index: 3;

  .menuPartial {
    border: 2px solid var(--pink2);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--light);
    width: 60vw;
    height: 60vh;
    min-height: 26rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      font-size: calc(1.2rem + 1.2vw);
      letter-spacing: 0.4rem;
      margin-bottom: 4rem;
      opacity: 0;
      animation: fade 1s ease 0.4s forwards;
    }
    ul {
      li {
        margin-bottom: 2rem;
        transform: translate(0, 80%);
        animation: linkReveal 0.8s ease-in forwards;
        .menuLink {
          color: var(--dark);
          font-size: calc(0.6rem + 0.8vw);
          font-weight: 300;
          padding: 0.4rem 1.2rem;
        }
        &:nth-of-type(1) {
          animation-delay: 0.4s;
          &::after {
            animation-delay: 0.4s;
          }
          .menuLink {
            border: 3px solid #ffffff00;
            animation: border 0.6s ease 1s forwards;
          }
        }
        &:nth-of-type(2) {
          animation-delay: 0.6s;
          &::after {
            animation-delay: 0.6s;
          }
        }
        &:nth-of-type(3) {
          animation-delay: 0.8s;
          &::after {
            animation-delay: 0.8s;
          }
        }
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 80%;
          background: var(--light);
          animation: boxDrop 0.6s ease forwards;
        }
      }
    }
  }

  .sideText {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    /* display: flex; */
    display: none;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid white;
    width: 2rem;
    height: 40vh;
    min-height: 12rem;
    p {
      rotate: -90deg;
      font-size: calc(1rem + 1vw);
      &:nth-of-type(1) {
      }
    }
    &.left {
      left: 0;
      /* rotate: -90deg; */
    }
    &.right {
      right: 0;
      /* rotate: 90deg; */
    }
  }

  .bottomLinks {
    position: absolute;
    bottom: 4%;
    width: 100vw;
    padding: 0 2.8rem;
    display: flex;
    justify-content: space-between;
    div {
      opacity: 0;
      a {
        color: var(--light);
        font-size: calc(0.6rem + 0.2vw);
        font-weight: 400;
        letter-spacing: 0.1rem;
        transition: opacity 0.3s ease;
        &:hover {
          opacity: 0.5;
        }
      }
    }
    .left {
      display: flex;
      flex-direction: column;
      a {
        .faIcon {
          margin-right: 1rem;
        }
        &:nth-of-type(1) {
          margin-bottom: 1rem;
        }
      }
    }
  }

  @keyframes linkReveal {
    /* 60% {
      transform: translate(0, -6px);
    } */
    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes boxDrop {
    to {
      /* translate: 0 120%; */
      transform: translate(0, 120%);
      height: 0%;
    }
  }

  @keyframes border {
    to {
      border: 3px solid var(--pink);
    }
  }

  @media (max-width: 768px) {
    .bottomLinks {
      padding: 0 1.6rem;
      div {
        a {
          letter-spacing: 0.06rem;
        }
      }
      .left {
        a {
          .faIcon {
            margin-right: 0.6rem;
          }
          &:nth-of-type(1) {
            margin-bottom: 0.6rem;
          }
        }
      }
    }
  }

  @media (max-width: 580px) {
    .menuPartial {
      top: 44%;
      width: 80vw;
      height: 50vh;
      min-height: 22rem;
      ul {
        li {
          margin-bottom: 1rem;
        }
        margin-bottom: 1rem;
      }
    }
    #socialMediaMenu {
      transform: translate(0, 60%);
      scale: 1.2;
      li {
        .faIcon {
          font-size: calc(0.6rem + 0.8vw);
          transition: 0.3s ease;
          &:hover {
            opacity: 0.5;
          }
        }
        &:nth-of-type(1) {
          margin-right: 1rem;
          .faIcon {
            font-size: calc(0.5rem + 0.8vw);
          }
        }
        &:nth-of-type(2) {
          border: 1px solid var(--light); // Used to adjust
        }
      }
    }
    .bottomLinks {
      .right {
        transform: translate(0, -20%);
      }
    }
  }

  @media (max-width: 480px) {
    transition: translate 0.6s ease;
    .bottomLinks {
      padding: 0 0.6rem;
      bottom: 14%;
      .left,
      .right {
        scale: 0.9;
      }
    }
  }
`;

export default Menu;
