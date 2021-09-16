import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        min-height: 100vh;
        background-color: white;
    }

    html, body {
        font-family: sofia-pro, sans-serif;
        font-style: normal;
        font-weight: 400;
        margin: 0;
        padding: 0;
        font-size: var(--fontSize-root);
    }
    h1{
        font-size: var(--fontSize-heading);
        margin: 0;
    }
    p{
        font-size: var(--fontSize-body);
        margin: 0;
    }
`;

export default GlobalStyles;
