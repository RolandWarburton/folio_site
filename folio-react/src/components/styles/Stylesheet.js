import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    font-size: calc(12px + 1vw);
    background-color: #121212;
    font-weight: 100;
    color: #fff;

    *{
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0px;
    }

    // desktop
    @media (min-device-width: 1224px) {
        font-size: calc(12px + 0.5vw);
    }
  }
`
