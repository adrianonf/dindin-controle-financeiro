import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-white: #FFFFFF;
        --primary-green: #05EDE3;
        --primary-gray: #484848;
        --primary-purple: #7978D9;
        --button-hover: #7958D9;
        --primary-blue: #3A9FF1;
        --primary-red: #FF576B;
        --primary-pink: #FF57D3;
        --lato: "Lato", sans-serif;
        --rubik: "Rubik", sans-serif;
        --bold: 700;
    }

    html {
    font-size: 62,5%;
    }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.6rem
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }

`;

export default GlobalStyle;
