import { useState, useEffect } from "react";

import styled from "styled-components";

const DiscountCard = () => {
  const [banner, setBanner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBanner(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <StyledDiscountCard
      style={
        banner
          ? { transform: "translate(0%, 0%)", transition: "0.4s ease" }
          : { transform: "translate(0%, 120%)", transition: "0.4s ease" }
      }
    >
    <form className="discountForm">
      <h5 className="discountHeader">Psst... do you like discounts?</h5>
      <p className="discountText">Subscribe for important updates. <br /> Also get <span className="bold">10% off</span> your next guitar lesson!</p>
      <input type="email" htmlFor="email" className="discountInput" placeholder="Your Email" required/>
      <button className="discountBtn">Subscribe</button>
      <p className="smallText">I'm not a fan of spam and will only send out emails when there is some news to share.</p>
      <div className="closeBtn" onClick={() => setBanner(false)}>
        <div className="closeLine"></div>
        <div className="closeLine"></div>
      </div>
    </form>
    </StyledDiscountCard>
  );
};

const StyledDiscountCard = styled("div")`
  position: fixed;
  bottom: 2%;
  right: 2%;
  background: #fafafa;
  width: 24vw;
  min-width: 24rem;
  height: 26vh;
  min-height: 14rem;
  border-radius: 0.4rem;
  z-index: 11;
  box-shadow: 0px 4px 8px #c0c0c0;
  .discountForm {
    width: 100%;
    height: 100%;
    padding: 1.6rem;
    .discountHeader {
      color: var(--black);
      font-size: calc(1.2rem + 0.2vw);
      font-weight: 500;
      margin-bottom: 1rem;
    }
    .discountText {
        font-size: calc(0.7rem + 0.2vw);
        margin-bottom: 0.6rem;
        font-weight: 300;
        .bold {
            font-weight: 500;
        }
    }
    .discountInput {
        width: 64%;
        height: 2.4rem;
        padding: 0.8rem;
        background: #eaeaea;
        color: #313131;
        border: none;
        border-radius: 0.2rem;
        margin: 0 0 1rem 0;
        resize: none;
        transition: background 0.4s ease;
        &:hover {
          background: #d9d9d9;
        }
        &:focus {
          outline: none;
          border: 1px solid #a27c67;
          border-radius: 0.2rem;
        }
        &:-webkit-autofill {
          box-shadow: 0 0 0 30px #e5d6cc inset;
          -webkit-text-fill-color: #a27c67;
        }
    }
    .discountBtn {
        background: var(--brown);
        color: var(--white);
        padding: 0.6rem;
        height: 2.4rem;
        border: none;
        border-radius: 0.2rem;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.04rem;
    }
    .smallText {
        color: var(--black);
        width: 78%;
        font-size: calc(0.6rem + 0.2vw);
        font-weight: 300;
    }
    .closeBtn {
        position: absolute;
        top: 8px;
        right: 8px;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background: #a27c67;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        .closeLine {
            width: 12px;
            height: 2px;
            background: #fafafa;
            &:nth-child(1) {
            transform: translate(6px, 0) rotate(45deg);
            }
            &:nth-child(2) {
            transform: translate(-6px, 0) rotate(-45deg);
            }
        }
    }
  }
  @media screen and (max-width: 480px) {
    min-width: 23.2rem;
    .discountForm {
      .discountBtn {
        transform: translate(0, 1px);
      }
    }
  }
`;

export default DiscountCard;
