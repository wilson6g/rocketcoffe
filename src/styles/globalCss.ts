import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --background: #000;
  --text-color: #FFF;
  --button: #8257E5;
  --border: #29292E;
  --border-menu-mobile: #A8A8B3;
  --text-color-menu-mobile: #E1E1E6;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (min-width: 1080px) {
      font-size: 93.75%;
    }
    @media (min-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    --webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Manrope", sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 800;
    color: var(--white);
  }

  h1 {
    font-family: "Manrope", sans-serif;
    line-height: auto;
    letter-spacing: -3%;
    font-size: 80px;
  }

  a {
    text-decoration: none;
    color: var(--text-color);
  }
`;
