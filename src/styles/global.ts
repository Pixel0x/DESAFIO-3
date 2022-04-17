import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --purple: #6C63FF;
  --purple-light: #D7D4FF;
  --gray: #555555;
  --gray-dark: #2A2A2A;
  --white: #FFFFFF;
  --white-200: #F9F9F9;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  @media (max-width: 1080px) {
    font-size: 93.75%;
}
  @media (max-width: 720px) {
    font-size: 87.5%;
}
  @media (max-width: 600px) {
    font-size: 81,25%;
}
  @media (max-width: 440px) {
    font-size: 75%;
}
  @media (max-width: 340px) {
    font-size: 68,75%;
}

}

body::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: transparent;        /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color: var(--purple);    /* color of the scroll thumb */
}

body {
  -webkit-font-smoothing: antialiased;
}

button {
  cursor: pointer;
}

[disabled]{
  opacity: .6;
  cursor: not-allowed;
}


`;
