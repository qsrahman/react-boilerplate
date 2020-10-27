import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #0275d8;
    --secondary-color: #003699;
    --danger-color: #d9534f;
    --light-color: #f4f4f4;
    --info-color: #5bc0de;
    --success-color: #5cb85c;
    --warning-color: #f0ad4e;
    --dark-color: #292b2c;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: sans-serif;
    font-size: 1.6rem;
  }
`
