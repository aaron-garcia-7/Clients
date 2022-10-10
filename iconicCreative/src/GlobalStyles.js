import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --light: #f2f2f2;
        --offWhite: #ECECEC;
        --dark: #141414;
        --offDark: #333333;
        --grey: #d5d5d5;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
        font-weight: 100;
    }

    body {
        background: var(--dark);
        /* background: blue; */
    }

    section { 
        position: relative;
    }

    button {
        border: none;
        background: none;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    // Animations

    @keyframes skewIn {
        to {
          opacity: 1;
          transform: skew(0deg, 0deg);
        }
    }

    @keyframes fadeUp {
        to {
          opacity: 1;
          transform: translate(0, 0);
          pointer-events: all
        }
    }
`;

export default GlobalStyle;
