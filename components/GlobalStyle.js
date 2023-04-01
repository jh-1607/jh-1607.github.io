import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "default_sans";
        src: url('/fonts/OpenSans.ttf') format("truetype");
    }

    body {
        background-color: black;
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;
