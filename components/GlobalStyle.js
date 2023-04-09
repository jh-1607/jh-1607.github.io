import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {  /* Leaving in just in case another workaround is found for FOUC issue.*/
        font-family: "default_sans";
        src: url('/fonts/OpenSans.ttf') format("truetype");
    }

    @font-face {
        font-family: "default_sans";
        src: url('/fonts/OpenSans.woff') format("woff");
    }

    body {
        background-color: black;
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;
