import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import Poly from "../components/Poly";
import heart from "../images/heart.svg";
import SocialMedia from "../components/SocialMedia";
import registrationPdf from "../documents/Registration.pdf";

const Footer = ({ pageWidth }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <ScFooter ref={ref}>
      <div className="divider">
        {inView && <div className="dash" />}
        {inView && <Poly inFooter={true} />}
        {inView && <div className="dash" />}
      </div>
      <div className="description">
        <h4>Bonnie's Dance School</h4>
        <p>
          We are commited to using music, costume, and dance movements that are
          family friendly and wholesome. At Bonnie’s Dance School we love to see
          our dancers’ smiling faces as they discover and develop their artistic
          talents.
        </p>
        <p>
          Bonnie's Dance School strives to ensure an atmosphere of acceptance
          and excitement. We want our classes to be both fun and challenging. We
          have fun, work hard, and encourage our students to give every class
          100% of their effort. We will strive to make your child's dance
          opportunity with us a wonderful experience.
        </p>
      </div>
      <div className="quickLinks">
        <h4>Quick Links</h4>
        <ul>
          <li>
            <a href={registrationPdf} target="_blank">
              Register
            </a>
          </li>
          <li>
            <a href="sms:8015136972">Contact</a>
          </li>
          <li>
            <Link
              to="about"
              smooth={"easeInOutQuart"}
              duration={800}
              delay={40}
              offset={pageWidth > 1440 ? -240 : pageWidth < 768 ? -60 : -140}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="contact">
        <h4>Contact Information</h4>
        <p className="contactMethod">
          Phone<a href="sms:8015136972">801-513-6972</a>
        </p>
        <p className="contactMethod">
          Email
          <a href="mailto:bonniesdanceschool@gmail.com">
            bonniesdanceschool@gmail.com
          </a>
        </p>
        <p className="contactMethod">
          Address
          <a
            href="https://goo.gl/maps/ELECSz7HCWkmLdbM6"
            target="_blank"
            rel="noreferrer"
          >
            5372 Harvestmill Dr. <br /> West Jordan, UT 84081
          </a>
        </p>
      </div>
      <div className="credits">
        {/* <a href="https://garciathe.dev" target="_blank" rel="noreferrer">
          &lt; Designed &amp; Developed by <span>Aaron Garcia</span> &gt;
        </a> */}
        <a href="https://garciathe.dev" target="_blank" rel="noreferrer">
          Made with <img src={heart} className="heart" /> by{" "}
          <span>Aaron Garcia</span>
        </a>
      </div>
      {pageWidth <= 768 && <SocialMedia inFooter={true} />}
    </ScFooter>
  );
};

