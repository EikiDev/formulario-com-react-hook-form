import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }

    body {
        background-image: url(./src/assets/images/bg-repeat.jpg);
        background-repeat: repeat-x;
        background-size: contain;
        font-family: "Roboto", sans-serif;
        min-height: 100vh;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }

    main {
        margin: 32px;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        @media (min-width: 768px) {
            flex-direction: row;
            align-items: center;
            margin: 50px;
            gap: 0;
        }
    }
`