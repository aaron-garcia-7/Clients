import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --light: #f2f2f2;
        --offWhite: #ECECEC;
        --dark: #141414;
        --offDark: #3a3a3a;
        --grey: #d5d5d5;
    }

    * {
        /* border: 1px solid yellow; */
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
        font-weight: 100;
    }

    body {
        background: var(--dark);
        /* background: var(--offWhite); */
        /* background: ${(props) =>
          props.fromTop ? "var(--dark)" : "var(--offWhite)"}; */
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

    @keyframes fade {
        to {
            opacity: 1;
            pointer-events: all;
        }
    }

    @keyframes slider {
        to {
          width: 0;
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
