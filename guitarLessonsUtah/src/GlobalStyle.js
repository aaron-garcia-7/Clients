import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        scroll-behavior: smooth;
    }
    *::selection {
        background: #a27c6799;
        color: #fafafa;
    }
    body {
        background: #fafafa;
    }
    section {
        width: 100vw;
        height: 100vh;
        min-height: 36rem;
        position: relative;
    }
    img {
        pointer-events: none;
    }
    button {
        cursor: pointer;
    }
    .scrollDown, .continue {
        position: absolute;
        bottom: 2%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: calc(0.8rem + 0.6vw);
        text-decoration: none;
        color: #000;
        z-index: 2;
        transition: 0.4s ease;
        .arrow {
            width: calc(0.4rem + 0.2vw);
            transition: 0.6s ease;
        }
        .arrowFloat {
            animation: arrowFloat 1.4s 3s ease-in-out infinite alternate;
        }
        &:hover{
            .arrow {
                transform: translate(0, 20%);
            }
        }
    }
    .continue {
        bottom: 0;
        @media screen and (max-width: 480px){
            bottom: 4%;
        }
    }
    .header {
    position: absolute;
    top: 8%;
    left: 10%;
    z-index: 3;
        > * {
        margin-bottom: 1rem;
        }
        .headerBreak {
          display: none;
        }
    }
    .preHeader {
        font-size: calc(0.6rem + 0.6vw);
        font-weight: 300;
        font-style: italic;
        letter-spacing: 0.1rem;
    }
    .secHeader {
        font-size: calc(1rem + 1.2vw);
        font-weight: 600;
    }
    .secBody {
        font-size: calc(0.6rem + 0.7vw);
        font-weight: 500;
        background-blend-mode: difference;
    }
    .mainBtn {
        background: #a27c67;
        color: #fafafa;
        font-size: calc(0.6rem + 0.8vw);
        padding: 0.6rem 1.2rem;
        border: 2px solid #a27c67;
        &:hover {
            background: transparent;
            color: #a27c67;        
        }
    }
    .centeredBtn {
    position: absolute;
    left: 50%;
    bottom: 14%;
    transform: translate(-50%, 0);
    z-index: 3;
  }
    @media screen and (max-width: 480px) {
        .header {
            top: 8%;
            .headerBreak {
            display: block;
            }
        }
    }
    @keyframes arrowFloat {
        from {
            transform: translate(0, 0);
        }
        to {
            transform: translate(0, 26%);
        }
    }
    @media screen and (max-width: 1060px){
        .pick{
        filter: none !important;
        }
    }
`;

export default GlobalStyle;
