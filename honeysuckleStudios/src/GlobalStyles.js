import { createGlobalStyle, css } from "styled-components";

export const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GlobalStyles = createGlobalStyle`
    :root {
        --hero: #EFA0A0;
        --herolight: #DFB4AF;
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

    .secTitle {
        position: absolute;
        top: 3.2rem;
        left: 12%;
        display: flex;
        justify-content: center;
        align-items: center;
        #branch1 {
            svg {
                width: calc(2rem + 1vw);
            }
        }
        .title {
        font-family: "Cormorant Garamond", serif;
        font-size: calc(1.2rem + 0.6vw);
        /* font-style: italic; */
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        opacity: 0;
        animation: fadeIn 1.2s ease forwards;
        }
    }

    .altLinks {
        ${center}
        flex-direction: column;        
        .altLinksTitle {
            font-family: "Cormorant Garamond", serif;
            letter-spacing: 0.1rem;
            font-size: calc(1rem + 0.2vw);
            text-transform: uppercase;
            font-style: italic;
            color: var(--hero);
            padding-bottom: 1rem;
        }
        .socialMedia {
            display: flex;
            &:hover {
                a {
                    opacity: 0.9;
                    color: var(--herolight);
                    &:hover {
                        opacity: 1;
                        color: black;
                    }
                }
            }
            > * {
                margin: 0 0.6rem;
            }
            a {
                color: var(--dark);
                font-size: calc(0.8rem + 0.2vw);
                transition: 0.3s ease;
            }
        }
    }

    @media (max-width: 1220px) {
        section {
            .frame {
                width: 96%;
            }
        }
    }

    @media (max-width: 768px) {
        .secTitle {
            .title {
                letter-spacing: 0.04rem;
            }
        }
        .altLinks {
            width: 32%;
            min-width: 12rem;
            .altLinksTitle {
                padding-bottom: 1rem;
            }
            .socialMedia {
                > * {
                    margin: 0 1rem 0 0;
                }
                a {
                    color: var(--dark);
                    font-size: calc(0.8rem + 0.2vw);
                }
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
