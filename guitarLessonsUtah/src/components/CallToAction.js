import styled from "styled-components";

import brownPickLine from "../images/graphics/brownPickLine.svg";
import tanPickLine from "../images/graphics/tanPickLine.svg";
import guitarLogo from "../images/graphics/guitarLogo.svg";

const CallToAction = ({ setCta }) => {
  return (
    <StyledCta>
      <form className="ctaForm">
        <h2 className="ctaFormHeader">
          Redeem your <br />
          <span className="bold">free</span> introductory lesson
        </h2>
        <div className="ctaCloseBtn" onClick={() => setCta(false)}>
          <div className="ctaCloseLine"></div>
          <div className="ctaCloseLine"></div>
        </div>
        <img src={brownPickLine} alt="" className="ctaFormBrownPick" />
        <img src={tanPickLine} alt="" className="ctaFormTanPick" />
        <div className="ctaInputFields">
          <div className="left">
            <input type="text" name="name" id="" placeholder="Name" required />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email"
              required
            />
            <input
              type="phone"
              name="phone"
              id=""
              placeholder="Phone"
              required
            />
          </div>
          <div className="right">
            <input
              type="text"
              name="style"
              id=""
              placeholder="Guitar Style (optional)"
            />
            <textarea
              name="comments"
              id=""
              cols="16"
              rows="10"
              placeholder="Comments (optional)"
            ></textarea>
          </div>
        </div>
        <button className="mainBtn ctaFormSubmit">Submit</button>
        <img src={guitarLogo} alt="" className="ctaFormGuitarSvg" />
      </form>
    </StyledCta>
  );
};

const StyledCta = styled("div")`
  /* This outter layer is the dim effect */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #313131cc;
  z-index: 11;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: appear 0.4s ease forwards;
  .ctaForm {
    position: relative;
    width: 60vw;
    min-width: 42rem;
    height: 76vh;
    min-height: 32rem;
    border-radius: 8px;
    background: #fafafa;
    opacity: 0;
    transform: translate(0, 20%);
    animation: fadeUp 0.5s 0.4s ease forwards;
    .ctaFormHeader {
      position: absolute;
      top: 10%;
      left: 50%;
      transform: translate(-50%, 0);
      width: 80%;
      font-size: calc(1rem + 1vw);
      text-align: center;
      .bold {
        font-weight: 600;
      }
    }
    .ctaCloseBtn {
      padding: 1.4rem;
      position: absolute;
      top: 8%;
      right: 6%;
      cursor: pointer;
      .ctaCloseLine {
        position: absolute;
        top: 50%;
        left: 50%;
        background: #313131;
        width: 2rem;
        height: 0.2rem;
        &:nth-child(1) {
          transform: translate(-50%, -50%) rotate(-45deg);
        }
        &:nth-child(2) {
          transform: translate(-50%, -50%) rotate(45deg);
        }
      }
    }
    .ctaFormBrownPick {
      position: absolute;
      top: 6%;
      left: 10%;
      width: calc(2rem + 4vw);
      opacity: 0;
      transform: translate(0, 50%);
      animation: fadeUp 1s 1s ease forwards;
    }
    .ctaFormTanPick {
      position: absolute;
      top: 20%;
      left: 4%;
      width: calc(1.4rem + 2vw);
      opacity: 0;
      transform: translate(0, 50%);
      animation: fadeUp 1.2s 1.2s ease forwards;
    }
    .ctaInputFields {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 74%;
      display: flex;
      justify-content: space-between;
      .left,
      .right {
        width: 48%;
      }
      input,
      textarea {
        width: 100%;
        padding: 1.4rem;
        background: #d9d9d9;
        color: #313131;
        border: none;
        margin: 0 0 1rem 0;
        resize: none;
        transition: background 0.4s ease;
        &:hover {
          background: #eaeaea;
        }
        &:focus {
          outline: 1px solid #a27c67;
        }
        &:-webkit-autofill {
          box-shadow: 0 0 0 30px #e5d6cc inset;
          -webkit-text-fill-color: #a27c67;
        }
      }
      textarea {
        height: 8.6rem;
      }
    }
    .ctaFormSubmit {
      position: absolute;
      bottom: 14%;
      left: 50%;
      transform: translate(-50%, 0);
      padding: 0.6rem 4.8rem;
    }
    .ctaFormGuitarSvg {
      position: absolute;
      bottom: 4%;
      right: 4%;
      width: calc(4rem + 4vw);
      opacity: 0;
      transform: scale(0.6);
      animation: scaleAnim 1.4s 1.4s ease forwards;
    }
  }
  .dimClose {
    animation: dimClose 0.4s ease forwards;
  }

  @media screen and (max-width: 1440px) {
    .ctaForm {
      .ctaFormHeader {
        top: 6%;
      }
      .ctaCloseBtn {
        top: 6%;
      }
      .ctaInputFields {
        width: 68%;
        input,
        textarea {
          padding: 1rem;
        }
        textarea {
          height: 7rem;
        }
      }
      .ctaFormSubmit {
        bottom: 10%;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .ctaForm {
      min-width: 90%;
      min-height: 30rem;
      .ctaInputFields {
        flex-direction: column;
        width: 50%;
        .left,
        .right {
          width: 100%;
        }
      }
      textarea {
        display: none;
      }
    }
  }

  @media screen and (max-width: 480px) {
    .ctaCloseBtn {
      transform: scale(0.8);
    }
    .ctaForm {
      height: 64vh;
      .ctaFormHeader {
        top: 12%;
      }
      .ctaFormBrownPick {
        top: 4%;
        left: 18%;
        width: calc(2rem + 2vw);
      }
      .ctaFormTanPick {
        top: 10%;
      }
      .ctaInputFields {
        width: 76%;
        input {
          padding: 0.8rem;
        }
      }
      .ctaFormSubmit {
        bottom: 15%;
      }
    }
  }

  @keyframes appear {
    to {
      opacity: 1;
    }
  }
  @keyframes fadeUp {
    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
  @keyframes scaleAnim {
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export default CallToAction;
