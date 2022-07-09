import { useState, useEffect, useCallback } from "react";

import styled from "styled-components";

const DiscountSlider = () => {
  const [slider, setSlider] = useState(false);
  const [hideSlider, setHideSlider] = useState(false);
  const [y, setY] = useState(window.scrollY);

  // const addNavBackground = () => {
  //   const fromTop = window.scrollY;
  //   fromTop > 160 ? setHideSlider(true) : setHideSlider(false);
  // }

  const handleSliderHide = useCallback(
    e => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setHideSlider(false);
      } else if (y < window.scrollY) {
        setHideSlider(true);
      }
      setY(window.scrollY);
    }, [y]
  );
  
  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleSliderHide);
  
    return () => {
      window.removeEventListener("scroll", handleSliderHide);
    };
  }, [handleSliderHide]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlider(true);
    }, 5400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <StyledDiscountSlider
      style={
        slider
          ? { transform: "translate(0%, -50%)", transition: "0.4s ease" } 
          : hideSlider ? { transform: "translate(98%, -50%)", opacity: 0, transition: "0.4s ease" }
          : { transform: "translate(98%, -50%)", transition: "0.4s ease" }
      }
    >
    <div className="ribbon" onClick={() => setSlider(prev => !prev)}>
      <p className="ribbonText">&uarr;</p>
      <p className="ribbonText">Discount</p>
      <p className="ribbonText">&uarr;</p>
    </div>
    <form className="discountForm">
      <h5 className="discountHeader">Psst... do you like discounts?</h5>
      <p className="discountText">Subscribe for important updates. <br /> Also get <span className="bold">10% off</span> your next guitar lesson!</p>
      <input type="email" htmlFor="email" className="discountInput" placeholder="Your Email" required/>
      <button className="discountBtn">Subscribe</button>
      <p className="smallText">I'm not a fan of spam and will only send out emails when there is some news to share.</p>
      <div className="closeBtn" onClick={() => setSlider(false)}>
        <div className="closeLine"></div>
        <div className="closeLine"></div>
      </div>
    </form>
    </StyledDiscountSlider>
  );
};

const StyledDiscountSlider = styled("div")`
  position: fixed;
  top: 50%;
  right: 0%;
  background: #fafafa;
  width: 24vw;
  min-width: 24rem;
  height: 26vh;
  min-height: 14rem;
  border-radius: 0.4rem;
  z-index: 11;
  box-shadow: 0px 4px 8px #c0c0c0;
  .ribbon {
    position: absolute;
    top: 0%;
    left: -4%;
    background: var(--brown);
    color: var(--white);
    width: 6%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4px 0px 0px 4px;
    cursor: pointer;
    .ribbonText {
      transform: rotate(-90deg) translate(0%, 0);
      &:nth-child(1){
        transform: rotate(-90deg) translate(400%, 0);
      }
      &:nth-child(3){
        transform: rotate(-90deg) translate(-400%, 0);
      }
    }
  }
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

export default DiscountSlider;
