import styled from "styled-components";

const Burger = ({ menuToggle, setMenuToggle }) => {
  return (
    <StyledBurger onClick={() => setMenuToggle((prev) => !prev)}>
      <div className={!menuToggle ? "burgerLine" : "burgerLineActive"}></div>
      <div className={!menuToggle ? "burgerLine" : "burgerLineActive"}></div>
      <div className={!menuToggle ? "burgerLine" : "burgerLineActive"}></div>
    </StyledBurger>
  );
};

const StyledBurger = styled("div")`
  display: none;
  @media screen and (max-width: 768px) {
  position: fixed;
  top: 7%;
  right: 8%;
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 50%;
  background: #a27c67;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 12;
  .burgerLine {
    width: 1.6rem;
    height: 2px;
    background: #fafafa;
    transition: 0.4s ease;
    &:nth-child(2) {
      margin: 0.4rem 0;
    }
  }
  .burgerLineActive {
    width: 1.6rem;
    height: 2px;
    background: #fafafa;
    transition: 0.4s ease;
    &:nth-child(1) {
      transform: translate(0%, 2px) rotate(45deg);
    }
    &:nth-child(2) {
      width: 0px;
      opacity: 0;
    }
    &:nth-child(3) {
      transform: translate(0%, -2px) rotate(-45deg);
    }
  }
  }

  @media screen and (max-width: 484px) {
    width: 2.4rem;
    height: 2.4rem;
    .burgerLine {
      border-radius: 12px;
    }
    .burgerLineActive {
      border-radius: 12px;
    }
  }
`;
export default Burger;
