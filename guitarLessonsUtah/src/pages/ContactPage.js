import styled from "styled-components";
import { motion } from "framer-motion";
import { container, containerDelay2, fade } from "../anim/animations";

import Logo from "../components/Logo";
import GiantPick from "../components/GiantPick";

import phone from "../images/graphics/phone.svg";
import mail from "../images/graphics/mail.svg";
import location from "../images/graphics/location.svg";
import tanPickFill from "../images/graphics/tanPickFill.svg";
import blackPickLine from "../images/graphics/blackPickLine.svg";

const ContactPage = () => {
  const submitContactHandler = (e) => {
    e.preventDefault();
  };

  return (
    <StyledContactPage>
      <Logo />
      <GiantPick fixed={true} />
      <img src={tanPickFill} className="tanPickFill" alt="" />
      <img src={blackPickLine} className="blackPickLine" alt="" />
      <motion.div
        className="textArea"
        variants={container}
        initial="initial"
        animate="animate"
      >
        <motion.h6 className="preHeader" variants={fade}>
          Contact
        </motion.h6>
        <motion.h3 className="secHeader" variants={fade}>
          Need to get
          <br /> in touch?
        </motion.h3>
        <motion.p className="secBody" variants={fade}>
          Please feel free to contact me if you haven’t found what you need.
          Text is the preferred method. If you call and I don’t answer, please
          leave a message.
        </motion.p>
      </motion.div>
      <form action="" id="contactForm" onSubmit={submitContactHandler}>
        <input
          className="formName"
          type="text"
          htmlFor="name"
          placeholder="Name"
          required
        />
        <input
          className="formEmail"
          type="text"
          htmlFor="email"
          placeholder="Email"
          required
        />
        <input
          className="formPhone"
          type="text"
          htmlFor="phone"
          placeholder="Phone"
          required
        />
        <textarea
          className="formquestion"
          name="question"
          id=""
          htmlFor="question"
          placeholder="Question"
          required
        ></textarea>
        <button id="formBtn" className="mainBtn">
          Submit
        </button>
      </form>
      <motion.div
        variants={containerDelay2}
        initial="initial"
        animate="animate"
        className="altContactDiv"
      >
        {/* <motion.a href="tel:801-635-6588" variants={fade} className="altLink"> */}
        <motion.a href="sms:801-635-6588" variants={fade} className="altLink">
          <img src={phone} className="contactIcon" alt="" />
          <div className="contactMethod">
            <p className="mainText">801-635-6588</p>
            <p className="subText">Text Preferred</p>
          </div>
        </motion.a>
        <motion.a
          href="mailto:markveldevere@comcast.net"
          variants={fade}
          className="altLink"
        >
          <img src={mail} className="contactIcon" alt="" />
          <div className="contactMethod">
            <p className="mainText email">markveldevere[at]comcast.net</p>
          </div>
        </motion.a>
        <motion.a
          href="https://www.google.com/maps/place/Mark+Veldevere+Guitar+Studios/@40.5992498,-112.021824,18.33z/data=!4m5!3m4!1s0x87528e4856922a47:0xdafb69a8f1bdef8a!8m2!3d40.5994447!4d-112.0210543"
          target="_blank"
          variants={fade}
          className="altLink"
        >
          <img src={location} className="contactIcon" alt="" />
          <div className="contactMethod">
            <p className="mainText">
              5465 Wild Oak Dr, <br />
              West Jordan, UT 84081
            </p>
          </div>
        </motion.a>
      </motion.div>
    </StyledContactPage>
  );
};

