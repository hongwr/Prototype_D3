import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .circle, .polygon {
    cursor: pointer;
    pointer-events: all;
  }
`
