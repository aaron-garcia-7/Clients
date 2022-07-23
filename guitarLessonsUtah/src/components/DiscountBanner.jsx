import { useState, useEffect } from "react";

import styled from "styled-components";

const DiscountBanner = () => {
  const [banner, setBanner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBanner(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <StyledBanner
      style={
        banner
          ? { transform: "translate(0%, 0%)", transition: "0.4s ease" }
          : { transform: "translate(0%, -100%)", transition: "0.4s ease" }
      }
    >
      <h5>
        <span>Spring Discount!</span> Be sure to take advantage our 20% deal!
        Expires June 30th.
      </h5>
      <div className="closeBtn" onClick={() => setBanner(false)}>
        <div className="closeLine"></div>
        <div className="closeLine"></div>
      </div>
    </StyledBanner>
  );
};

const StyledBanner = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  background: #fafafa;
  width: 100vw;
  height: 6vh;
  min-height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
  box-shadow: 0px 0px 8px #c0c0c0;
  h5 {
    font-size: calc(0.5rem + 0.6vw);
    margin-right: 1rem;
    span {
      font-weight: 600;
    }
  }
  .closeBtn {
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
  @media screen and (max-width: 480px) {
    padding: 0 1rem;
    height: 10vh;
    h5 {
      line-height: 1.2rem;
      span {
        font-size: 1rem;
        display: block;
      }
    }
    .closeBtn {
      width: 2rem;
      height: 2rem;
      .closeLine {
        width: 16px;
        &:nth-child(1) {
          transform: translate(8px, 0) rotate(45deg);
        }
        &:nth-child(2) {
          transform: translate(-8px, 0) rotate(-45deg);
        }
      }
    }
  }
`;

export default DiscountBanner;
