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
  position: fixed;
  top: 36px;
  right: 36px;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  background: #a27c67;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  .burgerLine {
    width: 2rem;
    height: 3px;
    background: #fafafa;
    transition: 0.4s ease;
    &:nth-child(2) {
      margin: 0.4rem 0;
    }
  }
  .burgerLineActive {
    width: 2rem;
    height: 3px;
    background: #fafafa;
    transition: 0.4s ease;
    &:nth-child(1) {
      transform: translate(0%, 3px) rotate(45deg);
    }
    &:nth-child(2) {
      width: 0px;
      opacity: 0;
    }
    &:nth-child(3) {
      transform: translate(0%, -3px) rotate(-45deg);
    }
  }
  @media screen and (max-width: 484px) {
    top: 42px;
    width: 2.8rem;
    height: 2.8rem;
    .burgerLine {
      border-radius: 12px;
    }
    .burgerLineActive {
      border-radius: 12px;
    }
  }
`;
export default Burger;