const ScFooter = styled.footer`
  position: relative;
  width: 100vw;
  height: 50vh;
  min-height: 32rem;
  > * {
    position: absolute;
  }
  .divider {
    width: 80vw;
    height: 6rem;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .dash {
      width: 0%;
      border: 1px solid var(--tan);
      border-radius: 4px;
      animation: footerDash 0.6s ease forwards;
    }
    #polyFooter {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 3.2rem;
    }
  }

  .description,
  .quickLinks,
  .contact {
    bottom: 24%;
    height: 50%;
    > * {
      letter-spacing: 0.02rem;
    }
    h4 {
      color: var(--maroon);
      font-size: calc(0.8rem + 0.4vw);
      font-weight: 500;
      margin-bottom: 1.6rem;
      letter-spacing: 0.06rem;
    }
  }

  .description {
    left: 10%;
    width: 26%;
    p {
      font-family: "Quicksand", sans-serif;
      font-size: calc(0.5rem + 0.4vw);
      font-weight: 400;
      &:nth-of-type(1) {
        margin-bottom: 1rem;
      }
    }
  }
  .quickLinks {
    left: 50%;
    transform: translate(-50%, 0);
    ul {
      padding-top: 1rem;
      li {
        margin-bottom: 1.6rem;
        a {
          font-size: calc(0.5rem + 0.4vw);
          transition: 0.3s ease;
          cursor: pointer;
          &::after {
            content: "→";
            position: absolute;
            transform: translate(20%, 20%);
            opacity: 0;
            transition: 0.4s ease;
            color: var(--dark);
          }
          &:hover {
            color: var(--dark);
            &::after {
              transform: translate(80%, 20%);
              opacity: 1;
            }
          }
        }
      }
    }
  }

  .contact {
    right: 16%;
    .contactMethod {
      font-family: "Quicksand", sans-serif;
      font-size: calc(0.6rem + 0.2vw);
      font-weight: 500;
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
      a {
        font-size: calc(0.5rem + 0.4vw);
        font-weight: 400;
        padding-top: 0.4rem;
        transition: 0.3s ease;
        &::after {
          content: "→";
          position: absolute;
          transform: translate(20%, 0);
          opacity: 0;
          transition: 0.4s ease;
          color: var(--dark);
        }
        &:hover {
          color: var(--dark);
          &::after {
            transform: translate(80%, 0);
            opacity: 1;
          }
        }
      }
    }
  }

  .credits {
    left: 50%;
    bottom: 8%;
    transform: translate(-50%, 0);
    a {
      color: var(--tan);
      font-size: calc(0.6rem + 0.2vw);
      .heart {
        padding: 0 0.1rem;
        transform: translate(0, 30%) scale(0.7);
        transition: 0.6s cubic-bezier(0.66, -0.72, 0.31, 1.49);
      }
      span {
        color: var(--tan);
        position: relative;
        font-family: "Quicksand", sans-serif;
        font-weight: 500;
        text-decoration: underline;
        transition: 0.3s ease;
        &::before,
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 0);
          border-bottom: 1px solid var(--dark);
          opacity: 0;
          transition: 0.3s ease;
          pointer-events: none;
        }
        &::before {
          width: 60%;
        }
        &::after {
          width: 30%;
          transition-delay: 0.1s;
        }
      }
      &:hover {
        .heart {
          padding: 0 0.2rem;
          transform: translate(0, 30%) scale(1);
        }
        span {
          color: var(--plum);
          &::before {
            border-bottom: 1px solid var(--plum);
            opacity: 1;
            bottom: -3px;
          }
          &::after {
            border-bottom: 1px solid var(--plum);
            opacity: 1;
            bottom: -7px;
          }
        }
      }
    }
  }

  @keyframes footerDash {
    to {
      width: 46%;
    }
  }

  @media (max-width: 1224px) {
    .quickLinks {
      ul {
        li {
          a {
            &::after {
              transform: translate(20%, 40%);
            }
            &:hover {
              &::after {
                transform: translate(80%, 40%);
              }
            }
          }
        }
      }
    }
    .contact {
      right: 12%;
    }
    @keyframes footerDash {
      to {
        width: 44%;
      }
    }
  }

  @media (max-width: 768px) {
    height: 92vh;
    min-height: 36rem;

    #polyFooter {
      scale: 0.8;
    }
    .quickLinks {
      ul {
        li {
          a {
            &::after {
              transform: translate(20%, 56%);
            }
            &:hover {
              &::after {
                transform: translate(80%, 56%);
              }
            }
          }
        }
      }
    }

    #socialMediaFooter {
      width: 3.6rem;
      bottom: 19%;
      left: 9%;
    }

    .description {
      left: 10%;
      bottom: 32%;
      width: 80%;
    }

    .quickLinks {
      bottom: 0;
      left: 10%;
      transform: translate(0, 0);
      ul {
        padding-top: 0;
        li {
          margin-bottom: 0.6rem;
        }
      }
    }

    .contact {
      bottom: 0;
      right: 14%;
    }

    .credits {
      width: 80vw;
      text-align: center;
      left: 50%;
      bottom: 8%;
      transform: translate(-50%, 0);
      a {
        font-size: calc(0.6rem + 0.2vw);
        span {
          font-family: "Quicksand", sans-serif;
          font-weight: 500;
          text-decoration: underline;
        }
      }
    }

    @keyframes footerDash {
      to {
        width: 42%;
      }
    }
  }

  @media (max-width: 520px) {
    #socialMediaFooter {
      bottom: 20%;
    }
  }

  @media (max-width: 480px) {
    .divider {
      #polyFooter {
        transform: translate(-64%, -58%);
      }
    }
    #socialMediaFooter {
      bottom: 23%;
    }
  }
`;

export default Footer;
