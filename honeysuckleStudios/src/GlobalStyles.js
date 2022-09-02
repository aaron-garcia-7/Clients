import { createGlobalStyle, css } from "styled-components";

export const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GlobalStyles = createGlobalStyle`
    :root {
        --hero: #EFA0A0;
        --lighthero: #DFB4AF;
        --mid: #EFEAE4;
        --light: #F6F5F0;
        --dark: #313131;
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-weight: 100;
    }

    *::selection {
        background: var(--mid);
        color: var(--dark);
    }

    section {
        position: relative;
        width: 100vw;
        height: 100vh;
        min-height: 38rem;
        display: flex;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    .sectionTitle {
        color: var(--dark);
        font-family: 'Cormorant Garamond', serif;
    }

    @media (max-width: 1220px) {
        section {
            .frame {
                width: 96%;
            }
        }
    }
    @media (max-width: 480px) {
        section {
            height: 92vh;
            min-height: 32rem;
        }
    }

    @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

export default GlobalStyles;
