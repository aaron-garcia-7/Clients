import styled from "styled-components";
import { NavLink } from "react-router-dom";

import brownPickLine from "../images/graphics/brownPickLine.svg";
import tanPickLine from "../images/graphics/tanPickLine.svg";
import guitarLine from "../images/graphics/guitarLine.svg";

const IllnessNotice = ({ setIllNote }) => {

  // Close illNote form when clicking outside form.
  const closeFormHandler = (e) => e.target.classList.contains("illNoteScreen") ? setIllNote(false) : null;

  const submitIllNoteHandler = (e) => {
    setIllNote(false);
  }

  return (
    <StyledIllnessNotice className="illNoteScreen" onClick={closeFormHandler}>
      <div className="illNoteForm">
        <h2 className="illNoteFormHeader">
          Important Notice <br />
          To all students and parents
        </h2>
        <div className="illNoteCloseBtn" onClick={() => setIllNote(false)}>
          <div className="illNoteCloseLine"></div>
          <div className="illNoteCloseLine"></div>
        </div>
        <img src={brownPickLine} alt="" className="illNoteFormBrownPick" />
        <img src={tanPickLine} alt="" className="illNoteFormTanPick" />
        <button className="mainBtn illNoteFormSubmit" onSubmit={submitIllNoteHandler}>Close</button>
        <img src={guitarLine} alt="" className="illNoteFormGuitarSvg" />
      </div>
    </StyledIllnessNotice>
  );
};

const StyledIllnessNotice = styled("div")`
  /* This outter layer is the dim effect */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #313131cc;
  z-index: 32;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: appear 0.4s ease forwards;
  .illNoteForm {
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
    cursor: default;
    .illNoteFormHeader {
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
    .illNoteCloseBtn {
      padding: 1.4rem;
      position: absolute;
      top: 8%;
      right: 6%;
      cursor: pointer;
      .illNoteCloseLine {
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
    .illNoteFormBrownPick {
      position: absolute;
      top: 6%;
      left: 10%;
      width: calc(2rem + 4vw);
      opacity: 0;
      transform: translate(0, 50%);
      animation: fadeUp 1s 1s ease forwards;
    }
    .illNoteFormTanPick {
      position: absolute;
      top: 20%;
      left: 4%;
      width: calc(1.4rem + 2vw);
      opacity: 0;
      transform: translate(0, 50%);
      animation: fadeUp 1.2s 1.2s ease forwards;
    }
    .illNoteInputFields {
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
        background: #eaeaea;
        color: #313131;
        font-size: calc(0.6rem + 0.2vw);
        border: 1px solid var(--white);
        border-radius: 4px;
        margin: 0 0 1rem 0;
        resize: none;
        transition: background 0.4s ease;
        &:hover {
          background: #dcdcdc;
        }
        &:focus {
          outline: none;
          border: 1px solid #a27c67;
          border-radius: 4px;
        }
        &:-internal-autofill-previewed {
          box-shadow: 0 0 0 30px #eed9c3 inset;
          -webkit-text-fill-color: #a27c67;
        }
        &:-internal-autofill-selected {
          box-shadow: 0 0 0 30px #eed9c3 inset;
          -webkit-text-fill-color: #a27c67;
        }
      }
      textarea {
        height: 9rem;
      }
    }
    .illNoteFormSubmit {
      position: absolute;
      bottom: 18%;
      left: 50%;
      transform: translate(-50%, 0);
      padding: 0.6rem 4.8rem;
    }
    .illNoteViewPolicies {
      position: absolute;
      top: 86%;
      left: 50%;
      transform: translate(-50%, 0);
      color: var(--black);
      font-size: calc(0.4rem + 0.6vw);
      font-weight: 500;
      letter-spacing: 0.1rem;
      border-bottom: 2px solid var(--black);
      transition: 0.4s ease;
      &:hover {
        padding-bottom: 0.3rem;
      }
    }
    .illNoteFormGuitarSvg {
      position: absolute;
      bottom: 4%;
      right: 4%;
      width: calc(4rem + 4vw);
      opacity: 0;
      transform: scale(0.6);
      animation: scaleAnim 1.4s 1.4s ease forwards;
    }
  }
  /* .dimClose {
    animation: dimClose 0.4s ease forwards;
  } */

  @media screen and (max-width: 1440px) {
    .illNoteForm {
      .illNoteFormHeader {
        top: 6%;
      }
      .illNoteCloseBtn {
        top: 6%;
      }
      .illNoteInputFields {
        width: 68%;
        input,
        textarea {
          padding: 1rem;
        }
        textarea {
          height: 7.3rem;
        }
      }
      .illNoteFormSubmit {
        bottom: 16%;
      }
      .illNoteViewPolicies {
        top: 88%;
        border-bottom: 1px solid var(--black);
      }
    }
  }

  @media screen and (max-width: 768px) {
    .illNoteForm {
      min-width: 90%;
      min-height: 30rem;
      .illNoteInputFields {
        flex-direction: column;
        width: 50%;
        min-width: 18rem;
        .left,
        .right {
          width: 100%;
        }
      }
      textarea {
        display: none;
      }
      .illNoteFormSubmit {
        bottom: 14%;
      }
      .illNoteViewPolicies {
        top: 90%;
      }
    }
  }

  @media screen and (max-width: 480px) {
    .illNoteForm {
      height: 64vh;
      margin-bottom: 4rem;
      .illNoteFormHeader {
        top: 12%;
      }
      .illNoteCloseBtn {
      transform: scale(0.8);
      }
      .illNoteFormBrownPick {
        top: 4%;
        left: 18%;
        width: calc(2rem + 2vw);
      }
      .illNoteFormTanPick {
        top: 10%;
      }
      .illNoteInputFields {
        width: 74%;
        min-width: 14rem;
        input {
          padding: 0.8rem;
        }
      }
      .illNoteFormSubmit {
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

export default IllnessNotice;
