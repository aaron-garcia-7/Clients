import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --brown: #a27c67;
        --tan: #e5d6cc;
        --black: #313131;
        --white: #fafafa;
        --lightGrey: #ececec;
        --grey: #d9d9d9;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-weight: 400;
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
    a {
        text-decoration: none;
    }
    .scrollDownDiv, .continueDownDiv {
        padding: 1rem;
        position: absolute;
        bottom: 6%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
    }
    .continueDownDiv {
        @media screen and (max-width: 480px){
            bottom: 14%;
        }
    }
    .scrollDown, .continue {
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: calc(0.8rem + 0.6vw);
        text-decoration: none;
        color: #000;
        z-index: 2;
        cursor: pointer;
        .arrow {
            width: calc(0.4rem + 0.2vw);
            transition: 0.6s ease;
        }
        .arrowFloat {
            animation: arrowFloat 1.2s 4.2s ease-in-out infinite alternate;
        }
        &:hover{
            .arrow {
                transform: translate(0, 26%);
            }
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
        font-weight: 400;
        background-blend-mode: difference;
    }
    .mainBtn, .mainNavLink {
        background: var(--brown);
        color: #fafafa;
        font-size: calc(0.6rem + 0.8vw);
        padding: 0.4rem 1rem;
        border: 2px solid var(--brown);
        transition: background 0.3s ease;
        text-decoration: none;
        &:hover {
            background: transparent;
            color: var(--brown);        
        }
    }
    .navLinkBtn {
        padding-top: 1rem;
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
            transform: translate(0, 32%);
        }
    }
    @media screen and (max-width: 1060px){
        .pick{
        filter: none !important;
        }
    }
`;

export default GlobalStyle;