const StyledContactPage = styled("section")`
  position: relative;
  overflow-x: hidden;
  .textArea {
    position: absolute;
    top: 50%;
    left: 8%;
    transform: translate(0, -46%);
    width: 18rem;
    z-index: 2;
    > * {
      margin-bottom: 1rem;
    }
  }
  #contactForm {
    position: absolute;
    top: 52%;
    right: 50%;
    transform: translate(50%, -34%);
    opacity: 0;
    width: 36%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3.2rem;
    animation: formAppear 1s 1.4s ease forwards;
    z-index: 5;
    input,
    textarea {
      border: none;
      border-radius: 0;
      background: none;
      border-bottom: 2px solid grey;
      resize: none;
      font-size: calc(0.4rem + 0.6vw);
      padding: 0.4rem 0;
      transition: 0.4s ease all;
      &:focus {
        outline: none;
      }
      &:hover {
        background: var(--lightGrey);
      }
    }
    .formName,
    .formquestion {
      grid-column: 1 / 3;
    }
    .formEmail {
      grid-column: 1 / 2;
    }
    .formPhone {
      grid-column: 2 / 3;
    }
    textarea {
      height: calc(4rem + 2vw);
    }
    #formBtn {
      position: absolute;
      bottom: -40%;
      right: 50%;
      transform: translate(50%, 100%);
      opacity: 0;
      padding: 0.4rem 2rem;
      animation: btnAppear 1s 2s ease forwards;
    }
  }
  .altContactDiv {
    width: 22vw;
    height: 36vh;
    min-height: 16rem;
    position: absolute;
    top: 50%;
    right: 4%;
    transform: translate(0, -42%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .altLink {
      display: flex;
      .contactIcon {
        width: calc(1rem + 1vw);
        margin-right: 1rem;
      }
      .contactMethod {
        width: 80%;
        .mainText {
          font-size: calc(0.6rem + 0.6vw);
          color: var(--black);
        }
        .subText {
          font-size: calc(0.4rem + 0.6vw);
          color: var(--black);
        }
      }
    }
  }

  .tanPickFill {
    position: absolute;
    width: calc(1rem + 4vw);
    top: 24%;
    right: 28%;
    transform: translate(0, 100%);
    opacity: 0;
    animation: pickAppear 3s 2.4s ease forwards;
  }
  .blackPickLine {
    position: absolute;
    width: calc(2rem + 4vw);
    bottom: 12%;
    left: 24%;
    transform: translate(0, 100%);
    opacity: 0;
    animation: pickAppear 3.4s 2.6s ease forwards;
  }

  @keyframes formAppear {
    to {
      opacity: 1;
      transform: translate(50%, -50%);
    }
  }
  @keyframes btnAppear {
    to {
      opacity: 1;
      transform: translate(50%, 0);
    }
  }
  /* @keyframes pickAppear {
    to {
      opacity: 0.6;
      transform: translate(0, 0);
    }
  } */

  @media screen and (max-width: 1440px) {
    .textArea {
      left: 6%;
      width: 20%;
    }
    #contactForm {
      width: 32%;
      gap: 2.8rem 2rem;
      input,
      textarea {
        border-bottom: 1px solid grey;
      }
    }
    .altContactDiv {
      width: 24vw;
      min-height: 14rem;

      .altLink {
        .contactIcon {
          width: calc(0.6rem + 1vw);
          margin-right: 0.6rem;
        }
        .contactMethod {
          min-width: 14rem;
          .email {
            font-size: calc(0.3rem + 0.8vw);
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    height: 140vh;
    min-height: 68rem;
    .textArea {
      top: 38%;
      transform: translate(0, -50%);
      width: 90vw;
      height: 76vh;
      min-height: 32rem;
      z-index: 1;
      > * {
        margin-bottom: 0.6rem;
      }
      .secHeader {
        br {
          display: none;
        }
      }
      .secBody {
        position: absolute;
        bottom: 8%;
      }
    }
    #contactForm {
      top: 32%;
      width: 64vw;
      max-width: 24rem;
      gap: 2rem 1.6rem;
    }
    .altContactDiv {
      width: 50vw;
      height: 34vh;
      position: absolute;
      top: 80%;
      right: 50%;
      transform: translate(50%, -58%);
      .altLink {
        .contactMethod {
          width: 100%;
          .email {
            font-size: calc(0.6rem + 0.6vw);
          }
        }
      }
    }
    .tanPickFill {
      top: 14%;
      right: 14%;
    }
    .blackPickLine {
      bottom: 34%;
      left: 8%;
    }
  }
  @media screen and (max-width: 480px) {
    .textArea {
      top: 40%;
      .secBody {
        bottom: 16%;
      }
    }
    #contactForm {
      width: 78vw;
      gap: 2.2rem 1.6rem;
      input,
      textarea {
        font-size: calc(0.6rem + 0.6vw);
        font-weight: 500;
      }
    }
    .altContactDiv {
      right: 50%;
    }
    .blackPickLine {
      bottom: 36%;
    }
  }
`;

export default ContactPage;
