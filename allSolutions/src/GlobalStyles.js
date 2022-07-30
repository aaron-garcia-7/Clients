import { createGlobalStyle } from "styled-components";
import satoshiLight from "./fonts/Satoshi-Light.otf";
import satoshiLightItalic from "./fonts/Satoshi-LightItalic.otf";
import satoshiRegular from "./fonts/Satoshi-Regular.otf";
import satoshiMedium from "./fonts/Satoshi-Medium.otf";
import satoshiMediumItalic from "./fonts/Satoshi-MediumItalic.otf";
import satoshiBold from "./fonts/Satoshi-Bold.otf";
import satoshiBoldItalic from "./fonts/Satoshi-BoldItalic.otf";
import satoshiBlack from "./fonts/Satoshi-Black.otf";
import satoshiBlackItalic from "./fonts/Satoshi-BlackItalic.otf";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Satoshi';
        src: local('Satoshi'),
        url(${satoshiLight}) format('otf'),
        url(${satoshiLightItalic}) format('otf'),
        url(${satoshiRegular}) format('otf'),
        url(${satoshiMedium}) format('otf'),
        url(${satoshiMediumItalic}) format('otf'),
        url(${satoshiBold}) format('otf'),
        url(${satoshiBoldItalic}) format('otf'),
        url(${satoshiBlack}) format('otf'),
        url(${satoshiBlackItalic}) format('otf');
        font-weight: 300;
        font-style: normal;
    }
    :root {
        --black: #241F19;
        --colDom: #0E9BFF;
        --col1: #A0CEF2;
        --col2: #D5CCC5;
        --col3: #D2AD92;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Satoshi', sans-serif;
        font-weight: 300;
    }
    section {
        width: 100vw;
        height: 100vh;
        min-height: 36rem;
    }
    ul {
        list-style: none;
    }
`;

export default GlobalStyles;
