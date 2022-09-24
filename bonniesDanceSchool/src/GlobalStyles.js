import { createGlobalStyle, css } from "styled-components";

export const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GlobalStyles = createGlobalStyle`
    :root {
        --light: #fcfcfc;
        --dark: #2d2d2d;
        --tan: #FBF6F2;
        --pink: #E46F9F;
        --pink2: #EB007A;
        --border: 2px solid #e46f9f40;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Playfair Display', serif;
        /* font-family: 'Quicksand', sans-serif; */
        font-weight: 300;
    }

    *::selection {
        background: #E46F9F55;
    }

    body {
        background: var(--light);
    }

    section {
        position: relative;
        width: 100vw;
        height: 100vh;
        min-height: 38rem;
    }

    ul {
        list-style: none;
    }

    a {
        font-family: 'Quicksand', sans-serif;
        text-decoration: none;
        font-weight: 500;
        color: var(--dark);
    }

    @keyframes fade {
        to {
            opacity: 1;
        }
    }

    @media (max-width: 480px) {
        section {
            height: 92vh;
            min-height: 32rem;
        }
    }
`;

export default GlobalStyles;
