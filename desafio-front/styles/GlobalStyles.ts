import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root{
        --color-primary: rgba(60, 28, 8, 0.8839907192575406);
        --color-secundary: #a7824c;
        --color-white: #ffffff;
        --color-black: #000000;
        --color-black-80: #00000080;

        --font-tittle: 'Aldrich';

    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family:'Sorts Mill Goudy', sans-serif;

    }
    #root{
        width: 100%;
        height: 100%;
    }
    body,html {
        width: 100%;
        height: 100%;

    }

    body {
        background: var(--color-backgroud);

    }

    button {
        cursor: pointer;

    }
    
    ul {
        list-style: none;
        
    }
    img {
        max-width: 100%;
    }

`;
