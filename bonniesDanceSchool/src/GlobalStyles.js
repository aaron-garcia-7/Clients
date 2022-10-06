import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --light: #FEF2F2;
        --dark: #2d2d2d;
        --taupe: #E4C2C1;
        --plum: #B6666F;
        --maroon: #F53163;
        --tan: #D1A080;
        --classy: 'Playfair Display', serif;
        --modern: 'Quicksand', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: var(--classy);
        color: var(--dark);
    }

    *::selection {
        background: var(--plum);
        color: var(--light);
    }
    
    body {
        background: var(--light);
        overflow: ${(props) => (props.scrollLock ? "hidden" : "default")};
    }

    section {
        position: relative;
        height: 100vh;
        min-height: 38rem;
        overflow: ${(props) => (props.scrollLock ? "hidden" : "default")};
    }

    a {
        text-decoration: none;
        font-family: var(--modern);
    }

    ul {
        list-style: none;
    }

    .sectionTitle {
      color: var(--maroon);
      font-weight: 100;
      letter-spacing: 0.3rem;
      line-height: 140%;
    }
    

    .link {
        font-family: var(--classy);
        font-size: calc(0.8rem + 0.8vw);
        font-weight: 400;
        text-decoration: none;
        color: var(--dark);
        letter-spacing: 0.1rem;
        cursor: pointer;
    }

    .a11y {
        position: absolute;
        opacity: 0;
        pointer-events: none;
    }

    // Menu Animations
    /* #menuStyle {
        opacity: 1;
        pointer-events: all;
        transition-delay: 0.4s;
    } */


    @keyframes fade {
        to {
            opacity: 1;
        }
    }
`;

export default GlobalStyles;
