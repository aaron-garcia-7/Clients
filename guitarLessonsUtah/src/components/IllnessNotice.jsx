import { useDispatch } from 'react-redux';
import { toggleNotice } from '../reducers/illnessNoticeReducer';

import { NavLink } from "react-router-dom";
import styled from "styled-components";

import medicalCross from '../images/graphics/medicalCross.svg';
import germ1 from '../images/graphics/germ1.svg';
import germ2 from '../images/graphics/germ2.svg';
import guitarLine from "../images/graphics/guitarLine.svg";

const IllnessNotice = () => {
  const dispatch = useDispatch();

  // Close Illness Notice when clicking outside form.
  const closeNoticeHandler = (e) => e.target.classList.contains("noteScreen") ? dispatch(toggleNotice()) : null;

  return (
    <StyledIllnessNotice className="noteScreen" onClick={closeNoticeHandler}>
      <div className="noteDiv">
        <div className="noteHeader">
          <h2>Health + Illness Notice</h2>
          <h4><span>Important</span>: To all parents and students</h4>
        </div>
        <div className="noteCloseBtn" onClick={() => dispatch(toggleNotice())}>
          <div className="noteCloseLine"></div>
          <div className="noteCloseLine"></div>
        </div>
        <img src={medicalCross} alt="" className="medicalCrossImg" />
        <img src={germ1} alt="" className="germ1Img" />
        <img src={germ2} alt="" className="germ2Img" />
        <div className="noteText">
          <p>
            As some of you may have heard, our son, Carter, has been diagnosed with SMA (Spinal Muscular Atrophy) a genetic disorder, which will confine him to a wheelchair for the rest of his life. It affects the muscles and nerves of the body and will eventually leave him without the ability to use his hands, arms, legs, and feet. <br className='hide'/> While these are of themselves very serious they are not that which causes the most harm. The most crucial thing is to keep him healthy and this consists of keeping him away from colds, viruses such as the flu, bronchitis, and pneumonia, whooping cough, etc, which is what eventually kills all who are affected with this illness. Any major cold he gets may require him to stay a several days in the hospital. <span className="bold">Therefore, I am asking that if you, as a student, have the flu, cold, RSV, or any respiratory problems that you reschedule your lesson with me for another time.</span> I need to do this to keep him safe and healthy. I would greatly appreciate your help with this endeavor.
            <span className='spacer'>Sincerely, Mark</span>
          </p>
        </div>
        <button className="mainBtn noteBtn" onClick={() => dispatch(toggleNotice())}>Close</button>
        {/* <NavLink to="./About/Policies" className="noteViewPolicies" onClick={() => dispatch(toggleNotice())}>View Policies</NavLink> */}
        <img src={guitarLine} alt="" className="noteDivGuitarSvg" />
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
  .noteDiv {
    position: relative;
    width: 60vw;
    min-width: 42rem;
    height: 76vh;
    min-height: 38rem;
    border-radius: 8px;
    background: #fafafa;
    opacity: 0;
    transform: translate(0, 20%);
    animation: fadeUp 0.5s 0.4s ease forwards;
    cursor: default;
    .noteHeader {
      /* border: 1px solid black; */
      position: absolute;
      top: 6%;
      left: 50%;
      transform: translate(-50%, 0);
      width: 74%;
      text-align: center;
      h2 {
        font-size: calc(1.2rem + 1.6vw);
        font-weight: 200;
        margin-bottom: 0.4rem;
      }
      h4 {
        font-size: calc(0.4rem + 0.8vw);
        font-weight: 200;
        span {
          font-weight: 400;
        }
      }
    }
    .noteCloseBtn {
      padding: 1.4rem;
      position: absolute;
      top: 8%;
      right: 6%;
      cursor: pointer;
      .noteCloseLine {
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
    .noteText {
      /* border: 1px solid black; */
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 74%;
      p {
        font-size: calc(0.5rem + 0.5vw);
        font-weight: 300;
        line-height: 1.6rem;
        .bold {
          font-weight: 600;
        }
        .spacer {
          margin-top: 2vh;
          display: block;
        }
      }
    }
    .noteBtn {
      position: absolute;
      bottom: 14%;
      left: 50%;
      transform: translate(-50%, 0);
      padding: 0.4rem 3.8rem;
    }
    .noteViewPolicies {
      position: absolute;
      top: 90%;
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
    .medicalCrossImg {
      position: absolute;
      top: 8%;
      left: 12%;
      width: calc(1rem + 2.8vw);
      opacity: 0;
      transform: scale(0.4);
      animation: scaleAnim 1.2s 0.4s ease forwards;
    }
    .germ1Img {
      position: absolute;
      bottom: 12%;
      left: 2%;
      width: calc(1.6rem + 2.8vw);
      opacity: 0;
      transform: rotate(-90deg) scale(0.4);
      animation: spinIn 1.4s 1s ease forwards;
    }
    .germ2Img {
      position: absolute;
      bottom: 6%;
      left: 8%;
      width: calc(0.8rem + 1.6vw);
      opacity: 0;
      transform: rotate(-90deg) scale(0.4);
      animation: spinIn 1.8s 1.2s ease forwards;
    }
    .noteDivGuitarSvg {
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
  @keyframes spinIn {
    to {
      opacity: 1;
      transform: rotate(0deg) scale(0.8);
    }
  }

  @media screen and (max-width: 1440px) {
    .noteDiv {
      .noteCloseBtn {
        top: 6%;
      }
      .noteText {
        width: 68%;
        p {
          line-height: 1.2rem;
        }
      }
      .noteBtn {
        bottom: 13%;
      }
      .noteViewPolicies {
        top: 90%;
        border-bottom: 1px solid var(--black);
      }
    }
  }

  @media screen and (max-width: 768px) {
    .noteDiv {
      min-width: 90%;
      min-height: 30rem;
      .noteText {
        min-width: 24rem;
        p {
          line-height: 1rem;
        }
      }
      .noteBtn {
        /* bottom: 13%; */
        padding: 0.4rem 1.6rem;
      }
      .noteViewPolicies {
        top: 90%;
      }
    }
  }

  @media screen and (max-width: 480px) {
    .noteDiv {
      height: 64vh;
      margin-bottom: 4rem;
      .noteHeader {
        top: 6%;
        width: 86%;
        text-align: left;
        h2 {
          font-size: calc(1.2rem + 1vw);
          margin-bottom: 0.2rem;
        }
        h4 {
          font-size: calc(0.6rem + 0.8vw);
          font-weight: 400;
          span {
            font-weight: 600;
          }
        }
      }
      .noteCloseBtn {
        /* top: 0; */
        /* right: 0; */
        transform: scale(0.8);
      }
      .noteText {
        width: 86%;
        min-width: 14rem;
        p {
          font-size: calc(0.5rem + 0.7vw);
          font-weight: 400;
          line-height: 0.9rem;
          .hide {
            display: none;
          }
          .bold {
            font-weight: 600;
          }
          .spacer {
            margin-top: 1vh;
            display: block;
          }
        }
      }
      .noteBtn {
        bottom: 8%;
        padding: 0.4rem  2.4rem;
      }
      .noteViewPolicies {
        top: 93%;
      }
      .medicalCrossImg {
        display: none;
      }
      .germ1Img {
        bottom: 8%;
        left: 2%;
        /* width: calc(2rem + 2vw); */
      }
      .germ2Img {
        bottom: 4%;
        left: 12%;      
      }
      .noteDivGuitarSvg {
        bottom: 3%;
        right: 3%;
      }
    }

    @keyframes scaleAnim {
      to {
        opacity: 1;
        transform: scale(0.8);
      }
    }
  }
`;

export default IllnessNotice;
